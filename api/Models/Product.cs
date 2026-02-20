using System.ComponentModel.DataAnnotations;

namespace api.Models;

public class Product
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string ProduitName { get; set; } = string.Empty;

    [Required]
    [MaxLength(100)]
    public string Categorie { get; set; } = string.Empty;

    [Required]
    public decimal Price { get; set; }
}
