package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.product.Brand;
import com.tradeify.tradeify_ws.product.repositories.BrandRepository;

@Service
public class BrandService {
	
	@Autowired
	BrandRepository brandRepository;
	
	public List<Brand> getBrands(Long id, Long generalId) {
		
		return brandRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(id, generalId);
	}	
	
	public List<Brand> getAllBrands() {
		
		return brandRepository.findAllByOrderById();
	}	
}
