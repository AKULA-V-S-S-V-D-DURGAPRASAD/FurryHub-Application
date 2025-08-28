package com.durgaprasad.furryhub.controller;

import com.durgaprasad.furryhub.model.User;
import com.durgaprasad.furryhub.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
    private final UserRepository users;
    public AuthController(UserRepository users){ this.users = users; }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody User user){
        if(users.findByEmail(user.getEmail()).isPresent()){
            return ResponseEntity.badRequest().body(Map.of("error","Email already registered"));
        }
        User saved = users.save(user);
        // for demo we do not hash passwords; do not use in production
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> body){
        var email = body.getOrDefault("email","");
        var password = body.getOrDefault("password","");
        var uopt = users.findByEmail(email);
        if(uopt.isEmpty() || !uopt.get().getPassword().equals(password)){
            return ResponseEntity.status(401).body(Map.of("error","Invalid credentials"));
        }
        var user = uopt.get();
        // Demo token; replace with real JWT if needed
        var token = "demo-token-" + user.getId();
        return ResponseEntity.ok(Map.of("token", token, "user", user));
    }
}
