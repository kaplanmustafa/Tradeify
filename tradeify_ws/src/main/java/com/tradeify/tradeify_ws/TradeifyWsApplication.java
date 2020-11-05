package com.tradeify.tradeify_ws;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.tradeify.tradeify_ws.user.UserService;
import com.tradeify.tradeify_ws.user.Users;


@SpringBootApplication
public class TradeifyWsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradeifyWsApplication.class, args);
	}
	
	@Bean
	@Profile("dev") 
	CommandLineRunner createInitialUsers(UserService userService) {
		return(args) -> {
			try {
				userService.getByEmail("user1@gmail.com");
			} catch (Exception e) {
				for(int i=1; i<=25; i++) {
					Users user = new Users();
					user.setEmail("user" + i + "@gmail.com");
					user.setActive(true);
					if(i > 9) {
						user.setPhone("054672611" + i);
						user.setGender("MALE");
					} else {
						user.setPhone("0546726117" + i);
						user.setGender("FEMALE");
					}
					user.setName("Name" + i);
					user.setSurname("Surname" + i);
					user.setPassword("P4ssword");
					user.setBirthDate(new Date());
					user.setAddress(i + ". Mahalle, " + i + ". Sokak, " + i + ". İl/ÜLKE" + i);
					userService.save(user);
				}
			}
		};
	}

}
