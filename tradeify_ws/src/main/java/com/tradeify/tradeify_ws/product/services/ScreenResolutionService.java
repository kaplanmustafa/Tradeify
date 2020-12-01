package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.ScreenResolution;
import com.tradeify.tradeify_ws.product.repositories.ScreenResolutionRepository;

@Service
public class ScreenResolutionService {
	
	@Autowired
	ScreenResolutionRepository screenResolutionRepository;
	
	public List<ScreenResolution> getScreenResolutions(Long id, Long generalId) {
		
		return screenResolutionRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public ScreenResolution getScreenResolutionByCategory(String general, String sub, String brand) {
		return screenResolutionRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
}
