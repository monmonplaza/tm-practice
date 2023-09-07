-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 07:21 AM
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
-- Table structure for table `trainingtm_lost_reason`
--

CREATE TABLE `trainingtm_lost_reason` (
  `lost_reason_aid` int(11) NOT NULL,
  `lost_reason_is_active` tinyint(1) NOT NULL,
  `lost_reason_first_name` varchar(100) NOT NULL,
  `lost_reason_last_name` varchar(100) NOT NULL,
  `lost_reason_description` varchar(200) NOT NULL,
  `lost_reason_created_at` datetime NOT NULL,
  `lost_reason_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_lost_reason`
--

INSERT INTO `trainingtm_lost_reason` (`lost_reason_aid`, `lost_reason_is_active`, `lost_reason_first_name`, `lost_reason_last_name`, `lost_reason_description`, `lost_reason_created_at`, `lost_reason_updated_at`) VALUES
(2, 1, 'EMMAN', 'BACKEND MAN', 'ashdgaskhdgkashdgashdashgashdashdasdasdva', '2023-09-07 13:20:14', '2023-09-07 13:20:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_lost_reason`
--
ALTER TABLE `trainingtm_lost_reason`
  ADD PRIMARY KEY (`lost_reason_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_lost_reason`
--
ALTER TABLE `trainingtm_lost_reason`
  MODIFY `lost_reason_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
