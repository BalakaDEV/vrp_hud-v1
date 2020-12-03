$(document).ready(function(){
	window.addEventListener("message",function(event){
		if (event.data.active == true){
			$("#displayHud").css("display","block");
			$(".healthHover").css("width", event.data.health + "%");
			$(".armourHover").css("width", event.data.armour + "%");
			$(".hungerHover").css("width", event.data.hunger + "%");
			$(".thirstHover").css("width", event.data.thirst + "%");

			if (event.data.health == 1){
				$(".healthHover").css("width","0");
			}

			$("#displayInfos").html(event.data.radio+"<br>Voice: <b>"+event.data.voice+"</b><br>"+event.data.day+"</b>, <b>"+event.data.month+"</b> - "+event.data.hour+":"+event.data.minute+"<br><b>"+event.data.street+"</b>");

			if (event.data.vehicle == true){
				$("#displayVehicle").css("display","block");

				if (event.data.seatbelt == true){
					$("#displayVehicle").html("<b>F</b>"+event.data.fuel+"  <s>MPH</s>"+event.data.speed);
				} else {
					$("#displayVehicle").html("<b>F</b>"+event.data.fuel+"  <b>MPH</b>"+event.data.speed);
				}
			} else {
				$("#displayVehicle").css("display","none");
			}
		} else {
			$("#displayHud").css("display","none");
			$("#displayVehicle").css("display","none");
		}

		if (event.data.movie == true){
			$("#movieTop").css("display","block");
			$("#movieBottom").css("display","block");
			$("#displayLogo").css("display","none");
		} else {
			$("#movieTop").css("display","none");
			$("#movieBottom").css("display","none");
			$("#displayLogo").css("display","block");
		}
	})
});