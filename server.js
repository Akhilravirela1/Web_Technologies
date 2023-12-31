// server.js or index.js (at the project root or inside an `/api` directory)
//http://localhost:3000
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  
app.get('/cs212/homework/8', (req, res) => {
    res.sendFile('/form.html', { root: '.' }); // The root option specifies the root directory for the sendFile method.
});

app.post('/cs212/homework/8', (req, res) => {
    const { adjective, pluralNoun, personName, verb, noun } = req.body;
    const madLib = `Today, I saw a ${adjective} ${pluralNoun} which made me think of ${personName}. 
                    Then I decided to ${verb} by the ${noun}.`;

    res.send(madLib);
});

module.exports = app;