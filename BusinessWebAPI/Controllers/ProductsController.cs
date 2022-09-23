using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessWebAPI.Models;
using BusinessWebAPI.DAL;

namespace BusinessWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DAL_Prooducts dalproducts_Data;
        public ProductsController(DAL_Prooducts dalprod)
        {
            dalproducts_Data = dalprod;
        }

        [HttpPost]
        public void AddProduct(Product product)
        {
            try{
                dalproducts_Data.AddProd(product);
            }          
            catch(Exception exception)
            {
                Console.WriteLine(exception.Message);
            }


            //  Ok("failed");
        }

        [HttpGet]
        public IEnumerable<Product> Index()
        {
            List<Product> list = new List<Product>();

            try
            {
                list = dalproducts_Data.GetListProducts().ToList();
            }
            catch (Exception exception)
            {
                Console.WriteLine(exception.Message);
            }


      
            return list.ToArray();
            //  Ok("failed");
        }
    }
}
