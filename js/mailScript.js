 $(function () { 
			$(document).ready(function() {


 $("#paypalButtonWeiter").click(function() {
	$("#sendButton").trigger("click");
});

 

$("#sendButton").click(function() {
    var data = {
    				message: $("#form_msg").val(),
    				email: $("#form_email").val(),
    				name: $("#form_name").val(),
                    
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