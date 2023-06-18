function vowelRemover(s) {
    const vowels = ['a','e','i','o','u'];
    let filteredArray = [];
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            filteredArray.push(s[i])
        }
        
    }
    return filteredArray.join('');
}

console.log(vowelRemover('hello'))