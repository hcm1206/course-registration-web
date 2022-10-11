package com.example.mayoSpringboot.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Getter
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String department;
    @Column
    private int grade;
    @Column
    private int subject_id;
    @Column
    private String divison;
    @Column
    private int grades;
    @Column
    private int max_count;
    @Column
    private int register_count;
    @Column
    private String subject_type;
    @Column
    private String subject_time;
    @Column
    private String professor;

}
