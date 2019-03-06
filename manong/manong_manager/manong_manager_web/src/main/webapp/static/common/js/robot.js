//定义全局变量.当内容填充时,问题未变不触发请求
var quests='';
//机器人处理js.弹窗控制及聊天
$(function(){
	//右下角功能链接处理
	 $('.open').click(function(){
		 	var url=$(this).attr("url");
		 	window.opener.location.href=url; //刷新父页面
		 	window.close(); 
 	});
	 
	//自动填充
     $("#searchText").autocomplete({
       source: function(request, response){
    	   $.ajax({
               url:root + "/robot/chat",
               dataType: "json",
               type:'POST',
               data: {
                   quest: request.term
               },
               success: function(data) {
                   response($.map(data.searchs, function(item) {
                       return {
                    	   label: item.title,
                    	   value:item.title,
                    	   robot:item.id
                       };
                   }));
               }
           });
       },
        open:function(event,ui){
        	var width=$('#searchText').width();
        	$('#ui-id-1').width(width-100);
        },
     minLength: 2, 
     autoFocus: false,
     delay: 500 
     });
     //enter键提交问题
		document.onkeydown = function(e){ 
		    var ev = document.all ? window.event : e;
		    if(ev.keyCode==13) {
		    	chat();// 处理事件
		     }
		};
		// 点击提交触发聊天
		$('#ask').click(function(){
				chat();
   			});
		
		//左上角,可能遇到的问题
		$('.hosts').click(function(){
			var index=$(this).index('.hosts');
			var $pageNum=$('#pageNum');
			var pageNum=$pageNum.val()*1;
			if(!pageNum){
				pageNum=0;
			}
			//index > 0 下一页  else 上一页
			if(index<1){
				if(pageNum<6){
					return;
				}else{
					pageNum=pageNum-6;
				}
			}else{
				if($('#hostsStep').val()*1<1)
					pageNum=pageNum+6;
				else
					return;
			}
			$pageNum.val(pageNum);
			$.post(root+"/robot/hotSearch",{start:pageNum},function(data){
				if(data.length<6){
					$('#hostsStep').val(1);
				}else{
					$('#hostsStep').val(0);
				}
				appendStr($('#hots'),data);
			},"JSON");
		});
		
		
});
// 拼接字符串.追加入页面
function appendStr(object,data){
	if(data&&data.length>0){
		var hotStr="";
		for(var i=0;i<data.length;i++){
			var robot=data[i];
			title=cutString(robot.title,30);
			hotStr+="<li><a class='problem_title' onclick='Question("+ robot.id+ ");'>"+title+ "</a></li>";
		}
		object.empty().append(hotStr);
	}
}

// 查询具体答案方法
function Question(id){
	$('#searchText').val('');
	$.post(root+"/robot/answer",{id:id},function(data){
		if(data){
			//拼接问题
			/*if (data.userName) {
				username = data.userName;
			}*/
			var server="<div class='server'><div class='server_avatar'></div>" +
			"<div class='server_content'><div class='arrow_left'></div>" +
			"<div class='server_content_text'>"+data.content+"</div></div></div>";
			//拼接答案
			var clientStr="<div class='client'><div class='client_avatar'></div>"+
			"<div class='client_content'><div class='arrow_right'></div>"+
			"<div class='client_content_text'>"+data.title+"</div></div></div>";
			
			var $content=$('#ask_content');
			$content.append(clientStr);
			$content.append(server);
			var scrollTop = $content[0].scrollHeight;
			$content.scrollTop(scrollTop);
		}
	},"JSON");
}

//剪切超出显示范围字符串
function cutString(str, len) {
 // length属性读出来的汉字长度为1
 if(str.length*2 <= len) {
     return str;
 }
 var strlen = 0;
 var s = "";
 for(var i = 0;i < str.length; i++) {
     s = s + str.charAt(i);
     if (str.charCodeAt(i) > 128) {
         strlen = strlen + 2;
         if(strlen >= len){
             return s.substring(0,s.length-1) + "...";
         }
     } else {
         strlen = strlen + 1;
         if(strlen >= len){
             return s.substring(0,s.length-2) + "...";
         }
     }
 }
 return s;
}
function setContent(str) {  
	str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag  
	str.value = str.replace(/[ | ]* /g,' '); //去除行尾空白  
	return str;  
	}

// 聊天功能
function chat() {
	var $quest = $('#searchText');
	var $content = $('#ask_content');
	var ques = setContent($quest.val());
	if (ques == "") {
		return;
	}
	var clientStr="<div class='client'><div class='client_avatar'></div>"+
	"<div class='client_content'><div class='arrow_right'></div>"+
	"<div class='client_content_text'>"+ques+"</div></div></div>";
	
	$content.append(clientStr);
	
	$.post(root + "/robot/chat",{quest : ques},function(data) {
		if (data) {
			/*	保留,用户头像链接
		var username = "游客";
			if (data.userName) {
				username = data.userName;
			}*/
			var search = data.searchs;
			var serverStr="<div class='server'><div class='server_avatar'></div>" +
					"<div class='server_content'><div class='arrow_left'></div>" +
					"<div class='server_content_text'>";
			if (search && search.length > 0) {
				serverStr += " <h3>您要找的问题是不是:</h3><ul>";
				for (var i = 0; i < search.length; i++) {
					var robot = search[i];
					serverStr += "<li><a class='server_iteam' onclick='Question("+ robot.id+ ");' >"+ robot.title + "</a></li>";
				}
			} else {
				serverStr += "<li>根据您当前提问内容，没有找到合适的业务相关的答案！</br>请点击<a style='color:red' onclick='goLink();'>这里</a>去提问</li>";
			}
			serverStr += "</ul></div></div></div>";
			$content.append(serverStr);
		}
		$quest.val('');
		var scrollTop = $content[0].scrollHeight;
		$content.scrollTop(scrollTop);
	}, "JSON");
	
}

function goLink(){
	window.opener.location.href=root+"/issue/new?appName=NSHZ_WLSW"; //刷新父页面
 	window.close(); 
}

function moreAnswer(quest,pageNum){
		$('#searshQuest').val(quest);
		$.post(root+"/robot/hotSearch",{type:0,start:pageNum,quest:quest},function(data){
			if(data.length<6){
				$('#searshStep').val(1);
			}else{
				$('#searshStep').val(0);
			}
			appendStr($('#searchs'),data);
		},"JSON");
}






