package com.hms.projectSpringBoot.hospital.controller;

import com.hms.projectSpringBoot.hospital.entity.Appointment;
import com.hms.projectSpringBoot.hospital.service.AppointmentService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/")
    public ApiResponse getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public ApiResponse getAppointmentById(@PathVariable Long id) {
        return appointmentService.getAppointmentById(id);
    }

    @PostMapping("/save")
    public ApiResponse createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @PutMapping("/update")
    public ApiResponse updateAppointment(@RequestBody Appointment appointment) {
        return appointmentService.updateAppointment(appointment);
    }

    @DeleteMapping("/{id}")
    public ApiResponse deleteAppointment(@PathVariable Long id) {
        return appointmentService.deleteAppointment(id);
    }

    @GetMapping("/getAppointmentsByUserId")
    public ApiResponse getAppointmentsByUserId(@RequestParam Long userId) {
        return appointmentService.getAppointmentsByUserId(userId);
    }

    @GetMapping("/getAppointmentsByDoctorId")
    public ApiResponse getAppointmentsByDoctorId(@RequestParam Long doctorId) {
        return appointmentService.getAppointmentsByDoctorId(doctorId);
    }

    @GetMapping("/searchByName")
    public ApiResponse getAppointmentsByName(@RequestParam String name) {
        return appointmentService.getAppointmentsByName(name);
    }

}
