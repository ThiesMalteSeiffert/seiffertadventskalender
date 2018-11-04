$(function () { 
			$(document).ready(function() {


$("#paypalButton2").click(function() {
    $("#sendButton").trigger("click");

});
 

$("#sendButton").click(function() {

    var adressen = $("#form_strasse").val() + $("#form_plz").val() + $("#form_ort").val() + $("#form_land").val();

    var data = {
    				name: $("#form_name").val(),
                    mail: $("#form_email").val(),
                    nameAbweichend: $("#form_nameAbweichend").val(),
                    strasse: $("#form_strasse").val(),
                    plz: $("#form_plz").val(),
                    ort: $("#form_ort").val(),
                    land: $("#form_land").val(),
                    msg: $("#form_msg").val(),
                    
				};

        		$.ajax({
           		 	type: "POST",
            		url: "email.php",
            		data: data,
            		success: function(){
            			$("#formular").fadeOut("fast");
       					$(".formcontainer").append("<div id='sendNotification'>Thank you for the request</div>");
       					$("#sendNotification").fadeIn("slow");
            		}
        		});

    
        		return false;

    });

});

});