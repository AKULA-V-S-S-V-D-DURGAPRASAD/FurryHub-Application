package com.durgaprasad.furryhub.service;

import com.durgaprasad.furryhub.model.User;
import com.durgaprasad.furryhub.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo){ this.repo = repo; }

    public User create(User u){ return repo.save(u); }
    public Optional<User> findByEmail(String email){ return repo.findByEmail(email); }
    public Optional<User> findById(Long id){ return repo.findById(id); }
}
