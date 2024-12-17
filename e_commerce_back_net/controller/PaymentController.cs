using System.Linq;
using Ecomerce.Models;
using Ecoomerce.Data;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.controller {
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentsController: ControllerBase {

        private readonly AppDbContext _context;

        public PaymentsController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllPayments()
        {
            var payments = _context.Payments.ToList();

            if (payments == null)
                return NotFound("Payment not found.");
            return Ok(payments);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetPaymentById(int id)
        {
            var payments = _context.Payments.Find(id);

            if (payments == null)
                return NotFound("Payment not found.");
            return Ok(payments);
        }

        [HttpPost]
        public IActionResult CreatePayment(Payments payments)
        {
            if (!ModelState.IsValid)
                return BadRequest("Incorrect data.");

            _context.Payments.Add(payments);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetPaymentById), new { id = payments.IdPayment }, payments);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePayment(int id, Payments paymentsUpdate)
        {
            var payments = _context.Payments.Find(id);

            if (payments == null)
                return NotFound("Payment not found.");

            payments.IdOrder = paymentsUpdate.IdOrder;
            payments.PaymentMethod = paymentsUpdate.PaymentMethod;
            payments.PaymentStatus = paymentsUpdate.PaymentStatus;
            payments.PaymentDate = paymentsUpdate.PaymentDate;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePayment(int id)
        {
            var payments = _context.Payments.Find(id);

            if (payments == null)
                return NotFound("Payment not found.");

            _context.Payments.Remove(payments);
            _context.SaveChanges();

            return NoContent();
        }
    }
}