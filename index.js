const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")
app.use(cors());

const items = require('./data.json')

app.get('/all', (req, res) => {
    res.send(items)
})
app.get('/article', (req, res) => {
    const art = items.filter((i) => i.category === 'Article');
    res.send(art)
})
app.get('/event', (req, res) => {
    const event = items.filter((i) => i.category === "Meetup");
    res.send(event)
})
app.get('/edu', (req, res) => {
    const edu = items.filter((i) => i.category === 'Education');
    res.send(edu)
})
app.get('/job', (req, res) => {
    const job = items.filter((i) => i.category === 'Job');
    res.send(job)
})

app.get("/", (req, res) => {
  res.send("ATG server");
});

app.listen(port, () => {
  console.log(`ATG ${port}`);
});
