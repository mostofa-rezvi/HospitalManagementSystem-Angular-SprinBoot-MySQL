package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
    List<Bill> findByPatientId(Long patientId);
    List<Bill> findByDoctorId(Long doctorId);
    List<Bill> findByPharmacistId(Long pharmacistId);
}
