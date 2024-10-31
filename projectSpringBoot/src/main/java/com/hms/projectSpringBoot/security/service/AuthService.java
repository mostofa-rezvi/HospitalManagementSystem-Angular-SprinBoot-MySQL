package com.hms.projectSpringBoot.security.service;

import com.hms.projectSpringBoot.security.entity.User;
import com.hms.projectSpringBoot.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;


    public ApiResponse authenticate(String email, String password) {
        ApiResponse apiResponse = new ApiResponse();

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            if (authentication != null && authentication.isAuthenticated()) {
                User user = (User) authentication.getPrincipal();
                if (user != null) {

                    Map<String, Object> map = new HashMap<>();
                    String jwt = jwtService.generateJwt(user);
                    map.put("jwt", jwt);

                    //user.setToken(null);
                    map.put("user", user);

                    apiResponse.setData(map);
                    apiResponse.success("User authenticated");
                    return apiResponse;
                }
            }
        } catch (Exception e) {
            apiResponse.setMessage("Invalid username or password");
        }
        return apiResponse;
    }

}


