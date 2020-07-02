-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 24, 2019 at 02:25 PM
-- Server version: 5.7.25
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aalam_flogger`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_Locations_For_Heat_Map`
--

CREATE TABLE `tbl_Locations_For_Heat_Map` (
  `ID` int(11) NOT NULL,
  `Lat` varchar(30) NOT NULL,
  `Lng` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_Locations_For_Heat_Map`
--

INSERT INTO `tbl_Locations_For_Heat_Map` (`ID`, `Lat`, `Lng`) VALUES
(1, '51.89797232832006', '-2.0842461585998535'),
(2, '51.89776047580352', '-2.0848469734191895'),
(3, '51.887616867833856', '-2.0904688835144043'),
(4, '51.887351991000344', '-2.0906834602355957'),
(5, '51.887351991000344', '-2.08982515335083'),
(6, '51.88695467282321', '-2.0903401374816895'),
(7, '51.88695467282321', '-2.0897393226623535'),
(8, '51.886981160810954', '-2.0889668464660645'),
(9, '51.885577275950034', '-2.089782238006592');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_Locations_For_Heat_Map`
--
ALTER TABLE `tbl_Locations_For_Heat_Map`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_Locations_For_Heat_Map`
--
ALTER TABLE `tbl_Locations_For_Heat_Map`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;