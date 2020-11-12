package com.tradeify.tradeify_ws.category;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.category.vm.CategoryVM;
import com.tradeify.tradeify_ws.category.vm.SubCategoryVM;

@RestController
public class SubCategoryController {

	@Autowired
	SubCategoryService subCategoryService;
	
	@GetMapping("/api/1.0/categories/sub/{id}/{generalId}")
	List<CategoryVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<CategoryVM> categoryVM = new ArrayList<>();
		
		List<SubCategory> categories = subCategoryService.getCategories(id, generalId);
		for(SubCategory category: categories) {
			categoryVM.add(new CategoryVM(category));
		}
		
		return categoryVM;
	}
	
	@GetMapping("/api/1.0/categories/sub")
	List<SubCategoryVM> getAllCategories() {
		List<SubCategoryVM> subCategoryVM = new ArrayList<>();
		
		List<SubCategory> categories = subCategoryService.getAllCategories();
		for(SubCategory category: categories) {
			subCategoryVM.add(new SubCategoryVM(category));
		}
		
		return subCategoryVM;
	}
}
	