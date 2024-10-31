package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Medicine;
import com.hms.projectSpringBoot.hospital.service.MedicineService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "*")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @GetMapping("/")
    public ApiResponse getAllMedicines() {
        return medicineService.getAllMedicines();
    }

    @GetMapping("/{id}")
    public ApiResponse getMedicineById(@PathVariable Long id) {
        return medicineService.getMedicineById(id);
    }

    @PostMapping("/")
    public ApiResponse createMedicine(@RequestBody Medicine medicine) {
        return medicineService.saveMedicine(medicine);
    }

    @PutMapping("/{id}")
    public ApiResponse updateMedicine(@PathVariable Long id, @RequestBody Medicine medicine) {
        return medicineService.updateMedicine(id, medicine);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteMedicine(@PathVariable Long id) {
        return medicineService.deleteMedicine(id);
    }

    @GetMapping("/manufacturer/{manufacturerId}")
    public ApiResponse getMedicinesByManufacturer(@PathVariable Long manufacturerId) {
        return medicineService.getMedicinesByManufacturer(manufacturerId);
    }

    @GetMapping("/search")
    public ApiResponse searchMedicinesByName(@RequestParam String name) {
        return medicineService.searchMedicinesByName(name);
    }

    @PutMapping("/{id}/add-stock")
    public ApiResponse addStock(@PathVariable Long id, @RequestParam int quantity) {
        return medicineService.addStock(id, quantity);
    }

    @PutMapping("/{id}/subtract-stock")
    public ApiResponse subtractStock(@PathVariable Long id, @RequestParam int quantity) {
        return medicineService.subtractStock(id, quantity);
    }

}
