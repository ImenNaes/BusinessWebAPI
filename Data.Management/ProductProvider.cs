using Data.Management.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using Dapper;

namespace Data.Management
{
    public class ProductProvider : IProductProvider
    {
        private readonly string connectionstring;
        public ProductProvider(string connectionstring)
        {
            this.connectionstring = connectionstring;
        }
        public void AddProduct(Produit produit)
        {
            using (var conn = new SqlConnection(connectionstring))
            {
                //conn.Query<Produit>("insert into Produits(name, description, code, price) values (" +
                //          produit.name, produit.description, produit.code.ToString(), produit.price + ")");
            }
        }


    }
}
