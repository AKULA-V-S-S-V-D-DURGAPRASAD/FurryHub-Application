package com.durgaprasad.furryhub.service;

import com.durgaprasad.furryhub.model.Pet;
import com.durgaprasad.furryhub.repository.PetRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PetService {
    private final PetRepository repo;
    public PetService(PetRepository repo){ this.repo = repo; }

    public Pet create(Pet p){ return repo.save(p); }
    public List<Pet> all(){ return repo.findAll(); }
    public List<Pet> byUser(Long userId){ return repo.findByUserId(userId); }
    public Optional<Pet> find(Long id){ return repo.findById(id); }
    public Pet update(Pet p){ return repo.save(p); }
    public void delete(Long id){ repo.deleteById(id); }
}
