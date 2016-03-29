var sends = {
	checked:1,
	send:function(){
			var numbers = /^1\d{10}$/;
			var val = $('#phone').val().replace(/\s+/g,""); //获取输入手机号码
			if($('.div-phone').find('span').length == 0 && $('.div-phone a').attr('class') == 'send1'){
				if(!numbers.test(val) || val.length ==0){
					$('.div-phone').append('<span class="error col-sm-3">手机格式错误</span>');
					return false;
				}
			}
			if(numbers.test(val)){
				var time = 60;
				$('.div-phone span').remove();
				function timeCountDown(){
					if(time==0){
						clearInterval(timer);
						$('.div-phone a').addClass('send1').removeClass('send0').html("发送验证码");
						sends.checked = 1;
						return true;
					}
					$('.div-phone a').html(time+"S后再次发送");
					time--;
					return false;
					sends.checked = 0;
				}
				$('.div-phone a').addClass('send0').removeClass('send1');
				timeCountDown();
				var timer = setInterval(timeCountDown,1000);
			}
	}
}