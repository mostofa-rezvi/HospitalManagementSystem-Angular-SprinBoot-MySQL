-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hms
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `age` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `date` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6u6s6egu60m2cbdjno44jbipa` (`doctor_id`),
  KEY `FK886ced1atxgvnf1o3oxtj5m4s` (`user_id`),
  CONSTRAINT `FK6u6s6egu60m2cbdjno44jbipa` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK886ced1atxgvnf1o3oxtj5m4s` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,'24','2024-09-12','2024-09-25','sabab239.1@gmail.com','Male','Shabab Ahmed','TEST','01710295968','10:00:00.000000',13,1),(2,'24','2024-09-04','2024-09-25','sabab239.1@gmail.com','Male','Shabab Ahmed','TEST','01710295968','09:30:00.000000',4,NULL),(3,'25','2024-09-01','2024-10-04','rezvi@gmail.com','Male','Rezvi','Test','01819325077 ','10:00:00.000000',13,NULL),(18,'23','2024-09-26','2024-10-04','rezvi@mail.com','Male','rezvi','TEST','01819325077','10:00:00.000000',NULL,15);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount_paid` int NOT NULL,
  `balance` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` int DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `pharmacist_id` bigint DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd88qt0tci2ldbdfoxf3jwo8ex` (`doctor_id`),
  KEY `FKcx8jlvokigwpm7p31mp010tf` (`patient_id`),
  KEY `FKom9su2loms1fxtaf5phpuvkf1` (`pharmacist_id`),
  CONSTRAINT `FKcx8jlvokigwpm7p31mp010tf` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKd88qt0tci2ldbdfoxf3jwo8ex` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKom9su2loms1fxtaf5phpuvkf1` FOREIGN KEY (`pharmacist_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (2,50,50,'2023-09-27 10:00:00.000000','Consultation fee','2023-09-27','Pending',100,'2023-09-27 10:00:00.000000',13,8,14,'123 Elm Street','john.doe@example.com','John Doe',1234567890),(3,50,50,'2023-09-27 10:00:00.000000','Consultation fee','2023-09-27','Pending',100,'2023-09-27 10:00:00.000000',13,8,14,'123 Elm Street','john.doe@example.com','John Doe',1234567890),(4,100,100,'2023-09-27 10:00:00.000000','Consultation fee','2023-09-27','Pending',200,'2023-09-27 10:00:00.000000',13,8,14,'123 Street','john@example.com','John',1234567),(6,100,100,'2023-09-27 10:00:00.000000','Consultation fee','2023-09-27','Pending',200,'2023-09-27 10:00:00.000000',13,8,14,'123 Street','john@example.com','John',1234567),(7,213,0,NULL,'123','2024-09-30','Paid',0,NULL,NULL,NULL,NULL,'Gorib','Gorib','OMG',123),(8,40,0,NULL,'qwe','2024-09-30','Paid',40,NULL,NULL,NULL,NULL,'123','rezvi@gmail.com','Final',123),(9,1039,0,NULL,'Okay','2024-10-01','Paid',1039,NULL,NULL,NULL,NULL,'Azimpur, Dhaka','raj@gmail.com','Raju A',1726394),(10,55,0,NULL,NULL,'2024-10-01','Paid',55,NULL,NULL,NULL,NULL,'House-50, Block-D, East Adalot Para, Tangail.','admin@gmail.com','Rezvi',987654321),(11,65,0,NULL,'gg','2024-10-02','Paid',65,NULL,NULL,NULL,NULL,'Azimpur','rezvi@mail.com','rezvi',1521417316);
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills_medicine_list`
--

DROP TABLE IF EXISTS `bills_medicine_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills_medicine_list` (
  `bill_id` bigint NOT NULL,
  `medicine_list_id` bigint NOT NULL,
  KEY `FKdg3q17tvbw25smuekdm8ricu` (`medicine_list_id`),
  KEY `FKhyr7bm7y36mfxi3jakqfcw02i` (`bill_id`),
  CONSTRAINT `FKdg3q17tvbw25smuekdm8ricu` FOREIGN KEY (`medicine_list_id`) REFERENCES `medicines` (`id`),
  CONSTRAINT `FKhyr7bm7y36mfxi3jakqfcw02i` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills_medicine_list`
--

LOCK TABLES `bills_medicine_list` WRITE;
/*!40000 ALTER TABLE `bills_medicine_list` DISABLE KEYS */;
INSERT INTO `bills_medicine_list` VALUES (2,1),(2,3),(3,1),(3,3),(4,1),(4,3),(6,1),(6,3),(7,1),(7,5),(8,3),(8,4),(9,3),(9,4),(9,6),(10,3),(10,5),(10,4),(11,4),(11,4),(11,8);
/*!40000 ALTER TABLE `bills_medicine_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'Cardiology Department','Department for heart-related issues'),(2,'Neurology Department','Department for brain and nervous system-related disorders'),(3,'Orthopedics Department','Department for bone and musculoskeletal issues'),(4,'Pediatrics Department','Department for child healthcare and treatment'),(5,'Dermatology Department','Department for skin, hair, and nail disorders'),(6,'Radiology Department','Department for medical imaging and diagnostics'),(7,'Oncology Department','Department for cancer treatment and care'),(8,'Oncology Department','Department for cancer treatment and care');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostics`
--

DROP TABLE IF EXISTS `diagnostics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostics` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `price` int NOT NULL,
  `test_date` datetime(6) DEFAULT NULL,
  `test_result` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsvqrfpgsyk9ldau6sslrfpd1g` (`doctor_id`),
  KEY `FK5i4ajlrsscp591luyt8as3okr` (`patient_id`),
  CONSTRAINT `FK5i4ajlrsscp591luyt8as3okr` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKsvqrfpgsyk9ldau6sslrfpd1g` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostics`
--

LOCK TABLES `diagnostics` WRITE;
/*!40000 ALTER TABLE `diagnostics` DISABLE KEYS */;
/*!40000 ALTER TABLE `diagnostics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manufacturer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'Dhaka City','1234567890','2024-09-23 10:54:41.688632',NULL,'contact@abc.com','ABC Pharmaceuticals','2024-09-23 10:54:41.688632'),(2,'Dhaka City 1','1234567890-1','2024-09-23 10:55:20.657081',NULL,'contact@one.com','One Pharmaceuticals','2024-09-23 11:12:28.644201'),(3,'Dhaka City 2','1234567890-2','2024-09-23 10:56:42.234064',NULL,'contact@two.com','Two Pharmaceuticals','2024-09-23 10:56:42.234064'),(4,'Dhaka City 3','1234567890-3','2024-09-23 10:57:01.034153',NULL,'contact@three.com','Three Pharmaceuticals','2024-09-23 10:57:01.034153'),(5,'Dhaka City 4','1234567890-4','2024-09-23 10:57:20.657155',NULL,'contact@four.com','Four Pharmaceuticals','2024-09-23 10:57:20.657155'),(6,'Dhaka City 5','1234567890-5','2024-09-23 10:57:36.674868','2024-09-23 11:05:49.396905','contact@five.com','Five Pharmaceuticals','2024-09-23 10:57:36.674868'),(7,'Dhaka City 6','1234567890-6','2024-09-23 11:08:44.746292',NULL,'contact@six.com','Six Pharmaceuticals','2024-09-23 11:08:44.746292');
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `dosage_form` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instructions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medicine_strength` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `manufacturer_id` bigint DEFAULT NULL,
  `prescription_id` bigint DEFAULT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtll02mqten1cvmn7wcqpxmwgv` (`manufacturer_id`),
  KEY `FKrqhwsxfcnuyfqxueeitym2t4w` (`prescription_id`),
  CONSTRAINT `FKrqhwsxfcnuyfqxueeitym2t4w` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `FKtll02mqten1cvmn7wcqpxmwgv` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (1,'2024-09-23 10:00:00.000000','Tablet','Take with food','Aspirin - 500mg','500mg',10,'2024-10-02 15:31:30.994044',1,NULL,70),(3,'2024-09-23 11:29:16.979575','Tablet','Take with food','Aspirin - 750mg','750mg',15,'2024-10-01 21:35:02.221715',1,NULL,80),(4,'2024-09-23 11:35:36.948114','Tablet','Take with water','Ibuprofen - 750mg','750mg',30,'2024-10-01 21:33:26.368894',3,NULL,50),(5,'2024-09-23 11:54:33.456660','Tablet','Take with food','Ibuprofen - 250mg','250mg',10,'2024-10-01 21:33:47.615868',3,NULL,35),(6,'2024-09-30 18:41:10.418462','Tablet','Take with water','Aspirin - 100mg','100mg',2,'2024-10-01 21:34:52.154852',4,NULL,100),(7,'2024-09-30 18:41:24.093164','Tablet','Take with water','Ibuprofen - 500mg','500mg',20,'2024-10-01 21:33:01.080098',3,NULL,60),(8,'2024-10-01 21:31:43.114545','Tablet','Take with food','Aspirin - 250mg','250mg',5,NULL,6,NULL,80);
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_change_request`
--

DROP TABLE IF EXISTS `password_change_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_change_request` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `new_password` varchar(255) DEFAULT NULL,
  `old_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_change_request`
--

LOCK TABLES `password_change_request` WRITE;
/*!40000 ALTER TABLE `password_change_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_change_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prescription_date` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2hdpvkpjjx3plf21194oxjskt` (`doctor_id`),
  KEY `FK7sia9wnwh9j5hwrta9k8q0rbq` (`patient_id`),
  CONSTRAINT `FK2hdpvkpjjx3plf21194oxjskt` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK7sia9wnwh9j5hwrta9k8q0rbq` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (1,NULL,'Okay',NULL,NULL,NULL,NULL),(2,'2024-10-02 14:55:59.732961','No notes provided.','2024-10-02 14:55:59.680000','2024-10-02 08:55:59.680000',NULL,NULL);
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `interpretation` varchar(255) DEFAULT NULL,
  `report_name` varchar(255) DEFAULT NULL,
  `report_result` varchar(255) DEFAULT NULL,
  `sample_id` varchar(255) DEFAULT NULL,
  `test_date` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `patient_id` bigint DEFAULT NULL,
  `test_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKw5gnuov3i9we9ksgg1y5bf6s` (`patient_id`),
  KEY `FK5mor7i780j24tchof16xt1ptx` (`test_id`),
  CONSTRAINT `FK5mor7i780j24tchof16xt1ptx` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `FKw5gnuov3i9we9ksgg1y5bf6s` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (3,'2024-09-30 17:31:32.002578','Okay','Normal thyroid function; no signs of hypo- or hyperthyroidism.','Report - Complete Blood Count (CBC)','Result 1 - Red Blood Cell Count (RBC): 5.2 million cells/mcL','S-0091','2024-09-30 11:31:31.991000','2024-09-30 17:31:32.002578',NULL,NULL),(4,'2024-09-30 18:28:33.940812','Okay','Normal thyroid function; no signs of hypo- or hyperthyroidism.','Report - Complete Blood Count (CBC)','Result 1 - Red Blood Cell Count (RBC): 5.2 million cells/mcL','S-009','2024-09-30 12:28:33.881000','2024-09-30 18:28:33.940812',NULL,NULL),(5,'2024-10-01 21:24:00.504590','Total Cholesterol: 220 mg/dL','Normal results; indicates balanced metabolic function.','Report - Basic Metabolic Panel (BMP)','Result 3 - Total Cholesterol: 180 mg/dL','S-008','2024-10-01 15:24:00.477000','2024-10-01 21:24:00.504590',NULL,NULL),(6,'2024-10-01 21:25:59.060110','Glucose & Calcium: Glucose: 90 mg/dL & Calcium: 9.2 mg/dL','Desirable cholesterol levels; good cardiovascular health.','Report - Thyroid Function Tests','Result 6 - Serum Creatinine: 0.7 mg/dL','S-098','2024-10-01 15:25:59.052000','2024-10-01 21:25:59.060110',NULL,NULL),(7,'2024-10-02 15:34:01.412192','Thyroid-Stimulating Hormone (TSH): 1.2 mIU/L Free T4: 1.1 ng/dL Free T3: 3.2 pg/mL','Normal thyroid function; no signs of hypo- or hyperthyroidism.','Report - Basic Metabolic Panel (BMP)','Result 3 - Total Cholesterol: 180 mg/dL','S-008','2024-10-02 09:34:01.358000','2024-10-02 15:34:01.412192',NULL,NULL);
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `instructions` varchar(255) DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `test_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `diagnostics_id` bigint DEFAULT NULL,
  `test_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4j986r6lct28wn79mx7yqgnpa` (`diagnostics_id`),
  KEY `FKay5h2wri4d3obb8ttyrtcydup` (`test_id`),
  CONSTRAINT `FK4j986r6lct28wn79mx7yqgnpa` FOREIGN KEY (`diagnostics_id`) REFERENCES `diagnostics` (`id`),
  CONSTRAINT `FKay5h2wri4d3obb8ttyrtcydup` FOREIGN KEY (`test_id`) REFERENCES `prescriptions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,'2024-09-30 14:25:52.095715','A comprehensive blood test used to evaluate overall health and detect a variety of disorders, including anemia, infection, and leukemia.','Fast for 8 hours before the test.','Red blood cell count, white blood cell count, hemoglobin, hematocrit, platelet count.','Complete Blood Count (CBC)',NULL,NULL,NULL),(2,'2024-10-01 21:15:03.197844','A group of tests that measures different substances in the blood to provide information about the body’s chemical balance and metabolism.','Fast for at least 8 hours before the test.','Glucose, calcium, electrolytes (sodium, potassium, carbon dioxide, chloride), blood urea nitrogen (BUN), creatinine.','Basic Metabolic Panel (BMP)',NULL,NULL,NULL),(3,'2024-10-01 21:15:30.234803','Tests that measure the levels of hormones produced by the thyroid gland to assess its function.','No fasting is required; discuss medications with your doctor.','Thyroid-stimulating hormone (TSH), free T4 (thyroxine), free T3 (triiodothyronine).','Thyroid Function Tests',NULL,NULL,NULL),(4,'2024-10-01 21:16:04.703492','A series of blood tests to assess the health of the liver and diagnose liver diseases.','No specific preparation required, but fasting can be beneficial.','Alanine aminotransferase (ALT), aspartate aminotransferase (AST), alkaline phosphatase (ALP), bilirubin, albumin.','Liver Function Tests (LFT)',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int NOT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `cell` int NOT NULL,
  `doctor_degree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_license` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_speciality` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_degree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_license` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nurse_speciality` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ADMIN','DOCTOR','NURSE','PATIENT','PHARMACIST','RECEPTIONIST','LAB') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  KEY `FKsbg59w8q63i0oo53rlgvlcnjq` (`department_id`),
  CONSTRAINT `FKsbg59w8q63i0oo53rlgvlcnjq` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Azimpur',25,NULL,1521417316,NULL,NULL,NULL,'admin@gmail.com','Male',NULL,'Admin',NULL,NULL,NULL,'$2a$12$RZPNlMTk4yH8BngDSMoQGudJpqQt.rlbh2xPHPv3mPV2Njg.vcA2a','ADMIN',NULL),(2,'Dhaka',26,'2024-09-01 06:00:00.000000',1200000000,NULL,NULL,NULL,'patient@gmail.com','male',NULL,'Patient',NULL,NULL,NULL,'$2a$12$RZPNlMTk4yH8BngDSMoQGudJpqQt.rlbh2xPHPv3mPV2Njg.vcA2a','PATIENT',NULL),(4,'Dhaka',40,'2024-09-03 06:00:00.000000',1478520,'Okay','Okay','Okay','doctor@gmail.com','male',NULL,'Doctor',NULL,NULL,NULL,'$2a$12$RZPNlMTk4yH8BngDSMoQGudJpqQt.rlbh2xPHPv3mPV2Njg.vcA2a','DOCTOR',NULL),(5,'123 Main Street',23,'2024-09-12 06:00:00.000000',123456789,'','','','john.doe@example.com','female',NULL,'John Doe ','','','','$2a$12$J8hvhTiHNzYgsZPQg5eaeOVtayvwgYapjNqLMgUegPc58wqxZxJXW','LAB',NULL),(6,'Dhaka',25,'2024-09-14 06:00:00.000000',1521417316,NULL,NULL,NULL,'rezvi@gmail.com','MALE',NULL,'Rezvi',NULL,NULL,NULL,'$2a$12$eu63e7zdZKSfRRbWz1jDCOWR3k6GNfmz6wrOs2Bjr7ZyxCPL7kVEW','ADMIN',NULL),(7,'House-50, Block-D, East Adalot Para, Tangail.',25,'2024-09-14 06:00:00.000000',1521417316,NULL,NULL,NULL,'rezvi2@gmail.com','MALE','imagesDir/14038fea-9c72-42d9-90e4-1660ab7b5123.jpg','Rezvi',NULL,NULL,NULL,NULL,'PATIENT',NULL),(8,'Azimpur',23,'2024-09-18 06:00:00.000000',1472584444,NULL,NULL,NULL,'test@test.com','male',NULL,'Skip Khan',NULL,NULL,NULL,'$2a$12$uHgF4lY/3eiNEoSHvWPnceM3/4wVO7dv5Xrt2iFBdWSZwK4W6S3Mq','PATIENT',NULL),(9,'123',123,'2024-09-13 06:00:00.000000',1521417316,'123','123','123','rezvi@mail.com','male',NULL,'Mostofa Rezvi',NULL,NULL,NULL,NULL,'DOCTOR',NULL),(10,NULL,123,NULL,1472584444,'1231','123','213','admin34@gmail.com','male','imagesDir/534bea9f-7fc3-439a-beaa-d3d3c468beb5.png','Mostofa Rezvi',NULL,NULL,NULL,'123','DOCTOR',NULL),(11,NULL,0,NULL,1472584444,NULL,NULL,NULL,'admin2342@gmail.com',NULL,NULL,'Mostofa Rezvi',NULL,NULL,NULL,'$2a$12$OWyQM0hwjEbZHpqWCKMiz.IvuqQph8gxODdqyqcigsoAXso3vEUMW','ADMIN',NULL),(12,NULL,0,NULL,0,NULL,NULL,NULL,'adminsadsada@gmail.com',NULL,NULL,'dfgds',NULL,NULL,NULL,'$2a$12$pjm13M3XZ8FOid0c.r/4/OGtVxWERcTyUnpxHR/7yGuoavPGCiKry','ADMIN',NULL),(13,'Dhaka',28,'2024-09-07 06:00:00.000000',1234567890,'1231','123','213','raju@gmail.com','MALE',NULL,'Raju',NULL,NULL,NULL,'$2a$12$W4h3Ue30S4qt4DhxzYGYgOcQ1T.YU.U68g0K01VRvpaDIeFAMOm5W','DOCTOR',NULL),(14,'Azimpur',27,'2024-09-07 06:00:00.000000',1234567888,NULL,NULL,NULL,'pha@gmail.com','male',NULL,'Pharmachist User',NULL,NULL,NULL,'$2a$12$Ea6KtdADhRpoZVDQUfk59.w.AfK2MTXtCXTyisZrW1aVLNUqpqfPm','PHARMACIST',NULL),(15,'Dhaka',27,'2024-09-03 06:00:00.000000',74102589,NULL,NULL,NULL,'recep@gmail.com','female',NULL,'Woman',NULL,NULL,NULL,'$2a$12$yWucB8xPgK1XCs9CJdaC.ekiA41FYpngZbJq2lSDXmalfPopXtmT2','RECEPTIONIST',NULL),(16,'Dhaka.',28,'2024-09-14 06:00:00.000000',147852,NULL,NULL,NULL,'rblannk@gmail.com','MALE',NULL,'R Blannk',NULL,NULL,NULL,'$2a$12$ne8UpaTDtbTiLzcC2t/b3eC9mIVWDpYPTkCuMStkdLUpZ8ZkSL7Qq','LAB',NULL),(17,'Dhaka',25,'2024-09-19 06:00:00.000000',963125,NULL,NULL,NULL,'child@gmail.com','FEMALE',NULL,'CHILD DEVELOPMENT',NULL,NULL,NULL,'$2a$12$qzfH6yvEGUuqGBqc3/lpuOqOsntkSOz4RUlMjAJnvfy2vVDtIdXuW','PATIENT',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-02 16:12:56
