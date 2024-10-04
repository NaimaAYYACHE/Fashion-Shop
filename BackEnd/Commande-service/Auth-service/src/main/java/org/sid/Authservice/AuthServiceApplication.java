package org.sid.Authservice;

import org.sid.Authservice.entities.Role;
import org.sid.Authservice.entities.User;
import org.sid.Authservice.repositories.RoleRepository;
import org.sid.Authservice.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class AuthServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthServiceApplication.class, args);
	}
	//@Bean


}
