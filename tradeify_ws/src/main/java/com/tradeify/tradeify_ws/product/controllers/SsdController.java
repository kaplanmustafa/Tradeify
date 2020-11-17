package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.Ssd;
import com.tradeify.tradeify_ws.product.services.SsdService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class SsdController {

	@Autowired
	SsdService ssdService;
	
	@GetMapping("/api/1.0/ssd/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<Ssd> list = ssdService.getSsd(id, generalId);
		for(Ssd item: list) {
			attributeVM.add(new ProductAttributeVM(item.getId(), item.getSsdName(), item.getGeneralCategory().getId(), 
					item.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
}
	