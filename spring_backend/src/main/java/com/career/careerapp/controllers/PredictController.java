package com.career.careerapp.controllers;

import com.career.careerapp.models.UserData;
import com.career.careerapp.models.User;

import com.career.careerapp.repository.UserDataRepository;
import com.career.careerapp.repository.UserRepository;

import com.career.careerapp.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import com.career.careerapp.payload.request.UserDataRequest;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class PredictController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserDataRepository userDataRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/predict")
    public ResponseEntity<?> saveUserdata(@RequestBody UserDataRequest userDataRequest) {
        Long userId = Long.parseLong(userDataRequest.getUserid());
        User user = userService.getUserById(userId);
        // System.out.println(userDataRequest.getOperating());
        UserData userdata = new UserData(userDataRequest, user);
        userDataRepository.save(userdata);
        return ResponseEntity.ok("User Data has been saved");
    }

}