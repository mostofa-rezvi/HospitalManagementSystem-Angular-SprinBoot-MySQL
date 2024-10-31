package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Appointment;
import com.hms.projectSpringBoot.hospital.entity.Bill;
import com.hms.projectSpringBoot.hospital.entity.Medicine;
import com.hms.projectSpringBoot.hospital.repository.BillRepository;
import com.hms.projectSpringBoot.hospital.repository.MedicineRepository;
import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.security.repository.UserRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MedicineRepository medicineRepository;

    public ApiResponse getAllBills() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Bill> bills = billRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bills fetched successfully.");
            apiResponse.setData("bills", bills);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getBillById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Bill bill = billRepository.findById(id).orElse(null);
            if (bill == null) {
                apiResponse.setMessage("Bill not found.");
                return apiResponse;
            }
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bill fetched successfully.");
            apiResponse.setData("bill", bill);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createBill(Bill bill) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (bill.getPatient() != null && bill.getPatient().getId() != null) {
                User user = userRepository.findById(bill.getDoctor().getId()).orElse(null);

                if (user == null || user.getRole() == null) {
                    apiResponse.setMessage("User must have a valid role and must exist.");
                    return apiResponse;
                }
            }
            billRepository.save(bill);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bill created successfully.");
            apiResponse.setData("bill", bill);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateBill(Bill updatedBill) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            User user = userRepository.findById(updatedBill.getDoctor().getId()).orElse(null);

            if (user == null || user.getRole() == null) {
                apiResponse.setMessage("User must have a valid role and must exist.");
                return apiResponse;
            }
            billRepository.save(updatedBill);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bill updated successfully.");
            apiResponse.setData("updateBill", updatedBill);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteBill(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Bill bill = billRepository.findById(id).orElse(null);
            if (bill == null) {
                apiResponse.setMessage("Bill not found.");
                return apiResponse;
            }
            billRepository.deleteById(id);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bill deleted successfully.");
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getBillsByPatientId(Long patientId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Bill> bills = billRepository.findByPatientId(patientId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bills fetched successfully.");
            apiResponse.setData("bills", bills);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getBillsByDoctorId(Long doctorId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Bill> bills = billRepository.findByDoctorId(doctorId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bills fetched successfully.");
            apiResponse.setData("bills", bills);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getBillsByPharmacistId(Long pharmacistId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Bill> bills = billRepository.findByPharmacistId(pharmacistId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Bills fetched successfully.");
            apiResponse.setData("bill", bills);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }
}
