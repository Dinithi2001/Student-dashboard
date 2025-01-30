package com.example.student_dashboard.service;

import com.example.student_dashboard.model.Student;
import com.example.student_dashboard.repo.StudentRepository;
import com.example.student_dashboard.service.exception.StudentAlreadyExistsException;
import com.example.student_dashboard.service.exception.StudentNotFfoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceIMPL implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student addStudent(Student student) {
        if(studentAlreadyExists(student.getEmail())) {
            throw new StudentAlreadyExistsException(student.getEmail()+" already exists");
        }

        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(st -> {
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());

            return studentRepository.save(st);
        }).orElseThrow(()->new StudentNotFfoundException("Sorry, this student could not be found"));
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElseThrow(()->new StudentNotFfoundException("Sorry, no student find with the id:" +id));
    }

    @Override
    public void deleteStudent(Long id) {
        if(!studentRepository.existsById(id)){
            throw new StudentNotFfoundException("Sorry, student not found");
        }
        studentRepository.deleteById(id);

    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}
