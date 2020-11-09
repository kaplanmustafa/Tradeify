package com.tradeify.tradeify_ws.category;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.category.vm.CategoryVM;

@RestController
public class MiddleCategoryController {

	@Autowired
	MiddleCategoryService middleCategoryService;
	
	@GetMapping("/api/1.0/categories/middle/{id}")
	List<CategoryVM> getCategories(@PathVariable Long id) {
		List<CategoryVM> categoryVM = new ArrayList<>();
		
		List<MiddleCategory> categories = middleCategoryService.getCategories(id);
		for(MiddleCategory category: categories) {
			categoryVM.add(new CategoryVM(category));
		}
		
		return categoryVM;
	}
}
	