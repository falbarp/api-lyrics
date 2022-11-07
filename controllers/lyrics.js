import  {query, response} from 'express';
import { getBand, getLyric } from "../middlewares/lyric.js";
import {Lyric} from '../models/lyric.js';


const lyricGet = async (req, res= response) => {
   try { 
    const {band} = req.params
    const songId = await getBand(band);
    const lyricExcerpt= await getLyric(songId);
    
    res.json({
        band: band,
        songId: songId,
        lyricExcerpt
    });

    res = new Lyric ({band, songId, lyricExcerpt});
    await res.save();
} catch(error) {
    console.log('Lyric not found');
    res.json({
       msg: '404 | Lyric not found'
    });;
}
}

const lyricsGetAll = async (req, res= response) => {

    const {band} = req.params;
    const {limit =10, from=0} =req.query;
    const query = {band: band};
    const [total, lyrics] = await Promise.all([
        Lyric.countDocuments(query),
        Lyric.find(query)
        .skip(Number(from))
        .limit(Number(limit))
    ])

    res.json({
        total,
        lyrics
    });
}



export {
    lyricGet,
    lyricsGetAll
}