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
-- Table structure for table `trainingtm_referral_type`
--

CREATE TABLE `trainingtm_referral_type` (
  `referral_type_aid` int(11) NOT NULL,
  `referral_type_is_active` tinyint(4) NOT NULL,
  `referral_type_created_at` datetime NOT NULL,
  `referral_type_update_at` datetime NOT NULL,
  `referral_type_name` varchar(100) NOT NULL,
  `referral_type_department_id` varchar(20) NOT NULL,
  `referral_type_description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_referral_type`
--

INSERT INTO `trainingtm_referral_type` (`referral_type_aid`, `referral_type_is_active`, `referral_type_created_at`, `referral_type_update_at`, `referral_type_name`, `referral_type_department_id`, `referral_type_description`) VALUES
(1, 1, '2023-09-05 08:30:50', '2023-09-05 12:28:08', 'test33', '1', 'test33'),
(2, 1, '2023-09-05 08:43:51', '2023-09-05 12:27:42', 'test10', '1', 'test11'),
(4, 1, '2023-09-05 09:01:02', '2023-09-05 12:28:53', 'tes12', '3', 'tes12'),
(5, 1, '2023-09-05 09:03:50', '2023-09-05 12:28:37', 'tees112', '3', 'tees112'),
(6, 1, '2023-09-05 09:04:05', '2023-09-05 12:28:26', 't11', '1', 't11'),
(9, 1, '2023-09-05 09:04:21', '2023-09-05 12:28:17', 'test11', '1', 'test11'),
(11, 1, '2023-09-05 12:10:44', '2023-09-05 12:10:44', 'test2', '1', 'test2'),
(12, 1, '2023-09-05 12:10:59', '2023-09-05 12:10:59', 'test3', '3', 'test3'),
(13, 1, '2023-09-05 12:13:01', '2023-09-05 12:13:01', 'test4', '1', 'test4'),
(14, 1, '2023-09-05 12:16:58', '2023-09-05 12:16:58', 'test6', '1', 'test6'),
(15, 1, '2023-09-05 12:22:27', '2023-09-05 12:22:27', 'test7', '3', 'test7'),
(16, 1, '2023-09-05 13:43:17', '2023-09-05 13:43:23', 'thea', '1', 'panget');

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
  MODIFY `referral_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
