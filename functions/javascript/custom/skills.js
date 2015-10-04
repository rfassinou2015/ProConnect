

function skillsAutoCompleter() {
	
	$("#ac_input_skills").focus(function(){
		$("#ac_input_skills").val('');
	});
	
	   $("#ac_input_skills").autocomplete({
					source: function(request, response) {
						$.ajax({
							url: "lancer_custom_ajax.php?mode=_find_skills_list",
							dataType: "json",
							data: {
								q: $("#ac_input_skills").val()
							},
							success: function(data){						
								response($.map(data,function(item){
									return {										
										label: item.title_eng,
										
										value: item.title_eng, 
										
										cid: item.cid
									}
								}));
							}
						});
					},
					minLength: 1,
					select: function(event, ui) {
						$('#zipcode').val(ui.item.value);
						Skills(ui.item.cid);
											},
					open: function() {
						$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
					},
					close: function() {
						$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
					}
				});
			
	
	
	
  
}

function Skills(cid) {
	
	$('#overlay').fadeIn(800);
	$(".section-2").remove();
	params = {cmd:'_select_skills',cid : cid};
  $.ajax({
			type : 'POST',
			url  : 'lancer_custom_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				$('#overlay').fadeOut(800);
				if(data.error)
				{
								if(data.warning != '')
							   {
								   alert(data.warning);
								  // $('#ac_input_skills').val('');
								   return false;
							   }
							    reloadToPage(data.page);
				}
				else
				{
					
					
									
									
				$('#appendskills').prepend('<div class="skill-tag m-right-10 marginTB-2 parent_'+cid+'">'+data.title+'<a class="remove-skill" onclick="removeskill('+cid+')" class="close">								×</a></div>');
				//$('#ac_input_skills').val('');
				}
			}
		});	
}

function removeskill(cid) {
	$('#overlay').fadeIn(800);
	params = {cmd:'_remove_skills',cid : cid};
	$.ajax({
			type : 'POST',
			url  : 'lancer_custom_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				$('#overlay').fadeOut(800);
				if(data.error)
				{
					if(data.warning != '')
							   {
								   alert(data.warning);
								   return false;
							   }
							    reloadToPage(data.page);
				}
				else
				$('.parent_'+cid).remove();
				
			}
		});	
	
}

function postjobSkillsAutoCompleter() {
	
	$(".skills").focus(function(){
		$(".skills").val('');
	});
		
	   $("#skills").autocomplete({
					source: function(request, response) {
						$.ajax({
							url: "lancer_custom_ajax.php?mode=_find_skills_list",
							dataType: "json",
							data: {
								q: $("#skills").val()
							},
							success: function(data){						
								response($.map(data,function(item){
									return {										
										label: item.title_eng,
										
										value: item.title_eng, 
										
										cid: item.cid
									}
								}));
							}
						});
					},
					minLength: 1,
					select: function(event, ui) {
						
						var skillsum = 0;
						if(ui.item.cid>0)
						{
						$('.skill_check').each(function() {
							
							if($(this).val() == ui.item.cid)
							{
								skillsum = 1;
								/*alert('Selected category has been already added to the list');
								return false;*/
							}
							
						});	
						
						if(skillsum == 0)
						{
						$('#zipcode').val(ui.item.value);
								$('#skill_list .skill_list').html(ui.item.value);
								$('#skill_list input').val(ui.item.cid);
								$('#appendskills').prepend($('#skill_list').html());
								$('#months').focus();
						}
						}
						
						
						},
					open: function() {
						$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
					},
					close: function() {
						$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
					}
				});
			
	
	
	
  
}

function manageCategorySkillsFreelancer(obj,modalid)
{
	
/*if(true === $(obj).parsley().validate('block1'))
	 {	*/
 $('#overlay').fadeIn(400);
 var params = $(obj).serialize();
   console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'lancer_custom_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				
				console.log(data);
				if(data.error)
				{
					$('#overlay').fadeOut(400);
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
				  //saveChanges();
				  if($('.filter-search').length > 0)
				  data.page = 'job-requests';
				  setTimeout(function() {
       reloadToPage(data.page);
}, 1000);	
				   
								  	
				}
			}
		});		
	 /*}*/
}





function add_skillsFromCategories(pid,proID)
{
//alert(proID);
 //$('#overlay').fadeIn(400);
 var params = {cmd : 'skills_list',pid : pid,project_id: proID};
  // console.log(params);
   $.ajax({
			type : 'POST',
			url  : ILBASE+'client_lancer.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				//$('#overlay').fadeOut(400);
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
				
				    $('.select2-search-choice').remove();	  	
					$('#skillNeeded').html(data.html);
					$('.suggestionSkills').html(data.suggest);
					suggested = data.sugcats;
					//console.log(suggested);
					var selectedList = $("#skillNeeded").select2("val");	
					$("#skillNeeded").select2("val", selectedList);
					checkiconNonempty();
										
				}
			}
		});		
	 }
	 
	 
	 

function addLancerSkills(obj)
{
 // $('#overlay').fadeIn(800);
   var params = $(obj).serialize();
   console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'lancer_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				//$('#overlay').fadeOut(800);
				console.log(data);
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
					//saveChanges();
					 
				}
			}
		});		
	
}

function mincontenterror(tis)
{	
//	$(tis).parent().find('ul.parsley-errors-list li').remove();
   // if($(tis).val().length < 100)
	//$(tis).parent().find('ul.parsley-errors-list').html('<li>In order to get the best results, please enter a minimum of 100 characters</li>');
}

function editSkills(rootcid)
{
 // $('#overlay').fadeIn(800);
   var params = {'cmd':'editSkills','rootcid':rootcid};
   console.log(params);
   $.ajax({
			type : 'POST',
			url  : 'lancer_ajax.php',
			data : params,
			dataType : 'json',
			success  : function(data)
			{
				//$('#overlay').fadeOut(800);
				console.log(data);
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
					$('#ajaxskills').html(data.html);
					//$('#editSkills').modal('show');
					//saveChanges();
					 
				}
			}
		});		
	
}

function showhideSkills(rootcid)
{
	    $('.hideskills').hide();
		$('.hideskills_'+rootcid).show();
	
	
}