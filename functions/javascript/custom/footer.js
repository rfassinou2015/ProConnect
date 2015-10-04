

function checkSessionReloadPopup()
{
	var params = {cmd:'_check_valid_session'}
	$('#overlay').fadeIn(800);
	$.ajax({
	     type : 'POST',
	     url : ILBASE+'lancer_ajax.php?subcmd=_check_valid_session',
	     data : params,
	     dataType : 'json',
	     success : function(data)
	     {
	     	$('#overlay').fadeOut(800);
	     	if(data.success)
	     	{
	     		callBackJs();
	     	}	
	     	else
	     	{
	     		reloadLoginPopup();
	     	}	
	     }
	});
}
function reloadLoginPopup()
{
	
	$('#repopuplogin .modal-title span').html('');
	$('#repopuplogin').modal('show');  
}
function loginAgain()
{
	$('#repopuplogin').modal('hide'); 
	if(true === $('#reLoginform').parsley().validate('block1'))
	 {	
	 	$('#overlay').fadeIn(800);
	 	var params = $('#reLoginform').serialize();
	    $.ajax({
			type : 'POST',
			url  : ILBASE+'lancer_ajax.php?subcmd=session_set',
			data : params,
			dataType:'json',
			success  : function(data)
			{
				//console.log(data);
				 $('#overlay').fadeOut(800);
                 if(data.success)
                 {
                 	callBackJs();
                 }
                 else
                 {
                    $('#repopuplogin .modal-title span').html('Invalid Credential!');
                 	$('#repopuplogin').modal('show'); 
                 }	
			}

		});
	}	
}