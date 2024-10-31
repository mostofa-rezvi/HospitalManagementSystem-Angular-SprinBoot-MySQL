package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Department;
import com.hms.projectSpringBoot.hospital.service.DepartmentService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/")
    public ApiResponse getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("/{id}")
    public ApiResponse getDepartmentById(@PathVariable int id) {
        return departmentService.getDepartmentById(id);
    }

    @PostMapping
    public ApiResponse createDepartment(@RequestBody Department department) {
        return departmentService.createDepartment(department);
    }

    @PutMapping("/{id}")
    public ApiResponse updateDepartment(@PathVariable int id, @RequestBody Department updatedDepartment) {
        return departmentService.updateDepartment(id, updatedDepartment);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteDepartment(@PathVariable int id) {
        return departmentService.deleteDepartment(id);
    }

    @GetMapping("/search")
    public ApiResponse getDepartmentByName(@RequestParam String name) {
        return departmentService.getDepartmentByName(name);
    }
}
