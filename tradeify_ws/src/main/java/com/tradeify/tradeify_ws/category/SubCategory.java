package com.tradeify.tradeify_ws.category;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.product.Brand;

import lombok.Data;

@Data 
@Entity
public class SubCategory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private long subPrivateId;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String categoryName;
	
	@ManyToOne
	private GeneralCategory generalCategory;
	
	@OneToMany(mappedBy = "subCategory", cascade = CascadeType.REMOVE)
	private List<Brand> brands;
}
