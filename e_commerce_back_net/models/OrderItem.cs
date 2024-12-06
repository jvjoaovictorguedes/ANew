using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Ecomerce.Models {

    public class ItemPedido
    {
        [Key]
        public int IdOrderItem { get; set; }

        [ForeignKey("Orders")]
        public int IdOrder { get; set; }
        public Orders Orders { get; set; }

        [ForeignKey("Products")]
        public int IdProduct { get; set; }
        public Products Products { get; set; }

        public int Quantity { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal ValueUnique { get; set; }
    }
}