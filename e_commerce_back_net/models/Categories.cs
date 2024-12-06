using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


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