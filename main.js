const verbs = ['sei', 'vai', 'continua', 'pensi', 'giochi', 'vedi', 'ascolti']
const attributes = ['bello', 'coglione', 'così', 'qui', 'ora', 'domani', 'drogato', 'intelligente']

const generatorNumber = (verbs, attributes) => {
    let phraseLength = Math.floor(Math.random() * 4);
<<<<<<< HEAD
    if(phraseLength === 0){
        phraseLength++
    }
    let randomAttributes = []
    const randomVerb = Math.floor(Math.random() * verbs.length);
    for(let i = 0; i<phraseLength; i++){
        randomAttributes.push(Math.floor(Math.random() * attributes.length))
    }
    return generatePhrase(randomVerb, randomAttributes)
}


const generatePhrase = (verbIndex, attr) => {
    let phrase  = 'Tu ' + verbs[verbIndex]
    console.log(attr)
    for(let j = 0; j<attr.length;j++){
        phrase = phrase + ' ' + attributes[attr[j]]
    }
    return console.log(phrase)
}

=======
    let randomAttributes = []
    const randomVerb = Math.floor(Math.random() * verbs.length) + 1;
    for(let i = 0; i<phraseLength-1; i++){
        randomAttributes.push(Math.floor(Math.random() * attributes.length) + 1)
    }
    
    return generatePhrase(phraseLength, randomVerb, randomAttributes)
}

>>>>>>> ece752d39f24cad13a44b68042850b3abbdefdff
generatorNumber(verbs,attributes)