package com.career.careerapp.security.services;
import com.career.careerapp.models.UserData;
import com.career.careerapp.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserDataService {
    @Autowired
    private UserDataRepository userDataRepo;

    public List<UserData> getAllUserData(){
        Iterable<UserData> userDataIterable = userDataRepo.findAll();
        List<UserData> userDataList = new ArrayList<>();
        userDataIterable.forEach(userDataList::add);
        return userDataList;
    }
    public UserData getUserDataById(Long userdataId){
        return userDataRepo.findById(userdataId).get();
    }


    public UserData saveUserData (UserData userdata){
        return userDataRepo.save(userdata);

    }

}
