package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.ProcessorType;


public interface ProcessorTypeRepository extends JpaRepository<ProcessorType, Long>{

	List<ProcessorType> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<ProcessorType> findAllByOrderById();
}
