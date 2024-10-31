package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

    List<Prescription> findByDoctor_Id(Long doctorId);

    List<Prescription> findByPatient_Id(Long patientId);

    List<Prescription> findByPrescriptionDate(Date prescriptionDate);

//     List<Prescription> findByMedicines_MedicineName(String medicineName);
}
