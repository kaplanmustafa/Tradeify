package com.tradeify.tradeify_ws.productViews;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class ProductViews {
	
	@Id
	private String id;
	
	private long userId;
	
	private long productId;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;
	
	private long viewCount;
}
