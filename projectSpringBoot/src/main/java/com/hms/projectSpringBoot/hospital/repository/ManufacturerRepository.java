package com.hms.projectSpringBoot.hospital.repository;

import com.hms.projectSpringBoot.hospital.entity.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {

}
