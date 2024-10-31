package com.hms.projectSpringBoot.security.controller;

import com.hms.projectSpringBoot.security.service.AuthService;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ApiResponse login(@RequestParam(required = false) String email,
                             @RequestParam(required = false) String password) {
        if (email == null || email.isEmpty()) {
            return new ApiResponse(false, "Email is required");
        }
        if (password == null || password.isEmpty()) {
            return new ApiResponse(false, "Password is required");
        }
        return authService.authenticate(email, password);
    }

}
