package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Department;
import com.hms.projectSpringBoot.hospital.repository.DepartmentRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public ApiResponse getAllDepartments() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Department> departments = departmentRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Departments fetched successfully.");
            apiResponse.setData("departments", departments);
        } catch (Exception e) {
            apiResponse.setMessage("Error fetching departments: " + e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getDepartmentById(int id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<Department> departmentOpt = departmentRepository.findById(id);
            if (departmentOpt.isPresent()) {
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Department fetched successfully.");
                apiResponse.setData("department", departmentOpt.get());
            } else {
                apiResponse.setMessage("Department not found.");
            }
        } catch (Exception e) {
            apiResponse.setMessage("Error fetching department: " + e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse createDepartment(Department department) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Department savedDepartment = departmentRepository.save(department);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Department created successfully.");
            apiResponse.setData("department", savedDepartment);
        } catch (Exception e) {
            apiResponse.setMessage("Error creating department: " + e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse updateDepartment(int id, Department updatedDepartment) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            return departmentRepository.findById(id).map(department -> {
                department.setDepartmentName(updatedDepartment.getDepartmentName());
                department.setDescription(updatedDepartment.getDescription());
                department.setUsers(updatedDepartment.getUsers());
                Department savedDepartment = departmentRepository.save(department);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Department updated successfully.");
                apiResponse.setData("department", savedDepartment);
                return apiResponse;
            }).orElseGet(() -> {
                apiResponse.setMessage("Department not found.");
                return apiResponse;
            });
        } catch (Exception e) {
            apiResponse.setMessage("Error updating department: " + e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse deleteDepartment(int id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (departmentRepository.existsById(id)) {
                departmentRepository.deleteById(id);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Department deleted successfully.");
            } else {
                apiResponse.setMessage("Department not found.");
            }
        } catch (Exception e) {
            apiResponse.setMessage("Error deleting department: " + e.getMessage());
        }
        return apiResponse;
    }

    public ApiResponse getDepartmentByName(String departmentName) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Department department = departmentRepository.findByDepartmentName(departmentName);
            if (department != null) {
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Department fetched successfully.");
                apiResponse.setData("department", department);
            } else {
                apiResponse.setMessage("Department not found.");
            }
        } catch (Exception e) {
            apiResponse.setMessage("Error fetching department by name: " + e.getMessage());
        }
        return apiResponse;
    }
}
