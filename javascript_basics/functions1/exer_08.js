console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'

function greet (lang) {
  switch (lang) {
    case 'en': 
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt': 
      return 'Olá!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai!';
  }
    
}

// no break statements are actually needed above since the return statement will cause the funcion to end.