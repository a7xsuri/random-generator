const verbs = ['sei', 'vai', 'continua', 'pensi', 'giochi', 'vedi', 'ascolti']
const attributes = ['bello', 'coglione', 'così', 'qui', 'ora', 'domani', 'drogato', 'intelligente']

const generatorNumber = (verbs, attributes) => {
    let phraseLength = Math.floor(Math.random() * 4);
    let randomAttributes = []
    const randomVerb = Math.floor(Math.random() * verbs.length) + 1;
    for(let i = 0; i<phraseLength-1; i++){
        randomAttributes.push(Math.floor(Math.random() * attributes.length) + 1)
    }
    
    return generatePhrase(randomVerb, randomAttributes)
}

generatorNumber(verbs,attributes)