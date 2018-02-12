# blog_1
版本：0.1.1

### 说明：
* 见info.txt
* 1.vue-cli生成项目且没有使用webpack，详情见https://github.com/vuejs/vue-cli/blob/dev/docs/cli.md
https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md。
* 2.启动项目命令：vue serve ./src/main.js，编译命令：vue build ./src/main.js。
* 3.在项目中使用sass，添加的命令为：npm install node-sass --save和npm install sass-loader --save。
* 4.在vue.config.js中的devServer中修改服务启动参数。
* 5.UI组件使用Vuetify。


### 问题：
* 1.页面框架布局要不要统一写到layout样式？
* 2.脚本也有相同的问题，要不要把控制sidebar的代码写到一个统一的脚本文件中呢？
* 3.为什么滚动加载的文章的小图标和文字靠的那么近(目前使用margin-left:5px来使样式统一)？
* 4.家里的代码目前无法push到github(重新生成SSH keys后添加到github上后就可以push上去了)。
* 5.ajax请求和golang重定向一起有问题?!以后少用golang的重定向了。


