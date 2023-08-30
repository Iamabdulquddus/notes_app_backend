const app = require('./app'); 
const db = require('./config/db');
const UserModel = require('./model/user_model');

const port = 3000;

app.get('/', (req, res)=> {res.send("Hello Chutu")});

app.listen(port, () => console.log(`Server Listening on port http://localhost:${port}`));