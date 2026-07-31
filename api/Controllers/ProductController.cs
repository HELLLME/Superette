using Microsoft.AspNetCore.Mvc;
using api.Data;
using api.Models;
using api.Mappers;
using api.Dtos.Product;

namespace api.Controllers
{
    [Route("api/[controller]")] // This defines the URL as api/product
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        // Constructor: Injects the database context so we can use it [2]
        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/product   endpoint for getting all products
        [HttpGet]
        public IActionResult GetAll()
        {
            // deferred execution: ToList() actually executes the SQL query [3]
            var products = _context.Products.Select(p => p.ToProductDto());

            // Uses the Mapper.ToList();

            return Ok(products);
        }
          // GET: api/product/{Id} endpoint for getting a single product
        [HttpGet("{Id}")]
        public IActionResult GetById([FromRoute]int Id)
        {
            // deferred execution: ToList() actually executes the SQL query [3]
            var product = _context.Products.Find(Id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product.ToProductDto());
 }
            // POST: api/product endpoint for creating a new product
            [HttpPost]
            public IActionResult Create([FromBody] CreateProductRequestDto productDto)
            {
                // 1. Convert the incoming DTO into a database model
                var productModel = productDto.ToProductFromCreateDTO();

                // 2. Track the new item and save it to the database
                _context.Products.Add(productModel);
                _context.SaveChanges();

                // 3. Return a 201 Created status, linking to the GetById endpoint
                return CreatedAtAction(nameof(GetById), new { Id = productModel.Id }, productModel);
            }
       
    }
}