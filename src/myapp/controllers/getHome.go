package controllers

import (
	"html/template"
	"myapp/models"
	"net/http"
)

type Result struct {
	Author models.Author
}

func GetHome(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("templates/home.html", "templates/common/header.html", "templates/common/footer.html", "templates/common/sidebar.html"))
	t.ExecuteTemplate(w, "home", "你好，世界")
}
