package com.hms.projectSpringBoot.security.service;

import com.hms.projectSpringBoot.security.entity.Role;
import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.security.repository.UserRepository;
import com.hms.projectSpringBoot.util.ApiResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

    @Value("${images.dir}")
    private String imagesDir;

    @Autowired
    private UserRepository userRepository;

    public ApiResponse findAll() {
        ApiResponse response = new ApiResponse();
        try {
            List<User> users = userRepository.findAll();
            if (users.isEmpty()) {
                return response.error("No users found");
            }
            response.setData("users", users);
            response.success("Successfully retrieved users");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }

    public ApiResponse findUsersByRole(String role) {
        ApiResponse response = new ApiResponse();
        try {
            List<User> users = userRepository.findAllByRole(Role.valueOf(role.toUpperCase()))
                    .orElse(new ArrayList<>());
            if (users.isEmpty()) {
                return response.error("No users found");
            }
            response.setData("users", users);
            response.success("Successfully retrieved users");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }


    @Transactional
    public ApiResponse save(User user, MultipartFile avatar) {
        ApiResponse response = new ApiResponse();
        try {
            User emailDuplicate = userRepository.findByEmail(user.getEmail()).orElse(null);
            if (emailDuplicate != null) {
                return response.error("Email already exists");
            }

            if (avatar != null && !avatar.isEmpty()) {
                Path directoryPath = Paths.get(imagesDir);
                if (!Files.exists(directoryPath)) {
                    Files.createDirectories(directoryPath);
                }

                String originalFilename = avatar.getOriginalFilename();
                String fileExtension = originalFilename != null ?
                        originalFilename.substring(originalFilename.lastIndexOf('.')) : "";
                String randomFileName = UUID.randomUUID() + fileExtension;
                Path filePath = directoryPath.resolve(randomFileName);

                Files.copy(avatar.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                user.setImage("imagesDir/" + randomFileName);
            }

            user.setPassword(new BCryptPasswordEncoder(12).encode(user.getPassword()));
            userRepository.save(user);

            response.setData("user", user);
            response.success("Saved Successfully");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }

    @Transactional
    public ApiResponse update(User user, MultipartFile avatar) {
        ApiResponse response = new ApiResponse();
        try {
            User oldUser = userRepository.findById(user.getId()).orElse(null);

            if (oldUser == null) {
                return response.error("User not found");
            }

            User emailDuplicate = userRepository.findByEmail(user.getEmail()).orElse(null);
            if (emailDuplicate != null && !emailDuplicate.getId().equals(user.getId())) {
                return response.error("Email already exists");
            }

            if (avatar != null && !avatar.isEmpty()) {
                Path directoryPath = Paths.get(imagesDir);

                if (!Files.exists(directoryPath)) {
                    Files.createDirectories(directoryPath);
                }

                String originalFilename = avatar.getOriginalFilename();
                String fileExtension = originalFilename != null ?
                        originalFilename.substring(originalFilename.lastIndexOf('.')) : "";
                String randomFileName = UUID.randomUUID() + fileExtension;
                Path filePath = directoryPath.resolve(randomFileName);

                Files.copy(avatar.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                user.setImage("imagesDir/" + randomFileName);
            } else {
                user.setImage(oldUser.getImage());
            }

            user.setPassword(new BCryptPasswordEncoder(12).encode(user.getPassword()));
            userRepository.save(user);

            response.setData("user", user);
            response.success("Updated Successfully");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }

    public ApiResponse findById(Long id) {
        ApiResponse response = new ApiResponse();
        try {
            User user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return response.error("User not found");
            }
            response.setData("user", user);
            response.success("Successfully retrieved user");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }

    public ApiResponse deleteById(Long id) {
        ApiResponse response = new ApiResponse();
        try {
            User user = userRepository.findById(id).orElse(null);
            if (user == null) {
                return response.error("User not found");
            }
            userRepository.deleteById(id);
            response.success("Deleted Successfully");
            return response;
        } catch (Exception e) {
            return response.error(e.getMessage());
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        } else {
            return user;
        }
    }

    public User findDoctorById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null && user.getRole() == Role.DOCTOR) {
            return user;
        }
        return null;
    }

}
