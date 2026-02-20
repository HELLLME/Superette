
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Product
{
    public class CreateProductRequestDto
    {
        public string ProduitName { get; set; } = string.Empty;
        public string Categorie { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}