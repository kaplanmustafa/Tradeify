package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;
import com.tradeify.tradeify_ws.product.services.DisplayTechnologyService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class DisplayTechnologyController {

	@Autowired
	DisplayTechnologyService displayTechnologyService;
	
	@GetMapping("/api/1.0/displayTechnologies/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<DisplayTechnology> list = displayTechnologyService.getDisplayTechnologies(id, generalId);
		for(DisplayTechnology item: list) {
			attributeVM.add(new ProductAttributeVM(item.getId(), item.getDisplayTechnologyName(), item.getGeneralCategory().getId(), 
					item.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
}
	