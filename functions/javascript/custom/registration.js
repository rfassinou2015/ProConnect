// JavaScript Document

$(function()
{
	$('.freelancer-signup').on('click',function()
	{
		
		validate_signup_form()
		
	});
	blureffect('#first_name');
	blureffect('#last_name');
	blureffect('#email');
	blureffect('#username');
	blureffect('#password');
	blureffect('#password2');
});
function blureffect(obj)
{
  $(obj).on('focus',function()
  {
	  $(obj).removeClass('scripterror'); 
	   
  });
}
function validate_signup_form()
{
	
	/*if($.trim($("#first_name").val()) == ''){
        $("#first_name").addClass('scripterror');       
        return false;
    }
    else{
        $("#first_name").removeClass('scripterror');
    }
	
	if($.trim($("#last_name").val()) == ''){
        $("#last_name").addClass('scripterror');       
        return false;
    }
    else{
        $("#last_name").removeClass('scripterror');
    }
    
    if($.trim($("#email").val()) == ''){
        $("#email").addClass('scripterror');        
        return false;
    }
    
    else{
        $("#email").removeClass('scripterror');
    }    
   if($("#email").val().search("@") == -1 || $("#email").val().search("[.*]") == -1)
	{
				
		$("#email").addClass("scripterror");
                return false; 
	}
	else
	{
		$("#email").removeClass("scripterror");
	}
    if($.trim($("#password").val()) == ''){
        $("#password").addClass('scripterror');        
        return false;
    }
    if($.trim($("#password").val()).length < 4){
        $("#password").addClass('scripterror');       
        return false;
    }
    else{
        $("#password").removeClass('scripterror');
    }
	 if($.trim($("#password2").val()) == ''){
        $("#password2").addClass('scripterror');        
        return false;
    }
    else if($.trim($("#password2").val()).length < 4){
        $("#password2").addClass('scripterror');       
        return false;
    }
	else if($.trim($("#password").val()) != $.trim($("#password2").val())){
        $("#password2").addClass('scripterror');       
        return false;
    }
    else{
        $("#password2").removeClass('scripterror');
    }*/
	
	if(true === $('#registerform').parsley().validate('block1'))
	 {
	check_vendor();
	 }
}
function check_vendor()
{
	
    $('#overlay').fadeIn(800);
    var parms = $('#registerform').serialize();
	//console.log(parms);
    $.ajax({
        type : 'POST',
        url  : 'lancer_ajax.php',
        data : parms,
        dataType : 'json',
        success  : function(data)
        {
			
            if(data.error)
            {
				$('#overlay').fadeOut(800);
				
				if(data.field)
				{
				//$(data.field).addClass('errorscript');
				//alert(data.fieldError);
				$(data.field).next('ul').html(data.fieldError);
				return false;
				
				}
				alert(data.warning);
			}
            else
            {
                 $("#email").removeClass('scripterror'); 
				 $("#username").removeClass('scripterror');
				 
				      reloadToPage(data.page)
				// setTimeout(function(){ window.location = 'index.php'; },3000);
                 //return true;
			    
            }
			
			//acceptRegister();
        }
    });
			 
}


