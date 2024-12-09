using Ecoomerce.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Ecomerce
{
    public class Startup(IConfiguration configuration)
    {
        public IConfiguration Configuration { get; } = configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("PermitirReact", policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                        .AllowAnyMethod();
                });
            });
            services.AddConnections();
        }   public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
            {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

                app.UseStaticFiles();
                app.UseRouting();
                app.UseCors("PermitirReact");
                app.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers();
                });
            }
}    }
