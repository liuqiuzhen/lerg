
$(function(){
	//鼠标滑过时的显示隐藏
	
	$(".left-nav h2").each(function(){
		$(this).hover(function(){
			$(this).addClass("active").find(".list01").show();
		},function(){
			$(this).removeClass("active").find(".list01").hide()
		})
	})
	
	//第一个轮播图
	move1();
	function move1(){
		$(".lunbo1 li").clone().appendTo($(".lunbo1"));
		var perw = $(".lunbo1 li").eq(0).width();
		$(".lunbo1").css("width",$(".lunbo1 li").length*perw);
		var i = 0;
		var timer = setInterval(move,3000);
		function move(){
			//clearInterval(timer);
			if(i == $(".lunbo1 li").length/2){
				i = 0;
				$(".lunbo1").css({"left":0});
				
			}	else{
				i++;
			}
			if(i == $(".lunbo1>ul>li").length/2){
				$(".num01 li").eq(0).addClass("active").siblings().removeClass("active");
			}else{
				$(".num01 li").eq(i).addClass("active").siblings().removeClass("active");
			}
			$(".lunbo1").stop(true).animate({"left":-perw*i+"px"},500);
			
		}
		$("#prev").click(function(){
			clearInterval(timer);
			if(i == 0){
				i = $(".lunbo1 li").length/2 - 2;
				$(".lunbo1").css("left",-perw*$(".lunbo1 li").length/2);
			}else{
				i= i-2;
			}
			move();
			timer = setInterval(move,3000);
		})
		$("#next").click(function(){
			clearInterval(timer);
			move();
			timer = setInterval(move,3000);
		})
		
		$(".lunbo1").mouseenter(function(){
			clearInterval(timer);
		})
		$(".lunbo1").mouseout(function(){
			timer = setInterval(move,3000)
		})
		$(".num01 li").click(function(){
			clearInterval(timer);
			i = $(this).index()-1;
			move();
			timer = setInterval(move,3000)
		})	
	}
	
	
	//第二个轮播图
	move2();
	function move2(){
		$(".lunbo2 li").clone().appendTo($(".lunbo2"));
		var perW = $(".lunbo2 li").eq(0).width();
		$(".lunbo2").css("width",$(".lunbo2 li").length*perW);
		var timber = setInterval(run,3000);
		var n =0;
		function run(){
			if(n == $(".lunbo2 li").length/2){
				n = 0;
				$(".lunbo2").css({"left":0});
			}else{
				n++;
			}
			if(n == $(".lunbo2 li").length/2){
				$(".num02 li").eq(0).addClass("active").siblings().removeClass("active");
			}else{
				$(".num02 li").eq(n).addClass("active").siblings().removeClass("active");
			}
			$(".lunbo2").stop().animate({"left":-perW*n+"px"},500);
		}
		$("#prev2").click(function(){
			clearInterval(timber);
			if(n == 0){
				n = $(".lunbo2 li").length/2 - 2;
				$(".lunbo2").css("left",-perW*$(".lunbo2 li").length/2);
			}else{
				n= n-2;
			}
			run();
			timber = setInterval(run,3000);
		})
		$("#next2").click(function(){
			clearInterval(timber);
			run();
			timber = setInterval(run,3000);
		})
		
		$(".lunbo2").mouseover(function(){
			clearInterval(timber);
		})
		$(".lunbo2").mouseout(function(){
			timber = setInterval(run,3000)
		})
		$(".num02 li").click(function(){
			clearInterval(timber);
			n = $(this).index()-1;
			run();
			timber = setInterval(run,3000)
		})
	}
	//右边公告栏
	$(".fenlei li").mousemove(function(){
		$(this).addClass("active").find(".gong").show().end().siblings().removeClass("active").find(".gong").hide();
	})

	//第三个轮播图

	move3();
	function move3(){
		$(".lunbo3 li").clone().appendTo($(".lunbo3"));
		var perWs = $(".lunbo3 li").eq(0).width();
		$(".lunbo3").css("width",$(".lunbo3 li").length*perWs);
		var timbers = setInterval(run3,3000);
		var m =0;
		function run3(){
			if(m == $(".lunbo3 li").length/2){
				m = 0;
				$(".lunbo3").css({"left":0});
			}else{
				m++;
			}
			if(m == $(".lunbo3 li").length/2){
				$(".num03 li").eq(0).addClass("active").siblings().removeClass("active");
			}else{
				$(".num03 li").eq(m).addClass("active").siblings().removeClass("active");
			}
			$(".lunbo3").stop().animate({"left":-perWs*m+"px"},500);
		}
		$("#prevs").click(function(){
			clearInterval(timbers);
			if(m == 0){
				m = $(".lunbo3 li").length/2 - 2;
				$(".lunbo3").css("left",-perWs*$(".lunbo3 li").length/2);
			}else{
				m= m-2;
			}
			run3();
			timber = setInterval(run3,3000);
		
		})
		$("#nexts").click(function(){
			clearInterval(timbers);
			run3();
			timbers = setInterval(run3,3000);
		
		})
		
		$(".lunbo3").mouseenter(function(){
			clearInterval(timbers);
		})
		$(".lunbo3").mouseout(function(){
			timber = setInterval(run3,4000)
		})
		$(".num03 li").click(function(){
			clearInterval(timbers);
			m= $(this).index()-1;
			run3();
			timbers = setInterval(run3,4000)
		})
	}
})














