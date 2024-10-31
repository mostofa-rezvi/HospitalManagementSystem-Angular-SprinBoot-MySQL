package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Diagnostics;
import com.hms.projectSpringBoot.hospital.repository.DiagnosticsRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class DiagnosticsService {

    @Autowired
    private DiagnosticsRepository diagnosticsRepository;

    public ApiResponse getAllDiagnostics() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Diagnostics> diagnosticsList = diagnosticsRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Diagnostics fetched successfully.");
            apiResponse.setData("diagnostics", diagnosticsList);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getDiagnosticsById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<Diagnostics> diagnostics = diagnosticsRepository.findById(id);
            if (diagnostics.isPresent()) {
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Diagnostics fetched successfully.");
                apiResponse.setData("diagnostics", diagnostics.get());
            } else {
                apiResponse.setMessage("Diagnostics not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createDiagnostics(Diagnostics diagnostics) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            diagnostics.setCreatedAt(LocalDateTime.now());
            diagnostics.setUpdatedAt(LocalDateTime.now());
            Diagnostics savedDiagnostics = diagnosticsRepository.save(diagnostics);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Diagnostics created successfully.");
            apiResponse.setData("diagnostics", savedDiagnostics);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateDiagnostics(Long id, Diagnostics updatedDiagnostics) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            return diagnosticsRepository.findById(id).map(diagnostics -> {
                diagnostics.setTestDate(updatedDiagnostics.getTestDate());
                diagnostics.setTestResult(updatedDiagnostics.getTestResult());
                diagnostics.setPrice(updatedDiagnostics.getPrice());
                diagnostics.setUpdatedAt(LocalDateTime.now());
                diagnostics.setDoctor(updatedDiagnostics.getDoctor());
                diagnostics.setPatient(updatedDiagnostics.getPatient());
                Diagnostics savedDiagnostics = diagnosticsRepository.save(diagnostics);

                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Diagnostics updated successfully.");
                apiResponse.setData("diagnostics", savedDiagnostics);
                return apiResponse;
            }).orElseGet(() -> {
                apiResponse.setMessage("Diagnostics not found.");
                return apiResponse;
            });
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteDiagnostics(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (!diagnosticsRepository.existsById(id)) {
                apiResponse.setMessage("Diagnostics not found.");
                return apiResponse;
            }
            diagnosticsRepository.deleteById(id);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Diagnostics deleted successfully.");
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public List<Diagnostics> getDiagnosticsByPatientId(Long patientId) {
        return diagnosticsRepository.findByPatientId(patientId);
    }

    public List<Diagnostics> getDiagnosticsByDoctorId(Long doctorId) {
        return diagnosticsRepository.findByDoctorId(doctorId);
    }
}
