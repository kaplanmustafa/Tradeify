package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.entities.Ram;
import com.tradeify.tradeify_ws.product.repositories.RamRepository;

@Service
public class RamService {
	
	@Autowired
	RamRepository ramRepository;
	
	public List<Ram> getRams(Long id, Long generalId) {
		
		return ramRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public Ram getRamByCategory(String general, String sub, String brand) {
		return ramRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long.valueOf(sub), 
				Long.valueOf(general), Long.valueOf(brand));
	}
	
	public Ram getById(Long id) {
		
		return ramRepository.getOne(id);
	}
}
