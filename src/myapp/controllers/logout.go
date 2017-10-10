package controllers

import (
	"net/http"
	"time"
)

func Logout(w http.ResponseWriter, r *http.Request) {
	expires := time.Now().AddDate(-1, 0, 0)
	userCookie := http.Cookie{
		Name:    "isLogin",
		Value:   "outline",
		Path:    "/",
		Expires: expires,
		MaxAge:  86400,
	}
	http.SetCookie(w, &userCookie)
	http.Redirect(w, r, "/home", http.StatusFound)
}
