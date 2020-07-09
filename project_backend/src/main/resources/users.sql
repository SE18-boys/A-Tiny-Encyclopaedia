DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER`(
                       `id` int NOT NULL AUTO_INCREMENT,
                       `name` varchar(15) DEFAULT NULL,
                       `password` varchar(15) DEFAULT NULL,
                       `email` varchar(256) DEFAULT NULL,
                       `is_auth` boolean DEFAULT FALSE,
                       PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
