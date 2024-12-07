package com.project.library.Library.repository;

import com.project.library.Library.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query(nativeQuery = true,value="select * from employees where user_name = :userName")
    Optional<Employee> un(@Param("userName") String username);

}
