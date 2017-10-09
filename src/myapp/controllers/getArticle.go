package controllers

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"html/template"
	// "myapp/models"
	"encoding/json"
	// "fmt"
	"net/http"
	"strconv"
)

func GetArticle(w http.ResponseWriter, r *http.Request) {

	articleId := r.FormValue("articleId")

	if len(articleId) == 0 {
		return
	}

	db, err := sql.Open("mysql", "root:123456@/blog_1")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// 内连接
	row := db.QueryRow("select article.title, article.category, article.bannerUrl, article.content, article.created, author.name from article inner join author on article.authorId = author.id and article.id = ?;", articleId)

	var result Result
	err = row.Scan(&result.Title, &result.Category, &result.BannerUrl, &result.Content, &result.Created, &result.AuthorName)
	if err != nil {
		panic(err)
	}

	t := template.Must(template.ParseFiles("templates/article.html", "templates/common/header.html", "templates/common/footer.html", "templates/common/sidebar.html"))
	t.ExecuteTemplate(w, "article", result)
}

// 滚动获取文章
func GetMoreArticles(w http.ResponseWriter, r *http.Request) {

	created := r.FormValue("created")

	if len(created) == 0 {
		w.Write([]byte("获取创建时间失败"))
		return
	}

	num, err := strconv.Atoi(created)
	if err != nil {
		panic(err)
	}

	db, err := sql.Open("mysql", "root:123456@/blog_1")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// 内连接(为什么多加一个id字段，滚动就会报错？)
	// rows, err := db.Query("select article.id, article.title, article.category, article.bannerUrl, article.content, article.created, author.name from article inner join author on article.authorId = author.id and UNIX_TIMESTAMP(article.created) < ? order by UNIX_TIMESTAMP(article.created) desc limit ?;", num, 5)
	// if err != nil {
	// 	panic(err)
	// }

	// columns, _ := rows.Columns()
	// scanArgs := make([]interface{}, len(columns))
	// values := make([]interface{}, len(columns))
	// var result []interface{}

	// for i := range values {
	// 	scanArgs[i] = &values[i]
	// }

	// for rows.Next() {
	// 	err := rows.Scan(scanArgs...)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	record := make(map[string]string)
	// 	for k, v := range values {
	// 		if v != nil {
	// 			record[columns[k]] = string(v.([]byte))
	// 		}
	// 	}
	// 	result = append(result, record)
	// }

	// b, err := json.Marshal(result)
	// w.Write(b)

	limitCount := 5
	stmt, err := db.Prepare("select article.id, article.title, article.category, article.bannerUrl, article.content, article.created, author.name from article inner join author on article.authorId = author.id and UNIX_TIMESTAMP(article.created) < ? order by UNIX_TIMESTAMP(article.created) desc limit ?;")

	if err != nil {
		panic(err)
	}

	rows, err := stmt.Query(num, limitCount)

	var results []Result

	for rows.Next() {
		var result Result
		err := rows.Scan(&result.ArticleId, &result.Title, &result.Category, &result.BannerUrl, &result.Content, &result.Created, &result.AuthorName)
		if err != nil {
			panic(err)
		}
		results = append(results, result)
	}

	b, err := json.Marshal(results)
	w.Write(b)

}
