package com.project.library.Library;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class LibraryManagementApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(LibraryManagementApplication.class, args);
	}

	// @Autowired
	// private EmployeeRepository empR;
	// @Autowired
	// private BooksRepository	booksRepository;

	@Override
	public void run(String... args) throws Exception {
		// Books emp1 = new Books();
		// emp1.setName("Adi");
		// emp1.setTitle("Ranjan");
		// emp1.setCustid(4555l);
		// emp1.setEmpid(4666l);
		// booksRepository.save(emp1);
		
	}

}
