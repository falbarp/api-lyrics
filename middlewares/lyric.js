import axios from 'axios';

import { chorus, randomNumber } from '../helpers/helpers.js';



const getLyric = async (lyricId) =>{
    const options = {
        method: 'GET',
        url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${lyricId}/lyrics`,
        headers: {
         'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
        'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
        }
    };


    const wholeLyric = await axios.request(options).then(function (response) {
        return  response.data.response.lyrics.lyrics.body.plain;
    }).catch(function (error) {
        console.error(error);
    });
  
    
    const query = chorus(wholeLyric);
    return query;
    
}

const getBand = async (band) => {
    const number = randomNumber();
    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search',
        params: {q: band, per_page: '10', page: '1'},
        headers: {
          'X-RapidAPI-Key':  process.env.XRAPIDAPIKEY,
          'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
        }
      };
      
      const query= await axios.request(options).then(function (response) {
          return response.data.response.hits[number].result.id;
      }).catch(function (error) {
          console.error(error);
      });
      console.log (query);
      return query;


}

export {
    getLyric,
    getBand
}
