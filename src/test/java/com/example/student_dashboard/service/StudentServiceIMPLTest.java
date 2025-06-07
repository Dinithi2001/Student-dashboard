package com.example.student_dashboard.service;

import com.example.student_dashboard.model.Student;
import com.example.student_dashboard.repo.StudentRepository;
import com.example.student_dashboard.service.exception.StudentAlreadyExistsException;
import com.example.student_dashboard.service.exception.StudentNotFfoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class StudentServiceIMPLTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentServiceIMPL studentService;

    private Student student;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        student = new Student(1, "Dinithi", "Madushika", "dinithi200100@gmail.com", "Computer Science");
    }

    @Test
    void addStudent_ShouldSaveStudent_WhenStudentDoesNotExist() {
        when(studentRepository.findByEmail(student.getEmail())).thenReturn(Optional.empty());
        when(studentRepository.save(any(Student.class))).thenReturn(student);

        Student savedStudent = studentService.addStudent(student);

        assertNotNull(savedStudent);
        assertEquals(student.getEmail(), savedStudent.getEmail());
        verify(studentRepository).save(student);
    }

    @Test
    void addStudent_ShouldThrowException_WhenStudentAlreadyExists() {
        when(studentRepository.findByEmail(student.getEmail())).thenReturn(Optional.of(student));

        StudentAlreadyExistsException exception = assertThrows(StudentAlreadyExistsException.class, () -> {
            studentService.addStudent(student);
        });

        assertEquals("dinithi200100@gmail.com already exists", exception.getMessage());
    }

    @Test
    void getAllStudents_ShouldReturnListOfStudents() {
        when(studentRepository.findAll()).thenReturn(List.of(student));

        List<Student> students = studentService.getAllStudents();

        assertFalse(students.isEmpty());
        assertEquals(1, students.size());
        assertEquals(student.getFirstName(), students.get(0).getFirstName());
    }

    @Test
    void updateStudent_ShouldUpdateStudent_WhenStudentExists() {
        when(studentRepository.findById(student.getId())).thenReturn(Optional.of(student));
        when(studentRepository.save(any(Student.class))).thenReturn(student);

        Student updatedStudent = studentService.updateStudent(student, student.getId());

        assertNotNull(updatedStudent);
        assertEquals(student.getFirstName(), updatedStudent.getFirstName());
        verify(studentRepository).save(student);
    }

    @Test
    void updateStudent_ShouldThrowException_WhenStudentDoesNotExist() {
        when(studentRepository.findById(student.getId())).thenReturn(Optional.empty());

        StudentNotFfoundException exception = assertThrows(StudentNotFfoundException.class, () -> {
            studentService.updateStudent(student, student.getId());
        });

        assertEquals("Sorry, this student could not be found", exception.getMessage());
    }

    @Test
    void getStudentById_ShouldReturnStudent_WhenStudentExists() {
        when(studentRepository.findById(student.getId())).thenReturn(Optional.of(student));

        Student foundStudent = studentService.getStudentById(student.getId());

        assertNotNull(foundStudent);
        assertEquals(student.getId(), foundStudent.getId());
    }

    @Test
    void getStudentById_ShouldThrowException_WhenStudentDoesNotExist() {
        when(studentRepository.findById(student.getId())).thenReturn(Optional.empty());

        StudentNotFfoundException exception = assertThrows(StudentNotFfoundException.class, () -> {
            studentService.getStudentById(student.getId());
        });

        assertEquals("Sorry, no student find with the id:" + student.getId(), exception.getMessage());
    }

    @Test
    void deleteStudent_ShouldDeleteStudent_WhenStudentExists() {
        when(studentRepository.existsById(student.getId())).thenReturn(true);

        assertDoesNotThrow(() -> studentService.deleteStudent(student.getId()));
        verify(studentRepository).deleteById(student.getId());
    }

    @Test
    void deleteStudent_ShouldThrowException_WhenStudentDoesNotExist() {
        when(studentRepository.existsById(student.getId())).thenReturn(false);

        StudentNotFfoundException exception = assertThrows(StudentNotFfoundException.class, () -> {
            studentService.deleteStudent(student.getId());
        });

        assertEquals("Sorry, student not found", exception.getMessage());
    }
}
