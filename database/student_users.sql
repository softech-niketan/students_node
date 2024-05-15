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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `in_time` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `user_role` varchar(45) DEFAULT NULL,
  `class_name` varchar(255) DEFAULT NULL,
  `total_fees` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'samarth','admin','active','admin@admin.com','13:29:03','02/05/2024','student','abc','10000'),(2,'niketan','admin','active','niketan@admin.com','13:29:03','02/05/2024','admin','abc','10000'),(3,'datta','admin','active','datta@admin.com','13:29:03','02/05/2024','trainer','abc','10000'),(4,'abc','123','active','a@gmail.com','21:24:54','09/05/2024','trainer','abc','10000'),(5,'sss','123','active','a@gmail.com','21:36:19','09/05/2024','student','abc','10000'),(6,'ss','123','active','a@gmail.com','21:36:19','09/05/2024','student','abc','10000'),(7,'dd','qqq','active','hhh@gmail.com','21:36:41','09/05/2024','student','wd','10000'),(8,'lll','qqq','active','klkl@gmail.com','21:36:41','09/05/2024','student','wd','10000'),(9,'mm','123','active','mm@gmail.com','16:28:31','10/05/2024','student',NULL,'10000'),(10,'kk','123','inactive','kk@gmail.com','16:46:11','10/05/2024','student','k','10000'),(11,'sd','123','inactive','sd@gmail.com','16:51:29','10/05/2024','student','k','10000'),(12,'sm','123','inactive','sm@gmail.com','16:54:57','10/05/2024','student','v','10000');
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

-- Dump completed on 2024-05-15 15:58:01
