
function recoverpassword(obj)
{
	$('#overlay').fadeIn(800);
   var params = $(obj).serialize();
   //console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'client_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				$('#overlay').fadeOut(800); 
				//console.log(data);
				if(data.error)
				{
					//alert(data.warning);
					$('.error_recovery').html(data.warning);
				}
				else
				{
					hideall('step2');
					//$('.error_recovery').html(data.links);
					//reloadToPage(data.page);
					 //autoComplete();	
					 
				}
			}
		});		
}

function passwordchange(obj)
{
	$('#overlay').fadeIn(800);
   var params = $(obj).serialize();
   //console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'client_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				$('#overlay').fadeOut(800);
				//console.log(data);
				if(data.error)
				{
					//alert(data.warning);
					$('.error_recovery').html(data.warning);
				}
				else
				{
					//hideall('step4');
					reloadToPage(data.page);
					 //autoComplete();	
					 
				}
			}
		});		
}

function hideall(id)
{
	$('#step1').hide();
	$('#step2').hide();
	$('#step3').hide();
	$('#step4').hide();
	
	$('#'+id).show();
}

function emailPreferenceUpdate(obj)
{
	$('#overlay').fadeIn(800);
   var params = $(obj).serialize();
   //console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'client_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				$('#overlay').fadeOut(800);
				//console.log(data);
				if(data.error)
				{
					$('.error_recovery').html(data.warning);
				}
				else
				{    
				    $('#step1').hide();
					$('#step2').show();
					$("html, body").animate({ scrollTop: 0 }, 600);
					 
				}
			}
		});		
}