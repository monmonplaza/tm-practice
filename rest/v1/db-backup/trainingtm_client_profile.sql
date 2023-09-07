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
-- Table structure for table `trainingtm_client_profile`
--

CREATE TABLE `trainingtm_client_profile` (
  `client_aid` int(11) NOT NULL,
  `client_is_active` tinyint(1) NOT NULL,
  `client_name` varchar(50) NOT NULL,
  `client_email` varchar(30) NOT NULL,
  `client_service` varchar(50) NOT NULL,
  `client_contact_person` varchar(50) NOT NULL,
  `client_created_at` datetime NOT NULL,
  `client_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainingtm_client_profile`
--

INSERT INTO `trainingtm_client_profile` (`client_aid`, `client_is_active`, `client_name`, `client_email`, `client_service`, `client_contact_person`, `client_created_at`, `client_updated_at`) VALUES
(1, 1, 'Rhico', 'rhico@example.com', 'asydjasdgajsdh', 'Ella', '2023-09-07 03:25:12', '2023-09-07 03:25:12'),
(2, 1, 'Rhico', 'rhico@example.com', 'asydjasdgajsdh', 'Ella', '2023-09-07 03:25:12', '2023-09-07 03:25:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trainingtm_client_profile`
--
ALTER TABLE `trainingtm_client_profile`
  ADD PRIMARY KEY (`client_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `trainingtm_client_profile`
--
ALTER TABLE `trainingtm_client_profile`
  MODIFY `client_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
