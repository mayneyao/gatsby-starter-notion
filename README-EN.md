# Gatsby-starter-notion

[English Doc](README-EN.md) | [中文文档](README.md)

This is a starter kit to help you quickly build your site with Gatsby.js & Notion.so

Built-in [gatsby-source-notion-database](https://github.com/mayneyao/gatsby-source-notion-database) plugin, which converts data in Notion Database into Graphql data nodes available in Gatsby.

Demo site: https://gatsby-stater-notion.netlify.com/

## Quick start

```shell
gatsby new my-gatsby-notion-site https://github.com/mayneyao/gatsby-starter-notion
cd my-gatsby-notion-site
yarn develop
```

## Features

+ A simple blog application. Contains article list, article details, book single page.
+ Use Notion Database as the data source.
+ Supports Relation in Notion Database.
+ Simple pagination demo to dynamically create article detail pages. See: [gatsby-node.js](gatsby-node.js)

## Configuration

Two tables are configured by default and they are interrelated.

+ posts - blog posts table
+ books - books table

You can find these 2 tables on [this page](https://www.notion.so/gatsby-starter-notion-2c5e3d685aa341088d4cd8daca52fcc2).

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

### cacheType type description

| cacheType | note |
| ----- | ---- |
| static | The table data will be converted into graphql nodes. You can view and debug in [http: // localhost: 8000 / ___ graphql] (http: // localhost: 8000 / ___ graphql) when developing locally. |
html | On the basis of `static`, cache the html of the corresponding page of the record (use Puppeteer to fetch the HTML of the page). Accessible via `html` field. |
dynamic | The data will not be stored during buildtime, only the table meta information will be recorded, which is convenient for subsequent dynamic data retrieval in the page.