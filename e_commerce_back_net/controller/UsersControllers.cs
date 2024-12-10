using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Ecoomerce.Data;
using Ecomerce.Models;
using System.Threading.Tasks;
using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Ecomerce.controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Users loginUser)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == loginUser.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(loginUser.Password, user.Password))
            {
                return Unauthorized(new { message = "Credenciais inválidas." });
            }
            var key = GenerateCode.GenerateJwtSecretKey();

            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.NameIdentifier, user.IdUser.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = signingCredentials
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                Token = tokenHandler.WriteToken(token),
                User = new
                {
                    user.IdUser,
                    user.Email
                }
            });
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(Users users)
        {
            if (_context.Users.Any(u => u.Email == users.Email))
            {
                return BadRequest(new { message = "Email já está em uso." });
            }

            var passwordHash = BCrypt.Net.BCrypt.HashPassword(users.Password);

            var user = new Users
            {
                Name = users.Name,
                Email = users.Email,
                Password = passwordHash,
                Phone = users.Phone,
                Address = users.Address,
                CreatedDate = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Usuário registrado com sucesso!" });
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _context.Users.ToList();

            if (users == null)
                return NotFound("User not found.");
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
        public IActionResult UpdateUser(int id, Users userUpdate)
        {
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
        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.Find(id);

            if (user == null)
                return NotFound("User not found.");

            _context.Users.Remove(user);
            _context.SaveChanges();

            return NoContent();
        }
    }
}