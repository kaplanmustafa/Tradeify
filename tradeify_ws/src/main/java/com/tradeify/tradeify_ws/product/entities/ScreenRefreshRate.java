package com.tradeify.tradeify_ws.product.entities;

import javax.persistence.Column;
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

@Entity
@Data
public class ScreenRefreshRate{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(nullable = true)
	private long privateId;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String screenRefreshRateName;
	
	@ManyToOne
	@JoinColumn(name = "subPrivateId")
	private SubCategory subCategory;
	
	@ManyToOne
	private GeneralCategory generalCategory;

	public ScreenRefreshRate() {
		super();
	}

	public ScreenRefreshRate(long id) {
		super();
		this.id = id;
	}
}
