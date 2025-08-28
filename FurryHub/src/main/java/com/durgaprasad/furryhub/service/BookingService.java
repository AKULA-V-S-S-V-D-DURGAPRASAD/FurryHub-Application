package com.durgaprasad.furryhub.service;

import com.durgaprasad.furryhub.model.Booking;
import com.durgaprasad.furryhub.repository.BookingRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {
    private final BookingRepository repo;
    public BookingService(BookingRepository repo){ this.repo = repo; }

    public Booking create(Booking b){ return repo.save(b); }
    public List<Booking> all(){ return repo.findAll(); }
    public List<Booking> byUser(Long userId){ return repo.findByUserId(userId); }
    public List<Booking> byService(String srv){ return repo.findByServiceType(srv); }
    public Optional<Booking> find(Long id){ return repo.findById(id); }
    public Booking update(Booking b){ return repo.save(b); }
    public void delete(Long id){ repo.deleteById(id); }
}
