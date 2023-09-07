-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 03:34 AM
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
-- Table structure for table `trainingtm_user_profile`
--

CREATE TABLE `trainingtm_user_profile` (
  `user_profile_aid` int(11) NOT NULL,
  `user_profile_first_name` varchar(100) NOT NULL,
  `user_profile_last_name` varchar(100) NOT NULL,
  `user_profile_department` varchar(100) NOT NULL,
  `user_profile_supervisor` varchar(100) NOT NULL,
  `user_profile_is_active` tinyint(1) NOT NULL,
  `user_profile_update_at` datetime NOT NULL,
  `user_profile_created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_user_profile`
--

INSERT INTO `trainingtm_user_profile` (`user_profile_aid`, `user_profile_first_name`, `user_profile_last_name`, `user_profile_department`, `user_profile_supervisor`, `user_profile_is_active`, `user_profile_update_at`, `user_profile_created_at`) VALUES
(2, 'test', 'test', 'test', 'test', 1, '2023-09-07 09:26:17', '2023-09-07 09:26:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_user_profile`
--
ALTER TABLE `trainingtm_user_profile`
  ADD PRIMARY KEY (`user_profile_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_user_profile`
--
ALTER TABLE `trainingtm_user_profile`
  MODIFY `user_profile_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
