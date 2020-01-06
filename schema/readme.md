## schema 数据结构的描述和定义

- articles
  用户的文章
  mysql 关系型数据库
  mongodb NOSQL 数据库 非关系型
  基于文档的 非常灵活都是一个 doc
- mongoose Schema
  很灵活 不需要提前定义
  适用于零散的数据 杂乱的数据
  但性能不如sql
  Schema 定义 
- mongodb 用的是js语法引擎
mysql 非常严格 字段 类型等 非常严格
-mongoose 连接数据库 -> Schema定义数据库模型 -> Model -> 数据库物理层到面向对象的能力 -> api save() 看官方文档