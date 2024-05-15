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
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `batch_name` varchar(45) DEFAULT NULL,
  `batch_type` varchar(45) DEFAULT NULL,
  `batch_status` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `in_time` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `trainer_name` varchar(45) DEFAULT NULL,
  `start_time` varchar(45) DEFAULT NULL,
  `end_time` varchar(45) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
INSERT INTO `batches` VALUES (1,'batch1','offline','active','dd','19:07:29','28/04/2024','abc','15:04','16:04','4'),(2,'batch2','online','active','task related','15:03:54','29/04/2024','abc','16:04','17:04','3'),(3,'batch3','online','active','task relat123','18:32:35','29/04/2024','skaml','18:33','19:33','3'),(4,'batch4','offline','active','taskk','18:50:03','29/04/2024','new','18:50','19:50','3'),(5,'batch5','offline','active','task related','23:03:24','03/05/2024','datta','01:03','03:03','3'),(6,'batch6','online','active','taskk','12:07:51','04/05/2024','datta','12:08','13:08','3'),(7,'batch7','online','active','task related','12:11:53','04/05/2024','datta','12:12','13:13','3'),(8,'batch8','online','active','mm','15:36:01','09/05/2024','datta','16:36','17:36','3'),(9,'batch9','offline','active','ks','15:37:05','09/05/2024','datta','16:37','17:37','3'),(10,'batch10','online','active','jd','15:42:45','09/05/2024','datta','15:43','16:43','3'),(11,'batch11','online','active','np','15:43:11','09/05/2024','datta','15:43','16:43','3'),(12,'batch12','online','active','kjj','15:44:02','09/05/2024','datta','15:44','16:44','3'),(13,'batch13','online','active','kktt','15:44:35','09/05/2024','datta','15:44','16:44','3'),(14,'batch14','online','active','wk','15:45:01','09/05/2024','datta','15:45','16:45','3'),(15,'batch15','offline','active','ood','15:45:28','09/05/2024','datta','15:45','16:45','3'),(16,'batch16','offline','active','fmf','11:34:54','10/05/2024','datta','11:35','12:35','3');
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
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
