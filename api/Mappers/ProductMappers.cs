using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Product;
using api.Models;

namespace api.Mappers
{
    public static class ProductMappers
    {
        // Converts Model -> DTO (for reading)
        public static ProductDto ToProductDto(this Product productModel)
        {
            return new ProductDto
            {
                Id = productModel.Id,
                ProduitName = productModel.ProduitName,
                Categorie = productModel.Categorie,
                Price = productModel.Price
            };
        }

        // Converts DTO -> Model (for creating)
        public static Product ToProductFromCreateDTO(this CreateProductRequestDto productDto)
        {
            return new Product
            {
                ProduitName = productDto.ProduitName,
                Categorie = productDto.Categorie,
                Price = productDto.Price
            };
        }
    }
}