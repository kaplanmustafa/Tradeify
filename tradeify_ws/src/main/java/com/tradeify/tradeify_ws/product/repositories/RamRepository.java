package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.Ram;


public interface RamRepository extends JpaRepository<Ram, Long>{

	List<Ram> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<Ram> findAllByOrderById();
}
