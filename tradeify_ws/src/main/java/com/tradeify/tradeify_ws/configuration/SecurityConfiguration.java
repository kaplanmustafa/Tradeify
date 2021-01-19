package com.tradeify.tradeify_ws.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.exceptionHandling().authenticationEntryPoint(new AuthEntryPoint()); 
		http.headers().frameOptions().disable();
				
		http
			.authorizeRequests()
				.antMatchers(HttpMethod.PUT, "/api/1.0/users/{email}").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/logout").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/users/{email}").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/1.0/users/password/{email}").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/1.0/users/address/{email}").authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/1.0/users/{email}").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/1.0/views/{productId}").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/views").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/products").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/orders").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/orders").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/product-attachments").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/cartItem/{productId}").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/cartItems").authenticated()
				//.antMatchers(HttpMethod.GET, "/api/1.0/cartItems/{orderId}").authenticated()
				.antMatchers(HttpMethod.DELETE, "/api/1.0/cartItems/delete/{cartId}").authenticated()
				.antMatchers(HttpMethod.POST, "/api/1.0/cartItems/update/{cartId}").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/cartItems/total").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/cartItems/count").authenticated()
				.antMatchers(HttpMethod.PUT, "/api/1.0/products/update/{id}").authenticated()
				.antMatchers(HttpMethod.GET, "/api/1.0/products/edit/{id").authenticated()
			.and()
			.authorizeRequests().anyRequest().permitAll();
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); 
		
		http.addFilterBefore(tokenFilter(), UsernamePasswordAuthenticationFilter.class); 
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	TokenFilter tokenFilter() {
		return new TokenFilter();
	}
}


