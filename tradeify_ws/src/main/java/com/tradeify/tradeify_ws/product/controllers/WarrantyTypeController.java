package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.WarrantyType;
import com.tradeify.tradeify_ws.product.services.WarrantyTypeService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class WarrantyTypeController {

	@Autowired
	WarrantyTypeService warrantyTypeService;
	
	@GetMapping("/api/1.0/warrantyTypes/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<WarrantyType> types = warrantyTypeService.getWarrantyTypes(id, generalId);
		for(WarrantyType type: types) {
			attributeVM.add(new ProductAttributeVM(type));
		}
		
		return attributeVM;
	}
}
	