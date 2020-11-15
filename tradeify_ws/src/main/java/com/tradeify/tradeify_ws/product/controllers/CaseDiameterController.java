package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.CaseDiameter;
import com.tradeify.tradeify_ws.product.services.CaseDiameterService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class CaseDiameterController {

	@Autowired
	CaseDiameterService caseDiameterService;
	
	@GetMapping("/api/1.0/caseDiameters/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<CaseDiameter> caseDiameters = caseDiameterService.getCaseDiameters(id, generalId);
		for(CaseDiameter diameters: caseDiameters) {
			attributeVM.add(new ProductAttributeVM(diameters));
		}
		
		return attributeVM;
	}
}
	