package com.tradeify.tradeify_ws.product;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.vm.ProductSubmitVM;
import com.tradeify.tradeify_ws.shared.GenericResponse;

@RestController
@RequestMapping("/api/1.0")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@PostMapping("/products")
	GenericResponse saveProduct(@Valid @RequestBody ProductSubmitVM product) {
		productService.save(product);
		return new GenericResponse("Hoax saved");
	}
}
