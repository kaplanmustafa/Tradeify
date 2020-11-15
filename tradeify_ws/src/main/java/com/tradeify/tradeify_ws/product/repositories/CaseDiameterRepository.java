package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.CaseDiameter;


public interface CaseDiameterRepository extends JpaRepository<CaseDiameter, Long>{

	List<CaseDiameter> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<CaseDiameter> findAllByOrderById();
}
