package com.example.student_dashboard.repo;

import com.example.student_dashboard.model.Student;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

public class StudentRepositoryTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private Student student;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindByEmail_ExistingEmail() {
        // Arrange
        String email = "dinithi200100@gmail.com";
        student = new Student(1, "Dinithi", "Madushika", email, "Computer Science");
        when(studentRepository.findByEmail(email)).thenReturn(Optional.of(student));

        // Act
        Optional<Student> foundStudent = studentRepository.findByEmail(email);

        // Assert
        assertEquals(foundStudent.get().getEmail(), email);
        assertEquals(foundStudent.get().getFirstName(), "Dinithi");
    }

    @Test
    public void testFindByEmail_NonExistingEmail() {
        // Arrange
        String email = "dinithi200100@gmail.com";
        when(studentRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Act
        Optional<Student> foundStudent = studentRepository.findByEmail(email);

        // Assert
        assertFalse(foundStudent.isPresent());
    }
}
