const express = require('express');
const app = express();

app.use(express.static(_dirname));


app.listen(3000, () => {
    console.log('Example listening in 3000')
});