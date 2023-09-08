-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 07:25 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `training_tm`
--

-- --------------------------------------------------------

--
-- Table structure for table `trainingtm_location`
--

CREATE TABLE `trainingtm_location` (
  `location_aid` int(11) NOT NULL,
  `location_barrangay` varchar(100) NOT NULL,
  `location_city` varchar(100) NOT NULL,
  `location_province` varchar(100) NOT NULL,
  `location_zip_code` varchar(10) NOT NULL,
  `location_is_active` tinyint(1) NOT NULL,
  `location_created_at` tinyint(1) NOT NULL,
  `location_update_at` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_location`
--

INSERT INTO `trainingtm_location` (`location_aid`, `location_barrangay`, `location_city`, `location_province`, `location_zip_code`, `location_is_active`, `location_created_at`, `location_update_at`) VALUES
(2, 'del remedio', 'san pablo', 'laguna', '4002', 1, 127, 127);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_location`
--
ALTER TABLE `trainingtm_location`
  ADD PRIMARY KEY (`location_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_location`
--
ALTER TABLE `trainingtm_location`
  MODIFY `location_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
