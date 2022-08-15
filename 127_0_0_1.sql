-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2022 at 12:22 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amereztours`
--
CREATE DATABASE IF NOT EXISTS `amereztours` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `amereztours`;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `role`, `full_name`, `email`, `phone`, `password`) VALUES
(1, 'ayalsaad', 'Administrator', 'Ayal Saad', 'ayalsaad0@gmail.com', '0538277108', '$2b$10$BFBxHp.Yj.hxvip10GCsv.4F5JiGHTSTmMlcFFBzkfwi2FKM49quC');

-- --------------------------------------------------------

--
-- Table structure for table `attractions`
--

CREATE TABLE `attractions` (
  `id` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `location` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  `description` longtext NOT NULL,
  `guests` int(11) NOT NULL,
  `start_Date` date DEFAULT NULL,
  `end_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attractions`
--

INSERT INTO `attractions` (`id`, `title`, `location`, `price`, `availability`, `description`, `guests`, `start_Date`, `end_Date`) VALUES
(1, 'THE THREE VALLEYS OF THE HIGH ATLAS', 'Marrakech', 100, 1, 'Taking a day to explore the stunning landscape of the Atlas mountains is\r\nthe highlight of any trip to Marrakech, Combine exciting Marrakech with\r\nmemorable walking amongst the mountain peaks and valleys of the remote High\r\nAtlas mountains. A dream day trip tothe 3 valleys of The Grand Atlas in the heart\r\nof Berber culture where the valleys rise at the foothills of the walls of the high atlas\r\noffering aspectacular panorama, Our program is a tour that starts At 9:00 AMfrom\r\nMarrakech to The Atlas Mountain, The road take around anhour, You\'ll Stroll\r\nalong The Lalla Takerkoust Dam, Also The Passage Through The KIK Plateau,\r\nPassage Through The Asni Valley, Exploring The Road Of Tahanaout and Ourika,\r\nThe Back Time AT 7:00 PM, Weoffer you hight Transportation Quality, A\r\nProfessional Driver during The Day, different Kind Of Vehicle 4x4, MiniBus,\r\nContainer WI-FI, AirCanditioned, Finally We Offered you Local Guide That Will\r\nhelp youKnows More about The Place.', 0, '2022-06-08', '2022-08-12'),
(2, 'AGADIR EXCURSION', 'Agadir', 100, 1, 'We know that you\'re looking for a fabulous vacation under The Moroccan\r\nSun, Agadir City is The right choice. Agadir\'s Located in the South of Morocco, This\r\nLarge seaside resort with a mild climate is increasingly popular with those Looking\r\nfor Unforgettable memories as a couple, family, or friend, Agadir has Today\r\nbecome the symbol of modernity in Morocco. The important economic center of\r\nthe country, it\'s also the second tourist city. Its generous sun, its splendid and\r\nvaried landscapes, warm atmosphere and the wide range of activities that this city\r\noffer to promise you a busy holiday. The departure started From the Hotel/Riad At\r\n8:00 AM,The Road takes around 3hours, you\'ll explore the bustling City Marina,\r\nadmire the subline views that are offered to you from The Fortress of The Kasbah,\r\nThe Agadir Oufella, you\'re going to try to haggle at The Local Market, also Strolling\r\nthrough The Bird Valley Garden, Boot Trip and Jet Skyexperience, and the back\r\ntime At 7:00 PM, We offer you hight transportation qualities, A professional driver\r\nduring the day, different kind of vehicle 4x4, MiniBus, Contained WI-FI, Air-\r\nConditioned, Finally weoffered you local guide will help you know more about the\r\nplace END OF JOURNEY', 0, '2022-08-15', '2022-08-15'),
(5, 'MARRAKECH CITY TOUR', 'Marrakech', 1100, 1, 'Colorful Souks, Moorish architecture, intimate gardens,and\nboutique hotels..., Marrakech is an unforgettable city. Spend your days\nexploring the peaceful interior courtyards, winding alleys of the historic\nMedina, stroll through the Majorelle garden or admire the beauty of the\nmosque. Departure from the Hotel/Riad at 9:00 Am, Visit the historical\nmonuments: The Koutoubia Mosque, Palace El Badiaa, Jamaa El Fna\nsquare, the living heart of the city, known throughout the world for its\nperpetual animation, visite the gardens \" the three oldest Majorelle gardens\n\", The Menara as the same as The Palm Grove, lunch in a typical restaurant.\nBack time around 7:00 Pm. We offer you a provision of a professional driver\nduring the day, Air-Conditioned and comfortable vehicle, Van, MiniBus, Wireless, Local guide for the visit of Jamaa El Fnasquare', 0, '2022-08-15', '2022-08-15');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(10) UNSIGNED NOT NULL,
  `subject` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `subject`, `status`, `start_time`, `end_time`, `description`) VALUES
(1, 'ayal', 'New', '2022-08-14 00:00:00', '2022-08-14 00:00:00', 'asdf'),
(2, 'Ayal', 'New', '2022-08-15 00:00:00', '2022-08-15 00:00:00', 'asdfsda');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `vehicleId` int(11) DEFAULT NULL,
  `attractionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `link`, `vehicleId`, `attractionId`) VALUES
(1, 'https://cdn.getyourguide.com/img/tour/5dd3d587064cd.jpeg/98.jpg', NULL, 1),
(11, 'https://e7.pngegg.com/pngimages/202/464/png-clipart-mercedes-benz-e-class-car-luxury-vehicle-mercedes-benz-sprinter-mercedesc-e-class-compact-car-sedan.png', 9, NULL),
(12, 'https://e7.pngegg.com/pngimages/202/464/png-clipart-mercedes-benz-e-class-car-luxury-vehicle-mercedes-benz-sprinter-mercedesc-e-class-compact-car-sedan.png', 9, NULL),
(13, 'https://e7.pngegg.com/pngimages/202/464/png-clipart-mercedes-benz-e-class-car-luxury-vehicle-mercedes-benz-sprinter-mercedesc-e-class-compact-car-sedan.png', 9, NULL),
(14, 'https://e7.pngegg.com/pngimages/202/464/png-clipart-mercedes-benz-e-class-car-luxury-vehicle-mercedes-benz-sprinter-mercedesc-e-class-compact-car-sedan.png', 9, NULL),
(15, 'https://e7.pngegg.com/pngimages/202/464/png-clipart-mercedes-benz-e-class-car-luxury-vehicle-mercedes-benz-sprinter-mercedesc-e-class-compact-car-sedan.png', 9, NULL),
(16, 'https://w7.pngwing.com/pngs/188/219/png-transparent-toyota-fortuner-car-toyota-hilux-sport-utility-vehicle-toyota-glass-car-automatic-transmission.png', 10, NULL),
(21, 'https://e7.pngegg.com/pngimages/303/596/png-clipart-mercedes-benz-vito-mercedes-benz-s-class-mercedes-benz-e-class-car-2017-mercedes-compact-car-sedan.png', 11, NULL),
(22, 'https://p7.hiclipart.com/preview/608/522/505/mercedes-benz-viano-mercedes-benz-vito-mercedes-benz-w638-van-mercedes-benz.jpg', 11, NULL),
(33, 'https://www.motustoyota.co.za/application/storage/upload/lc_prado_model_20.png', 1, NULL),
(34, 'https://img.favpng.com/17/0/22/toyota-land-cruiser-prado-car-sport-utility-vehicle-lexus-gx-png-favpng-V0MRieuAbTYRGQq1kUhyPVjF7.jpg', 1, NULL),
(35, 'https://e7.pngegg.com/pngimages/471/493/png-clipart-toyota-land-cruiser-prado-car-2015-toyota-land-cruiser-toyota-4runner-prado-glass-off-road-vehicle.png', 1, NULL),
(36, 'https://w7.pngwing.com/pngs/105/887/png-transparent-toyota-land-cruiser-prado-car-isuzu-motors-ltd-toyota-prado-glass-diesel-fuel-car.png', 1, NULL),
(37, 'https://w7.pngwing.com/pngs/105/887/png-transparent-toyota-land-cruiser-prado-car-isuzu-motors-ltd-toyota-prado-glass-diesel-fuel-car.png', 1, NULL),
(38, 'https://www.journalofnomads.com/wp-content/uploads/2022/04/Agadir-medina.jpg', NULL, 2),
(39, 'https://media.istockphoto.com/photos/marina-of-agadir-picture-id948878628?k=20&m=948878628&s=612x612&w=0&h=HBSxcavnxHc-V0ss8qHjKgR1BrWqBPx0PbYVDoEhpik=', NULL, 2),
(43, 'https://static.saltinourhair.com/wp-content/uploads/2017/04/23115129/best-restaurant-marrakech-morocco.jpg', NULL, 5),
(44, 'https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/koutoubia-mosque-minaret-located-at-medina-quarter-of-marrakesh-morocco-balate-dorin.jpg?itok=08hAHERp', NULL, 5),
(45, 'http://ravishmag.co.uk/wp-content/uploads/2022/02/things-to-do-in-marrakech.jpg', NULL, 5),
(46, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351903623.jpg?k=e9ec47003680a338d97522df6c94f6d76841310601ba953a5f07b9343f688296&o=&hp=1', NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `userId` int(11) UNSIGNED NOT NULL,
  `start_Date` date DEFAULT NULL,
  `end_Date` date DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `vehicleId` int(11) DEFAULT NULL,
  `attractionId` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `quantity` int(20) NOT NULL,
  `item_title` varchar(255) NOT NULL,
  `phone_num` varchar(255) NOT NULL,
  `order_price` int(255) NOT NULL,
  `img_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userId`, `start_Date`, `end_Date`, `status`, `vehicleId`, `attractionId`, `createdAt`, `updatedAt`, `quantity`, `item_title`, `phone_num`, `order_price`, `img_link`) VALUES
(9, 1, '2022-06-08', '2022-08-12', 'Completed', NULL, 1, '2022-02-01', '2022-08-15', 1, 'THE THREE VALLEYS OF THE HIGH ATLAS', '0543169920', 100, 'https://cdn.getyourguide.com/img/tour/5dd3d587064cd.jpeg/98.jpg'),
(10, 1, '2022-08-17', '2022-08-25', 'Canceled', 1, NULL, '2022-01-01', '2022-08-15', 1, '4X4 toyota tx', '0543169920', 300, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(11, 1, '2022-08-10', '2022-08-24', 'New', NULL, 2, '2022-03-01', '2022-08-15', 1, 'AGADIR EXCURSION', '0543169920', 200, 'https://cdn.getyourguide.com/img/tour/5dd3d557a703d.jpeg/145.jpg'),
(12, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-04-01', '2022-08-15', 2, '4X4 toyota tx', '0543169920', 350, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(13, 1, '2022-08-14', '2022-08-14', 'Canceled', 1, NULL, '2022-05-01', '2022-08-15', 2, '4X4 toyota tx', '0543169920', 120, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(14, 1, '2022-08-14', '2022-08-14', 'New', 1, NULL, '2022-06-01', '2022-08-15', 2, '4X4 toyota tx', '0543169920', 430, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(15, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-07-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 210, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(16, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-08-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 290, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(17, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-09-01', '2022-08-15', 2, '4X4 toyota tx', '0543169920', 260, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(18, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-10-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 510, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(19, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-11-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 210, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(20, 1, '2022-08-14', '2022-08-14', 'New', 1, NULL, '2022-12-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 400, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png'),
(21, 1, '2022-08-14', '2022-08-14', 'Completed', NULL, 1, '2022-05-11', '2022-08-15', 2, 'THE THREE VALLEYS OF THE HIGH ATLAS', '0543169920', 400, 'https://cdn.getyourguide.com/img/tour/5dd3d587064cd.jpeg/98.jpg'),
(22, 1, '2022-08-14', '2022-08-14', 'Completed', 1, NULL, '2022-05-01', '2022-08-14', 2, '4X4 toyota tx', '0543169920', 400, 'https://www.seekpng.com/png/full/363-3632286_toyota-land-cruiser-den-202-toyota-land-cruiser.png');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `attractionId` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `totalUsers` int(11) NOT NULL,
  `avgRating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passport` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `phone`, `username`, `passport`, `address`, `email`, `password`) VALUES
(1, 'zoabi', 'zoabi', '0543169920', 'zoabizoabi', '205536469', 'Nazreth', 'zoabi@gmail.com', '$2b$10$dCkiWQxcC.yNt4R5wsxVT.GVyRD63xPlpCesoZHkskuSw1jaBNm.G');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `places` int(11) NOT NULL,
  `suitcases` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `driver` tinyint(1) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `title`, `places`, `suitcases`, `price`, `available`, `driver`, `quantity`) VALUES
(1, '4X4 TOYOTA TX', 7, 6, 300, 1, 1, 1),
(9, 'MERCEDESS CLASS E', 3, 3, 1590, 1, 1, 2),
(10, '4X4 TOYOTA FORTUNER', 6, 6, 1300, 1, 0, 1),
(11, 'MERCEDES VITO', 7, 7, 2100, 1, 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `attractions`
--
ALTER TABLE `attractions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicleId` (`vehicleId`),
  ADD KEY `attractionId` (`attractionId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `vehicleId` (`vehicleId`),
  ADD KEY `attractionId` (`attractionId`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attractionId` (`attractionId`),
  ADD KEY `vehicleId` (`vehicleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `passport` (`passport`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_2` (`phone`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD UNIQUE KEY `passport_2` (`passport`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `phone_3` (`phone`),
  ADD UNIQUE KEY `username_3` (`username`),
  ADD UNIQUE KEY `passport_3` (`passport`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `phone_4` (`phone`),
  ADD UNIQUE KEY `username_4` (`username`),
  ADD UNIQUE KEY `passport_4` (`passport`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `phone_5` (`phone`),
  ADD UNIQUE KEY `username_5` (`username`),
  ADD UNIQUE KEY `passport_5` (`passport`),
  ADD UNIQUE KEY `email_5` (`email`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attractions`
--
ALTER TABLE `attractions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_10` FOREIGN KEY (`attractionId`) REFERENCES `attractions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `images_ibfk_9` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`attractionId`) REFERENCES `attractions` (`id`);

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`),
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`attractionId`) REFERENCES `attractions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
