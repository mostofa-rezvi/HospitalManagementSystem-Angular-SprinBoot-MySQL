package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    List<Report> findByTestEntityId(Long testId);

    List<Report> findByPatientId(Long patientId);
}
