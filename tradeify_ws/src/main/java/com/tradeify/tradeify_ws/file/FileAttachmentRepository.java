package com.tradeify.tradeify_ws.file;

import org.springframework.data.jpa.repository.JpaRepository;


public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long>{

	//List<FileAttachment> findByDateBeforeAndHoaxIsNull(Date date);
	
	//List<FileAttachment> findByProductUser(Users user); 
}
