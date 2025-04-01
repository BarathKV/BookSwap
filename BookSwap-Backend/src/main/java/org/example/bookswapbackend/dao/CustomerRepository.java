package org.example.bookswapbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.example.bookswapbackend.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
	
}
