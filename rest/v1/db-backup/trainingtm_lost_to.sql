-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 06:57 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `trainingtm_lost_to`
--

CREATE TABLE `trainingtm_lost_to` (
  `lost_to_aid` int(11) NOT NULL,
  `lost_to_is_active` tinyint(1) NOT NULL,
  `lost_to_first_name` varchar(100) NOT NULL,
  `lost_to_last_name` varchar(100) NOT NULL,
  `lost_to_name` varchar(100) NOT NULL,
  `lost_to_description` varchar(100) NOT NULL,
  `lost_to_created_at` datetime NOT NULL,
  `lost_to_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_lost_to`
--

INSERT INTO `trainingtm_lost_to` (`lost_to_aid`, `lost_to_is_active`, `lost_to_first_name`, `lost_to_last_name`, `lost_to_name`, `lost_to_description`, `lost_to_created_at`, `lost_to_updated_at`) VALUES
(5, 1, '', '', 'Cyrene', 'nabangga ng bike', '2023-09-06 09:58:48', '2023-09-06 12:37:00'),
(6, 1, '', '', 'Emman', 'tumambling una ulo', '2023-09-06 09:59:17', '2023-09-06 12:38:31'),
(7, 1, 'Emman', 'Reid', 'Emman Reid', 'ginalit ang jowasss', '2023-09-06 09:59:45', '2023-09-06 12:56:34'),
(8, 1, 'Rhico', 'DM', 'Rhico DM', 'Hatdog', '2023-09-06 12:39:34', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_lost_to`
--
ALTER TABLE `trainingtm_lost_to`
  ADD PRIMARY KEY (`lost_to_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_lost_to`
--
ALTER TABLE `trainingtm_lost_to`
  MODIFY `lost_to_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
