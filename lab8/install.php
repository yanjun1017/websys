<?php

$install = false;
$load = false;
$username = "root";
$password = "";
$query = "";

if ($_POST["options"] == "Install") 
	$install = true;
if ($_POST["options"] == "Load")
	$load = true;

try {

    $conn = new PDO("mysql:host=localhost", $username, $password);

    $sql = $conn -> prepare("CREATE DATABASE IF NOT EXISTS `liy40-websyslab8`");
    $sql -> execute();

    $conn = new PDO("mysql:host=localhost; dbname=liy40-websyslab8", $username, $password);
    
    $sql = $conn -> prepare("

    CREATE TABLE IF NOT EXISTS `courses`(

    	`crn` int(11) NOT NULL,
    	`prefix` varchar(4) NOT NULL,
    	`number` smallint(4) NOT NULL,
    	`title` varchar(255) NOT NULL,
    	`section` int(4) NOT NULL ,
    	`year` int(4) NOT NULL

	)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


	CREATE TABLE IF NOT EXISTS `students`(

		`rin` int(9),
		`first name` varchar(100) NOT NULL,
		`last name` varchar(100) NOT NULL,
		`Address1` varchar(100),
		`Address2` varchar(100),
		`City` varchar(100),
		`State` varchar(100),
		`Zip` int(9),
		`Zip+4` int(4)

	)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

	CREATE TABLE IF NOT EXISTS `grades`(

		`id` int(11) NOT NULL,
		`crn` int(11) NOT NULL, 
		`rin` int(11) NOT NULL,
		grade int(3) NOT NULL

	)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE = utf8_unicode_ci;


	ALTER TABLE `students`
		ADD PRIMARY KEY (`rin`);

	ALTER TABLE `courses` 
		ADD PRIMARY KEY (`crn`);

	ALTER TABLE `grades`
		ADD PRIMARY KEY (`id`);

	ALTER TABLE `grades`
		ADD KEY `rin` (`rin`),
		ADD KEY `crn` (`crn`) USING BTREE;

	ALTER TABLE `grades`
		MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

	ALTER TABLE `grades`
		ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`rin`) REFERENCES `students` (`rin`),
  		ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`crn`) REFERENCES `courses` (`crn`); 

  	");

    $sql -> execute();

    if ($install){
    	print("Installed Successfully!");
    }

    if ($load){

    	$sql = $conn -> prepare("

    		TRUNCATE `courses`;
    		TRUNCATE `students`;
    		TRUNCATE `grades`;

    		INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES
			(51293, 'ARTS', 1020, 'Media Studio: Imaging', 1, 2018),
			(51427, 'CSCI', 1200, 'Data Structure', 1, 2018),
			(53804, 'ARTS', 1200, 'Basic Drawing', 1, 2018),
			(54069, 'WRIT', 1100, 'Writing for Classroom and Career', 1, 2018);
		
			INSERT INTO `grades` (`id`, `crn`, `rin`, `grade`) VALUES
			(1, 53804, 661078546, 66),
			(2, 51293, 661482719, 89),
			(3, 51427, 661178923, 78),
			(4, 53804, 661983790, 90),
			(5, 54069, 661092891, 93),
			(6, 51293, 661090280, 98),
			(7, 51427, 662019398, 30),
			(8, 54069, 661187801, 99),
			(9, 51293, 661876421, 78),
			(10, 51427, 661090109, 99);

			INSERT INTO `students` (`rin`, `first name`, `last name`, `Address1`, `Address2`, `city`, `state`, `zip`, `zip+4`) VALUES
			(661078546, 'Reeta', 'Eberhardt', '89', 'Hoosick ST', 'Troy', 'NY', 12180, 7344),
			(661482719, 'Gregory', 'Gregories', '78', '15TH ST', 'Troy', 'NY', 12180, 6289),
			(661178923, 'Haru', 'McDevitt', '77', '10Th ST', 'Troy', 'NY', 12180, 7322),
			(661092891, 'Nancy', 'Chan', '78', '10Th ST', 'Troy', 'NY', 12180, 7322),
			(661983790, 'James', 'McDevitt', '101', 'Eagle ST', 'Troy', 'NY', 12180, 1918),
			(662019398, 'Hannah', 'Gold', '2789', 'Null ST', 'Troy', 'NY', 12180, 1910),
			(661090280, 'Mandy', 'Goodheart', '887', 'People ST', 'Troy', 'NY', 12180, 5677),
			(661090109, 'Jason', 'Mooroe', '887', 'People ST', 'Troy', 'NY', 12180, 5677),
			(661187801, 'July', 'McLaghling', '667', 'People ST', 'Troy', 'NY', 12180, 5677),
			(661876421, 'Hanna', 'Platon', '454', '8Th ST', 'Troy', 'NY', 12180, 8600);
		");

    	$sql -> execute();

    	print("Loaded Successfully!");
 	}
    $sql = null;

	}
	catch(PDOException $e)
    {
    	echo "Connection failed: " . $e->getMessage();
    }
?>