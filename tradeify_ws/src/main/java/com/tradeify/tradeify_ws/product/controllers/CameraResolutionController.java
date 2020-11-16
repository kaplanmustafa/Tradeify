package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.CameraResolution;
import com.tradeify.tradeify_ws.product.services.CameraResolutionService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class CameraResolutionController {

	@Autowired
	CameraResolutionService cameraResolutionService;
	
	@GetMapping("/api/1.0/cameraResolutions/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<CameraResolution> types = cameraResolutionService.getCameraResolutions(id, generalId);
		for(CameraResolution type: types) {
			attributeVM.add(new ProductAttributeVM(type));
		}
		
		return attributeVM;
	}
}
	