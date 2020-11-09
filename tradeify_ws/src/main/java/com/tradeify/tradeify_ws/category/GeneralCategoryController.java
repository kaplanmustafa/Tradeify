package com.tradeify.tradeify_ws.category;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.category.vm.CategoryVM;

@RestController
public class GeneralCategoryController {

	@Autowired
	GeneralCategoryService categoryService;
	
	@GetMapping("/api/1.0/categories")
	List<CategoryVM> getCategories() {
		List<CategoryVM> categoryVM = new ArrayList<>();
		
		List<GeneralCategory> categories = categoryService.getCategories();
		for(GeneralCategory category: categories) {
			categoryVM.add(new CategoryVM(category));
		}
		
		return categoryVM;
	}
}
	