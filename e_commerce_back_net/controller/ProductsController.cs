using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase {

        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = _context.Products.ToList();

            if (products == null)
                return NotFound("Products not found.");
            return Ok(products);
        }

        
        [HttpGet("{name}")]
        public IActionResult GetProductById(string name)
        {
            var product = _context.Products.Find(name);

            if (product == null)
                return NotFound("Product not found.");
            return Ok(product);
        }

        [HttpPost]
        public IActionResult CreateProduct(Products product)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.Products.Add(product);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProductById), new { id = product.IdProduct }, product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Products productUpdate)
        {
            var product = _context.Products.Find(id);

            if (product == null)
                return NotFound("Product not found.");

            product.Name = productUpdate.Name;
            product.Description = productUpdate.Description;
            product.Price = productUpdate.Price;
            product.Quantity = productUpdate.Quantity;
            product.ImageUrl = productUpdate.ImageUrl;
            product.ItemOrders = productUpdate.ItemOrders;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);

            if (product == null)
                return NotFound("User not found.");

            _context.Products.Remove(product);
            _context.SaveChanges();

            return NoContent();
        }
    }
}