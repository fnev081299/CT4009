CREATE TABLE `tbl_HomePosts` (
	`username` Varchar(100) NOT NULL,
	`Post_content` Varchar(240) NOT NULL,
	`Img` varbinary NOT NULL,
	`Like` INT DEFAULT 0,
	`Like_count` INT NOT NULL,
	`Date_stamp` DateTime NOT NULL
); 