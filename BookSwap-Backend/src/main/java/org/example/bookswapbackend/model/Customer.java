package org.example.bookswapbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Setter
@Entity
@Table(name="users")
public class Customer implements UserDetails{

	@Id
	@Getter
	private String user_id;

	@Column(nullable=false)
	private String name;

	@Column(nullable=false)
	@Length(min=8, message="Password must be greater than or equal to 8 characters")
	private String password;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.name;
	}
}