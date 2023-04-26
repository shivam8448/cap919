const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partial')
app.use(expr.static(__dirname + '/myviews'));

app.get('/', (req, res) => {
  res.render('intro.hbs', {
    pageTitle: 'intro Page',
    welcomeMessage: 'HELLO.',
  });
});

app.get('/membership', (req, res) => {
	res.render('membership.hbs', {
    pageTitle: 'membership page',
    memberMessage: 'membership Started very soon',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});