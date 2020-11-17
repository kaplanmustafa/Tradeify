package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.services.BrandService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class BrandController {

	@Autowired
	BrandService brandService;
	
	@GetMapping("/api/1.0/brands/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<Brand> categories = brandService.getBrands(id, generalId);
		for(Brand item: categories) {
			attributeVM.add(new ProductAttributeVM(item.getId(), item.getBrandName(), item.getGeneralCategory().getId(), 
					item.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
	
	@GetMapping("/api/1.0/brands")
	List<ProductAttributeVM> getAllCategories() {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<Brand> categories = brandService.getAllBrands();
		for(Brand category: categories) {
			attributeVM.add(new ProductAttributeVM(category.getId(), category.getBrandName(), category.getGeneralCategory().getId(),
					category.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
}
	