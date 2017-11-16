const express = require ('express');
const port = 3417;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));