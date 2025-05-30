package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer implements UserDetails {

    public enum UserType {
        ADMIN, USER
    }

    @Id
    @Size(min = 3, max = 50, message = "Username must be 3-50 characters")
    @Column(nullable = false, unique = true)
    private String username;

    @NotNull
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Column(nullable = false)
    private String password;

    private String location;

    @Enumerated(EnumType.STRING)
    @Column(name="`user_type`")
    private UserType userType;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }
}