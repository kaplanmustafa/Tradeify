package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/api/1.0/categories")
	List<Category> getCategories() {
		return categoryService.getCategories();
	}
}
	