package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.repository.PrescriptionRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public ApiResponse getAllPrescriptions() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Prescription> prescriptions = prescriptionRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescriptions fetched successfully.");
            apiResponse.setData("prescriptions", prescriptions);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getPrescriptionById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Prescription prescription = prescriptionRepository.findById(id).orElse(null);
            if (prescription == null) {
                apiResponse.setMessage("Prescription not found.");
                return apiResponse;
            }
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescription fetched successfully.");
            apiResponse.setData("prescription", prescription);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse createPrescription(Prescription prescription) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            prescription.setCreatedAt(LocalDateTime.now());
            Prescription createdPrescription = prescriptionRepository.save(prescription);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescription created successfully.");
            apiResponse.setData("prescription", createdPrescription);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse updatePrescription(Long id, Prescription updatedPrescription) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Prescription prescription = prescriptionRepository.findById(id).orElse(null);
            if (prescription == null) {
                apiResponse.setMessage("Prescription not found.");
                return apiResponse;
            }
            prescription.setPrescriptionDate(updatedPrescription.getPrescriptionDate());
            prescription.setNotes(updatedPrescription.getNotes());
            prescription.setDoctor(updatedPrescription.getDoctor());
            prescription.setPatient(updatedPrescription.getPatient());
            prescription.setMedicines(updatedPrescription.getMedicines());
            prescription.setUpdatedAt(LocalDateTime.now());
            Prescription savedPrescription = prescriptionRepository.save(prescription);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescription updated successfully.");
            apiResponse.setData("prescription", savedPrescription);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse deletePrescription(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (!prescriptionRepository.existsById(id)) {
                apiResponse.setMessage("Prescription not found.");
                return apiResponse;
            }
            prescriptionRepository.deleteById(id);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescription deleted successfully.");
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getPrescriptionsByDoctor(Long doctorId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Prescription> prescriptions = prescriptionRepository.findByDoctor_Id(doctorId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescriptions fetched successfully.");
            apiResponse.setData("prescriptions", prescriptions);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getPrescriptionsByPatient(Long patientId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Prescription> prescriptions = prescriptionRepository.findByPatient_Id(patientId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescriptions fetched successfully.");
            apiResponse.setData("prescriptions", prescriptions);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getPrescriptionsByDate(Date prescriptionDate) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Prescription> prescriptions = prescriptionRepository.findByPrescriptionDate(prescriptionDate);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Prescriptions fetched successfully.");
            apiResponse.setData("prescriptions", prescriptions);
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }
}
