package com.durgaprasad.furryhub.controller;

import com.durgaprasad.furryhub.model.Pet;
import com.durgaprasad.furryhub.service.PetService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin
public class PetController {
    private final PetService pets;
    public PetController(PetService pets){ this.pets = pets; }

    @GetMapping
    public List<Pet> all(){ return pets.all(); }

    @GetMapping("/user/{userId}")
    public List<Pet> byUser(@PathVariable Long userId){ return pets.byUser(userId); }

    @PostMapping
    public ResponseEntity<Pet> create(@Valid @RequestBody Pet p){ return ResponseEntity.ok(pets.create(p)); }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> update(@PathVariable Long id, @Valid @RequestBody Pet p){
        p.setId(id);
        return ResponseEntity.ok(pets.update(p));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        pets.delete(id);
        return ResponseEntity.noContent().build();
    }
}
