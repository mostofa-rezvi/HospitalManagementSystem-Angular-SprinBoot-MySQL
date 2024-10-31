package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Bill;
import com.hms.projectSpringBoot.hospital.service.BillService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin(origins = "*")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping("/")
    public ApiResponse getAllBills() {
        return billService.getAllBills();
    }

    @GetMapping("/{id}")
    public ApiResponse getBillById(@PathVariable Long id) {
        return billService.getBillById(id);
    }

    @PostMapping("/create")
    public ApiResponse createBill(@RequestBody Bill bill) {
        return billService.createBill(bill);
    }

    @PutMapping("/{id}")
    public ApiResponse updateBill(@RequestBody Bill bill) {
        return billService.updateBill(bill);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteBill(@PathVariable Long id) {
        return billService.deleteBill(id);
    }

    @GetMapping("/getBillsByPatientId")
    public ApiResponse getBillsByPatientId(@RequestParam Long patientId) {
        return billService.getBillsByPatientId(patientId);
    }

    @GetMapping("/getBillsByDoctorId")
    public ApiResponse getBillsByDoctorId(@PathVariable Long doctorId) {
        return billService.getBillsByDoctorId(doctorId);
    }

    @GetMapping("/getBillsByPharmacistId")
    public ApiResponse getBillsByPharmacistId(@PathVariable Long pharmacistId) {
        return billService.getBillsByPharmacistId(pharmacistId);
    }
}
