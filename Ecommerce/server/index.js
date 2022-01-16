const express=require('express');
const path =require('path');
const port=process.env.PORT || 4199;
const app =express();

const distDir=path.join(__dirname,'../src');
app.use(express.static(distDir));

console.log(`expree hosting  from ${distDir}`);

app.get('*',(req,res)=>{
    res.sendFile(path.join(distDir,'index.html'));

});
console.log('serving index.html');

app.listen(port,()=>console.log(`server is server from ${port}`));
//npm run start:server