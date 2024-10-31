package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.TestEntity;
import com.hms.projectSpringBoot.hospital.service.TestService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping
    public ApiResponse getAllTests() {
        return testService.getAllTests();
    }

    @GetMapping("/{id}")
    public ApiResponse getTestById(@PathVariable Long id) {
        return testService.getTestById(id);
    }

    @PostMapping
    public ApiResponse createTest(@RequestBody TestEntity testEntity) {
        return testService.createTest(testEntity);
    }

    @PutMapping("/update/{id}")
    public ApiResponse updateTest(@PathVariable Long id, @RequestBody TestEntity updatedTest) {
        return testService.updateTest(id, updatedTest);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteTest(@PathVariable Long id) {
        return testService.deleteTest(id);
    }
}
