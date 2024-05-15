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
-- Table structure for table `students_assignment`
--

DROP TABLE IF EXISTS `students_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_assignment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assignment_name` varchar(45) DEFAULT NULL,
  `batch_name` varchar(45) DEFAULT NULL,
  `upload_url` varchar(1000) DEFAULT NULL,
  `assignment_description` varchar(45) DEFAULT NULL,
  `create_time` varchar(45) DEFAULT NULL,
  `create_date` varchar(45) DEFAULT NULL,
  `trainer_name` varchar(45) DEFAULT NULL,
  `student_name` varchar(100) DEFAULT NULL,
  `trainer_remark` varchar(45) DEFAULT NULL,
  `remark_description` varchar(45) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_assignment`
--

LOCK TABLES `students_assignment` WRITE;
/*!40000 ALTER TABLE `students_assignment` DISABLE KEYS */;
INSERT INTO `students_assignment` VALUES (1,'v1','batch1','http://localhost:3000/addStudentsAssignment/5','text assi','14:32:20','07/05/2024','new','samarth','complete','good','3'),(2,'v2','batch2','http://localhost:8080/uploads/user_file-1714311472365.jpg','text ','14:33:13','07/05/2024','skaml','samarth','pending','Add json ','3'),(3,'v3','batch3','http://localhost:3000/addStudentsAssignment','text assign','14:33:20','07/05/2024','datta','samarth','notcheck','not check','3'),(4,'v2','batch2','http://localhost:3000/addStudentsAssignment','ass1','11:50:47','08/05/2024','skaml','samarth','notcheck','not check','3'),(5,'v3','batch3','http://localhost:3000/addStudentsAssignment/5','qlk','11:51:00','08/05/2024','datta','samarth','notcheck','not check','3'),(6,'v4','batch6','http://localhost:3000/addStudentsAssignment/1','mnl','11:51:11','08/05/2024','datta','samarth','notcheck','not check','1'),(7,'v5','batch7','http://localhost:8080/uploads/user_file-1714311472365.jpg','qwe','11:51:22','08/05/2024','datta','samarth','notcheck','not check','1'),(8,'v1','batch1','http://localhost:8080/uploads/user_file-1714311472365.jpg','hgg','11:51:37','08/05/2024','new','samarth','notcheck','not check','1'),(9,'v2','batch2','http://localhost:3000/addStudentsAssignment','llaa','11:51:47','08/05/2024','skaml','samarth','notcheck','not check','1'),(10,'v4','batch6','http://localhost:8080/uploads/user_file-1714311472365.jpg','ews','11:51:54','08/05/2024','datta','samarth','notcheck','not check','1'),(11,'v5','batch7','http://localhost:8080/uploads/user_file-1714311472365.jpg','ppll','11:52:02','08/05/2024','datta','samarth','notcheck','not check','1'),(12,'v1','batch1','http://localhost:8080/uploads/user_file-1714311472365.jpg','rjd','11:52:12','08/05/2024','datta','samarth','notcheck','not check','1'),(13,'v2','batch2','http://localhost:3000/addStudentsAssignment123','qld','11:52:27','08/05/2024','skaml','samarth','notcheck','not check','1'),(14,'v2','batch2','http://localhost:3000/addStudentsAssignment123','pf','11:52:36','08/05/2024','skaml','samarth','notcheck','not check','1'),(15,'v3','batch3','http://localhost:3000/addStudentsAssignment/5','ls','11:52:42','08/05/2024','datta','samarth','notcheck','not check','1'),(16,'v4','batch6','http://localhost:3000/addStudentsAssignment/1','eff','11:52:48','08/05/2024','datta','samarth','notcheck','not check','1'),(17,'v5','batch7','http://localhost:3000/addStudentsAssignment/5','fkf','11:53:06','08/05/2024','datta','samarth','notcheck','not check','1'),(18,'v5','batch7','http://localhost:3000/addStudentsAssignment123','ww','11:53:14','08/05/2024','datta','samarth','notcheck','not check','1'),(19,'v5','batch7','http://localhost:3000/addStudentsAssignment123','ww','11:53:14','08/05/2024','datta','samarth','notcheck','not check','1'),(20,'v2','batch2','http://localhost:3000/addStudentsAssignment','lww','11:53:22','08/05/2024','skaml','samarth','notcheck','not check','1'),(21,'v5','batch7','http://localhost:3000/addStudentsAssignment123','opop','11:53:31','08/05/2024','datta','samarth','notcheck','not check','1'),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(23,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(24,'L2','batch9','http://localhost:3000/addStudentsAssignment123','text ','15:35:33','10/05/2024','datta','samarth','notcheck','null','1');
/*!40000 ALTER TABLE `students_assignment` ENABLE KEYS */;
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
