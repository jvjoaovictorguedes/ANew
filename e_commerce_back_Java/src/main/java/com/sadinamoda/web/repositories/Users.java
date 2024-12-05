package com.sadinamoda.web.repositories;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface Users extends JpaRepository <User, UUID> {
}
