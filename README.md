**demo**: [https://taylorchen709.github.io/vue-admin/](https://taylorchen709.github.io/vue-admin/)

# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```

# Folder structure
* build - webpack config files
* config - webpack config files
* dist - build
* src -your app
    * api
    * assets
    * common
    * components - your vue components
    * mock
    * styles
    * views - your pages
    * vuex
    * App.vue
    * main.js - main file
    * routes.js
* static - static assets

# Theme
You can change theme by 
1. Generate theme packages by [https://elementui.github.io/theme-preview/#/](https://elementui.github.io/theme-preview/#/)
2. Put theme packages in src/assets/theme/
3. Edit src/main.js 
``` bash
   import 'element-ui/lib/theme-default/index.css'
   to
   import './assets/theme/your-theme/index.css'
```
4. Edit src/styles/vars.scss

![theme-blue](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/rec-demo.gif)
![theme-green](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/theme-green.png)

# Browser support

Modern browsers and IE 10+.

# License
[MIT](http://opensource.org/licenses/MIT)

需要加微信群的可以先加我，备注vue



![wechatid](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/mywechatid.jpg)
