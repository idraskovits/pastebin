import express from 'express';
import cors from 'cors';

const app = express();
const fs = require('fs');


app.use(cors());
app.use(express.urlencoded());
// might not be needed
app.use(express.json());


//////////////

app.post('/save', (req, res) => {
    let filename = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz0123456789';
    for(let i = 0; i < 5; i++) {
        filename += possible.charAt(Math.floor(Math.random() * possible.length));
    }   

    fs.writeFile("./notes/" + filename + ".txt", req.body.text, function(err) {
    
        if(err) {
            return console.log(err);
        }
        console.log("Was cool bruh");
    });
    
    return res.send(JSON.stringify({'filename': filename}));

});

///////////////

app.get('/read/:filename', (req, res) => {
    console.log(req.params);
    
    fs.readFile('./notes/' + req.params.filename + '.txt', 'utf8', (err, contents) => {
        console.log(contents);
        return res.send(contents);
    }); 
});


// just prints if it worked
app.listen(3000, () => {
    console.log("Works");
});
