import axios from 'axios';

const API_URL = "https://www.breakingbadapi.com/api/"

const CharacterService = {

    getCharacters: function() {
        return axios.get(API_URL + "characters");
    },

    getCharacter: function(characterId) {
        return axios.get(API_URL + "characters/" + characterId);
    }

}

export default CharacterService