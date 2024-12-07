package com.project.library.Library.controller;

import com.project.library.Library.model.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.library.Library.exception.ResourceNotFoundException;
import com.project.library.Library.repository.CustomerRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    // @GetMapping
    // public List<Customer> getAllCustomers() {
    //     return customerRepository.findAll();
    // }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    // @GetMapping("{id}")
    // public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
    //     Customer customer = customerRepository.findById(id)
    //     .orElseThrow(() -> new ResourceNotFoundException("Customer does not exists with id: "+id));
    //     return ResponseEntity.ok(customer);
    // }

    @GetMapping("{username}")
    public ResponseEntity<Customer> getCustomerName(@PathVariable String username){
        Customer customer = customerRepository.un(username)
        .orElseThrow(() -> new ResourceNotFoundException("Customer not exist with userName:" + username));
        return ResponseEntity.ok(customer);
    }

    @PutMapping("{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        Customer existingCustomer = customerRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Customer does not exists with id: "+id));
        existingCustomer.setName(customer.getName());
        existingCustomer.setUsername(customer.getUsername());
        existingCustomer.setPassword(customer.getPassword());

        customerRepository.save(existingCustomer);
        return ResponseEntity.ok(existingCustomer);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable long id){
        Customer customer = customerRepository.findById(id)
        .orElseThrow(()->new ResourceNotFoundException("No Customer with id: "+id));
        customerRepository.delete(customer);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } 
}
