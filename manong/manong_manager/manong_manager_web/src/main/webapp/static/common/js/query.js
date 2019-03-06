	var todo="";
	var _success = "查询成功";
	var datagrid_url = 'sbquery';
	var $dg = $('#sbxx_grid');
	
	function initDatagrid(){
		try{
			if(datagrid_url){	
				$dg.datagrid('loadData', {"rows":[],"total":0}); 
			}
		}catch(e){}
		finally{}
	}
	
	function formatCurrency(num) {
	    num = num.toString().replace(/\$|\,/g,'');
	    if(isNaN(num))
	    num = "0";
	    sign = (num == (num = Math.abs(num)));
	    num = Math.floor(num*100+0.50000000001);
	    cents = num%100;
	    num = Math.floor(num/100).toString();
	    if(cents<10)
	    cents = "0" + cents;
	    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	    num = num.substring(0,num.length-(4*i+3))+','+
	    num.substring(num.length-(4*i+3));
	    return (((sign)?'':'-') + num + '.' + cents);
	}
	
    function formatterdate(val, row) {
    	 var date = new Date(val);
    	 return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
     }
    function formatterje(val) {
   	 return '￥'+val;
    }
   
    initDatagrid();
   
