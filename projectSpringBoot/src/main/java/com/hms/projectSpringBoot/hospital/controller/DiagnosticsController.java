package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Diagnostics;
import com.hms.projectSpringBoot.hospital.service.DiagnosticsService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diagnostics")
public class DiagnosticsController {

    @Autowired
    private DiagnosticsService diagnosticsService;

    @GetMapping
    public ApiResponse getAllDiagnostics() {
        return diagnosticsService.getAllDiagnostics();
    }

    @GetMapping("/{id}")
    public ApiResponse getDiagnosticsById(@PathVariable Long id) {
        return diagnosticsService.getDiagnosticsById(id);
    }

    @PostMapping
    public ApiResponse createDiagnostics(@RequestBody Diagnostics diagnostics) {
        return diagnosticsService.createDiagnostics(diagnostics);
    }

    @PutMapping("/{id}")
    public ApiResponse updateDiagnostics(@PathVariable Long id, @RequestBody Diagnostics updatedDiagnostics) {
        return diagnosticsService.updateDiagnostics(id, updatedDiagnostics);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteDiagnostics(@PathVariable Long id) {
        return diagnosticsService.deleteDiagnostics(id);
    }

    @GetMapping("/patient/{patientId}")
    public List<Diagnostics> getDiagnosticsByPatientId(@PathVariable Long patientId) {
        return diagnosticsService.getDiagnosticsByPatientId(patientId);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<Diagnostics> getDiagnosticsByDoctorId(@PathVariable Long doctorId) {
        return diagnosticsService.getDiagnosticsByDoctorId(doctorId);
    }
}
