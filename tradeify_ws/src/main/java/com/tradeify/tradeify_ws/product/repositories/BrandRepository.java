package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.Brand;


public interface BrandRepository extends JpaRepository<Brand, Long>{

	List<Brand> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<Brand> findAllByOrderById();
	
	Brand findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
	
	List<Brand> findAllByBrandNameContaining(String brandName);
	
	List<Brand> findAllByBrandNameContainingAndGeneralCategoryIdOrderById(String brandName, Long generalCategoryId);
}
