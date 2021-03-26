-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alkemy
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL,
  `f_name` varchar(25) DEFAULT NULL,
  `l_name` varchar(25) DEFAULT NULL,
  `dni` int DEFAULT NULL,
  `rol` enum('Teacher','Students','Admin') DEFAULT NULL,
  `create_at` date NOT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Ricardo','Areiza',96093247,'Admin','2021-03-15',NULL,NULL,NULL,NULL),(3,'Antonio','Pinango',96094681,'Students','2021-03-16',NULL,NULL,NULL,NULL),(4,'Elvis','Areiza',96970581,'Teacher','2021-03-16',NULL,NULL,NULL,NULL),(5,'Yala','Tobosa',95969785,'Teacher','2021-03-16',NULL,NULL,NULL,NULL),(6,'Camila','Tobosa',98595621,'Students','2021-03-16',NULL,NULL,NULL,NULL),(7,'Diego','Areiza',30845215,'Students','2021-03-16',NULL,NULL,NULL,NULL),(8,'Derek','Martinez',38542596,'Admin','2021-03-16',NULL,NULL,NULL,NULL),(10,'Ricardo',NULL,NULL,NULL,'2021-03-19',NULL,NULL,NULL,NULL),(11,'Ricardo','Areiza',57532487,'Teacher','2021-03-19',NULL,NULL,NULL,NULL),(15,'Antonio ','Pinango',96587456,'Teacher','2021-03-19',NULL,NULL,NULL,NULL),(18,'elvis','areiza',95,'Admin','2021-03-20',NULL,NULL,NULL,NULL),(19,'Derek','Martinez',95468264,'Teacher','2021-03-20',NULL,NULL,NULL,NULL),(20,'prueba','prueba',45,'Admin','2021-03-20',NULL,NULL,NULL,NULL),(21,'elvis','areiza',95969786,'Teacher','2021-03-21',_binary '','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','admin',NULL),(22,'diego','areiza',95969788,'Teacher','2021-03-21',_binary '','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','diego',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-26 14:42:46
