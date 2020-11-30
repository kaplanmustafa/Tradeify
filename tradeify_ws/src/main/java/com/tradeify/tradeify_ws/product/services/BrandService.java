package com.tradeify.tradeify_ws.product.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.repositories.BrandRepository;

@Service
public class BrandService {
	
	@Autowired
	BrandRepository brandRepository;
	
	public List<Brand> getBrands(Long subId, Long generalId) {
		
		return brandRepository.findAllBySubCategoryIdAndGeneralCategoryIdOrderById(subId, generalId);
	}	
	
	public List<Brand> getAllBrands() {
		
		return brandRepository.findAllByOrderById();
	}	
	
	public Brand getBrandByCategory(GeneralCategory general, SubCategory sub, Brand brand) {
		return brandRepository.findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(sub.getId(), 
				general.getId(), brand.getId());
	}
}
