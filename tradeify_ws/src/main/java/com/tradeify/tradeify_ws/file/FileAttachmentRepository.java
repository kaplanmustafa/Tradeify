package com.tradeify.tradeify_ws.file;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long>{

	List<FileAttachment> findByProductIsNull();
	
	FileAttachment findByProductIdAndIsCoverTrue(Long productId); 
	
	List<FileAttachment> findByProductIdAndIsCoverFalseOrderById(Long productId); 
}
