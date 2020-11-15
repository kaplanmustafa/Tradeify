package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.OperatingType;
import com.tradeify.tradeify_ws.product.services.OperatingTypeService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class OperatingTypeController {

	@Autowired
	OperatingTypeService operatingTypeService;
	
	@GetMapping("/api/1.0/operatingTypes/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<OperatingType> operatingTypes = operatingTypeService.getOperatingTypes(id, generalId);
		for(OperatingType types: operatingTypes) {
			attributeVM.add(new ProductAttributeVM(types));
		}
		
		return attributeVM;
	}
}
	