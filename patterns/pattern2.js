let n = 5 ;
let string = "" ;
//External loop-
for(let i = 1 ; i <= n ; i++){
    //inner loop for space-
    for(let j = 1 ; j < i ; j++){
        string += "  " ;
    }
    //inner loop for numbers-
    for(let k = 1 ;k <= 2 * (n - i + 1) - 1 ; k++){
        string += k+" " ;
    }
    string += "\n" ;
}
console.log(string);