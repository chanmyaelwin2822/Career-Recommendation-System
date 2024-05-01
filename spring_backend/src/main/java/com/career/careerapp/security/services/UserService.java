package com.career.careerapp.security.services;


import com.career.careerapp.models.User;
import com.career.careerapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User saveUser(User user){
        return userRepo.save(user);
    }
    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }

    public User getUserById(Long userId){
        return userRepo.findById(userId).get();
    }
}

