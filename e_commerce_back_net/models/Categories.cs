using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecomerce.Models {
public class Categories
    {
        [Key]
        public int IdCategory { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public string Description { get; set; }

        public ICollection<Products> Products { get; set; }
    }
}