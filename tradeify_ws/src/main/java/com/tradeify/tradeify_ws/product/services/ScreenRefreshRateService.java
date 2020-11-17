package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.ScreenRefreshRate;
import com.tradeify.tradeify_ws.product.repositories.ScreenRefreshRateRepository;

@Service
public class ScreenRefreshRateService {
	
	@Autowired
	ScreenRefreshRateRepository screenRefreshRateRepository;
	
	public List<ScreenRefreshRate> getScreenRefreshRates(Long id, Long generalId) {
		
		return screenRefreshRateRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
