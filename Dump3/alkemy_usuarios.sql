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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `f_name` varchar(25) DEFAULT NULL,
  `l_name` varchar(25) DEFAULT NULL,
  `dni` int DEFAULT NULL,
  `rol` enum('Teacher','Students','Admin') DEFAULT NULL,
  `create_at` date NOT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (50,'Ricardo','Areiza',9674559,'Students','2021-03-15',_binary '','$2a$10$Sx3KHjauh9sQsZy7YN3WtuLxUzAYGiLtLoVPnSbuBiAv197FvjZby','raaz','ricardo.areiza.01@gmail.com'),(51,'Alkemy','App',1234567,'Teacher','2021-03-28',_binary '',NULL,NULL,NULL),(52,'Alkemy2','App2',7654321,'Teacher','2021-03-28',_binary '',NULL,NULL,NULL),(53,'Alkemy3','App3',98765,'Teacher','2021-03-28',_binary '\0',NULL,NULL,NULL),(54,'Diego','Areiza',56564567,'Students','2021-03-28',_binary '','$2a$10$SZy6Jnx5k8bxcBpytITeXO4h3DB2jtlFX0.G/UU/fsrNBbBk0GYui','56564567','diego.areiza.01@gmail.com'),(56,'elvis','Areiza',67163818,'Students','2021-03-28',_binary '','$2a$10$8tEwIEj27Ipj1r.112VjL.gHJ89K3K.xs4aFRi6Iguz65yV9yQk7i','67163818','elvis.areiza.01@gmail.com'),(57,'Antonio','Alfonso',12675317,'Students','2021-03-28',_binary '','$2a$10$svZCSBt.w/yhnPOKJd//QOLdNXuSK1uVrKhEwLOAnKWbdoVW3I2zS','12675317','antonio.alfonso.01@gmail.com'),(58,'Derek','Martinez',457567,'Students','2021-03-28',_binary '','$2a$10$w1xDAf5YFA4B9Xer7KedOORQrH4Rb5krUfM.IsiAPZutOpITnGfru','457567','derek.martinez.01@gmail.com'),(59,'Alkemy','App',45678436,'Admin','2021-03-28',_binary '','$2a$10$RSnE.asowkzweV92bD6oceXDqUsIrlQ5HQt5CQO/wuYiX.OkQjplm','admin','alkemy@gmail.com');
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

-- Dump completed on 2021-03-28 20:12:20
