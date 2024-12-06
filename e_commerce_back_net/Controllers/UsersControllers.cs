using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Ecoomerce.Data;
using Ecomerce.Models;

[ApiController]
[Route("api/[controller]")]
public class UsersControllers : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersControllers(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAllUsers()
    {
        var users = _context.Users.ToList();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetUserById(int id)
    {
        var users = _context.Users.Find(id);

        if (users == null)
            return NotFound("User not found.");
        return Ok(users);
    }

    [HttpPost]
    public IActionResult CreateUser(Users user)
    {
        if (!ModelState.IsValid)
            return BadRequest("Incorrect data.");

        _context.Users.Add(user);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetUserById), new { id = user.IdUser }, user);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, Users userUpdate){
        var user = _context.Users.Find(id);

        if (user == null)
            return NotFound("User not found.");
        
        user.Name = userUpdate.Name;
        user.Email = userUpdate.Email;
        user.Password = userUpdate.Password;
        user.Phone = userUpdate.Phone;
        user.Address = userUpdate.Address;

        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id){
    var user = _context.Users.Find(id);

    if (user == null)
        return NotFound("User not found.");
    
    _context.Users.Remove(user);
    _context.SaveChanges();

    return NoContent();
    }
}

