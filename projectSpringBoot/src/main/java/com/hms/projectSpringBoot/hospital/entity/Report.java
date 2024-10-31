package com.hms.projectSpringBoot.hospital.entity;

import com.hms.projectSpringBoot.security.entity.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reportName;
    private String description;
    private String sampleId;
    private String reportResult;
    private String interpretation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private User patient;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "test_id")
    private TestEntity testEntity;

    private LocalDateTime testDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
