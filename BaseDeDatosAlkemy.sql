CREATE DATABASE  IF NOT EXISTS `alkemy` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `alkemy`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alkemy
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `create_at` date NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `nombre` varchar(12) NOT NULL,
  `region_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_1c96wv36rk2hwui7qhjks3mvg` (`email`),
  KEY `FKf1kwxd4whuje3nv9yxddld4c3` (`region_id`),
  CONSTRAINT `FKf1kwxd4whuje3nv9yxddld4c3` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (13,'Tobosa','ytobosa@gmail.com','1989-12-15',NULL,'Yalaury ',2),(15,'Moreno','kattymore2@gmail.com','2001-01-01',NULL,'Katty',NULL),(16,'Areiza','dirielfran@gmail.com','1982-10-14','d36a930f-33b7-4048-a433-ebb58c7af7d8_rueba.png','Elvis',NULL),(17,'Holguin','jevita267@gmail.com','1940-01-01',NULL,'Marcos ',NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regiones`
--

DROP TABLE IF EXISTS `regiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `regiones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regiones`
--

LOCK TABLES `regiones` WRITE;
/*!40000 ALTER TABLE `regiones` DISABLE KEYS */;
INSERT INTO `regiones` VALUES (1,'Sudamérica'),(2,'Centroamérica'),(3,'Norteamérica'),(4,'Europa'),(5,'Asia'),(6,'Africa'),(7,'Oceanía'),(8,'Antártida');
/*!40000 ALTER TABLE `regiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ldv0v52e0udsh2h1rs0r0gw1n` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (2,'ROLE_ADMIN'),(1,'ROLE_USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hour` time NOT NULL,
  `date` date NOT NULL,
  `id_subjects` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (1,'11:30:00','2020-12-27',1);
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subjects` (
  `id` bigint(20) NOT NULL,
  `f_name` varchar(25) DEFAULT NULL,
  `horario` varchar(25) DEFAULT NULL,
  `create_at` date NOT NULL,
  `max_student` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'Matematica','Jueves 09:00 - 10:00 hrs','2021-03-16',15,'Ciencia deductiva, la cual se encarga del estudio de las propiedades de los entes abstractos así como de las conexiones y relaciones que existen entre ellos.'),(2,'Castellano',NULL,'2021-03-16',29,'Conocimiento de la lengua española en forma oral y escrita para que la persona maneje el vocabulario, la sintaxis y la gramática.'),(4,'Geografía General',NULL,'2021-03-15',30,'Ciencia que estudia y describe la Tierra y señala las características y la localización de los sistemas y elementos que aparecen en su superficie.'),(9,'Sociales',NULL,'2021-03-19',15,'Las ciencias sociales son el conjunto de disciplinas que se encargan de estudiar, de forma sistemática, los procesos sociales y culturales que son producto de la actividad del ser humano y de su relación con la sociedad.');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_subjects`
--

DROP TABLE IF EXISTS `users_subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_subjects` (
  `user_id` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL,
  KEY `FKsubject123` (`subject_id`),
  KEY `FKuserId4444` (`user_id`),
  CONSTRAINT `FKsubjectId333` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `FKuserId4444` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_subjects`
--

LOCK TABLES `users_subjects` WRITE;
/*!40000 ALTER TABLE `users_subjects` DISABLE KEYS */;
INSERT INTO `users_subjects` VALUES (22,1);
/*!40000 ALTER TABLE `users_subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `f_name` varchar(25) DEFAULT NULL,
  `l_name` varchar(25) DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `rol` enum('Teacher','Students','Admin') DEFAULT NULL,
  `create_at` date NOT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Ricardo','Areiza',96093247,'Admin','2021-03-15',NULL,NULL,NULL,NULL),(3,'Antonio','Pinango',96094681,'Students','2021-03-16',NULL,NULL,NULL,NULL),(4,'Elvis','Areiza',96970581,'Teacher','2021-03-16',NULL,NULL,NULL,NULL),(5,'Yala','Tobosa',95969785,'Teacher','2021-03-16',NULL,NULL,NULL,NULL),(6,'Camila','Tobosa',98595621,'Students','2021-03-16',NULL,NULL,NULL,NULL),(7,'Diego','Areiza',30845215,'Students','2021-03-16',NULL,NULL,NULL,NULL),(8,'Derek','Martinez',38542596,'Admin','2021-03-16',NULL,NULL,NULL,NULL),(10,'Ricardo',NULL,NULL,NULL,'2021-03-19',NULL,NULL,NULL,NULL),(11,'Ricardo','Areiza',57532487,'Teacher','2021-03-19',NULL,NULL,NULL,NULL),(15,'Antonio ','Pinango',96587456,'Teacher','2021-03-19',NULL,NULL,NULL,NULL),(18,'elvis','areiza',95,'Admin','2021-03-20',NULL,NULL,NULL,NULL),(19,'Derek','Martinez',95468264,'Teacher','2021-03-20',NULL,NULL,NULL,NULL),(20,'prueba','prueba',45,'Admin','2021-03-20',NULL,NULL,NULL,NULL),(21,'elvis','areiza',95969786,'Teacher','2021-03-21','','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','admin',NULL),(22,'diego','areiza',95969788,'Teacher','2021-03-21','','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','diego',NULL),(32,'elvilucho','areiza',44514,'Teacher','2021-03-21','','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','derek',NULL),(35,'elvilucho','areiza',445145,'Teacher','2021-03-21','','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','derek1',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_roles`
--

DROP TABLE IF EXISTS `usuarios_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_roles` (
  `usuario_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  UNIQUE KEY `UKqjaspm7473pnu9y4jxhrds8r2` (`usuario_id`,`role_id`),
  KEY `FKihom0uklpkfpffipxpoyf7b74` (`role_id`),
  CONSTRAINT `FKihom0uklpkfpffipxpoyf7b74` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKqcxu02bqipxpr7cjyj9dmhwec` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_roles`
--

LOCK TABLES `usuarios_roles` WRITE;
/*!40000 ALTER TABLE `usuarios_roles` DISABLE KEYS */;
INSERT INTO `usuarios_roles` VALUES (22,1),(35,1),(21,2);
/*!40000 ALTER TABLE `usuarios_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-28 13:23:19
