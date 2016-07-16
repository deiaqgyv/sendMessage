#sendMessage
功能：短信发送按钮倒计时

调用方法
var test = new SENDMSG({
    id : "button_getpwd4",                // 对应ID  （必填）
    activeClass : "active",               // 点击后添加的class    （选填）
    time : 60,							  // 倒计时间 单位：秒    （可不填）
    callBack : function(){                // 结束之后回调         （可不填）
        console.log("over")
    }
});
test.send();
