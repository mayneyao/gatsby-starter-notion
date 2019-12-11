# Gatsby-starter-notion


[English Doc](README-EN.md) | [中文文档](README.md)

这是一个新手包，帮助你快速地使用 Gatsby.js & Notion.so 构建站点

内置了 [gatsby-source-notion-database](https://github.com/mayneyao/gatsby-source-notion-database) 插件，将 Notion Database 中的数据转化为 Gatsby 中可用的 Graphql 数据节点。

这里是演示站点：https://gatsby-stater-notion.netlify.com/

## 快速开始

```shell
gatsby new my-gatsby-notion-site https://github.com/mayneyao/gatsby-starter-notion
cd my-gatsby-notion-site
yarn develop
```

## 特性

+ 一个简单的博客应用。包含文章列表，文章详情，书单页。
+ 使用 Notion Database 作数据源。
+ 支持 Notion Database 中的 Relation 关联数据。
+ 简单的分页演示，动态创建文章详情页。参见：[gatsby-node.js](gatsby-node.js)

## 配置

默认配置 2 个表格，它们之间存在关联关系。分别是 

+ posts - 文章表格
+ books - 书单表格

你可以在[这个页面](https://www.notion.so/gatsby-starter-notion-2c5e3d685aa341088d4cd8daca52fcc2)找到这 2 个表格。

```js
// gatsby-config.js
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/4b50defc60ce4e89a6539f511d9d946f?v=8e71dde4479040b5a3e6ca0d91d3d8e6',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/4ae9328e650945eb9adbd882b3b453d3?v=0966bdbd0645437cbcc62e6a933e241c',
            cacheType: 'static'
          }
        ]
      }
    }
```

### cacheType 类型说明

| cacheType | note |
| ----- | ---- |
| static | 表格数据会转化成 graphql 节点 ，本地开发时可以在 [http://localhost:8000/___graphql](http://localhost:8000/___graphql) 中查看调试。 |
| html | 在 static 的基础上，将记录对应页面的 html 缓存下来（使用 Puppeteer 抓取页面 HTML ）。可通过 html 字段访问。|
| dynamic | 数据不会在 build 时候存储，仅记录表格 meta 信息，方便后续在页面中动态获取数据 |

