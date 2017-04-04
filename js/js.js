//四个圆初始化
$(function(){
	$('.ball ul li').css('background-position',function(){
		if($(this).index()==0){
			return '2px '+(-4*168)+'px';
		}else{
			return '2px '+(-$(this).index()*168)+'px';
		}
	});
});
//下拉菜单
//合并
$("#nav").on("mouseenter mouseleave","li",function(){
	$(this).find('a:first').toggleClass('nav-dlCur');
	$(this).find('dl:first').slideToggle(300);
})

//flash 淡入淡出   定时器清除与给予
$('#flash').mouseenter(function(){
	window.clearInterval(flashInterval);
	$('.flash-left,.flash-right').fadeIn();
});
$('#flash').mouseleave(function(){
	flashInterval = window.setInterval(function(){
		$('.flash-right').click();
	},3000)
	$('.flash-left,.flash-right').fadeOut();
});
//图片小按钮
$('.flash-btn').on("mouseenter","span",function(){
	$(this).addClass('flash-btnCur').siblings('span').removeClass('flash-btnCur');
	$('.flash-img li').eq($(this).index()).fadeIn().siblings('li').fadeOut();
});
//左右图片按键
$('.flash-right').click(function(){
	if($('.flash-btnCur').index()==2){
		$('.flash-img li').eq(0).fadeIn().siblings('li').fadeOut();
		$('.flash-btn span').eq(0).addClass('flash-btnCur').siblings('span').removeClass('flash-btnCur');
	}else{
		$('.flash-img li').eq($('.flash-btnCur').index()+1).fadeIn().siblings('li').fadeOut();
		$('.flash-btn span').eq($('.flash-btnCur').index()+1).addClass('flash-btnCur').siblings('span').removeClass('flash-btnCur');
	}
});
$('.flash-left').click(function(){
	if($('.flash-btnCur').index()==0){
		$('.flash-img li').eq(2).fadeIn().siblings('li').fadeOut();
		$('.flash-btn span').eq(2).addClass('flash-btnCur').siblings('span').removeClass('flash-btnCur');
	}else{
		$('.flash-img li').eq($('.flash-btnCur').index()-1).fadeIn().siblings('li').fadeOut();
		$('.flash-btn span').eq($('.flash-btnCur').index()-1).addClass('flash-btnCur').siblings('span').removeClass('flash-btnCur');
	}
});
//图片自动轮播
var flashInterval = window.setInterval(function(){
	$('.flash-right').click();
},3000)
//四个圆移入移出事件
$('.ball ul').on("mouseenter","li",function(){
	$(this).stop().animate({width:'502px'},500).siblings('li').stop().animate({width:'167px'},500);
	$(this).css('background-position',function(){
		return '2px '+(-672-$(this).index()*168)+'px';
	}).siblings('li').css('background-position',function(){
		return '2px '+(-$(this).index()*168)+'px';
	})
});
$('.about-left').mouseenter(function(){
	$(this).find('img').stop().animate({width:'591px',top:'-50px',left:'-50px'},800);
	$(this).find('p').stop().animate({bottom:'0'},800);
});
$('.about-left').mouseleave(function(){
	$(this).find('img').stop().animate({width:'491px',top:'0',left:'0'},800);
	$(this).find('p').stop().animate({bottom:'-112px'},800);
});
$('.about-right-leftbtn,.client-img-leftbtn').mouseenter(function(){
	$(this).css('background-position','-78px -151px');
});
$('.about-right-rightbtn,.client-img-rightbtn').mouseenter(function(){
	$(this).css('background-position','-39px -151px');
});
$('.about-right-leftbtn,.client-img-leftbtn').mouseleave(function(){
	$(this).css('background-position','0 -151px');
});
$('.about-right-rightbtn,.client-img-rightbtn').mouseleave(function(){
	$(this).css('background-position','-117px -151px');
});
$('.about-right-rightbtn').click(function(){
	if($('.about-cur').index()==2){
		$('.about-right ul li').eq(0).addClass('about-cur').fadeIn().siblings('li').removeClass('about-cur').fadeOut();
	}else{
		$('.about-right ul li').eq($('.about-cur').index()+1).addClass('about-cur').fadeIn().siblings('li').removeClass('about-cur').fadeOut();
	}
});
$('.about-right-leftbtn').click(function(){
	if($('.about-cur').index()==0){
		$('.about-right ul li').eq(2).addClass('about-cur').fadeIn().siblings('li').removeClass('about-cur').fadeOut();
	}else{
		$('.about-right ul li').eq($('.about-cur').index()-1).addClass('about-cur').fadeIn().siblings('li').removeClass('about-cur').fadeOut();
	}
});

$('.client-img-leftbtn').click(function(){
	$('.client-img li:first').animate({marginLeft:'-201px'},300,function(){
		$(this).appendTo('.client-img');
		$(this).css({marginLeft:'0'});
	});
});
$('.client-img-rightbtn').click(function(){
	$('.client-img li:last').css({marginLeft:'-201px'});
	$('.client-img li:last').prependTo('.client-img');
	$('.client-img li:first').animate({marginLeft:'0'},300);
});

$(window).scroll(function(){
	var winH = $(this).height();//窗口可视高度
	var scrH = $('body').scrollTop()+$('html').scrollTop();//html兼容IE
	if(scrH>=winH){
		$('.to-top').fadeIn(200);
	}else{
		$('.to-top').fadeOut(200);
	}
});
$('.to-top').click(function(){
	$('html,body').animate({scrollTop:'0'},200);
	
});
