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
    $("form .myInput input:eq(3)").focus(function(){
        $(".i4").show();
    });
    $("form .myInput input:eq(3)").blur(function(){
        $(".i4").hide();
    });
    $(".i5").hide();
    $("form .myInput input:last").focus(function(){
        $(".i5").show();
    });
    $("form .myInput input:last").blur(function(){
        $(".i5").hide();
    });
  
//ajax请求登录数据库：
   
	$(f.username).blur(function(){
		var sjyzm=f.sjdx.value;
		var yzmValue=f.yzm.value;
		var usernameValue = f.username.value;
		var passwordValue = f.pwd.value;
		$.ajax({
			type:"get",
			url:"phpSql/jdRegister.php?o=checkname",
			data:{
				username:usernameValue
			},
			success:function(data){
				if(JSON.parse(data)==0){
					$(".sp1").html("该手机号已存在").css({
							color:"#FF0000",
							border:"1px solid #FF0000",
							"border-radius":"2px"
					});
				}else{
					$(".sp1").html("可使用的手机号").css({
							color:"#00FFA0",
							border:"1px solid #00FFA0",
							"border-radius":"2px"
						});
				}
			}
		});
	})
	$("input[type='submit']").click(function(){
		var sjyzm=f.sjdx.value;
		var yzmValue=f.yzm.value;
		var usernameValue = f.username.value;
		var passwordValue = f.pwd.value;
        	$.ajax({
        		url:"phpSql/jdRegister.php?o=reg",
        		type:"post",
        		success:function(){
        			alert("注册成功")
        		},
        		data:{
        			username:usernameValue,
        			pwd:passwordValue
        		}
        	});
       });
});
