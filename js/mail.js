
function getMailtoUrl() {
	var flag = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; //手机号码
	var lag = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//邮箱地址
	var dh = $("#dh").val();
	var yx = $("#yx").val();	   
		   if(dh.length==0 && yx.length==0)
			   {
			     alert('请输入！');
			      return false;
			   }else if(!flag.test(dh)){
		    	   alert('号码格式有误！');
					return  false;
			  }else if(!lag.test(yx)){
		    	   alert('邮箱格式有误！');
					return  false;
			  }else{
			  	
	   	   var args = [];
	       var sub='城市合伙人';
	if(typeof sub !== 'undefined') {
		args.push('subject=' + encodeURIComponent(sub));
	}
	var name = '姓名:' + $("input[name='name']").val();

	var mail = '邮箱:' + $("input[name='mail']").val();
	var city = '意向城市:' + $("input[name='city']").val();
	var iphone = '联系电话:' + $("input[name='iphone']").val();
	var body = name + "\n" + iphone + "\n" + mail + "\n" + city;
	if(typeof body !== 'undefined') {
		args.push('body=' + encodeURIComponent(body))
	}
  
	var url = 'mailto:' + encodeURIComponent('powerun2008@163.com');
	if(args.length > 0) {
		url += '?' + args.join('&');
	}
	console.log(url);
	window.location = url;
	return url;
	   	  
	      }
	
	
}