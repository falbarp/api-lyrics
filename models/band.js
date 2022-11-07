const {Schema, model} = mongoose;

const bandSchema = Schema ({
    
    band: {
        type: String,
        required: [true, 'Band name is required']
    },
    bandId: {
        type: Number,        
    }
})

const Band = model('Band', bandSchema);

export {
    Band
}