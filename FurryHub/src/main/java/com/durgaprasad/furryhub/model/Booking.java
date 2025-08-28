package com.durgaprasad.furryhub.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long petId;

    @NotBlank
    private String serviceType; // grooming, vet, etc

    @NotBlank
    private String date; // yyyy-MM-dd

    @NotBlank
    private String time; // HH:mm

    private String status = "Scheduled";
    private String notes;

    public Booking() {}

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}

    public Long getUserId(){return userId;}
    public void setUserId(Long userId){this.userId=userId;}

    public Long getPetId(){return petId;}
    public void setPetId(Long petId){this.petId=petId;}

    public String getServiceType(){return serviceType;}
    public void setServiceType(String serviceType){this.serviceType=serviceType;}

    public String getDate(){return date;}
    public void setDate(String date){this.date=date;}

    public String getTime(){return time;}
    public void setTime(String time){this.time=time;}

    public String getStatus(){return status;}
    public void setStatus(String status){this.status=status;}

    public String getNotes(){return notes;}
    public void setNotes(String notes){this.notes=notes;}
}
