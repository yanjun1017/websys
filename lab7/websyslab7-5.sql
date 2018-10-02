-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 14, 2017 at 12:40 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websyslab7`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `crn` int(11) NOT NULL,
  `prefix` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `number` smallint(4) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES
(51293, 'ARTS', 1020, 'Media Studio: Imaging', 1, 2018),
(51427, 'CSCI', 1200, 'Data Structure', 1, 2018),
(53804, 'ARTS', 1200, 'Basic Drawing', 1, 2018),
(54069, 'WRIT', 1100, 'Writing for Classroom and Career\r\n', 1, 2018);

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `crn` int(11) NOT NULL,
  `rin` int(11) NOT NULL,
  `grade` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `crn`, `rin`, `grade`) VALUES
(1, 53804, 661482719, 66),
(2, 51293, 661078546, 89),
(3, 51427, 661078546, 78),
(4, 53804, 661078546, 90),
(5, 54069, 661078546, 93),
(6, 51293, 661482719, 98),
(7, 51427, 661482719, 30),
(8, 54069, 661709657, 99),
(9, 51293, 661876421, 78),
(10, 51427, 661709657, 99);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `rin` int(9) NOT NULL,
  `rcsID` char(7) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `alias` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(10) DEFAULT NULL,
  `street` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `zip` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`rin`, `rcsID`, `first name`, `last name`, `alias`, `phone`, `street`, `city`, `state`, `zip`) VALUES
(661078546, 'eberr50', 'Reeta', 'Eberhardt', 'Rita', 1874625890, '89 Hoosick ST', 'Troy', 'NY', 12180),
(661482719, 'gregg4', 'Gregory', 'Gregories', 'Greg', 2147483647, '78 15TH ST', 'Troy', 'NY', 12180),
(661709657, 'mcdeh34', 'Haru', 'McDevitt', 'Haru', 1147485162, '77 10Th ST', 'Troy', 'NY', 12180),
(661876421, 'plath5', 'Hanna', 'Platon', 'Hana', 2147483567, '454 8Th ST', 'Troy', 'NY', 12180);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`crn`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rin` (`rin`),
  ADD KEY `crn` (`crn`) USING BTREE;

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`rin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`rin`) REFERENCES `students` (`rin`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`crn`) REFERENCES `courses` (`crn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
