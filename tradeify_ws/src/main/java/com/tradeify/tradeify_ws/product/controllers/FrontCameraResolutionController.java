package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;
import com.tradeify.tradeify_ws.product.services.FrontCameraResolutionService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class FrontCameraResolutionController {

	@Autowired
	FrontCameraResolutionService frontCameraResolutionService;
	
	@GetMapping("/api/1.0/frontCameraResolutions/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<FrontCameraResolution> types = frontCameraResolutionService.getFrontCameraResolutions(id, generalId);
		for(FrontCameraResolution type: types) {
			attributeVM.add(new ProductAttributeVM(type));
		}
		
		return attributeVM;
	}
}
	