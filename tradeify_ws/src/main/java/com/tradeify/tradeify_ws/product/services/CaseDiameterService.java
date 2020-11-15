package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.CaseDiameter;
import com.tradeify.tradeify_ws.product.repositories.CaseDiameterRepository;

@Service
public class CaseDiameterService {
	
	@Autowired
	CaseDiameterRepository caseDiameterRepository;
	
	public List<CaseDiameter> getCaseDiameters(Long id, Long generalId) {
		
		return caseDiameterRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}		
}
