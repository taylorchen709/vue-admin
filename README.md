# vueAdmin
full stack template/example for Vue2 using OpenId Connect Authorization& Authentication
based on [vuejs2](http://vuejs.org/) and [element](http://element.eleme.io/#/).

### front stack:
``` js
"dependencies": {
    "axios": "^0.15.3",
    "echarts": "^3.3.2",
    "flex.css": "^1.1.6",
    "nprogress": "^0.2.0",
    "oidc-token-manager": "^1.2.0",//OpenId Connect Token Manager
    "vue": "^2.0.7",
    "vue-resource": "^1.0.3",
    "vuex": "^2.0.0-rc.6",
    "vuex-router-sync": "^4.1.1",
    "element-ui": "^1.0.5"
  }
```
### end stack:
``` csharp
  authorization using IdentityServer3
  api using servicstack
  DTO design model,DTO repository
  DTO <=> Entity details:
   1: object transfer using ValueInject (your can use autoMapper or whatever else
   2: Expression/sqlExpression using expression tree re-construction
  Entities Repository,i.e,Orm using servicetack.ormlite

```

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```

### Browser Support

Modern browsers and Internet Explorer 10+.

### snapshots
![image](https://github.com/taylorchen709/vueAdmin/blob/master/screenshots/login.png)
![image](https://github.com/taylorchen709/vueAdmin/blob/master/screenshots/main.png)
![image](https://github.com/taylorchen709/vueAdmin/blob/master/screenshots/edit.jpg)
