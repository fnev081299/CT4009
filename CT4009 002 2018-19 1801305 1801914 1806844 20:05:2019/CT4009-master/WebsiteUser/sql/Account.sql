CREATE TABLE `tbl_UserAccounts`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR (50) NOT NULL,
	`last_name` VARCHAR (50) NOT NULL,
	`username` VARCHAR (100) NOT NULL,
	`password` VARCHAR (100) NOT NULL,
	`address_line1` VARCHAR (100) NOT NULL,
	`address_line2` VARCHAR (100) NOT NULL,
	`postcode` VARCHAR (7) NOT NULL,
	`city` VARCHAR (20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;