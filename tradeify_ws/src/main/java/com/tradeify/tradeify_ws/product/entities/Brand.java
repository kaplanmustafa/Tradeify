package com.tradeify.tradeify_ws.product.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;

import lombok.Data;

@Data 
@Entity
public class Brand {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private long privateId;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String brandName;
	
	@ManyToOne
	@JoinColumn(name = "subPrivateId")
	private SubCategory subCategory;
	
	@ManyToOne
	private GeneralCategory generalCategory;

	public Brand() {
		super();
	}

	public Brand(long id) {
		super();
		this.id = id;
	}
}
