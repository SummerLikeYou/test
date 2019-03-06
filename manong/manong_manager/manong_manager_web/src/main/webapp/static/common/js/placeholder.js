// JavaScript Document
$(function(){
		supportPlaceholder='placeholder'in document.createElement('input');
		var placeholder=function(input){
		var text = input.attr('placeholder');
		defaultValue = input.val();
			if(!defaultValue){     
				input.val(text).addClass("phcolor");     
			}  
			
		input.focus(function(){ 
			if(input.val() == text){      
				$(this).val("");
			}
		});
		input.blur(function(){
			if(input.val() == ""){
				$(this).val(text).addClass("phcolor");
			}
		});
		input.closest("form").submit(function(){
			if(input.val() == text){
				input.val("");
			}
		});
	//输入的字符不为灰色  
	   input.keydown(function(){
			$(this).removeClass("phcolor");
		});
	};
	//当浏览器不支持placeholder属性时，调用placeholder函数   
	if(!supportPlaceholder){
		$('input').each(function(){
			text = $(this).attr("placeholder");
				if(text){
					if($(this).attr("type") == "text"){
						placeholder($(this));
					}
				}
			});
		}
	});