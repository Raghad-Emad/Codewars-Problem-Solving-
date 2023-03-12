function removeDuplicateWords (s) {
        let arr = [];
        let newStr = s.split(' ');

        newStr.map(word => {
            if (!arr.includes(word)) {
                arr.push(word);
            }
        })

        return arr.join(" ");
    }

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))