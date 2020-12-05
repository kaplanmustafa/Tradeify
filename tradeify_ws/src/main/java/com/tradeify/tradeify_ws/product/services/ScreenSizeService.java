package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.repositories.ScreenSizeRepository;

@Service
public class ScreenSizeService {
	
	@Autowired
	ScreenSizeRepository screenSizeRepository;
	
	public List<ScreenSize> getScreenSizes(Long id, Long generalId) {
		
		return screenSizeRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public ScreenSize getScreenSizeByCategory(String general, String sub, String brand) {
		return screenSizeRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public ScreenSize getById(Long id) {
		
		return screenSizeRepository.getOne(id);
	}
}
