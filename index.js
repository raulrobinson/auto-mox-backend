const express = require('express');
const cors = require('cors');

const db = require('./app/models');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

const app_ids = [process.env.APP_ID_MAIN, process.env.APP_ID_SUB];

app.use((req, res, next) => {
    const appId = req.headers['app_id'];
    if (app_ids.includes(appId)) {
        next();
    } else {
        res.status(403).send('Access Denied.');
    }
});

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
    .then(() => {
        console.log('Synced with the remote database')
    })
    .catch((error) => {
        console.log('Failed to sinc db: ' + error.message);
    })

app.get('/', (req, res) => {
    res.json({ message: 'Hello World'});
})

require('./app/routes/routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});