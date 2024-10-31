package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Prescription;
import com.hms.projectSpringBoot.hospital.service.PrescriptionService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin(origins = "*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping
    public ApiResponse getAllPrescriptions() {
        return prescriptionService.getAllPrescriptions();
    }

    @GetMapping("/{id}")
    public ApiResponse getPrescriptionById(@PathVariable Long id) {
        return prescriptionService.getPrescriptionById(id);
    }

    @PostMapping
    public ApiResponse createPrescription(@RequestBody Prescription prescription) {
        return prescriptionService.createPrescription(prescription);
    }

    @PutMapping("/{id}")
    public ApiResponse updatePrescription(@PathVariable Long id, @RequestBody Prescription updatedPrescription) {
        return prescriptionService.updatePrescription(id, updatedPrescription);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deletePrescription(@PathVariable Long id) {
        return prescriptionService.deletePrescription(id);
    }

    @GetMapping("/doctor/{doctorId}")
    public ApiResponse getPrescriptionsByDoctor(@PathVariable Long doctorId) {
        return prescriptionService.getPrescriptionsByDoctor(doctorId);
    }

    @GetMapping("/patient/{patientId}")
    public ApiResponse getPrescriptionsByPatient(@PathVariable Long patientId) {
        return prescriptionService.getPrescriptionsByPatient(patientId);
    }

    @GetMapping("/date")
    public ApiResponse getPrescriptionsByDate(@RequestParam Date date) {
        return prescriptionService.getPrescriptionsByDate(date);
    }
}
