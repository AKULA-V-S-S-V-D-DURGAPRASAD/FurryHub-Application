package com.durgaprasad.furryhub.controller;

import com.durgaprasad.furryhub.model.Booking;
import com.durgaprasad.furryhub.service.BookingService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {
    private final BookingService bookings;
    public BookingController(BookingService bookings){ this.bookings = bookings; }

    @GetMapping public List<Booking> all(){ return bookings.all(); }

    @GetMapping("/user/{userId}") public List<Booking> byUser(@PathVariable Long userId){ return bookings.byUser(userId); }

    @GetMapping("/service/{service}") public List<Booking> byService(@PathVariable String service){ return bookings.byService(service); }

    @PostMapping public ResponseEntity<Booking> create(@Valid @RequestBody Booking b){ return ResponseEntity.ok(bookings.create(b)); }

    @PutMapping("/{id}") public ResponseEntity<Booking> update(@PathVariable Long id, @Valid @RequestBody Booking b){
        b.setId(id); return ResponseEntity.ok(bookings.update(b));
    }

    @DeleteMapping("/{id}") public ResponseEntity<?> delete(@PathVariable Long id){ bookings.delete(id); return ResponseEntity.noContent().build(); }
}
