const router = require("express").Router();
const axios = require("axios")
require('dotenv').config()

let startYear;
let endYear;
let topic;
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = `${process.env.REACT_APP_NYT_KEY}`;

router.route("/form-data")
    .post(function (req, res) {
        startYear = req.body.startYear;
        endYear = req.body.endYear;
        topic = req.body.topic

        return axios.get(`${BASEURL}${APIKEY}&${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`)
        .then(response => {
            res.send(response.data.response.docs)
        })
        .catch(err => {
            console.log(err)
            res.send({ err }) // <= send error
          })
        
    })

    module.exports = router