import mongoose from "mongoose";
const {Schema, model} = mongoose;

const lyricSchema = new Schema ({

    band: {
        type: String,
        required: [true, 'Band name is required']
    },    
    songId: {
        type: Number,        
    },
    chorus: {
        type: Boolean,
        default: false
    },
    lyricExcerpt: {
        type: String,
        required: [true, 'Lyric excerpt is required']
    },
    
});

const Lyric = model('Lyric', lyricSchema);

export {
    Lyric
}