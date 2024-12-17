using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class OrderItemController: ControllerBase {

        private readonly AppDbContext _context;

        public OrderItemController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllOrderItem()
        {
            var orderItems = _context.OrderItems.ToList();

            if (orderItems == null)
                return NotFound("Order Item not found.");
            return Ok(orderItems);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetOrdemItemById(int id)
        {
            var orderItem = _context.OrderItems.Find(id);

            if (orderItem == null)
                return NotFound("Order Item not found.");
            return Ok(orderItem);
        }

        [HttpPost]
        public IActionResult CreateOrdemItem(OrderItem ordemItems)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.OrderItems.Add(ordemItems);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetOrdemItemById), new { id = ordemItems.IdOrderItem }, ordemItems);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrdemItem(int id, OrderItem orderItemUpdate)
        {
            var orderItem = _context.OrderItems.Find(id);

            if (orderItem == null)
                return NotFound("Order Item not found.");

            orderItem.IdOrderItem = orderItemUpdate.IdOrderItem;
            orderItem.IdOrder = orderItemUpdate.IdOrder;
            orderItem.IdProduct = orderItemUpdate.IdProduct;
            orderItem.Quantity = orderItemUpdate.Quantity;
            orderItem.ValueUnique = orderItemUpdate.ValueUnique;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrderItem(int id)
        {
            var orderItem = _context.OrderItems.Find(id);

            if (orderItem == null)
                return NotFound("Order Item not found.");

            _context.OrderItems.Remove(orderItem);
            _context.SaveChanges();

            return NoContent();
        }
    }
}