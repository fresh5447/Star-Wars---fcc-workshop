const fetch = require('node-fetch');

const getCharacter = (i) =>
  fetch('http://swapi.co/api/people/' + i)
    .then(blob => blob.json());


module.exports = (app) => {

  app.get('/api/starwars', (req, res) => {

    Promise.all([getCharacter(1), getCharacter(2), getCharacter(3),
                  getCharacter(4), getCharacter(5), getCharacter(6)
                ])
      .then(data => {
        res.json(data);
      })
      .catch(e => {
        res.status(500).send(e, "ERROR FINDING CHARACTERS");
      });

  })

}
