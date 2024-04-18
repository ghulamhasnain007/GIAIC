const n = "Eric"

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

document.write(`Name in Lowercase ${n.toLowerCase()}
<br/>Name in Uppercase ${n.toUpperCase()}
<br/>Name in Titlecase ${titleCase(n)}`)
