const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

const posts = require('./data/posts')

app.use(express.json())
app.get('/', function(req, res, next){
  res.send({ status: 'it works!' });
});

app.get('/posts', (req, res) => {
  res.send({ posts })
})

app.post('/posts', (req, res) => {
  const id = posts.length + 1
  const now = new Date()
  const post = { ...req.body.post, id, createdAt: now }
  posts.push(post)
  broadcast(makeEvent("newPost", { post }))
  res.send({ ok: true })
})

app.ws('/', function(ws, req) {
  // ws.on('message', function (msg) {
  //   const data = JSON.parse(msg)
  //   console.log(data);
  //
  //   ws.send(JSON.stringify({ response: data.text }))
  // })
  ws.on('message', function(msg) {
    const data = JSON.parse(msg)
    if (data.type === 'getPosts') {
      ws.send(makeEvent('setPosts', { posts }))
    }
  });
});

console.log('Listening on 3000 port')
app.listen(3000);

function broadcast(message) {
  expressWs.getWss().clients.forEach(c => c.send(message))
}

function makeEvent(eventName, data = {}) {
  return JSON.stringify({ event: eventName, data })
}