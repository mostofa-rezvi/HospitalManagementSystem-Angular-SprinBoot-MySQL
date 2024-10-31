package com.hms.projectSpringBoot.hospital.entity;

import com.hms.projectSpringBoot.security.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bills")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int phone;
    private String email;
    private String address;
    private Date invoiceDate;
    private int totalAmount;
    private int amountPaid;
    private int balance;
    private String status;
    private String description;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private User patient;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctor_id")
    private User doctor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pharmacist_id")
    private User pharmacist;

    @ManyToMany
    private List<Medicine> medicineList;

}
