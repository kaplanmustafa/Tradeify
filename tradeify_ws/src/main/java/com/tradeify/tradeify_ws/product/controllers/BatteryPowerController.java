package com.tradeify.tradeify_ws.product.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.services.BatteryPowerService;
import com.tradeify.tradeify_ws.product.vm.ProductAttributeVM;

@RestController
public class BatteryPowerController {

	@Autowired
	BatteryPowerService batteryPowerService;
	
	@GetMapping("/api/1.0/batteryPowers/{id}/{generalId}")
	List<ProductAttributeVM> getCategories(@PathVariable(name = "id") Long id, @PathVariable(name = "generalId") Long generalId) {
		List<ProductAttributeVM> attributeVM = new ArrayList<>();
		
		List<BatteryPower> powers = batteryPowerService.getBatteryPowers(id, generalId);
		for(BatteryPower power: powers) {
			attributeVM.add(new ProductAttributeVM(power));
		}
		
		return attributeVM;
	}
}
	