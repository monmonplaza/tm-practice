-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 04:12 AM
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
-- Table structure for table `trainingtm_referral_source`
--

CREATE TABLE `trainingtm_referral_source` (
  `referral_source_aid` int(11) NOT NULL,
  `referral_source_is_active` tinyint(1) NOT NULL,
  `referral_source_name` varchar(100) NOT NULL,
  `referral_source_description` text NOT NULL,
  `referral_source_created_at` datetime NOT NULL,
  `referral_source_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_referral_source`
--

INSERT INTO `trainingtm_referral_source` (`referral_source_aid`, `referral_source_is_active`, `referral_source_name`, `referral_source_description`, `referral_source_created_at`, `referral_source_updated_at`) VALUES
(1, 1, 'Rhicos', '', '2023-09-06 14:00:09', '2023-09-06 14:56:47'),
(2, 1, 'saasdsa', '', '2023-09-06 14:05:59', '2023-09-06 14:48:12'),
(3, 1, 'sdaasdasd', '', '2023-09-06 14:06:51', '2023-09-06 14:53:49'),
(5, 1, 'Cyrene', '', '2023-09-06 14:58:37', '2023-09-06 14:58:37'),
(6, 1, 'sadasdasd', '', '2023-09-06 15:36:15', '2023-09-07 07:50:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_referral_source`
--
ALTER TABLE `trainingtm_referral_source`
  ADD PRIMARY KEY (`referral_source_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_referral_source`
--
ALTER TABLE `trainingtm_referral_source`
  MODIFY `referral_source_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
