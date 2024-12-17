using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController: ControllerBase {

        private readonly AppDbContext _context;

        public CategoriesController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            var categories = _context.Categories.ToList();

            if (categories == null)
                return NotFound("Category not found.");
            return Ok(categories);
        }

        [HttpPost("{id}")]
        public IActionResult GetCategoryById(int id) {
            var category = _context.Categories.Find(id);
            if (category == null)
                return NotFound("Category not found.");
            return Ok(category);
        }

        [HttpPost]
        public IActionResult CreateCategory(Categories category)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.Categories.Add(category);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCategoryById), new { id = category.IdCategory }, category);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCategory(int id, Categories categoryUpdate)
        {
            var category = _context.Categories.Find(id);

            if (category == null)
                return NotFound("Category not found.");

            category.Name = categoryUpdate.Name;
            category.Description = categoryUpdate.Description;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var categories = _context.Categories.Find(id);

            if (categories == null)
                return NotFound("User not found.");

            _context.Categories.Remove(categories);
            _context.SaveChanges();

            return NoContent();
        }
    }
}