import axios from "axios";


const API = {
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/article");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/article", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/article/${id}`);
  },
  //Query NYT API
  getNYT: function (topic, startYear, endYear) {
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
    const APIKEY = 'KwEgW6XFF7rFgnYKqwInQNx2i0jgDiIB';
    return axios.get(`${BASEURL}${APIKEY}&${topic}&begin_date=${startYear}0101&end_date=${endYear}0101`);
  }
};

export default API;