import express from 'express';

const app = express();

app.get('/', ( req, res ) => {
  res.status(200).send('<h2>Digital Ocean Droplet Tutorial</h2><br><li>Source: <a href="https://www.youtube.com/watch?v=oykl1Ih9pMg" target="_blank">Traversy Media channel on youtube</a></li><br><li>This is the first full tutorial I\'m completing - INSHALLAH 🤲🏾</li>')
});

app.listen( 5000, () => console.log(`App listening on on port - 5000`));