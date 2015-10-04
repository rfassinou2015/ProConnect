var confirmhref = '';

$('a').bind('click', function() 
{
	// var form_original_data = $('#'+form_name).serialize();
	//alert(form_original_data);
	if(!($(this).hasClass("dnd")))
	{	
	if(!(FormName) || FormName == '')
	{
	 if($(this).attr('href') != 'javascript:void(0);' &&  $(this).attr('href') != 'javascript:void(0)' ){
	  document.location = $(this).attr('href');
	 }
	}
	else
	{	
		 if(!($(this).hasClass("btn")) && !($(this).attr("data-toggle")) && !($(this).hasClass("dnd")))
		 { 
			   if ($(FormName).serialize() != form_original_data && form_original_data!='' && $(FormName).serialize()!='') 
			   { 
				   /*if(FormName == '#message_form')
				   confirmjsI(this);
				   else
				   {
				   confirmjs(ActionConfirm,this);
				   }*/
				   confirmjsI(this);
		           return false;
		      } 
		   
		 }
	 
    }
	}
})


function confirmjsI(href)
{
	var confirmSavepage = $('.ActionConfirm').length;
	if(confirmSavepage>0)
	$('#PerformConfirActionId').html('Save Changes');
	else
	$('#PerformConfirActionId').html('Stay on this page');
	confirmhref = href;
	$('#confirmNavigation').modal('show');
			//$(FormName)[0].reset();
			//document.location = $(href).attr('href');
			
       
	
	
}


function confirmactionSuccess()
{
	$('#confirmNavigation').modal('hide');
	$(FormName)[0].reset();
	document.location = $(confirmhref).attr('href');
			
	
}


function PerformConfirAction()
{
	//alert(11);
	//alert(ActionConfirm);
	$('.modal').modal('hide');
	$(ActionConfirm).trigger('click');
			
	
}
