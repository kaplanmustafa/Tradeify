package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BrandRepository extends JpaRepository<Brand, Long>{

	List<Brand> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<Brand> findAllByOrderById();
}
