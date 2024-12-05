package com.sadinamoda.web.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface Category extends JpaRepository <Category, UUID> {
}
