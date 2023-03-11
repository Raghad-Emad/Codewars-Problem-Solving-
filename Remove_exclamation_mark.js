function removeExMark(string) {
    return string.replace(/!$/, "")
}

console.log(removeExMark('!hii!!!'));