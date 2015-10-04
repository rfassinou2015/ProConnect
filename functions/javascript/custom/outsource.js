$(function	()	{
	// Popover
	$("[data-toggle=popover]").popover();
	
	// Tooltip
	$("[data-toggle=tooltip]").tooltip();

	//scroll to top of the page
	$("#scroll-to-top").click(function()	{
		$("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	});

	//upload file
	$('.upload-demo').change(function()	{
		var filename = $(this).val().split('\\').pop();
		$(this).parent().find('span').attr('data-title',filename);
		$(this).parent().find('label').attr('data-title','Change file');
		$(this).parent().find('label').addClass('selected');
	});

	$('.remove-file').click(function()	{
		$(this).parent().find('span').attr('data-title','No file...');
		$(this).parent().find('label').attr('data-title','Select file');
		$(this).parent().find('label').removeClass('selected');

		return false;
	});	
	headmsgLoader();
	
});

$(window).load(function() {
		
	//Pace.stop();	
		
	// Fade out the overlay div
	$('#overlay').fadeOut(800);
	
	$('body').removeClass('overflow-hidden');

	//Enable animation
	$('.wrapper').removeClass('preload');
});

$(window).scroll(function(){
		
	 var position = $(window).scrollTop();
	 //console.log(position);
	 //Display a scroll to top button
	if(position >= 200)	{
		$('#scroll-to-top').addClass('active');
		$('.freelancer-title-small').addClass('active');

		$('.top-navigation').addClass('minimize');
		$('.sidebar-menu').addClass('minimize-topnav');
		$('.message-body-header').addClass('minimize-topnav');
	 }
	 else	{
		$('#scroll-to-top').removeClass('active');
		$('.freelancer-title-small').removeClass('active');

		$('.top-navigation').removeClass('minimize');
		$('.sidebar-menu').removeClass('minimize-topnav');
		$('.message-body-header').removeClass('minimize-topnav');
	 }
});
function parsleyLeftload()
{
	var obj = '.leftchar';
	var left = parseInt($(obj).parent().find('.left').html());
	
	var nleft = 0;
	//console.log(typeof($(obj).val()));
    if(typeof($(obj).val()) !== 'undefined')
	{
	 var y = $(obj).val();
	 nleft = parseInt(y.length);
	}
	
    var r = left-nleft;
    if(r <= 0)
    {
	   $(obj).parent().find('.left').html(0);
	 return false;   
    }
   	$(obj).parent().find('.left').html(r);
}
function parsleyLeft(obj)
{
   var left = parseInt($(obj).attr('maxlength'));
   var nleft = parseInt($(obj).val().length);
   var r = left-nleft;
   console.log(r);
   if(r <= 0)
   {
	   $(obj).parent().find('.left').html(0);
	 return false;   
   }
   	$(obj).parent().find('.left').html(r);
	
}
function saveChanges(content)
{
	 $('.verification-text').remove();
	 $('.save-changes-header').hide();
	 if(content)
	 $('.main-container').prepend('<div class="container verification-text save-changes-header"> '+content+' </div>');
	 else
	 $('.main-container').prepend('<div class="container verification-text save-changes-header"> Your changes have been saved </div>');
	 $("html, body").animate({ scrollTop: 0 }, 600);
	 
	 setTimeout(function(){$('.verification-text').fadeOut(800)},5000);
	 
	 if((FormName) || FormName != '')
	 Confirm(FormName);
	 
	 if(confirmhref)
	 document.location = $(confirmhref).attr('href');
	 
	 
	// return false;
	
}
function saveChangesMade(content)
{
	 $('.verification-text').remove();
	 $('.save-changes-header').hide();
	 if(content)
	 $('.main-container').prepend('<div class="container verification-text save-changes-header"> '+content+' </div>');
	 else
	 $('.main-container').prepend('<div class="container verification-text save-changes-header"> Your changes have been saved </div>');
	 $("html, body").animate({ scrollTop: 0 }, 600);
	 
	// setTimeout(function(){$('.verification-text').fadeOut(800)},5000);
	 
	 if((FormName) || FormName != '')
	 Confirm(FormName);
	 
	 if(confirmhref)
	 document.location = $(confirmhref).attr('href');
	 
	 
	// return false;
	
}
var FormName = '';
var form_original_data = '';
var ActionConfirm = '';

function Confirm(FormNames)
{
	
	//alert(FormNames);
	FormName = FormNames;
    form_original_data = $(FormName).serialize();
	ActionConfirm = FormName +' .ActionConfirm';
	
	//alert(FormName);
}

function checkiconNonempty()
{
	
	$('.has-icon-alert input[type=text]').each(function()	{
			if($(this).val() != '' && $(this).val() != null)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		
		$('.has-icon-alert input[type=email]').blur(function()	{
			if($(this).val() != '' && $(this).val() != null)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		$('.has-icon-alert input[type=password]').blur(function()	{
			if($(this).val() != '' && $(this).val() != null)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});

		$('.has-icon-alert textarea').each(function()	{
			if($(this).val() != '' && $(this).val() != null && $(this).val().length > 100)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		
		$('.has-icon-alert select').each(function()	{
		
			if($(this).val() != '' && $(this).val() != null)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});

		
	
}
function validateEmail(sEmail) {
	var filter =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,11})?$/;
	if (filter.test(sEmail)) {
	return true;
	}
	else {
	return false;
	}
}
function checkicon()
{
checkiconNonempty();
//Display Check Icon
		$('.has-icon-alert input[type=text]').blur(function()	{
			if($(this).val() != '' && $(this).val() != null)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		$('.has-icon-alert input[type=email]').blur(function()	{
			if($(this).val() != '' && $(this).val() != null && validateEmail($(this).val()))
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		$('.has-icon-alert input[type=password]').blur(function()	{
			var val = $(this).val();
			if($(this).attr('id') == 'password2' && $('#password').length == 1)
			{
                if(val != '' && $(this).val() != null && val == $('#password').val() && val.length > 7)
                {
					$(this).parent().find('.form-check').addClass('active');
				}
				else
				{
					$(this).parent().find('.form-check').removeClass('active');
				}
			}
			else if($(this).attr('id') == 'password' && $('#password2').length == 1)
			{
                if(val != '' && val != null && val == $('#password2').val()  && val.length > 7)
                {
					$(this).parent().find('.form-check').addClass('active');
					$('#password2').parent().find('.form-check').addClass('active');
				}
				else if(val != '' && val != null  && val.length > 7)
				{
					$(this).parent().find('.form-check').addClass('active');
					$('#password2').parent().find('.form-check').removeClass('active');
				}
				else
				{
					$(this).parent().find('.form-check').removeClass('active');
					$('#password2').parent().find('.form-check').removeClass('active');
				}
			}
			else
			{	
				//alert(1);
				if($(this).val() != '' && $(this).val() != null)
					$(this).parent().find('.form-check').addClass('active');
				else
					$(this).parent().find('.form-check').removeClass('active');
			}
		});

		$('.has-icon-alert textarea').blur(function()	{
			if($(this).val() != '' && $(this).val() != null && $(this).val().length > 100)
				$(this).parent().find('.form-check').addClass('active');
			else
				$(this).parent().find('.form-check').removeClass('active');
		});
		
		$('.has-icon-alert select').change(function()	{
			
			if($(this).val() != '' && $(this).val() != null)
			{
				$(this).parent().find('.form-check').addClass('active');
			}
			else
			{
				
				$(this).parent().find('.form-check').removeClass('active');
			}
		});

        $(document).on('click', '.has-icon-alert .skill-tag', function(e) {
					$('#skillNeeded').parent().find('.form-check').addClass('active');
		});
	
}

function isTextSelected(input) {
    if (typeof input.selectionStart == "number") {
        return input.selectionStart == 0 && input.selectionEnd == input.value.length;
    } else if (typeof document.selection != "undefined") {
        input.focus();
        return document.selection.createRange().text == input.value;
    }
}

 function amtOnly(evt,tis) 
 {

	if(isTextSelected(tis) == true) {
		$(tis).val('');
	}
	
	if(evt.which > 0 && evt.which !=8)
	{
	 
    if ((evt.which != 46 || $(tis).val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) {
        evt.preventDefault();
    }

    var text = $(tis).val();

    if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 2)) {
        evt.preventDefault();
    }
	}

 }
 
 function headmsgLoader()
 {
	 //console.log(1);
	 $.ajax({
			type : 'POST',
			url  : ILBASE+'messages_ajax.php',
			data : {cmd : '_load_header_msg'},
			dataType : 'json',
			success  : function(data)
			{
				console.log(data);
				if(!data.error)
				{
				  	$('.notify_header').html(data.notify);
					$('.msg_header').html(data.msg);
				}
			}
		});	
	 
 }
 function markNotificationRead(tis)
{
	
   $.ajax({
			type : 'POST',
			url  : ILBASE+'client_lancer.php',
			data : {cmd : '_notification_mark_as_read'},
			success  : function(data)
			{
				if(data.error)
				{}
				else
				{
				  $(tis).find('span').remove();
								  	
				}
			}
		});		
}
	 
function loaderOutsource(op,obj)
{
	if(op == 'open')
	{
		$(obj).html('<div id="overlay-local"><div class="overlay-local-inner"><i class="ion-looping" style="font-size: 32px;"></i></div></div>');
	}	
	else
	{
		$(obj+' #overlay-local').remove();
	}	
}
function AppendloaderOutsource(op,obj)
{
	if(op == 'open')
	{
		$(obj).append('<div id="overlay-local"><div class="overlay-local-inner"><i class="ion-looping" style="font-size: 32px;"></i></div></div>');
	}	
	else
	{
		$(obj+' #overlay-local').remove();
	}	
}