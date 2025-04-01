package org.example.bookswapbackend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String userId;
	public JwtResponse(String token, String userId) {
		super();
		this.token = token;
		this.userId = userId;
	}
	 
}
