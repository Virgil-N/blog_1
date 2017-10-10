package controllers

import (
	"html/template"
	"net/http"
)

func Login(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("templates/login.html", "templates/common/header.html", "templates/common/footer.html", "templates/common/sidebar.html"))
	t.ExecuteTemplate(w, "login", nil)
}
