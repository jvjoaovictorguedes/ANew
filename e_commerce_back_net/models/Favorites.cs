using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Ecomerce.Models {

    public class Favorites
    {
        [Key]
        public int IdFavorite { get; set; }

        [ForeignKey("Users")]
        public int IdUser { get; set; }
        public Users Users { get; set; }

        [ForeignKey("Products")]
        public int IdProduct { get; set; }
        public Products Products { get; set; }
    }
}