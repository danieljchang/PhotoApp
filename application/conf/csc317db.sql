-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` longtext NOT NULL,
  `fk_authorid` int NOT NULL,
  `fk_postid` int NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `key_toposttable_idx` (`fk_postid`),
  KEY `key_tousertable_idx` (`fk_authorid`),
  CONSTRAINT `key_toposttable` FOREIGN KEY (`fk_postid`) REFERENCES `posts` (`id`),
  CONSTRAINT `key_tousertable` FOREIGN KEY (`fk_authorid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (3,'this is a test',1,10,'2021-08-04 14:10:09'),(4,'hello',1,10,'2021-08-04 16:09:41'),(5,'asdasdaw',1,10,'2021-08-04 16:19:31'),(6,'asdaw',1,10,'2021-08-04 16:22:09'),(7,'asdaw',1,10,'2021-08-04 16:22:46'),(8,'asdaw',1,10,'2021-08-04 16:22:47'),(9,'asdaw',1,10,'2021-08-04 16:22:47'),(10,'adwdasdas',1,10,'2021-08-04 16:25:13'),(11,'asdawdas',1,11,'2021-08-04 16:55:49'),(12,'comment',1,18,'2021-08-04 17:35:27'),(13,'this is a comment\n',1,18,'2021-08-04 17:36:23'),(14,'this is a comment\nwhy',1,18,'2021-08-04 17:36:27'),(15,'I am typing a comment here and this will continue to be typing a comment and auto correct just saved me twice. Why is autocorrect auto-correcting shouldn\'t it just be telling me that I have an error. Wow-what a nice waterfall. I wonder who took that picture\n',1,18,'2021-08-04 17:37:22'),(16,'commet\n',1,18,'2021-08-04 17:41:31');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(4096) NOT NULL,
  `photopath` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  `fk_userid` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `posts to users_idx` (`fk_userid`),
  CONSTRAINT `posts to users` FOREIGN KEY (`fk_userid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (10,'asdas','asdas','public\\images\\uploads\\165b37448e6c7ede10e4757817fa84b9335fb260e8ee.jpeg','public/images/uploads/thumbnail-165b37448e6c7ede10e4757817fa84b9335fb260e8ee.jpeg',0,'2021-08-02 22:28:21',1),(11,'hellowwork','2312315412','public\\images\\uploads\\00f01dfa4d97f741e504b0cd63b4079f12bb6f57f066.jpeg','public/images/uploads/thumbnail-00f01dfa4d97f741e504b0cd63b4079f12bb6f57f066.jpeg',0,'2021-08-03 18:30:17',1),(12,'test','test','public\\images\\uploads\\90fd88c774e2c902a84ab6c4fcc94b1aa3fa39e531f9.jpeg','public/images/uploads/thumbnail-90fd88c774e2c902a84ab6c4fcc94b1aa3fa39e531f9.jpeg',0,'2021-08-03 18:30:37',1),(13,'test','2312315412','public\\images\\uploads\\fdf4d6368160ff30236c1a29d9964d05865f4bf38562.jpeg','public/images/uploads/thumbnail-fdf4d6368160ff30236c1a29d9964d05865f4bf38562.jpeg',0,'2021-08-04 13:57:06',1),(14,'tes1','i wanmt candy','public\\images\\uploads\\41097613f34c5e34da14886d178179572d962da2d7e3.jpeg','public/images/uploads/thumbnail-41097613f34c5e34da14886d178179572d962da2d7e3.jpeg',0,'2021-08-04 13:57:26',1),(15,'test','s','public\\images\\uploads\\97133f92486965246d80145bc4788879d47fccccc50a.jpeg','public/images/uploads/thumbnail-97133f92486965246d80145bc4788879d47fccccc50a.jpeg',0,'2021-08-04 13:57:43',1),(16,'falls','fall','public\\images\\uploads\\e57a3b558a64558ebd24993cd114a44a173abf0d65d4.jpeg','public/images/uploads/thumbnail-e57a3b558a64558ebd24993cd114a44a173abf0d65d4.jpeg',0,'2021-08-04 13:58:04',1),(17,'shasta','shasta','public\\images\\uploads\\0b767436edf8eac37d7c9ec0b9e5aecfaa99582d4597.jpeg','public/images/uploads/thumbnail-0b767436edf8eac37d7c9ec0b9e5aecfaa99582d4597.jpeg',0,'2021-08-04 13:58:34',1),(18,'awdsadwadsd','dasdawdasdaw','public\\images\\uploads\\53159db47a7668aab0e03339d97bf2ff1106965b50ff.jpeg','public/images/uploads/thumbnail-53159db47a7668aab0e03339d97bf2ff1106965b50ff.jpeg',0,'2021-08-04 16:55:43',1),(19,'asdwadd','waeadsd','public\\images\\uploads\\28a471fe43304f37d64559c7b4b9fc65dc750e3099ea.jpeg','public/images/uploads/thumbnail-28a471fe43304f37d64559c7b4b9fc65dc750e3099ea.jpeg',0,'2021-08-04 19:33:39',1),(20,'','','public\\images\\uploads\\2838ef9257c7817c3fc30b30ea541407e6be350c13c8.jpeg','public/images/uploads/thumbnail-2838ef9257c7817c3fc30b30ea541407e6be350c13c8.jpeg',0,'2021-08-04 19:35:04',1),(21,'hellowwork','2312315412','public\\images\\uploads\\091f5873a30e62d1bcf9f34fa0a8143c43af8909566e.jpeg','public/images/uploads/thumbnail-091f5873a30e62d1bcf9f34fa0a8143c43af8909566e.jpeg',0,'2021-08-04 19:46:21',1),(22,'asdawd','sdasd','public\\images\\uploads\\abfc581b19e9ed5c3cab295dbdb953116bf871dce1f8.jpeg','public/images/uploads/thumbnail-abfc581b19e9ed5c3cab295dbdb953116bf871dce1f8.jpeg',0,'2021-08-04 19:51:35',1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `usertype` int NOT NULL DEFAULT '0',
  `active` int NOT NULL DEFAULT '0',
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'danieljchang','danieljchang0000@gmail.com','$2b$10$ZraLQoZOY9Sqrs4vTfMCmO854i4QvAw2MSOwygA6GsWTFdcsbUwLO',0,0,'2021-08-02 17:27:12'),(41,'danieljcweqdsahang','danieljasdawchang0000@gmail.com','$2b$10$m/x74fxNnmtz/W2LD85z3.SSRUjstM8uK6NuRSSmVGe5OnEhZKygK',0,0,'2021-08-02 21:22:37'),(42,'danieljchwadasdwaang','daasdnieljchang0000@gmail.com','$2b$10$xs3iqT.eK8cp0jbDStrEfOpZHVSXvdDUeg2fQzunY2sxp1DGZn4te',0,0,'2021-08-02 21:45:13');
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

-- Dump completed on 2021-08-04 20:36:23
