package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

    List<Medicine> findByMedicineNameContainingIgnoreCase(String medicineName);

    List<Medicine> findByManufacturer_Id(Long manufacturerId);

//    List<Medicine> findByPrescription_Id(Long prescriptionId);

    List<Medicine> findByStockGreaterThanEqual(int stock);

}
