package org.example.bookswapbackend.service;

import org.example.bookswapbackend.dao.CustomerRepository;
import org.example.bookswapbackend.model.Customer;
import org.example.bookswapbackend.model.JwtResponse;
import org.example.bookswapbackend.model.LoginModel;
import org.example.bookswapbackend.model.MessageResponse;
import org.example.bookswapbackend.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository custRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    public ResponseEntity<?> saveCustomer(Customer cust) {
        if (cust.getUser_id() == null || cust.getUser_id().isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("User ID must not be null or empty,"+cust.getUsername()+cust.getPassword()));
        }
        Optional<Customer> o = custRepo.findById(cust.getUser_id());
        if (o.isPresent()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Username Already Exists"));
        }
        cust.setPassword(encoder.encode(cust.getPassword()));
        custRepo.save(cust);
        String jwt = jwtUtils.generateJwtTokenUser(cust.getUser_id());
        return ResponseEntity.ok(new JwtResponse(jwt, cust.getUser_id()));
    }

    public ResponseEntity<?> validateCustomer(LoginModel loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUser_id(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        Customer cust = (Customer) authentication.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, cust.getUser_id()));
    }


    public ResponseEntity<?> changePassword(LoginModel u, String otp) {
        Customer cust = null;
        Optional<Customer> obj = custRepo.findById(u.getUser_id());

        if (obj.isPresent())
            cust = obj.get();
        if (cust == null)
            return ResponseEntity.badRequest().body(new MessageResponse("Invalid customer"));
        if (otp.equals("111111")) {
            cust.setPassword(encoder.encode(u.getPassword()));
            custRepo.save(cust);
            return ResponseEntity.ok(new MessageResponse("Successfully Changed the password!"));
        }
        return ResponseEntity.badRequest().body(new MessageResponse("Invalid OTP!"));
    }

}