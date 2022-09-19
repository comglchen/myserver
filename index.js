const express = require('express')
const app = express()
app.use(express.static(__dirname + '/static'))
app.get('/student', (req, res) => {
    res.send({
        name: '张三',
        age: 20
    })
})
app.listen(5000, (err) => {
    if (!err) {
        console.log('服务器启动成功!')

    }
})