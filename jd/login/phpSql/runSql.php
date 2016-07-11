<?php
	require("basicConfig.php");
    function mySqlArgu($sql,$fn){
    $con=mysql_connect($GLOBALS["MYSQL_SERVICE"],$GLOBALS["MYSQL_USERNAME"],$GLOBALS["MYSQL_USERPASSWORD"]);
    if (!$con) {//判断是否连接成功
	die("could not connect:" . mysql_error());
}
    mysql_select_db($GLOBALS["MYSQL_DATABASE"]); //选择表名
    mysql_query("SET NAMES utf8");
    $r = mysql_query($sql);//将结果集传入外部函数中, 在外部函数进行解析操作
    $fn($r);   //调用$fn2函数
    mysql_free_result($r);  //释放结果
    mysql_close($con);   //关闭连接
	}
?>
	