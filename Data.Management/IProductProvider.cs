using System;
using System.Collections.Generic;
using System.Text;
using Data.Management.Entities;

namespace Data.Management
{
    public interface IProductProvider
    {
        void AddProduct(Produit produit);
    }
}
