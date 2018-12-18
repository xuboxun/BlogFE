# web_vue
基于vue的博客前端

### 1. install & run
``` bash
git clone https://github.com/BlogUp/web_vue.git
cd web_vue
npm install


# 开发环境-前端mock
# 本地数据 已废弃
npm run mock:local
# 测试环境数据
npm run mock:server

# 开发环境-前后端联调
npm run dev

# 生产环境
npm run build
```

### 2. 目录结构

- build webpack配置文件
- config 项目配置文件（暂未使用）
- mock 本地mock数据（已废弃）
- src
    - assets 静态资源
    - components 业务组件
    - routes 路由
    - service 数据服务，api请求
    - store vuex
    - styles 公共样式
    - units 通用基础组件
    - utils 工具
    - views 页面
    