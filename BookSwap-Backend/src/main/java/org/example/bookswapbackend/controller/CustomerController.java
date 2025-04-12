package org.example.bookswapbackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.dto.LoginModel;
import org.example.bookswapbackend.security.JwtUtils;
import org.example.bookswapbackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
//TODO: Change the RequestMapping to /v1/customer
//@RequestMapping("api/v1/customer")
@RequestMapping("/cust")
public class CustomerController {
    @Autowired
    CustomerService custService;
    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("/test")
    public String testCustomer() {
        return "Test cust";
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

    @PutMapping("/details")
    public ResponseEntity<?> updateCustomer(@RequestBody Customer cust) {
        return custService.updateCustomerDetails(cust);
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getCustomerDetails(HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);
        if (jwtUtils.validateJwtToken(token)) {
            String username = jwtUtils.getUserNameFromJwtToken(token);
            return custService.getCustomerDetails(username);
        }
        return ResponseEntity.badRequest().body("Invalid JWT token");
    }
}