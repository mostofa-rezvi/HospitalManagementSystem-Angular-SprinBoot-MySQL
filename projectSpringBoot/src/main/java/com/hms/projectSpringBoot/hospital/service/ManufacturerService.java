package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import com.hms.projectSpringBoot.hospital.repository.ManufacturerRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ManufacturerService {

    @Autowired
    private ManufacturerRepository manufacturerRepository;

    public ApiResponse getAllManufacturers() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Manufacturer> manufacturers = manufacturerRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Manufacturers fetched successfully.");
            apiResponse.setData("manufacturers", manufacturers);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getManufacturerById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Manufacturer manufacturer = manufacturerRepository.findById(id).orElse(null);
            if (manufacturer == null) {
                apiResponse.setMessage("Manufacturer not found.");
                return apiResponse;
            }
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Manufacturer fetched successfully.");
            apiResponse.setData("manufacturer", manufacturer);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createManufacturer(Manufacturer manufacturer) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            manufacturer.setCreatedAt(LocalDateTime.now());
            manufacturer.setUpdatedAt(LocalDateTime.now());
            Manufacturer createdManufacturer = manufacturerRepository.save(manufacturer);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Manufacturer created successfully.");
            apiResponse.setData("manufacturer", createdManufacturer);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateManufacturer(Long id, Manufacturer manufacturerDetails) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Manufacturer manufacturer = manufacturerRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Manufacturer not found"));

            manufacturer.setManufacturerName(manufacturerDetails.getManufacturerName());
            manufacturer.setAddress(manufacturerDetails.getAddress());
            manufacturer.setContactNumber(manufacturerDetails.getContactNumber());
            manufacturer.setEmail(manufacturerDetails.getEmail());
            manufacturer.setUpdatedAt(LocalDateTime.now());

            Manufacturer updatedManufacturer = manufacturerRepository.save(manufacturer);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Manufacturer updated successfully.");
            apiResponse.setData("manufacturer", updatedManufacturer);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteManufacturer(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Manufacturer manufacturer = manufacturerRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Manufacturer not found"));

            manufacturerRepository.delete(manufacturer);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Manufacturer deleted successfully.");
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }
}
