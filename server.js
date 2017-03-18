const express = require('express');
const moment = require('moment');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// st static server
app.use(express.static(path.join(__dirname, 'public')));

// when user make input
app.get('/:id', (req, res) => {
    const input = req.params.id;
    const u = moment.unix(input);
    const u2 = moment(input, 'X');
    const d = moment(input);
    const ob = date => ({
        unix: date.unix(),
        normal: date.format('MMMM D, YYYY')
    });

    if (u.isValid()) {
        res.json(ob(u));
    } else if (d.isValid()) {
        res.json(ob(d));
    } else if (u2.isValid()) {
        res.json(ob(u2));
    } else {
        res.json({unix: null, normal: null});
    }
}); 

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));