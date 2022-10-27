const app = require('./app');
const index = require('./src/routes/index')

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.info(`Server up and running un port ${PORT}`));