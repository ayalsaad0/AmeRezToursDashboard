-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2022 at 10:44 AM
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
(1, 'admin', 'Administrator', 'Admin', 'admin@admin.com', '1234567890', '$2b$10$2Bn8WTrc5fCWhUhj3..fpeXOrHT6WtAb9ptJ/xeeMaChVSeQD6r2W'),
(2, 'mahmoud', 'Driver', 'Mahmoud Zoabi', 'mahmoud123@gmail.com', '0526747955', '$2b$10$PxdksXGpzC1Elcf3t4RIbOnwwNIMq/ichg2BcKFGYy7jBN73gd6SO'),
(4, 'ayal', 'Administrator', 'Ayal Saad', 'ayalsaad0@gmail.com', '0538277108', '$2b$10$yr2d5ScWnhn.yNxjVmTez.a3BoQ8sqGdDEpAxW4NMWsehlEaYH1L2');

-- --------------------------------------------------------

--
-- Table structure for table `attraction`
--

CREATE TABLE `attraction` (
  `id` varchar(30) NOT NULL,
  `title` varchar(40) NOT NULL,
  `location` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  `avg_rating` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attraction`
--

INSERT INTO `attraction` (`id`, `title`, `location`, `price`, `availability`, `avg_rating`, `description`, `image`) VALUES
('a_1', 'THE THREE VALLEYS OF THE HIGH ATLAS', '', 1270, 0, 0, 'Taking a day to explore the stunning landscape of the Atlas mountains is\nthe highlight of any trip to Marrakech, Combine exciting Marrakech with\nmemorable walking amongst the mountain peaks and valleys of the remote High\nAtlas mountains. A dream day trip tothe 3 valleys of The Grand Atlas in the heart\nof Berber culture where the valleys rise at the foothills of the walls of the high atlas\noffering aspectacular panorama, Our program is a tour that starts At 9:00 AMfrom\nMarrakech to The Atlas Mountain, The road take around anhour, You\'ll Stroll\nalong The Lalla Takerkoust Dam, Also The Passage Through The KIK Plateau,\nPassage Through The Asni Valley, Exploring The Road Of Tahanaout and Ourika,\nThe Back Time AT 7:00 PM, Weoffer you hight Transportation Quality, A\nProfessional Driver during The Day, different Kind Of Vehicle 4x4, MiniBus,\nContainer WI-FI, AirCanditioned, Finally We Offered you Local Guide That Will\nhelp youKnows More about The Place.\n', './images_public/the-three-valleys-of-the-high-atlas.jpg'),
('a_10', 'MARRAKECH ZAGORA 2 DAYS', '', 1320, 0, 0, 'Day 1 : Marrakech – Zagora\nDeparture from Marrakech via the Tichka pass at an altitude of 2260m,\nvisit the Kasbah Ait Ben Haddou, Lunch in Ouarzazate, you will cross the\nbeautiful Dràa Valley to reach the desert of Zagora, you will make a journey\nof 1:30 am by camels to reach the bivouac where you will admire a\nbeautiful sunset and spend the night under the clear sky and full of stars.\n(Dinner on the spot).\nDay 2 : Zagora – Marrakech\nIn the morning departure from Zagora to Ouarzazate via the region of Agdz\n(visit the movie studios and the Kasbah if the time permits), lunch on site\nand departure to Marrakech via the Tichka Pass. Return to Marrakech\naround 19:00. What we offer is a provision Of professional driver during the\ntrip, Air-Conditioned and comfortable vehicle, Wireless, Local guide.', './images_public/marrakech-zagora-2-days.jpg'),
('a_11', 'MARRAKECH MERZOUGA 3 DAYS', '', 0, 0, 0, 'Day 1 : Marrakech – Gorges of Dades\nDeparture from Marrakech via the Tichka pass at 2260m altitude, visit the Kasbah\nAit Ben Haddou, Lunch in Ouarzazate and visit the film studios and the Kasbah (if\nthere is still time to do so), you will cross the magnificent oasis of Skoura, Kalaat\nM’gouna then the valley of roses to reach the gorges of Dades, you will spend a night\nthere at the hotel ( Half board).\nDay 2 : Gorges of Dades – Merzouga\nDeparture in the morning to go even further in the desert to Merzouga, on the road\nyou will visit the valley of the thousand Kasbah, Tinghir, Gorges de Todra, Erfoud,\nRissani and the magnificent oasis of Tifilalte, to finally reach erg Chabi in Merzouga.\nYou will take a camel ride to admire the sunset and then join the bivouac where you\nwill spend the night under the clear sky and full of stars. (Dinner on the spot)\nDay 3 : Merzouga – Marrakech\nIn the early morning you will be able to admire the sunrise and have breakfast.\nDeparture to Marrakech through Erfoud, Ouarzazate where you will have your lunch.\nReturn to Marrakech around 7pm ', './images_public/marrakech-merzouga-3-days.jpg'),
('a_2', 'AGADIR EXCURSION', '', 0, 0, 0, 'We know that you\'re looking for a fabulous vacation under The Moroccan\r\nSun, Agadir City is The right choice. Agadir\'s Located in the South of Morocco, This\r\nLarge seaside resort with a mild climate is increasingly popular with those Looking\r\nfor Unforgettable memories as a couple, family, or friend, Agadir has Today\r\nbecome the symbol of modernity in Morocco. The important economic center of\r\nthe country, it\'s also the second tourist city. Its generous sun, its splendid and\r\nvaried landscapes, warm atmosphere and the wide range of activities that this city\r\noffer to promise you a busy holiday. The departure started From the Hotel/Riad At\r\n8:00 AM,The Road takes around 3hours, you\'ll explore the bustling City Marina,\r\nadmire the subline views that are offered to you from The Fortress of The Kasbah,\r\nThe Agadir Oufella, you\'re going to try to haggle at The Local Market, also Strolling\r\nthrough The Bird Valley Garden, Boot Trip and Jet Skyexperience, and the back\r\ntime At 7:00 PM, We offer you hight transportation qualities, A professional driver\r\nduring the day, different kind of vehicle 4x4, MiniBus, Contained WI-FI, AirConditioned, Finally weoffered you local guide will help you know more about the\r\nplace . ', './images_public/agadir-excursion.jpg'),
('a_3', 'AGAFAY', '', 0, 0, 0, 'desert experience – The Agafay desert oasis is located just outside\r\nof Marrakech. On this full-day tour, take In the scenery asyou travel\r\nthrough the high Atlas Mountains, Stopping to explore Local Villages. The\r\nroad takes around an hour, the departure from the Hotel/Riad at any time\r\nyou want as long as you are ready, theroad its spectacular views and photo\r\nopportunities in the Atlas Mountains, a lunch with the locals, you get the\r\nopportunity of riding a camel in the Agafay desert, Try the experience 2\r\nhours of quad ride, what we offer you is a high transportation quality,\r\nprofessional driver during the tripe, different kind of vehicle 4x4, MiniBus,\r\ncontained WI-FI, Air-conditioned.\r\n', './images_public/agafay.jpg'),
('a_4', 'ESSAOUIRA EXCURSION', '', 0, 0, 0, 'ESSAOUIRA, One of the ancient coastland touristtowns of\r\nMorocco, formerly called Mogador, known for its beach its songs of seagulls,\r\nand its strong wind, Essaouira is a calm andserene city. Discover the\r\nbeautiful city of Essaouira on a day trip. The road takes around 3 hours to\r\nget to the city, 8:00 AM Thedeparture from the Hotel/Riad. You\'ll enjoy a\r\nwalk to the beach, take the incredible photos of the monumental \" Porte de\r\nla Marine \", walk in the medina, enjoy fish lunch in the harbor, try to\r\nexplore the old Jewish quarter, visit the Squala de la Casbah atyour own\r\npace, visit au organ oil cooperative. You will return toMarrakech at the end\r\nof the evening around 7:00 PM, what weoffer is a high transportation\r\nqualities, a professional driver during the day, different kind of vehicle 4x4,\r\nMiniBus, contained WI-FI, Air-conditioned.', './images_public/essaouira-excursion.jpg'),
('a_5', 'IMLIL EXCURSION', '', 0, 0, 0, 'Departure from Marrakech at 9:00 AM to visit the magical site of IMLIL,\r\nthe starting point for most hikes, it is a magnificent place for those who would\r\nlike to walk in the Toubkal Massif. The highest peak in North Africa, you will\r\ndiscover the charm of IMLIL whose climate is temperate and the landscape\r\nnatural and wonderful inIMLIL you will take a short hike of 1h30 and admire the\r\nbeautiful landscapes and the Berber village. Finally, you will resume your\r\nwayback in the Afternoon, Living behind an image loaded with memories so\r\nmemorable that you will keep forever, the road takes around 1h30 Min to get to\r\nthe place, admire nature, The mountains which are very formidable, having\r\nlunch with the local, discover the paths and waterways which numerous in the\r\nregion, a walk to discover thecharm of this wonderful place. What we offer is a\r\nhigh transportation quality, a professional driver during the tripe, different kind\r\nof vehicle 4x4, MiniBus, contained WI-FI, Air- Conditioned, finally, we offered\r\nyou local guide will help you know more about the place.', './images_public/imlil-excursion.jpg'),
('a_6', 'MARRAKECH CITY TOUR', '', 0, 0, 0, 'Colorful Souks, Moorish architecture, intimate gardens,and\r\nboutique hotels..., Marrakech is an unforgettable city. Spend your days\r\nexploring the peaceful interior courtyards, winding alleys of the historic\r\nMedina, stroll through the Majorelle garden or admire the beauty of the\r\nmosque. Departure from the Hotel/Riad at 9:00 Am, Visit the historical\r\nmonuments: The Koutoubia Mosque, Palace El Badiaa, Jamaa El Fna\r\nsquare, the living heart of the city, known throughout the world for its\r\nperpetual animation, visite the gardens \" the three oldest Majorelle gardens\r\n\", The Menara as the same as The Palm Grove, lunch in a typical restaurant.\r\nBack time around 7:00 Pm. We offer you a provision of a professional driver\r\nduring the day, Air-Conditioned and comfortable vehicle, Van, MiniBus, Wireless, Local guide for the visit of Jamaa El Fnasquare.', './images_public/marrakech-city-tour.jpg'),
('a_7', 'OURIKA VALLEY', '', 0, 0, 0, 'LOCATED 60 kilometers south of Marrakech, the ourika Valley is\r\na valley in the Moroccan High Atlas which is one of the most visited High\r\nAtlas sites.The Ourika valley is the most accessible from Marrakech,\r\nTourists flock there precisely for its unspoiled nature and mountain way\r\noflife, as well as for the many small Berber villages that are scattered\r\nthroughout the valley. The road takes around 45 Min.The departure from\r\nthe Hotel/Riad for a visit of the Berber villages of the OURIKA valley. Visit\r\nthe Typical Berber House, 2:00 PM Lunch at OURIKA, admire the waterfalls\r\nof Setti Fatma, Trekking preferable with a mountain guide. Back time at\r\n5:00 PM.What we offer is a provision Of professional driver during the trip,\r\nAir-Conditioned and comfortable vehicle, Wireless, Local guide.', './images_public/ourika-valley-1.jpeg'),
('a_8', 'OUZOUD WATERFALLS', '', 0, 0, 0, 'Located 150 kilometers northeast of Marrakech, admire one of\nthe best morocco\'s natural wonders on a day trip to Ouzoud, waterfall-like\nthe Atlas Mountains and see the magnificent waterfalls of over 110 meters\nplunging into the cliffs, take photos from different angles. Our program\ndetails is a departer time at 9:00 A.M, you\'ll discover the magnificent\nOuzoud Region and its pristine nature, see the most spectacular waterfalls\nin North Africa, admire The Monkeys and Birds that inhabit the area, taste\na beautiful Berber tajine in front of the waterfalls, the Back Time around\n6:00 P.M. What we offer is a provision of professional drivers during the\nday, Air-conditioned and comfortable vehicle, 4x4 Or Minibus, Wireless,\nLocalguide.\n', './images_public/ouzoud-waterfalls.jpg'),
('a_9', 'MARRAKECH OUARZAZATE 1 DAYS', '', 0, 0, 0, 'This tour start in the morning from the riad or the hotel in Marrakech\r\nat 8 a.m. and cross the Atlas Mountains. The winding roads, changing\r\nscenery, colourful valleys, shepherds with their flocks, Berber villages high\r\nup on the hillsides, make this a picturesque drive. And when we get to\r\nTizi’n Tichka Pass, we’ll be at the highest point in the Atlas Mountains. Of\r\ncourse, we stop for photos and to breathe in some fresh mountain air.we’ll\r\nhead to the 11th century kasbah of Ait Ben Haddou, now a recognized\r\nUNESCO World Heritage Site. The architecture and the history are sure\r\nto impress you. Not to mention the views of the surrounding: the flowing\r\nriver, the palm trees. Heading further to the quiet town of Ouarzazate\r\nwe’ll have a traditional lunch before visiting the Taourirt Kasbah. This\r\nbuilding provided the backdrop for the Hollywood hit Star Wars and it\r\nhas been restored with financial assistance from UNESCO.', './images_public/marrakech-ouarzazate-1-days.jpg');

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

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` varchar(150) NOT NULL,
  `service_id` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `link`, `service_id`) VALUES
(1, './images_public/mercedes-class-e.png', 'v_1'),
(2, './images_public/ourika-valley-1.jpeg', 'a_7'),
(3, './images_public/toyota-tx.jpg', 'v_2'),
(4, './images_public/toyota-fortuner.png', 'v_3'),
(5, './images_public/mercedes-vito.png', 'v_4'),
(6, './images_public/ford-custom.png', 'v_5'),
(7, './images_public/mercedes-sprinter.png', 'v_6'),
(8, './images_public/volkswagen-crafter.png', 'v_7'),
(9, './images_public/mini-coach-bus.png', 'v_8'),
(10, './images_public/coach-bus1.png', 'v_9'),
(12, './images_public/mercedes-class-e2.png', 'v_1'),
(13, './images_public/mercedes-class-e3.png', 'v_1'),
(14, './images_public/mercedes-vito2.jpg', 'v_4'),
(15, './images_public/volkswagen-crafter2.png', 'v_7'),
(20, './images_public/ourika-valley-2.jpeg', 'a_7'),
(21, './images_public/ourika-valley-2.jpeg', 'a_7');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `cust_id` int(10) UNSIGNED NOT NULL,
  `order_date` datetime NOT NULL,
  `start_datetime` datetime NOT NULL,
  `end_datetime` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `service_id` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `cust_id`, `order_date`, `start_datetime`, `end_datetime`, `price`, `status`, `service_id`) VALUES
(1, 1, '2022-06-11 10:20:12', '2022-06-12 11:20:12', '2022-06-13 11:20:12', 1310, 'Complete', 'v_1'),
(2, 2, '2022-06-15 16:12:29', '2022-06-15 16:12:29', '2022-06-15 16:12:29', 3000, 'New', 'v_2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `passport` varchar(25) NOT NULL,
  `address` varchar(50) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`first_name`, `last_name`, `phone`, `passport`, `address`, `username`, `email`, `password`, `id`) VALUES
('Ayal', 'Saad', '0538277108', '211585260', 'Israel Shfaram', 'ayalsaad0', 'ayalsaad0@gmail.com', 'ayal123', 1),
('Mahmoud', 'Zoabi', '123456789', '321654987', 'Nazareth', 'mahmoudzoabi', 'mahmoud@gmail.com', '123654789', 2),
('Yaniv', 'Cohen', '987456321', '465987123', 'Haifa', 'yanivcohen', 'yaniv@gmail.com', '321456987', 3);

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` varchar(30) NOT NULL,
  `title` varchar(40) NOT NULL,
  `places` int(11) NOT NULL,
  `avg_rating` int(11) NOT NULL,
  `suitcases` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `driver` tinyint(1) NOT NULL,
  `image` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `title`, `places`, `avg_rating`, `suitcases`, `price`, `available`, `driver`, `image`) VALUES
('v_1', 'MERCEDES CLASS E', 3, 0, 3, 1350, 0, 0, './images_public/mercedes-class-e.png'),
('v_2', '4X4 TOYOTA TX', 6, 4, 6, 1300, 1, 0, './images_public/toyota-tx.jpg'),
('v_3', '4X4 TOYOTA FORTUNER', 6, 4, 6, 1400, 1, 0, './images_public/toyota-fortuner.png'),
('v_4', 'MERCEDES VITO', 7, 5, 7, 1700, 1, 1, './images_public/mercedes-vito.png'),
('v_5', 'FORD CUSTOM', 8, 5, 8, 1800, 1, 1, './images_public/ford-custom.png'),
('v_6', 'MERCEDES SPRINTER', 17, 5, 17, 2100, 1, 1, './images_public/mercedes-sprinter.png'),
('v_7', 'VOLKSWAGEN CRAFTER', 18, 5, 18, 3100, 1, 1, './images_public/volkswagen-crafter.png'),
('v_8', 'MINI COACH BUS', 26, 5, 26, 4000, 1, 1, './images_public/mini-coach-bus.png'),
('v_9', 'COACH BUS', 45, 5, 45, 5200, 1, 1, './images_public/coach-bus1.png');

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
-- Indexes for table `attraction`
--
ALTER TABLE `attraction`
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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
