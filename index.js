const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//DEFAULT
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
//STATIC FILES SERVER
app.use(express.static("public"));
//ROUTES START
app.use(require('./src/routes'));

//RUN API
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log("Listening at " + PORT);
});