import axios from 'axios';

const API_URL = "https://www.breakingbadapi.com/api/"

const QuoteService = {

    getQuote: function(authorName) {
        return axios.get(API_URL + "quote?author=" + authorName.replace(" ", "+"));
    }

}

export default QuoteService;