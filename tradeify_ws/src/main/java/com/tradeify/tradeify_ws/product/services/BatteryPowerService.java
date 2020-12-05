package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.repositories.BatteryPowerRepository;

@Service
public class BatteryPowerService {
	
	@Autowired
	BatteryPowerRepository batteryPowerRepository;
	
	public List<BatteryPower> getBatteryPowers(Long id, Long generalId) {
		
		return batteryPowerRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public BatteryPower getBatteryPowerByCategory(String general, String sub, String brand) {
		return batteryPowerRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public BatteryPower getById(Long id) {
		
		return batteryPowerRepository.getOne(id);
	}
}
