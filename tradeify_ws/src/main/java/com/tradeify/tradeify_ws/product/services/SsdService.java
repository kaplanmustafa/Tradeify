package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.Ssd;
import com.tradeify.tradeify_ws.product.repositories.SsdRepository;

@Service
public class SsdService {
	
	@Autowired
	SsdRepository ssdRepository;
	
	public List<Ssd> getSsd(Long id, Long generalId) {
		
		return ssdRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public Ssd getSsdByCategory(String general, String sub, String brand) {
		return ssdRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public Ssd getById(Long id) {
		
		return ssdRepository.getOne(id);
	}
}
