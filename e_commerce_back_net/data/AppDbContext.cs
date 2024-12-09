using Microsoft.EntityFrameworkCore;
using Ecomerce.Models;

namespace Ecoomerce.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Users> Users { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payments> Payments { get; set; }
        public DbSet<Favorites> Favorites { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<OrderItem>()
                .HasKey(ip => ip.IdOrderItem);

            modelBuilder.Entity<OrderItem>()
                .HasOne(ip => ip.Orders)
                .WithMany(p => p.OrderItem)
                .HasForeignKey(ip => ip.IdOrder);

            modelBuilder.Entity<Products>()
                .HasKey(p => p.IdProduct);
        }
    }
}
