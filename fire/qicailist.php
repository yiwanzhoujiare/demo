<?php
$con = mysql_connect("127.0.0.1:3306","root","");
mysql_select_db("test");
$sql = "SELECT COUNT(0) FROM qicai";
$r = mysql_query($sql);
echo mysql_fetch_array($r)[0];
mysql_free_result($r);
mysql_close($con);
?>