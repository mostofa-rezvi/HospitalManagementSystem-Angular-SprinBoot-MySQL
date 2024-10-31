package com.hms.projectSpringBoot.hospital.entity;

import com.hms.projectSpringBoot.security.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String phone;
    private String gender;
    private String age;
    private Date birthday;
    private Date date;
    private Time time;
    private String notes;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User requestedBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctorId")
    private User doctor;

}
