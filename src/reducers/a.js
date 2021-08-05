// const a = ['2', '+','3', "*",'7','/',"5", "*", "5" ]
const a = ['3', "+", "2", "*", '7', '/', '3', "+", "2"]
// const a = ['3', "*", "-7", "*", "-3", "/", "7", "-", "3"]


var value = 0

for(let i = 0; i < a.length; i++) {
    if (a.includes("*") || a.includes('/')) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] == "*") {
                a[i - 1] = (a[i - 1] * a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);
                
            }
            if (a[i] === "/") {
                a[i - 1] = (a[i - 1] / a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);
            }
        }
    }
}
        for (let i = 0; i < a.length; i++) {
            if (a[i] == "+") {
                a[i - 1] = (a[i - 1] + a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);
                
            }
            if (a[i] === "-") {
                a[i - 1] = (a[i - 1] - a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);
            }
    }


console.log(a)

// if(a.includes("*") && a.includes('/')) {
//     if(a.indexOf("*") > a.includes('/')) {

//     }
// }
// if(a.includes("*")) {

// }
// if(a.includes("/")) {

// }