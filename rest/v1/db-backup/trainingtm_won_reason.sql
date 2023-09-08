-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 06:40 AM
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
-- Table structure for table `trainingtm_won_reason`
--

CREATE TABLE `trainingtm_won_reason` (
  `won_reason_aid` int(11) NOT NULL,
  `won_reason_id` varchar(10) NOT NULL,
  `won_reason_first_name` varchar(100) NOT NULL,
  `won_reason_last_name` varchar(100) NOT NULL,
  `won_reason_description` varchar(200) NOT NULL,
  `won_reason_created_at` datetime NOT NULL,
  `won_reason_updated_at` datetime NOT NULL,
  `won_reason_is_active` tinyint(1) NOT NULL,
  `won_reason_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_won_reason`
--

INSERT INTO `trainingtm_won_reason` (`won_reason_aid`, `won_reason_id`, `won_reason_first_name`, `won_reason_last_name`, `won_reason_description`, `won_reason_created_at`, `won_reason_updated_at`, `won_reason_is_active`, `won_reason_type`) VALUES
(3, '091131', 'Balo', 'ashgdjagkjas', 'yasfjddghasfdkghaskdhas', '2023-09-08 09:15:57', '2023-09-08 12:36:52', 1, 'client'),
(5, '1111', 'emman', 'the man', 'asdasdasd', '2023-09-08 09:16:19', '2023-09-08 12:36:37', 1, 'client'),
(6, '1123123', 'asdasdas', 'aasdasdas', 'asdasdasd', '2023-09-08 10:16:02', '2023-09-08 12:38:53', 1, 'employee'),
(7, '111', 'hatdog', 'adasjhdgas', 'qaasdadasdasd', '2023-09-08 10:16:23', '2023-09-08 10:16:23', 1, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_won_reason`
--
ALTER TABLE `trainingtm_won_reason`
  ADD PRIMARY KEY (`won_reason_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_won_reason`
--
ALTER TABLE `trainingtm_won_reason`
  MODIFY `won_reason_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
