using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Ecommerce.Data;
using Ecommerce.Models;

[ApiController]
[Route("api/[controller]")]

public class ProductsControlles: ControllerBase {
    
    private readonly AppDbContext _context;

    public ProductsControlles(AppDbContext context){
        
        _context = context;
    }
    
    [HttpGet]
    public IActionResult GetProductsAll() {

        var products = _context.Products.ToList();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public IActionResult GetProductById(int id) {

        var products = _context.Products.Find(id);

        if(products == null)
            return NotFound("Product not found.");
        return Ok(products);  
    }

    [HttpPost]
    public IActionResult CreateProduct(ProductsControlles product){
        if (!ModelState.IsValid)
            return BadRequest("Incorrect data.");

        _context.Products.Add(product);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetProductById), new { id = product.IdProduct }, product);    
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, ProductsControlles productUpdate){
        var product = _context.Products.Find(id);

        if (product == null)
            return NotFound("Product not found.");

        product.Name = productUpdate.Name;
        product.Description = productUpdate.Description;
        product.Price = productUpdate.Price;
        product.Quantity = productUpdate.Quantity;
        product.ImageUrl = productUpdate.ImageUrl;
        product.IdCategory = productUpdate.IdCategory;
        product.ItemOrders = productUpdate.ItemOrders;
        product.Favorites = productUpdate.Favorites;
    }
}