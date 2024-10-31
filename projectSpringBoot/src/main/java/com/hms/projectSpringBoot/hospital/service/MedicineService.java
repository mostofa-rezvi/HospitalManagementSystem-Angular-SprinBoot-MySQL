package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Medicine;
import com.hms.projectSpringBoot.hospital.repository.MedicineRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    public ApiResponse getAllMedicines() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Medicine> medicines = medicineRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicines fetched successfully.");
            apiResponse.setData("medicines", medicines);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getMedicineById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Medicine medicine = medicineRepository.findById(id).orElse(null);
            if (medicine == null) {
                apiResponse.setMessage("Medicine not found.");
                return apiResponse;
            }
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicine fetched successfully.");
            apiResponse.setData("medicine", medicine);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse saveMedicine(Medicine medicine) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            medicine.setCreatedAt(LocalDateTime.now());
            Medicine savedMedicine = medicineRepository.save(medicine);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicine created successfully.");
            apiResponse.setData("medicine", savedMedicine);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateMedicine(Long id, Medicine medicineDetails) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Medicine medicine = medicineRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Medicine not found"));

            medicine.setMedicineName(medicineDetails.getMedicineName());
            medicine.setDosageForm(medicineDetails.getDosageForm());
            medicine.setInstructions(medicineDetails.getInstructions());
            medicine.setMedicineStrength(medicineDetails.getMedicineStrength());
            medicine.setPrice(medicineDetails.getPrice());
            medicine.setStock(medicineDetails.getStock());
            medicine.setUpdatedAt(LocalDateTime.now());

            Medicine updatedMedicine = medicineRepository.save(medicine);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicine updated successfully.");
            apiResponse.setData("medicine", updatedMedicine);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteMedicine(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            medicineRepository.deleteById(id);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicine deleted successfully.");
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }
    

    public ApiResponse getMedicinesByManufacturer(Long manufacturerId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Medicine> medicines = medicineRepository.findByManufacturer_Id(manufacturerId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicines fetched by manufacturer successfully.");
            apiResponse.setData("medicines", medicines);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse searchMedicinesByName(String medicineName) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Medicine> medicines = medicineRepository.findByMedicineNameContainingIgnoreCase(medicineName);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Medicines searched successfully.");
            apiResponse.setData("medicines", medicines);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse addStock(Long id, int quantity) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Medicine medicine = medicineRepository.findById(id)
                    .orElse(null);

            if (medicine == null) {
                apiResponse.setMessage("Medicine not found.");
                return apiResponse;
            }

            medicine.setStock(medicine.getStock() + quantity);  // Add stock
            medicine.setUpdatedAt(LocalDateTime.now());

            Medicine updatedMedicine = medicineRepository.save(medicine);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Stock added successfully.");
            apiResponse.setData("medicine", updatedMedicine);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse subtractStock(Long id, int quantity) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Medicine medicine = medicineRepository.findById(id)
                    .orElse(null);

            if (medicine == null) {
                apiResponse.setMessage("Medicine not found.");
                return apiResponse;
            }

            if (medicine.getStock() < quantity) {
                apiResponse.setMessage("Insufficient stock.");
                return apiResponse;
            }

            medicine.setStock(medicine.getStock() - quantity);  // Subtract stock
            medicine.setUpdatedAt(LocalDateTime.now());

            Medicine updatedMedicine = medicineRepository.save(medicine);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Stock subtracted successfully.");
            apiResponse.setData("medicine", updatedMedicine);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

}
