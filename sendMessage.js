/**
 * 发送短信按钮倒计时 -> button || input
 *
 * @description new SENDMSG(object) 
 * @param {Object}              obj            		配置对象
 * @param {string}      		obj.id        		对象ID，用来操作的对象
 * @param {string}              obj.activeClass 	Class，显示点击后倒计时添加的样式
 * @param {string}              obj.text 			文字，倒计时显示的文字
 * @param {string}              obj.time 			倒计时时间，单位秒
 * @param {string}              obj.callBack 		回调，倒计时结束后执行
 *
 * BY Huhl
 */
function SENDMSG(obj) {
	this.id = obj.id;
	this.activeClass = obj.activeClass || "disabled";
	this.text =  obj.text || "重新发送";
	this.time = obj.time || "30";
	this.callBack =  obj.callBack || "";
}
SENDMSG.prototype = {
	send : function(){
		if(this.id === "" || this.id === null || this.id === "undefined") {
			alert("缺少参数id");
			return false;
		}
		var self = this,
			Obj = $("#"+self.id),
			tempTime = self.time,
			tempStr = Math.random().toString(36).substr(2);
		function setBtnGrays(){
			Obj.html(self.text+self.time);
			if(self.time > 0){
				self.time--;
				tempStr = setTimeout(function(){setBtnGrays()}, 1000);
			}else {
				Obj.removeClass(self.activeClass).html('重新发送').attr("disabled",false);
				clearTimeout(tempStr);
				$.isFunction(self.callBack) ? self.callBack() : ""
			}
		}
		Obj.addClass(self.activeClass).attr("disabled",true);
		setBtnGrays();
	}
}


