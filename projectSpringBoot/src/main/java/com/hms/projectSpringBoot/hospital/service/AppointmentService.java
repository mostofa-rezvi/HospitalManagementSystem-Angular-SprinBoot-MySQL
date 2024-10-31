package com.hms.projectSpringBoot.hospital.service;

import com.hms.projectSpringBoot.hospital.entity.Appointment;
import com.hms.projectSpringBoot.hospital.repository.AppointmentRepository;
import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.security.repository.UserRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    public ApiResponse getAllAppointments() {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Appointment> appointments = appointmentRepository.findAll();
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointments fetched successfully.");
            apiResponse.setData("appointments", appointments);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getAppointmentById(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Appointment appointment = appointmentRepository.findById(id).orElse(null);
            if (appointment == null) {
                apiResponse.setMessage("Appointment not found.");
                return apiResponse;
            }
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointment fetched successfully.");
            apiResponse.setData("appointment", appointment);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse createAppointment(Appointment appointment) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (appointment.getRequestedBy() != null ) {
                User user = userRepository.findById(appointment.getRequestedBy().getId()).orElse(null);

                if (user == null || user.getRole() == null) {
                    apiResponse.setMessage("User must have a valid role and must exist.");
                    return apiResponse;
                }
            }
            if (appointment.getDoctor() != null && appointment.getDoctor().getId() == null) {
                appointment.setDoctor(null);
            }
            appointmentRepository.save(appointment);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointment created successfully.");
            apiResponse.setData("appointment", appointment);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse updateAppointment(Appointment appointment) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            if (appointment.getRequestedBy().getId() != null) {
                User user = userRepository.findById(appointment.getRequestedBy().getId()).orElse(null);

                if (user == null || user.getRole() == null) {
                    apiResponse.setMessage("User must have a valid role and must exist.");
                    return apiResponse;
                }
            }
            appointmentRepository.save(appointment);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointment updated successfully.");
            apiResponse.setData("appointment", appointment);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse deleteAppointment(Long id) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            Appointment appointment = appointmentRepository.findById(id).orElse(null);
            if (appointment == null) {
                apiResponse.setMessage("Appointment not found.");
                return apiResponse;
            }
            appointmentRepository.deleteById(id);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointment deleted successfully.");
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getAppointmentsByUserId(Long userId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Appointment> appointments = appointmentRepository.findByRequestedById(userId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointments fetched successfully.");
            apiResponse.setData("appointments", appointments);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getAppointmentsByDoctorId(Long doctorId) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Appointment> appointments = appointmentRepository.findByDoctorId(doctorId);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointments fetched successfully.");
            apiResponse.setData("appointments", appointments);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }

    public ApiResponse getAppointmentsByName(String name) {
        ApiResponse apiResponse = new ApiResponse(false);
        try {
            List<Appointment> appointments = appointmentRepository.findByNameContaining(name);
            apiResponse.setSuccessful(true);
            apiResponse.setMessage("Appointments fetched successfully.");
            apiResponse.setData("appointments", appointments);
            return apiResponse;
        } catch (Exception e) {
            apiResponse.setMessage(e.getMessage());
            return apiResponse;
        }
    }
}
