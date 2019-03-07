// ROMAN TO INTEGER CONVERSION

var romanToInt = function(s) {
    let copy = s.split('');
    let final = 0;
    
    while (copy.length){
        let current = copy.shift();
        if(current === 'C') {
            if(copy[0] === 'M') {
                copy.shift();
                final+=900;
            } else if( copy[0] === 'D'){
                copy.shift();
                final+=400;
            } else final+=100
        }
        else if(current==='M') final+=1000
        else if(current==='D') final+=500
        else if(current==='X'){
            if(copy[0] === 'C'){
                copy.shift();
                final+=90;
            } else if(copy[0] === 'L') {
                copy.shift();
                final+=40
            } else final+=10
        }
        else if(current==='L') final+=50
        else if(current==='I'){
            if(copy[0]==='X'){
                copy.shift();
                final+=9;
            } else if(copy[0]==='V'){
                copy.shift();
                final+=4;
            } else {
                final+=1;
            }
        } 
        else if(current==='V') final+=5
    }
    return final;
};

const test1 = romanToInt('III')
const test2 = romanToInt('IV')
const test3 = romanToInt('IX')
const test4 = romanToInt("LVIII")
const test5 = romanToInt('MCMXCI')

console.log(test3)