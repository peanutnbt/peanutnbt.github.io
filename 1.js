 $(function(){
 	$(window).scroll(function(){
 		if($('body').scrollTop()>50){
 			$('.navbar').addClass('white');
 			$('.navbar-brand').addClass('logo');
 			$('.nut').addClass('nutcam');
 			$('.nav-item.active .nav-link').addClass('black');
 			$('.nav-item .nav-link').addClass('black1');
 		}
 		else{
 			$('.navbar').removeClass('white');
 			$('.navbar-brand').removeClass('logo');
 			$('.nut').removeClass('nutcam');
 			$('.nav-item.active .nav-link').removeClass('black');
 			$('.nav-item .nav-link').removeClass('black1');
 		}
 		if($('body').scrollTop()>700){
 			$('.navbar').addClass('keduoi');
 		}
 		else{
 			$('.navbar').removeClass('keduoi');
 		}
 	})
 	$(function(){
 		$('.lentren').click(function(){
 			$('body').animate({scrollTop:0});
 			return false;
 		})
 	})
 	$(function(){
 		$(window).scroll(function(){
 			if($('body').scrollTop()>300){
 				$('.lentren').addClass('hien');
 			}
 			else{
 				$('.lentren').removeClass('hien');
 			}
 		})
 	})
})

