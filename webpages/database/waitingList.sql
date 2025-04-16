CREATE TABLE `waitingList` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `firstName` varchar(100) NOT NULL,
   `lastName` varchar(100) NOT NULL,
   `email` varchar(100) NOT NULL,
   `discord` varchar(100) NOT NULL,
   `gradyear` char(4) NOT NULL,
   PRIMARY KEY (`id`)
);