using BusinessWebAPI.Models;
using Data.Management;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessWebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Enable cors 
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            //JSON Serilizer 
            services.AddControllersWithViews()
                .AddNewtonsoftJson(
                   options=>options.SerializerSettings.ReferenceLoopHandling=Newtonsoft
                   .Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options=>options.SerializerSettings.ContractResolver
                =new DefaultContractResolver());



            services.AddControllers();
            services.AddScoped<DAL.DAL_Prooducts>();

            services.AddDbContext<BusinessContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DevConnection")));

            //Connection to database sql server 
            //  services.AddTransient<IProductProvider>(f => new ProductProvider("Server= DESKTOP-TOUSOUE\\SQLEXPRESS;Database=BusinessDb;Trusted_Connection=True;MultipleActiveResultSets=True;"));

            // Register Dapper in scope
            //services.AddScoped<IDapper, Dapper>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseHttpsRedirection();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseDeveloperExceptionPage();

            
           
        }
    }
}
