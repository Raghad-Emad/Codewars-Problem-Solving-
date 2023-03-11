function welcomeMessage(language) {
    let languages = {
        english: 'welcome',
        french: 'bewbew',
        dutch: 'welcom',
        german: 'komen',
        latina: 'welcomooo',
    }

    if (languages.hasOwnProperty(language)) {
        return languages[language] ;
    }
    else {
        return languages['english'];
    }
}

console.log(welcomeMessage('french'));