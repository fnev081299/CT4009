
-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--
DROP TABLE IF EXISTS `tbl_user`;

CREATE TABLE `tbl_user` (
  `First_Name` varchar(20) NOT NULL,
  `Last_Name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL PRIMARY KEY,
  `password` varchar(200) NOT NULL,
  `ResigtrationDate` DATE NOT NULL,
  `VerificationCode` varchar(16),
  `IsVerified` tinyint(1)
);

