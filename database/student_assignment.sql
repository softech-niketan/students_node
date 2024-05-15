-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assignment_name` varchar(45) DEFAULT NULL,
  `batch_name` varchar(45) DEFAULT NULL,
  `batch_status` varchar(45) DEFAULT NULL,
  `assignment_description` varchar(45) DEFAULT NULL,
  `create_time` varchar(45) DEFAULT NULL,
  `create_date` varchar(45) DEFAULT NULL,
  `trainer_name` varchar(45) DEFAULT NULL,
  `start_date` varchar(45) DEFAULT NULL,
  `end_date` varchar(45) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,'v1','batch1','active','text','19:07:29','28/04/2024','new','2024-04-29','2024-05-02','8'),(2,'v2','batch2','active','text assignment','23:24:58','29/04/2024','skaml','2024-04-29','2024-05-02','9'),(3,'v3','batch3','active','text ','23:27:14','03/05/2024','datta','2024-05-03','2024-05-04','3'),(4,'v4','batch6','active','text assi','12:08:21','04/05/2024','datta','2024-05-04','2024-05-08','3'),(5,'v5','batch7','active','text assi','12:12:24','04/05/2024','datta','2024-05-04','2024-05-05','3'),(6,'v1','batch1','active','full','14:31:16','07/05/2024','datta','2024-05-07','2024-05-09','3'),(7,'v3','batch2','active','bn','14:28:46','09/05/2024','datta','2024-05-09','2024-05-10','3'),(8,'v10','batch5','active','wdd','14:29:12','09/05/2024','datta','2024-05-09','2024-05-10','3'),(9,'v11','batch1','active','mkk','14:29:41','09/05/2024','datta','2024-05-09','2024-05-10','3'),(10,'v12','batch1','active','lls','14:30:03','09/05/2024','datta','2024-05-09','2024-05-11','3'),(11,'v13','batch4','active','mrr','14:30:26','09/05/2024','datta','2024-05-09','2024-05-11','3'),(12,'c1','batch4','active','sdds','14:30:57','09/05/2024','datta','2024-05-09','2024-05-10','3'),(13,'c2','batch5','active','kkd','14:31:17','09/05/2024','datta','2024-05-08','2024-05-10','3'),(14,'c4','batch5','active','tr','14:31:43','09/05/2024','datta','2024-05-09','2024-05-11','3'),(15,'c5','batch5','active','tt','14:32:05','09/05/2024','datta','2024-05-09','2024-05-10','3'),(16,'c6','batch6','active','itt','14:32:28','09/05/2024','datta','2024-05-09','2024-05-10','3'),(17,'c6','batch6','active','jj','14:32:50','09/05/2024','datta','2024-05-09','2024-05-11','3'),(18,'c7','batch7','active','mrr','14:33:15','09/05/2024','datta','2024-05-09','2024-05-11','3'),(19,'c8','batch1','active','er','14:33:44','09/05/2024','datta','2024-05-09','2024-05-10','3'),(20,'d1','batch3','active','dj','14:34:04','09/05/2024','datta','2024-05-09','2024-05-10','3'),(21,'d2','batch5','active','jh','14:34:22','09/05/2024','datta','2024-05-09','2024-05-19','3'),(22,'c3','batch5','active','jh','14:34:22','09/05/2024','datta','2024-05-09','2024-05-19','3'),(23,'L1','batch13','active','dkd','11:25:01','10/05/2024','datta','2024-05-10','2024-05-10','3'),(24,'L2','batch9','active','jj','11:27:33','10/05/2024','datta','2024-05-10','2024-05-11','3');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15 15:58:01
