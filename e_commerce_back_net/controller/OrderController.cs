using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController: ControllerBase {

        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllOrder()
        {
            var orders = _context.Orders.ToList();

            if (orders == null)
                return NotFound("Orders not found.");
            return Ok(orders);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = _context.Orders.Find(id);

            if (order == null)
                return NotFound("Product not found.");
            return Ok(order);
        }

        [HttpGet("user/{IdUser}")]
        public IActionResult GetOrderByUser(int IdUser)
        {
            var orders = _context.Orders.Where(o => o.IdUser == IdUser).ToList();
            if (orders == null || !orders.Any())
                return NotFound("Orders not found for the user.");
            return Ok(orders);
        }

        [HttpPost]
        public IActionResult CreateOrder(Orders order)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.Orders.Add(order);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetOrderById), new { id = order.IdOrder }, order);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Orders orderUpdate)
        {
            var order = _context.Orders.Find(id);

            if (order == null)
                return NotFound("Product not found.");

            order.CreatedDateOrder = orderUpdate.CreatedDateOrder;
            order.Status = orderUpdate.Status;
            order.TotalValue = orderUpdate.TotalValue;
            order.IdUser = orderUpdate.IdUser;
            order.ItemOrders = orderUpdate.ItemOrders;
            order.Payments = orderUpdate.Payments;
            order.OrderItem = orderUpdate.OrderItem;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _context.Orders.Find(id);

            if (order == null)
                return NotFound("User not found.");

            _context.Orders.Remove(order);
            _context.SaveChanges();

            return NoContent();
        }
    }
}