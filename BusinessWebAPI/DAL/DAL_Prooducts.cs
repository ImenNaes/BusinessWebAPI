using BusinessWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessWebAPI.DAL
{
    public class DAL_Prooducts
    {
        private readonly BusinessContext contextt; 
        public DAL_Prooducts(BusinessContext ctxt)
        {
            contextt = ctxt;
        }

        public void AddProd(Product prod)
        {
            contextt.Produits.Add(prod);
            contextt.SaveChanges();
        }
        public Product GetProdbyid(int id)
        {
            var product = contextt.Produits.SingleOrDefault(prod => prod.ID ==  id );
            return product;
        }

        //For integration tests
        public Product GetProdbyname(string name)
        {
            var product = contextt.Produits.SingleOrDefault(prod => prod.Name == name);
            return product;
        }


        public List<Product> GetListProducts()
        {
            List<Product> productsList = contextt.Produits.ToList();
            return productsList;
        }
    }
}
