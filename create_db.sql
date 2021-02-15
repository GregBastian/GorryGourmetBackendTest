-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: node_js_gorry_ticket
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `ticket_event`
--

DROP TABLE IF EXISTS `ticket_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_event` (
  `_id` char(128) NOT NULL,
  `event_name` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_event`
--

LOCK TABLES `ticket_event` WRITE;
/*!40000 ALTER TABLE `ticket_event` DISABLE KEYS */;
INSERT INTO `ticket_event` VALUES ('213d217d-6f6e-11eb-9f84-94e6f76c795a','DWP','Jakarta','2016-08-20 00:00:00','2016-08-21 00:00:00'),('8f88eddf-6f5e-11eb-9f84-94e6f76c795a','SWP','Semarang','2016-01-01 00:00:00','2016-02-01 00:00:00');
/*!40000 ALTER TABLE `ticket_event` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER init_uuid_ticket_event BEFORE INSERT ON ticket_event
  FOR EACH ROW SET NEW._id = UUID() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ticket_for_event`
--

DROP TABLE IF EXISTS `ticket_for_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_for_event` (
  `_id` char(128) NOT NULL,
  `event_id` char(128) NOT NULL,
  `event_name` varchar(45) DEFAULT NULL,
  `ticket_type` varchar(45) NOT NULL,
  `ticket_quota` int(11) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp(),
  `date_last_updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`_id`),
  CONSTRAINT `ticket_quota_check` CHECK (`ticket_quota` >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_for_event`
--

LOCK TABLES `ticket_for_event` WRITE;
/*!40000 ALTER TABLE `ticket_for_event` DISABLE KEYS */;
INSERT INTO `ticket_for_event` VALUES ('4845e473-6f6e-11eb-9f84-94e6f76c795a','213d217d-6f6e-11eb-9f84-94e6f76c795a','DWP','Platinum',100,'2021-02-15 16:15:02','2021-02-15 16:15:02'),('48462ca6-6f6e-11eb-9f84-94e6f76c795a','213d217d-6f6e-11eb-9f84-94e6f76c795a','DWP','Gold',200,'2021-02-15 16:15:02','2021-02-15 16:15:02'),('93e38c63-6ecf-11eb-9f84-94e6f76c795a','31a2b1ee-6e23-11eb-9f84-94e6f76c795a','SWP','Diamond',94,'2021-02-14 23:26:31','2021-02-15 16:16:29'),('93e46aff-6ecf-11eb-9f84-94e6f76c795a','31a2b1ee-6e23-11eb-9f84-94e6f76c795a','SWP','Gold',147,'2021-02-14 23:26:31','2021-02-15 16:16:29');
/*!40000 ALTER TABLE `ticket_for_event` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER init_uuid_ticket_for_event BEFORE INSERT ON ticket_for_event
  FOR EACH ROW SET NEW._id = UUID() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER quota_trigger
  BEFORE UPDATE
  ON ticket_for_event
  FOR EACH ROW
BEGIN
  IF NEW.ticket_quota<0 THEN
    CALL `Error Quota not enough`; -- this trick will throw an error
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ticket_location`
--

DROP TABLE IF EXISTS `ticket_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_location` (
  `_id` char(128) NOT NULL,
  `event_id` char(128) NOT NULL,
  `event_name` varchar(45) DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `location` (`location`),
  UNIQUE KEY `location_2` (`location`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_location`
--

LOCK TABLES `ticket_location` WRITE;
/*!40000 ALTER TABLE `ticket_location` DISABLE KEYS */;
INSERT INTO `ticket_location` VALUES ('2828a63f-6f6e-11eb-9f84-94e6f76c795a','31a2b1ee-6e23-11eb-9f84-94e6f76c795a',NULL,'Jakarta'),('b9f4ca84-6e09-11eb-9f84-94e6f76c795a','','','JAKARTAD'),('c6dde14d-6e9e-11eb-9f84-94e6f76c795a','31a2b1ee-6e23-11eb-9f84-94e6f76c795a',NULL,'Semarang');
/*!40000 ALTER TABLE `ticket_location` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER init_uuid_location BEFORE INSERT ON ticket_location
  FOR EACH ROW SET NEW._id = UUID() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ticket_transaction`
--

DROP TABLE IF EXISTS `ticket_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket_transaction` (
  `_id` char(128) NOT NULL,
  `transaction_id` char(128) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `event_id` char(128) NOT NULL,
  `event_name` varchar(45) DEFAULT NULL,
  `transaction_date` datetime NOT NULL DEFAULT current_timestamp(),
  `ticket_id` varchar(128) NOT NULL,
  `ticket_type` varchar(45) NOT NULL,
  `ticket_amount` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_transaction`
--

LOCK TABLES `ticket_transaction` WRITE;
/*!40000 ALTER TABLE `ticket_transaction` DISABLE KEYS */;
INSERT INTO `ticket_transaction` VALUES ('7c45b2c4-6f6e-11eb-9f84-94e6f76c795a','994ca5b8-00e2-479d-9a98-76f8c927105b','082122003300','31a2b1ee-6e23-11eb-9f84-94e6f76c795a','SWP','2021-02-15 16:16:29','93e38c63-6ecf-11eb-9f84-94e6f76c795a','Diamond','2'),('7c4651c1-6f6e-11eb-9f84-94e6f76c795a','994ca5b8-00e2-479d-9a98-76f8c927105b','082122003300','31a2b1ee-6e23-11eb-9f84-94e6f76c795a','SWP','2021-02-15 16:16:29','93e46aff-6ecf-11eb-9f84-94e6f76c795a','Gold','1');
/*!40000 ALTER TABLE `ticket_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER init_uuid_ticket_for_transaction BEFORE INSERT ON ticket_transaction
  FOR EACH ROW SET NEW._id = UUID() */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'node_js_gorry_ticket'
--

--
-- Dumping routines for database 'node_js_gorry_ticket'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-15 16:49:51
