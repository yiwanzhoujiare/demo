<?php
	require("runSql.php");
	function checkname($n){  //验证用户名唯一性
	    $sql="SELECT id FROM jdlogin WHERE username='$n'";
		mySqlArgu($sql, function($r){
			$data=mysql_fetch_array($r);
			if($data[0]){
				echo json_encode(0);
			}else{
				echo json_encode(1);
			};
		});
	};
	function reg($n,$p){  //注册
		mySqlArgu("INSERT INTO jdlogin (username,pwd) VALUES('$n','$p')",function($r){
			echo $r;
		});
	};
	$order=$_GET["o"];   //制定分发器：先验证再注册
	switch ($order) {
		case 'checkname':  //获得验证内容
			$username=$_GET["username"];
			checkname($username);
			break;
		case 'reg':  //获取注册内容
			$username=$_POST["pwd"];
			$pwd=$_POST["pwd"];
			reg($username, $pwd);
			break;
		default:
			echo "<h1>404 Not Found</h1>";
	}
	?>