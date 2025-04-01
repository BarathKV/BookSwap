package org.example.bookswapbackend.controller;

import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.LoginModel;
import org.example.bookswapbackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CustomerController {
	@Autowired
	CustomerService custService;
	
	@GetMapping("/test")
	public String testCustomer() {
		return "It's OK";
	}

	@PostMapping("/signup")
	public ResponseEntity<?> saveCustomer(@RequestBody Customer cust) {
		return custService.saveCustomer(cust);
	}

	@PostMapping("/login")
	public ResponseEntity<?> validateCustomer(@RequestBody LoginModel loginRequest) {
		return custService.validateCustomer(loginRequest);
	}

	@PutMapping("/changePassword/{otp}")
	public ResponseEntity<?> changePassword(@RequestBody LoginModel u, @PathVariable("otp") String otp) {
		return custService.changePassword(u, otp);
	}
}