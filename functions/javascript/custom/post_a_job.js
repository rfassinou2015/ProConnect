// JavaScript Document

$(function()
{
	
});
			 

function addProject(obj)
{
	
  var parms =  $(obj).serialize();
  //console.log(parms);
  $('#overlay').fadeIn(800);
  $.ajax({
        type : 'POST',
        url  : ILBASE+'lancer_ajax.php',
        data : parms,
        dataType : 'json',
        success  : function(data)
        {
		   if(data.error)
            {
				$('#overlay').fadeOut(800);
				$(data.field).addClass('errorscript');
				//alert(data.warning);
				if(data.warning != '')
				{
				  alert(data.warning);
				  return false;	
				}
			}
            else
            {
                 
				      reloadToPage(data.page)
			}
			
			//acceptRegister();
        }
    });
	
}

function loginAddProject(obj)
{
	
  var parms =  $(obj).serialize();
  //console.log(parms);
  $('#overlay').fadeIn(800);
  $.ajax({
        type : 'POST',
        url  : ILBASE+'login.php',
        data : parms,
        dataType : 'json',
        success  : function(data)
        {
		   if(data.error)
            {
				$('#overlay').fadeOut(800);
				$(data.field).addClass('errorscript');
				//alert(data.warning);
				if(data.warning != '')
				{
				  alert(data.warning);
				  return false;	
				}
				reloadToPage(data.page);
				
			}
            else
            {
				access = data.access;
				addProject('#post-form');
                 
				     // reloadToPage(data.page)
			}
			
			//acceptRegister();
        }
    });
	
}

function registerAddProject(obj)
{
	
	
	if(true === $('#registerform').parsley().validate('block1'))
	 {
		 
		 
    $('#overlay').fadeIn(800);
    var parms = $('#registerform').serialize()+'&knownby='+$('#knownbycopy').val();
	//console.log(parms);
    $.ajax({
        type : 'POST',
        url  : ILBASE+'lancer_ajax.php',
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
				//alert(data.warning);
				if(data.warning != '')
				{
				  alert(data.warning);
				  return false;	
				}
			}
            else
            {
                 $("#email").removeClass('scripterror'); 
				 $("#username").removeClass('scripterror');
				 access = data.access;
				 addProject('#post-form');
				     // reloadToPage(data.page)
				// setTimeout(function(){ window.location = 'index.php'; },3000);
                 //return true;
			    
            }
			
			//acceptRegister();
        }
    });
	 }
}



function alignSubCategory(obj,subcid,jobid)
{
  var parms = '';
  var cid = $(obj).val();
  
  
  $('#cid').attr('disabled',true).addClass('hidden'); 
  if($('#pid').val() == '')
  {
  	return false;
  }	
  $.ajax({
        type : 'POST',
        url  : ILBASE+'lancer_ajax.php?cmd=_send_category_array&cid='+cid,
        data : parms,
        dataType : 'json',
		success  : function(data)
        {
		   $('#cid').html('<option value="">Please Select</option>');
		   $.each( data.category, function( key, value ) {
			   
			   $('#cid').append('<option value="'+value.cid+'">'+value.title+'</option>');
		   });
			$('#cid').html(data.html);
            $('#cid').attr('disabled',false).removeClass('excludeparsley hidden'); 
			 if(parseInt(subcid)>0)
			 {
             $('.cid').addClass('active');
             $('#cid').val(subcid);
			 $('#cid').select2({	minimumResultsForSearch: -1   });
			 }
		    if(parseInt(jobid)>0)
			add_skillsFromCategories(cid,jobid);
			else
			add_skillsFromCategories(cid,0);
			 
		  
			//acceptRegister();
        }
    });
}

function logreg(stepby)
{
	$('.register').hide();
	$('.login').hide();
	$('#knownby').hide();
	if(stepby == 1)
	{
	step = 1;
	$('.register').show();
	$('#registerform input').removeClass('excludeparsley');
	$('#knownby').show();
	}
	else if(stepby == 2)
	{
	step = 2;
	$('.login').show();
	$('#registerform input').addClass('excludeparsley');
	}
}







