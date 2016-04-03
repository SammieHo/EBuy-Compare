window.onload=function(){
	

	favor.onclick = function(){

		var favor = document.getElementById('favor');
		
		if (favor.innerHTML == "收藏") {
			favor.style.color = "red";
			favor.innerHTML = "";
			favor.innerHTML = "已收藏";
		}
		else{
			favor.style.color = "#5978CF";
			favor.innerHTML = "";
			favor.innerHTML = "收藏";
		}
	}

	$("#liuyan").click(function() {
	    $("#footerNavShow").hide();
	    $("#liuyan-footer").show(200);
	});
	$("#fasong").click(function() {
	    $("#liuyan-footer").hide();
	    $("#footerNavShow").show(200);
	});

}


// 限制字数，
// which=this：当前onkey 输入的字数
// maxChars：最大长度
// xianzhiname：显示现还有多少字的模块id
	function checkLength(which,maxChars,xianzhiname) {

	    if (which.value.length > maxChars) {
	        alert("您出入的字数超多限制!");
	        // 超过限制的字数了就将 文本框中的内容按规定的字数 截取
	        which.value = which.value.substring(0, maxChars);
	        return false;
	    } else {
	        var curr = maxChars - which.value.length; //maxChars 减去 当前输入的
	        var aabb = document.getElementById(  xianzhiname ).innerHTML= curr.toString();
	        return true;
	    }
	}


	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})