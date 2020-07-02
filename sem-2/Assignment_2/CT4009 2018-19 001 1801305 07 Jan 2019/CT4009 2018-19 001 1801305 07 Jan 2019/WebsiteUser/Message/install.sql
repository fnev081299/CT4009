CREATE TABLE `tbl_userMessages` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` Varchar(100) NOT NULL,
	`message` Varchar(500) NOT NULL,
	`deleted` INT DEFAULT 0
); ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;