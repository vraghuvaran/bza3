const express= require('express')
const path= require('path')
const app= express()
app.use(express.static(__dirname+'/dist/ngproject'));
app.get('/', (req,res) => res.sendFile(path.join(__dirname+'dist/ngproject/index.html')));

app.listen(port,() => console.git('Example app listening on port ${port}!'))