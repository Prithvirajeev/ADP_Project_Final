package com.project.library.Library.repository;

import com.project.library.Library.model.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
    @Query(nativeQuery = true,value="select * from customer where username = :username")
    Optional<Customer> un(@Param("username") String username);
}
