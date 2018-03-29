/*! lightgallery - v1.2.15 - 2016-03-10
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
// var url = "http://localhost:9099/api/v1/user/login?username=zhangsan&password=123456";
var url = "http://localhost:9099/api/v1/user";
$(document).ready(function(){
    $(".login-btn").on('click', function(e){
        var params = {
            username : $('#username').val(),
            password : $('#password').val(),
            captcha : $('#captcha').val()
        }

        $.ajax({
            type: "POST",
            // url: url + "/login",
            url: "http://localhost:9099/user/login",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: params,
            dataType:"json",
            success: function (data) {
                if(data.code == 200){
                    window.location.href="index.html";
                }else{
                    console.log("登录失败，请重试!");
                }
                
            },
            error: function (data) {
                alert("登录失败，请重试!");
            }
        });
    });
})