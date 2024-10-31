package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Report;
import com.hms.projectSpringBoot.hospital.repository.ReportRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public ApiResponse getAllReports() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Report> reports = reportRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Reports fetched successfully.");
            apiResponse.setData("reports", reports);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getReportById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<Report> report = reportRepository.findById(id);
            if (report.isPresent()) {
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Report fetched successfully.");
                apiResponse.setData("report", report.get());
            } else {
                apiResponse.setMessage("Report not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createReport(Report report) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            report.setCreatedAt(LocalDateTime.now());
            report.setUpdatedAt(LocalDateTime.now());
            Report createdReport = reportRepository.save(report);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Report created successfully.");
            apiResponse.setData("report", createdReport);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateReport(Long id, Report updatedReport) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Optional<Report> report = reportRepository.findById(id);
            if (report.isPresent()) {
                Report existingReport = report.get();
                existingReport.setReportName(updatedReport.getReportName());
                existingReport.setDescription(updatedReport.getDescription());
                existingReport.setSampleId(updatedReport.getSampleId());
                existingReport.setReportResult(updatedReport.getReportResult());
                existingReport.setInterpretation(updatedReport.getInterpretation());
                existingReport.setPatient(updatedReport.getPatient());
                existingReport.setTestEntity(updatedReport.getTestEntity()); // Added test entity
                existingReport.setTestDate(updatedReport.getTestDate()); // Added test date
                existingReport.setUpdatedAt(LocalDateTime.now());

                reportRepository.save(existingReport);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Report updated successfully.");
                apiResponse.setData("report", existingReport);
            } else {
                apiResponse.setMessage("Report not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteReport(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (reportRepository.existsById(id)) {
                reportRepository.deleteById(id);
                apiResponse.setSuccessful(true);
                apiResponse.setMessage("Report deleted successfully.");
            } else {
                apiResponse.setMessage("Report not found.");
            }
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public List<Report> getReportsByTestEntityId(Long testId) {
        return reportRepository.findByTestEntityId(testId);
    }

    public List<Report> getReportsByPatientId(Long patientId) {
        return reportRepository.findByPatientId(patientId);
    }
}
