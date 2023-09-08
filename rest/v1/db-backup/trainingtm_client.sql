-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 09:53 AM
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
-- Table structure for table `trainingtm_client`
--

CREATE TABLE `trainingtm_client` (
  `client_aid` int(11) NOT NULL,
  `client_id` varchar(10) NOT NULL,
  `client_first_name` varchar(100) NOT NULL,
  `client_last_name` varchar(100) NOT NULL,
  `client_description` varchar(200) NOT NULL,
  `client_is_active` tinyint(1) NOT NULL,
  `client_created_at` datetime NOT NULL,
  `client_update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_client`
--

INSERT INTO `trainingtm_client` (`client_aid`, `client_id`, `client_first_name`, `client_last_name`, `client_description`, `client_is_active`, `client_created_at`, `client_update_at`) VALUES
(1, '1231231', 'emms', 'manalo', 'emmanuel', 1, '2023-09-07 13:19:02', '2023-09-07 15:52:51'),
(2, '12312', 'test', 'test', 'test', 1, '2023-09-07 13:20:37', '2023-09-07 15:52:37'),
(4, 'testtestte', '12', 'testtesttest', 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttest', 0, '2023-09-07 15:10:43', '2023-09-07 15:52:12'),
(5, '12312', 'sdasda', 'adsa', 'sdasdas', 1, '2023-09-07 15:22:58', '2023-09-07 15:52:48'),
(6, '121', '123123', '123123', '123123sd', 1, '2023-09-07 15:23:53', '2023-09-07 15:50:58'),
(7, '1231', 'asdas', 'asdasda', 'dasdasad', 1, '2023-09-07 15:30:05', '2023-09-07 15:30:05'),
(8, '12312', 'eee', 'eee', 'eeee', 1, '2023-09-07 15:43:16', '2023-09-07 15:43:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_client`
--
ALTER TABLE `trainingtm_client`
  ADD PRIMARY KEY (`client_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_client`
--
ALTER TABLE `trainingtm_client`
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
