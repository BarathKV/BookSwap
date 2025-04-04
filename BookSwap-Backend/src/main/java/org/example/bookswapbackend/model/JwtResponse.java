package org.example.bookswapbackend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String username;
	public JwtResponse(String token, String username) {
		super();
		this.token = token;
		this.username = username;
	}
	 
}
