const axios = require('axios')

module.exports = (req, res) => {
    const randomNumber = Math.random() * (1600 - 1) + 1;
    const value = Math.floor(randomNumber);
    const url = 'https://type.fit/api/quotes'

    axios
        .get(url)
        .then((resp) => {
            let output = `<b>${resp.data[value].text}</b>`;          
            res.send(output);
        })

}