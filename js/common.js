
$(function(){
	//关闭自动弹出的小框
	var oBtimer = setInterval(function(){
		//$(".box").show();
	},5000)
	$(".box span").click(function(){
		$(".box").hide();
	})
	
	//扣扣在线咨询左边框显示
	
	$(".butt").click(function(){
		
		//在外面显示
		if($(this).find("span").html() == "《"){
			$(this).find("span").html("》");
			
			$(".butt").animate({"left":"0px"},200);
			$("#zixun").animate({"right":"-172px"},300,function(){
				$(".butt").animate({"left":"-46px"},200);
			});
		}else{
			//隐藏式
			$(this).find("span").html("《");
			$(this).animate({"left":"0px"},300,function(){
				$(".butt").animate({"left":"-36px"},200);
				$("#zixun").show().animate({"right":"0px"},300);
			})
			
		}
	})
	
})
























