package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.TestEntity;
import com.hms.projectSpringBoot.hospital.repository.TestRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TestService {

    @Autowired
    private TestRepository testRepository;

    public ApiResponse getAllTests() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<TestEntity> tests = testRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Tests fetched successfully.");
            apiResponse.setData("tests", tests);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getTestById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<TestEntity> test = testRepository.findById(id);
            if (test.isPresent()) {
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Test fetched successfully.");
                apiResponse.setData("test", test.get());
            } else {
                apiResponse.setMessage("Test not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createTest(TestEntity testEntity) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            testEntity.setCreatedAt(LocalDateTime.now());
            TestEntity createdTest = testRepository.save(testEntity);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Test created successfully.");
            apiResponse.setData("test", createdTest);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateTest(Long id, TestEntity updatedTest) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<TestEntity> test = testRepository.findById(id);
            if (test.isPresent()) {
                TestEntity existingTest = test.get();
                existingTest.setTestName(updatedTest.getTestName());
                existingTest.setDescription(updatedTest.getDescription());
                existingTest.setResult(updatedTest.getResult());
                existingTest.setInstructions(updatedTest.getInstructions());
                existingTest.setUpdatedAt(LocalDateTime.now());

                testRepository.save(existingTest);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Test updated successfully.");
                apiResponse.setData("test", existingTest);
            } else {
                apiResponse.setMessage("Test not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteTest(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (testRepository.existsById(id)) {
                testRepository.deleteById(id);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Test deleted successfully.");
            } else {
                apiResponse.setMessage("Test not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

}
