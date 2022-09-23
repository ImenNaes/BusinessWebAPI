using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Data.Management.Entities
{
    public class Produit
    {
        [Key]
        public int ID { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string code { get; set; }
        public string price { get; set; }
    }
}
