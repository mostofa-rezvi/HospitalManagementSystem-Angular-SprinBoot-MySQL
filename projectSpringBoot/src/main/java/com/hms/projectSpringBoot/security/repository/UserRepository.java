package com.hms.projectSpringBoot.security.repository;

import com.hms.projectSpringBoot.security.entity.Role;
import com.hms.projectSpringBoot.security.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<List<User>> findAllByRole(Role role);
}
