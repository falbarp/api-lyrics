import {Router} from 'express';
import { lyricGet, lyricsGetAll } from '../controllers/lyrics.js';


const router = Router();

router.get('/:band', lyricGet);

router.post('/');

router.delete('/');

router.get('/list/:band', lyricsGetAll);

export {
    router
}