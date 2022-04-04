using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessWebAPI.Models
{
    public class BusinessContext: DbContext
    {
        public BusinessContext(DbContextOptions<BusinessContext> options): base(options)
        {

        }
        public DbSet<Product> Products { get; set; }

    }
}
