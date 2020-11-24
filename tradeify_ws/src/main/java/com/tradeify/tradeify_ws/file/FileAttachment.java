package com.tradeify.tradeify_ws.file;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.tradeify.tradeify_ws.product.Product;

import lombok.Data;

@Data
@Entity
public class FileAttachment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String name;
	
	private String fileType;
	
	private boolean isCover;
	
	@OneToOne
	private Product product;
}	
