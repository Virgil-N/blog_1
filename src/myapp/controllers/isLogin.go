package controllers

import (
	// "fmt"
	"net/http"
	"net/url"
	"time"
)

var name string = "samete"
var pwd string = "123456"

func IsLogin(w http.ResponseWriter, r *http.Request) {
	// 最好加上吧
	r.ParseForm()

	username := r.FormValue("username")
	password := r.FormValue("password")
	result := ""

	if username == name && password == pwd {
		result = url.QueryEscape("yes")
	} else {
		if len(username) == 0 || len(password) == 0 {
			// 这样做是因为golang的cookie对中文支持不好会出现乱码
			result = url.QueryEscape("请输入帐号和密码")
		} else {
			result = url.QueryEscape("帐号或密码错误")
		}
	}

	// 设置cookie
	expires := time.Now().AddDate(0, 0, 1)
	userCookie := http.Cookie{
		Name:    "isLogin",
		Value:   result,
		Path:    "/",
		Expires: expires,
		MaxAge:  86400,
	}
	http.SetCookie(w, &userCookie)

	// ajax请求和golang重定向一起有问题?!以后少用golang的重定向了
	result, err := url.QueryUnescape(result)
	if err != nil {
		panic(err)
	}
	w.Write([]byte(result))

}
