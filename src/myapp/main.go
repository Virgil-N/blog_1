package main

import (
	"github.com/gorilla/mux"
	"log"
	"myapp/controllers"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	http.Handle("/javascript/", http.FileServer(http.Dir("public")))
	http.Handle("/css/", http.FileServer(http.Dir("public")))
	http.Handle("/images/", http.FileServer(http.Dir("public")))
	http.Handle("/vendor/", http.FileServer(http.Dir("public")))

	r.HandleFunc("/", controllers.GetHome)
	r.HandleFunc("/home", controllers.GetHome)
	r.HandleFunc("/getArticle", controllers.GetArticle)
	// 不加Queries("created", "{created:[0-9]+}")貌似也可以的......
	r.HandleFunc("/getMoreArticles", controllers.GetMoreArticles).Queries("created", "{created:[0-9]+}")
	r.HandleFunc("/edit", controllers.Edit)
	r.HandleFunc("/login", controllers.Login)
	r.HandleFunc("/isLogin", controllers.IsLogin)

	http.Handle("/", r)

	if err := http.ListenAndServe("localhost:9090", nil); err != nil {
		log.Fatalln("ListenAndServe: ", err)
	}
}
