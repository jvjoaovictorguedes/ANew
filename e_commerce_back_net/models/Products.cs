using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ecomerce.Models {

public class Products
    {
        [Key]
        public int IdProduct { get; set; }

        [Required]
        [MaxLength(150)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        [Required]
        public int Quantity { get; set; }

        public string ImageUrl { get; set; }

        [ForeignKey("Categories")]
        public int IdCategory { get; set; }
        public Categories Categories { get; set; }

        public ICollection<OrderItem> ItemOrders { get; set; }
        public ICollection<Favorites> Favorites { get; set; }
    }
}