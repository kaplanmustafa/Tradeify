package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.WarrantyType;


public interface WarrantyTypeRepository extends JpaRepository<WarrantyType, Long>{

	List<WarrantyType> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<WarrantyType> findAllByOrderById();
}
