var n = "Eric";
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
document.write("Name in Lowercase ".concat(n.toLowerCase(), "\n<br/>Name in Uppercase ").concat(n.toUpperCase(), "\n<br/>Name in Titlecase ").concat(titleCase(n)));
