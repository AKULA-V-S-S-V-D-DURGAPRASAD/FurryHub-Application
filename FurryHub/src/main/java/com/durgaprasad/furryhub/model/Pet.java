package com.durgaprasad.furryhub.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
@Entity
@Table(name = "pets")
public class Pet {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId; // owner id

    @NotBlank
    private String name;

    @NotBlank
    private String type; // Dog, Cat, etc.

    private Integer age;

    public Pet() {}

    public Pet(Long userId, String name, String type, Integer age) {
        this.userId = userId; this.name = name; this.type = type; this.age = age;
    }

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id=id;}

    public Long getUserId(){return userId;}
    public void setUserId(Long userId){this.userId=userId;}

    public String getName(){return name;}
    public void setName(String name){this.name=name;}

    public String getType(){return type;}
    public void setType(String type){this.type=type;}

    public Integer getAge(){return age;}
    public void setAge(Integer age){this.age=age;}
}
