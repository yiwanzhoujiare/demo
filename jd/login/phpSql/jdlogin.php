<?php
	require("runSql.php");
	$username=$_POST["username"];
	$pwd=$_POST["pwd"];
	$sql="SELECT l.id, l.username, l.`pwd` FROM jdlogin AS l WHERE l.`username`='$username' AND l.`pwd`='$pwd'";
	mySqlArgu($sql, function($r){
		$data=mysql_fetch_array($r);
		if($data[0]){
	   echo json_encode("ok");
     }else {
     	echo json_encode("false");
     }	
	})
	?>