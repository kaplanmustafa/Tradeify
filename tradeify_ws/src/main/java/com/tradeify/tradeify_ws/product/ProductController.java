package com.tradeify.tradeify_ws.product;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.vm.ProductCoverVM;
import com.tradeify.tradeify_ws.product.vm.ProductFilterVM;
import com.tradeify.tradeify_ws.product.vm.ProductSubmitVM;
import com.tradeify.tradeify_ws.product.vm.ProductVM;
import com.tradeify.tradeify_ws.shared.GenericResponse;

@RestController
@RequestMapping("/api/1.0")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@PostMapping("/products")
	GenericResponse saveProduct(@Valid @RequestBody ProductSubmitVM product) {
		productService.save(product);
		return new GenericResponse("Product saved");
	}
	
	@GetMapping("/product/{id}") 
	ProductVM getProduct(@PathVariable String id) {
		return new ProductVM(productService.getProductById(Long.valueOf(id)));
	}
	
	@GetMapping("/products/{generalId}/{subId}")
	Page<ProductCoverVM> getProductsByCategory(@PathVariable String generalId, @PathVariable String subId, 
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return productService.getProductsByCategory(generalId, subId, page).map(ProductCoverVM::new);
	}
	
	@PutMapping("/productFilters/{generalId}/{subId}")
	Page<ProductCoverVM> getProductsByFilters(@PathVariable String generalId, @PathVariable String subId, @RequestBody(required = false) ProductFilterVM filterList, 
			@PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		
		return productService.getProductsByFilters(generalId, subId, filterList, page).map(ProductCoverVM::new);
	}
	
	@GetMapping("/productFilters/{search}")
	Page<ProductCoverVM> getProductsBySearch(@PathVariable String search, @PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return productService.getProductsBySearch(search, page).map(ProductCoverVM::new);
	}
	
	@GetMapping("/products/{generalId}/{subId}/{productId}")
	Page<ProductCoverVM> getProductsByCategoryAndBrand(@PathVariable String generalId, @PathVariable String subId, 
			@PathVariable long productId, @PageableDefault(sort = "id", direction = Direction.DESC) Pageable page) {
		return productService.getProductsByCategoryAndBrand(generalId, subId, productId, page).map(ProductCoverVM::new);
	}
	
	@DeleteMapping("/products/{id}")
	GenericResponse deleteProduct(@PathVariable long id) {
		productService.deleteProduct(id);
		return new GenericResponse("Product removed");
	}
}
