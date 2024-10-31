package com.hms.projectSpringBoot.security.controller;

import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.security.service.UserService;
import com.hms.projectSpringBoot.util.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/findAllUsers")
    public ApiResponse findAll() {
        return userService.findAll();
    }

    @GetMapping("/findUsersByRole")
    public ApiResponse findUsersByRole(@RequestParam String role) {
        return userService.findUsersByRole(role);
    }

    @GetMapping("/findById/{id}")
    public ApiResponse findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping("/saveUser")
    public ApiResponse saveUser(@RequestPart("user") User user,
                            @RequestPart(value = "imageFile", required = false) MultipartFile image) {
        return userService.save(user, image);
    }

    @PutMapping("/updateUser")
    public ApiResponse updateUser(@RequestPart("user") User user,
                              @RequestPart(value = "imageFile", required = false) MultipartFile image) {
        return userService.update(user, image);
    }

    @DeleteMapping("/deleteById/{id}")
    public ApiResponse deleteById(@PathVariable Long id) {
        return userService.deleteById(id);
    }

}
