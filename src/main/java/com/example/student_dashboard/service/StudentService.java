package com.example.student_dashboard.service;

import com.example.student_dashboard.model.Student;

import java.util.List;

public interface StudentService {

    Student addStudent(Student student);
    List<Student> getAllStudents();
    Student updateStudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}
