## docker 基本概念

- mongodb nosql 数据库
- docker 装货物的集装箱 一家公司开发环境迅速上线的核武器 解决了开发环境工具 go 写的
- docker pull image 拉取镜像
  镜像
- docker run -p 27017:27017 --name mongo -d 18400f87db91 运行镜像 -p 端口 --运行容器的名字
- docker ps -a 查看正在运行的容器
- docker exec -it mongo mongo 进入到容器内部
  -it 命令行的交互 第一个 mongo 代表镜像 第二个代表 -it 交互的脚本 简版的 linux
- 可以使用 js

## mongobd shell 交互

- use tutorial; 新建数据库 
 db.users.insert({username:'smith'}) 直接建一个集合 插入数据db.us
 形成的_id代表私有的，不可以修改
