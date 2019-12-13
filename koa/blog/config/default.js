//配置独立模块,配置js方便修改
const config ={
    port:3000,
    database:{
        DATABASE: 'nodesql',
        USERNAME:'root',
        PASSWORD:'1234567890',
        PORT:'3306',
        HOST:'192.168.31.128'
    }
}
module.exports = config;