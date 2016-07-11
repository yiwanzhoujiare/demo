$(function(){
    //开关按钮
    $(".myBtn").on("mouseenter",function(){
        $(this).css({
            "background-color":"red"
        });
        $(".abc").css({
            "background-color":"red",
            "color":"#fff"
        });
        $("p").animate({
            "left":"24px"
        },500)
    });
    $(".myBtn").on("mouseleave",function(){
        $(this).css({
            "background-color":"#fff"
        });
        $(".abc").css({
            "background-color":"#fff",
            "color":"#555"
        });
        $("p").animate({
            "left":"-3px"
        },500)
    });
    //雪碧图出现
    $(".i1").hide();
    $("form .myInput input:first").focus(function(){
        $(".i1").show();
    });
    $("form .myInput input:first").blur(function(){
        $(".i1").hide();
    });
    $(".i3").hide();
    $("form .myInput input:eq(1)").focus(function(){
        $(".i3").show();
    });
    $("form .myInput input:eq(1)").blur(function(){
        $(".i3").hide();
    });
    $(".i4").hide();
    $("form .myInput input:last").focus(function(){
        $(".i4").show();
    });
    $("form .myInput input:last").blur(function(){
        $(".i4").hide();
    });
//   更换雪碧图
    /*var flag=true;
    $(".mdl").click(function(){
        if(flag){
            $(".mdl i").addClass("i5");
            flag=false;
        }else{
            $(".mdl i").removeClass("i5").addClass("i6");
            flag=true;
        }
    })*/
    $(".mdl").click(function() {
        $(".mdl i").toggleClass("i5");
    });
//ajax请求登录数据库：
$("input[type='submit']").click(function(){
	var usernameValue = f.username.value;
	var passwordValue = f.pwd.value;
$.ajax({
		type:"post",
		url:"phpSql/jdlogin.php",
		success:function(data){
			if((JSON.parse(data)=="ok")&&(yzmValue="ox6m")){
				alert("登录成功");
			}else if(JSON.parse(data)=="false"){
				alert("用户名或者密码错误");
			}
		},
		data: {
			username: usernameValue,
			pwd: passwordValue
		}
	})
})
});
