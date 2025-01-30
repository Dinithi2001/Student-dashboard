package com.example.student_dashboard.repo;

import com.example.student_dashboard.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student , Long> {
    Optional<Student> findByEmail(String email);
}
