package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.ScreenRefreshRate;
import com.tradeify.tradeify_ws.product.services.ScreenRefreshRateService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class ScreenRefreshRateController {

	@Autowired
	ScreenRefreshRateService screenRefreshRateService;
	
	@GetMapping("/api/1.0/screenRefreshRates/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<ScreenRefreshRate> list = screenRefreshRateService.getScreenRefreshRates(id, generalId);
		for(ScreenRefreshRate item: list) {
			attributeVM.add(new ProductAttributeVM(item.getId(), item.getScreenRefreshRateName(), item.getGeneralCategory().getId(), 
					item.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
}
	