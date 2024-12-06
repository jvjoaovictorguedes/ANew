using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ecomerce.Models {

    public class Orders
    {
        [Key]
        public int IdOrder { get; set; }

        public DateTime CreatedDateOrder { get; set; }

        [Required]
        public string Status { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalValue { get; set; }

        [ForeignKey("Users")]
        public int IdUser { get; set; }
        public Users Users { get; set; }

        public ICollection<ItemPedido> ItemOrders { get; set; }
        public ICollection<Pagamento> Payments { get; set; }
    }


}