-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2023 at 02:10 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fbs_hris_v3`
--

-- --------------------------------------------------------

--
-- Table structure for table `hrisv2_settings_role`
--

CREATE TABLE `hrisv2_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(128) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_admin` tinyint(1) DEFAULT NULL,
  `role_is_employee` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hrisv2_settings_role`
--

INSERT INTO `hrisv2_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_admin`, `role_is_employee`) VALUES
(1, 1, 'Admin', 'An Administrator provides office support to either an individual or team and is vital for the smooth-running of a business.', '2023-01-26', '2023-01-26 09:07:44', 1, 0),
(2, 1, 'Employee', 'A role of an employee means a set of duties and responsibilities the employee is expected to carry out in a particular operation, process or workflow.', '2023-01-26', '2023-01-26 09:07:37', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hrisv2_settings_role`
--
ALTER TABLE `hrisv2_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hrisv2_settings_role`
--
ALTER TABLE `hrisv2_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
