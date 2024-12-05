package com.sadinamoda.web.domain.users;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Users {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(unique = true)
    private String email;

    private String name;
    private String password;
    private String phone;
    private String address;
    private LocalDateTime created_date;

}
