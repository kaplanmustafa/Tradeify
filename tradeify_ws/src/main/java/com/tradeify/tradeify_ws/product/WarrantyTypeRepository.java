package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface WarrantyTypeRepository extends JpaRepository<WarrantyType, Long>{

	List<WarrantyType> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<WarrantyType> findAllByOrderById();
}
