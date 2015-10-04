
function common_ajaxform(obj,modalid)
{
	
if(true === $(obj).parsley().validate('block1'))
	 {	
 $('#overlay').fadeIn(800);
 var params = $(obj).serialize();
   //console.log(params);
   $.ajax({
			type : 'POST',
			url  : ILBASE+'lancer_custom_ajax.php',
			data : params,
			success  : function(data)
			{
				$('#overlay').fadeOut(800);
				//console.log(data);
				if(data.error)
				{
					if(data.warning != '')
				{
				  alert(data.warning);
				  return false;	
				}
				 reloadToPage(data.page)
				}
				else
				{
				  $('.modal').modal('hide');
								  	
				}
			}
		});		
	 }
}
