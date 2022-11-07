const chorusValues = ['Estribillo', 'Chorus'];


const randomNumber = (limit= 10) => {
    return  Math.floor(Math.random() * limit)
  }
  


const getChorus = (text) => {
    let word='';

    for (const element of chorusValues) {
        if (text.includes(element)) {
            word = element + ']';            
        }
    }

    const result = text.split(word).pop().split('[')[0];
    console.log(result);
    return result
}

const getRandomPhrase = (text) => {

    const mySubString= '\n'
    const count = text.split(mySubString).length - 1;
    console.log('The number of lines is:' + count); 
    console.log(text.split(mySubString));       
    return text                
    
}

const chorus =(text) => {

    const exists = false; 
    const count = chorusValues.map(x=> text.split(x).length - 1);
    console.log(count);
    const max = Math.max(...count);
    return  (max>0 ? getChorus(text) : getRandomPhrase(text));
     
}


export {
    chorus,
    randomNumber}