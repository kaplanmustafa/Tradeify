package com.tradeify.tradeify_ws.cart;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.tradeify.tradeify_ws.order.Orders;
import com.tradeify.tradeify_ws.product.Product;
import com.tradeify.tradeify_ws.user.Users;

import lombok.Data;

@Data
@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@ManyToOne
	private Users user;
	
	@ManyToOne
	private Orders order;
	
	@OneToOne
	private Product product;
	
	private int quantity;
}
