package com.career.careerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.career.careerapp.models.UserData;

@Repository

public interface UserDataRepository extends JpaRepository<UserData, Long> {
}
