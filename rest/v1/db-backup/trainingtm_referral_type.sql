-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 03:14 AM
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
-- Table structure for table `trainingtm_referral_type`
--

CREATE TABLE `trainingtm_referral_type` (
  `referral_type_aid` int(11) NOT NULL,
  `referral_type_name` varchar(100) NOT NULL,
  `referral_type_description` varchar(200) NOT NULL,
  `referral_type_created_at` varchar(200) NOT NULL,
  `referral_type_update_at` varchar(200) NOT NULL,
  `referral_type_is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_referral_type`
--

INSERT INTO `trainingtm_referral_type` (`referral_type_aid`, `referral_type_name`, `referral_type_description`, `referral_type_created_at`, `referral_type_update_at`, `referral_type_is_active`) VALUES
(1, 'test', 'test', '2023-09-06 14:57:21', '2023-09-06 14:57:21', 1),
(2, 'test111', 'test111', '2023-09-06 15:05:06', '2023-09-06 15:05:06', 1),
(3, 'test3', 'testtttttt', '2023-09-06 15:05:36', '2023-09-06 15:05:36', 1),
(4, 'test', 'tessssssssssssssss', '2023-09-06 15:06:35', '2023-09-06 15:06:35', 1),
(5, 'test', 'tttttttttttttt', '2023-09-06 15:10:36', '2023-09-06 15:10:36', 1),
(6, 'test', 'tesssssssssss', '2023-09-06 15:12:34', '2023-09-06 15:12:34', 1),
(7, 'gggg', 'gggggg', '2023-09-06 15:15:48', '2023-09-06 15:15:48', 1),
(8, 'qqqqqq', 'qqqqqqq', '2023-09-06 15:16:31', '2023-09-06 15:16:31', 1),
(11, 'testttttttttttttttttttt', 'testttttttttttttttttttt', '2023-09-06 15:32:22', '2023-09-06 15:32:22', 1),
(13, 'tasda', 'tasda', '2023-09-06 15:33:26', '2023-09-06 15:33:26', 1),
(14, '999999', '9999', '2023-09-06 15:42:52', '2023-09-06 15:42:52', 1),
(15, '999999', '00', '2023-09-06 15:42:57', '2023-09-06 15:51:53', 1),
(16, '1000000000', '0', '2023-09-06 15:47:11', '2023-09-06 15:49:35', 1),
(17, 'try', 'tryyy', '2023-09-07 07:47:37', '2023-09-07 07:47:37', 1),
(18, 'tryy', 'tr', '2023-09-07 07:48:24', '2023-09-07 07:48:24', 1),
(19, 'try', 'tryasssssssssssssssssssss', '2023-09-07 07:49:30', '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_referral_type`
--
ALTER TABLE `trainingtm_referral_type`
  ADD PRIMARY KEY (`referral_type_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_referral_type`
--
ALTER TABLE `trainingtm_referral_type`
  MODIFY `referral_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
