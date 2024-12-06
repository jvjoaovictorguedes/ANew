using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Ecomerce.Models {
    public class Payments
    {
        [Key]
        public int IdPayment { get; set; }

        [ForeignKey("Orders")]
        public int IdOrder { get; set; }
        public Orders Orders { get; set; }

        public string PaymentMethod { get; set; }

        public string PaymentStatus { get; set; }

        public DateTime PaymentDate { get; set; }
    }
}