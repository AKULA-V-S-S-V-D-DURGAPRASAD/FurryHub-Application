package com.durgaprasad.furryhub.repository;

import com.durgaprasad.furryhub.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUserId(Long userId);
    List<Booking> findByServiceType(String serviceType);
}
