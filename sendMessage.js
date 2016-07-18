/**
 * 发送短信按钮倒计时 -> button || input
 *
 * @description new SENDMSG(object) 
 * @param {Object}              obj            		配置对象
 * @param {string}      		obj.id        		对象ID，用来操作的对象
 * @param {string}              obj.activeClass 	Class，显示点击后倒计时添加的样式
 * @param {string}              obj.time 			倒计时时间，单位秒
 * @param {string}              obj.callBack 		回调，倒计时结束后执行
 *
 * BY Huhl
 */
function SENDMSG(obj) {
	this.id = obj.id;
	this.activeClass = obj.activeClass || "disabled";
	this.time = obj.time || "30";
	this.callBack =  obj.callBack || "";
}
SENDMSG.prototype = {
	send : function(){
		if(this.id === "" || this.id === null || this.id === "undefined") {
			alert("缺少参数id");
			return false;
		}
		var self = this, Obj = $("#"+self.id), tempTime = self.time;
		function setBtnGrays(){
			Obj.html(self.time+"s后重新获取");
			if(self.time > 0){
				self.time--;
				setTimeout(function(){setBtnGrays()}, 1000);
			}else {
				Obj.removeClass(self.activeClass).html('获取验证码').attr("disabled",false);
				$.isFunction(self.callBack) ? self.callBack() : ""
			}
		}
		Obj.addClass(self.activeClass).attr("disabled",true);
		setBtnGrays();
	}
}


