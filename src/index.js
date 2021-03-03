module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i = 0; i < str.length; i += 1) {
        let temp = arr.length;
        for (const pair of bracketsConfig){
            if (pair[0] === pair[1] && str[i] === pair[0] && !arr.includes(str[i])) arr.push(str[i]);
            if (str[i] === pair[0] && pair[0] !== pair[1]) arr.push(str[i]);
        }
        if (temp === arr.length) {
            for (const pair of bracketsConfig){
                if (pair[0] === pair[1] && str[i] === pair[1] && arr.pop() === pair[0]) continue;
                if (str[i] === pair[1] && arr.pop() !== pair[0]) return false;
            }
        }
    }
    return arr.length === 0;
}

/* 

|(|)

let result = [];
    let arr = [];
    let counter = 0;
    for (let [open, close] of bracketsConfig) {
        result.push(open);
        result.push(close);
    }
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === '|' || str[i] === '7' || str[i] === '8') {
            if (!arr.includes(str[i])) arr.push(str[i]);
            else if (arr.pop() !== str[i]) return false;
            else continue;
        } 
        let temp = result.indexOf(str[i]);
        if (temp === 0 || temp % 2 === 0) arr.push(str[i]);
        else if (temp === 1 || temp % 2 !== 0) {
            if (arr.pop() === result[temp - 1]) continue;
            else return false;
        }
        else return false;
    }
    return arr.length === 0;
*/
