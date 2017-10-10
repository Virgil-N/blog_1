package controllers

import (
	"html/template"
	"net/http"
)

func Edit(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("templates/edit.html", "templates/common/header.html", "templates/common/footer.html", "templates/common/sidebar.html"))
	t.ExecuteTemplate(w, "edit", nil)
}
