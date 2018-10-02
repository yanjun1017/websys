<?php


$dbuser = "root";
$dbpw = "";
$dbname = 'mysql:host=localhost;dbname=liy40-websyslab9';

try{

	$conn = new PDO($dbname, $dbuser, $dbpw);
	if ($login){
        if(password_verify (  $password , $hash )){
            session_start();//Start PHP Session to aloow access to notes
            echo 'Login Success!!';//go to notes.php
        }
        else{
            echo 'Password check failed, please enter correct password';
        }
    }
} catch (PDOException $e) {
	echo "Connetction failed:" . $e->getMessage();
}

?>