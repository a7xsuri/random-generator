const verbs = ['sei', 'vai', 'continua', 'pensi', 'giochi', 'vedi', 'ascolti']
const attributes = ['bello', 'coglione', 'così', 'qui', 'ora', 'domani', 'drogato', 'intelligente']

const generatorNumber = (verbs, attributes) => {
    const phraseLength = Math.floor(Math.random() * 4) + 1;
    const randomVerb = Math.floor(Math.random() * verbs.length) + 1;
    const randomAttributes = Math.floor(Math.random() * attributes.length) + 1;
    return (phraseLength, randomVerb, randomAttributes)
}

generatorNumber(verbs, attributes)