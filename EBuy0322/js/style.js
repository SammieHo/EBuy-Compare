window.onload=function(){
	var favor = document.getElementById('favor');

	favor.onclick = function(){
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

$(document).pjax('a', '#container', {
    fragment: '#main',
    timeout: 8000
});
