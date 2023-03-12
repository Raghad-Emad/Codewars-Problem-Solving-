function banjo(name) {

    let R = 'R';
    let r = 'r';

    if (name.startsWith(R) == true || name.startsWith(r) == true) {
        return name + ' plays banjo'
    }
    else {
        return name + ' does not play banjo';
    }

    // we can use charAt(0) 
}

console.log(banjo('rayan'))