-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 01:59 AM
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
-- Table structure for table `trainingtm_referral_source`
--

CREATE TABLE `trainingtm_referral_source` (
  `referral_source_aid` int(11) NOT NULL,
  `referral_source_name` varchar(100) NOT NULL,
  `referral_source_is_active` tinyint(4) NOT NULL,
  `referral_source_created_at` datetime NOT NULL,
  `referral_source_update_at` datetime NOT NULL,
  `referral_source_description` varchar(200) NOT NULL,
  `referral_source_referral_type_id` varchar(20) NOT NULL,
  `referral_source_department_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_referral_source`
--

INSERT INTO `trainingtm_referral_source` (`referral_source_aid`, `referral_source_name`, `referral_source_is_active`, `referral_source_created_at`, `referral_source_update_at`, `referral_source_description`, `referral_source_referral_type_id`, `referral_source_department_id`) VALUES
(1, 'test', 1, '2023-09-05 14:19:44', '2023-09-05 15:14:13', 'test', '', ''),
(3, 'test 321', 1, '2023-09-05 14:22:14', '2023-09-05 15:14:10', 'test 321', '', ''),
(4, 'gasdas', 1, '2023-09-05 15:07:11', '2023-09-05 15:14:17', 'gasdas', '', ''),
(5, 'test0', 1, '2023-09-05 15:10:39', '2023-09-05 15:10:39', 'test0', '', '');

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
  MODIFY `referral_source_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
