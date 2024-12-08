const express = require('express');

const app = express();
app.set('port',3000);
app.get('/',(req,res)=> {
    res.status(200).send('<h1>Welcome---from Root</h1>');
});

app.get('/login',(req,res)=> {
    res.status(200).send('<h1>Welcome---from login</h1>');
});

app.listen(3000);