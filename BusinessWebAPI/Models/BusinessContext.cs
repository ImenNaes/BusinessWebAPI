﻿using Data.Management.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessWebAPI.Models;

namespace BusinessWebAPI.Models
{
    public class BusinessContext: DbContext
    {
        //public BusinessContext(): base()
        //{

        //}
        public BusinessContext(DbContextOptions<BusinessContext> options): base(options)
        {

        }
      //  public DbSet<Product> Products { get; set; }
        public DbSet<Product> Produits { get; set; }

    }
}
