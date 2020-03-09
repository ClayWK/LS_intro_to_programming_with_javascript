console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  if (lang === 'en') {
    switch (region) {
      case 'US': return 'Hey!'
      case 'GB': return "Hello!"
      case 'AU': return 'Howdy!'
    }
  } else {
    return greet(lang);
  }
}

function extractLanguage (locale) {
  return locale.slice(0, 2);
}

function extractRegion (locale) {
  return locale.slice(3, 5);
}

function greet (lang) {
  switch (lang) {
    case 'en': 
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt': 
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai!';
  }  
}


/*
function localGreet (locale) {
  switch (locale.slice(0, 2)) {
    case 'en': 
      if (locale.slice(3, 5) === 'GB') {
        return 'Hello!'
      } else if (locale.slice(3, 5) === 'AU') {
        return 'Howdy!'
      } else {
        return 'Hey!';
      }
    case 'fr':
      return 'Salut!';
    case 'pt': 
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai!';
  }  
}
*/  