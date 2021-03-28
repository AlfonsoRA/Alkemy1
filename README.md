# Alkemy

Este archivo describe la funcionalidad de la aplicacion AlkemyApp, const de dos aplicativos el frontEnd fue desrrollado en angular y el backEnd en SpringBoot, la seguridad se maneja con configuraciones por medio de tokens con JWT, la base de datos esta en MySQL. 

Endpoint para obtener el token del backend
	
	Metodo POST
		http://localhost:8080/oauth/token


	Authorization 
		username: angularapp
		password: 12345

	Body
		username: admin
		password: 12345
		grant_type: password

Endpoint para encriptacion de contraseñas (Las contraseñas estan cifradas con BCryptPasswordEncoder)
	localhost:8080/api/encriptacion/{password}

Los roles de Usuario que maneja el aplicativo son 
	ROLE_ADMIN 	(Lo utiliza el usuario administrador, tienen acceso a los modulos de materias y profesor)
	ROLE_USER 	(Lo utiliza el usuario alumnos , tienen acceso a los modulos de materias y a inscripcion)

Se cuenta con los script para la creacion e insert en la base de datos en la carpeta dump3 colococada en la raiz del proyecto

Los alumnos acceden con el DNI y Password es el DNI, hay 5 usaurios con rol estdiante

Hay un usuario admin, con clave 12345

Los alumnos 

SEGURIDAD
Si un usuario intenta acceder a alguna url  de la plataforma se redirige al login, se utilizaron interceptors en el aplicativo por medio de guards y roles, validacion de de token y authenticacion.

En el aplicativo Bakend se configura el authenticationManager, authorizationServerConfig, ResourceServerConfig y la anotacion Secured para la seguridd de recurso y endpoints

Bonus

Las materias estan ordenadas alfabeticamente utilizando query method de spring DATA.
	public interface IMateriaRepository extends JpaRepository<Materia, Long>{

		public List<Materia> findByOrderByNombreAsc();
		
	}

La lista de materias muestra la cantidad de cupos disponibles al renderizarse en la aplicacion alkemyApp(Angular)

En la inscripcion de materias no se permite que se inscriban en dos materias que se dictan en el mismo horario, el metodo que realiza la validacion se encuentra en el IncripcionController el siguiente metodo

	--> public boolean validacionMaterias(Usuario usuario, Inscripcion inscripcion).



Base de DATOS

DROP TABLE IF EXISTS `inscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscriptions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `subject_id` bigint NOT NULL,
  `create_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsubjectinscripcion` (`subject_id`),
  KEY `FKuserinscripcion` (`user_id`),
  CONSTRAINT `FKsubjectinscripcion` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  CONSTRAINT `FKuserinscripcion` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `inscriptions`
--
LOCK TABLES `inscriptions` WRITE;
/*!40000 ALTER TABLE `inscriptions` DISABLE KEYS */;
INSERT INTO `inscriptions` VALUES (7,50,17,'2021-03-28'),(8,50,21,'2021-03-28'),(9,50,20,'2021-03-28');
/*!40000 ALTER TABLE `inscriptions` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
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



DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `f_name` varchar(25) DEFAULT NULL,
  `create_at` date NOT NULL,
  `max_student` int DEFAULT NULL,
  `schedule` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dayweek` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhorariomateria` (`schedule`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `subjects`
--
LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (17,'Catellano1','2021-03-28',30,'11:00:00','Materia de Castellano','Martes'),(18,'Ingles','2021-03-28',0,'10:00:00','materia Ingles','Lunes'),(20,'quimica','2021-03-28',23,'19:00:00','materia quimica','Miercoles'),(21,'Ciencias','2021-03-28',4,'20:00:00','materia de inscripciones','Jueves'),(22,'Sociales','2021-03-28',2,'18:00:00','Sociales Politicas','Viernes'),(23,'Física','2021-03-28',6,'18:00:00','Física','Viernes');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;



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




DROP TABLE IF EXISTS `usuarios_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_roles` (
  `usuario_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
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
INSERT INTO `usuarios_roles` VALUES (50,1),(54,1),(56,1),(57,1),(58,1),(59,2);
/*!40000 ALTER TABLE `usuarios_roles` ENABLE KEYS */;
UNLOCK TABLES;