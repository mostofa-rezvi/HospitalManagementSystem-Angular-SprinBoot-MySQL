package com.hms.projectSpringBoot.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {

    private String message;
    private Map<String, Object> data;
    private boolean successful = false;

    public ApiResponse(boolean successful) {
        this.successful = successful;
    }

    public ApiResponse(boolean isSuccessful, String message) {
        this.successful = isSuccessful;
        this.message = message;
    }

    public void setData(String key, Object value) {
        if (data == null) {
            data = new HashMap<>();
        }
        data.put(key, value);
    }

    public void success(String message) {
        this.successful = true;
        this.message = message;
    }

    public ApiResponse error(String message) {
        this.successful = false;
        this.message = message;
        return this;
    }

}

