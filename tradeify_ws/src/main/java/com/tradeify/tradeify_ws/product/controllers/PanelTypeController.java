package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.PanelType;
import com.tradeify.tradeify_ws.product.services.PanelTypeService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class PanelTypeController {

	@Autowired
	PanelTypeService panelTypeService;
	
	@GetMapping("/api/1.0/panelTypes/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<PanelType> list = panelTypeService.getPanelTypes(id, generalId);
		for(PanelType item: list) {
			attributeVM.add(new ProductAttributeVM(item.getId(), item.getPanelTypeName(), item.getGeneralCategory().getId(), 
					item.getSubCategory().getId()));
		}
		
		return attributeVM;
	}
}
	