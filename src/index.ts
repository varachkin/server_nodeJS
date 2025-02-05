const express = require('express');
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {

    res.sendStatus(200)
})

app.get('/home', (req: any, res: any) => {

    const array = [
        {'id': 1, 'title': 'Alex',},
        {'id': 2, 'title': 'Sveta',},
        {'id': 3, 'title': 'Piotr',},
        {'id': 4, 'title': 'Michail',},
    ];
    res.json(array)
})

app.listen(port, () => {
    console.log(`Exampxxxle app listening on port ${port}`)
})