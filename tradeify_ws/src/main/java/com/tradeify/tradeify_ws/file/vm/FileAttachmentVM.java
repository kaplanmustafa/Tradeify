package com.tradeify.tradeify_ws.file.vm;

import com.tradeify.tradeify_ws.file.FileAttachment;

import lombok.Data;

@Data
public class FileAttachmentVM {

	private long id;
	
	private String name;
	
	private String fileType;

	public FileAttachmentVM(FileAttachment fileAttachment) {
		this.setId(fileAttachment.getId());
		this.setName(fileAttachment.getName());
		this.setFileType(fileAttachment.getFileType());
	}
}
