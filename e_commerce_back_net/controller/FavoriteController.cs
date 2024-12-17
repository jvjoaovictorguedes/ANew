using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class FavoritesController: ControllerBase {

        private readonly AppDbContext _context;

        public FavoritesController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllFavorites()
        {
            var favorites = _context.Favorites.ToList();

            if (favorites == null)
                return NotFound("Favorite not found.");
            return Ok(favorites);
        }

        [HttpPost("{id}")]
        public IActionResult GetFavoriteById(int id) {
            var favorites = _context.Favorites.Find(id);
            if (favorites == null)
                return NotFound("Favorite not found.");
            return Ok(favorites);
        }

        [HttpPost]
        public IActionResult CreateFavorite(Favorites favorite)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.Favorites.Add(favorite);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetFavoriteById), new { id = favorite.IdFavorite }, favorite);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateFavorite(int id, Favorites favoritesUpdate)
        {
            var favorites = _context.Favorites.Find(id);

            if (favorites == null)
                return NotFound("Favorite not found.");

            favorites.IdUser = favoritesUpdate.IdUser;
            favorites.IdProduct = favoritesUpdate.IdProduct;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFavorite(int id)
        {
            var favorites = _context.Favorites.Find(id);

            if (favorites == null)
                return NotFound("User not found.");

            _context.Favorites.Remove(favorites);
            _context.SaveChanges();

            return NoContent();
        }
    }
}