using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecomerce.Models
{
    public class Users
    {
        [Key]
        public int IdUser { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [MaxLength(15)]
        public string Phone { get; set; }

        public string Address { get; set; }

        public DateTime CreatedDate { get; set; }

        public ICollection<Orders> Orders { get; set; }
        public ICollection<Favorites> Favorites { get; set; }
    }
}