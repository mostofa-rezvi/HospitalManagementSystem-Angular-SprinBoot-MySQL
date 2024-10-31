package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
    Department findByDepartmentName(String departmentName);
}
