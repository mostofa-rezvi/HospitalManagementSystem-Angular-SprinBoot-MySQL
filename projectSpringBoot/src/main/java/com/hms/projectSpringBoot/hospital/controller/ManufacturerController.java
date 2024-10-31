package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import com.hms.projectSpringBoot.hospital.service.ManufacturerService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/manufacturers")
@CrossOrigin(origins = "*")
public class ManufacturerController {

    @Autowired
    private ManufacturerService manufacturerService;

    @GetMapping("/")
    public ApiResponse getAllManufacturers() {
        return manufacturerService.getAllManufacturers();
    }

    @GetMapping("/{id}")
    public ApiResponse getManufacturerById(@PathVariable Long id) {
        return manufacturerService.getManufacturerById(id);
    }

    @PostMapping("/")
    public ApiResponse createManufacturer(@RequestBody Manufacturer manufacturer) {
        return manufacturerService.createManufacturer(manufacturer);
    }

    @PutMapping("/{id}")
    public ApiResponse updateManufacturer(@PathVariable Long id, @RequestBody Manufacturer manufacturerDetails) {
        return manufacturerService.updateManufacturer(id, manufacturerDetails);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteManufacturer(@PathVariable Long id) {
        return manufacturerService.deleteManufacturer(id);
    }
}
