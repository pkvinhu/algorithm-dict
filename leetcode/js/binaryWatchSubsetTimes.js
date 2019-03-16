// GET ALL POTENTIAL BINARY WATCH TIMES

/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), 
and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

Given a non-negative integer n which represents the number of LEDs 
that are currently on, return all possible times the watch could represent.

Example:
    Input: n = 1
    Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", 
    "0:04", "0:08", "0:16", "0:32"]
*/


// NOT A WORKING SOLUTION BECAUSE MEMORY GETS OVERLOADED
var readBinaryWatch = function(num) {
    // 4 possible hour amounts
    // 5 possible minutes amounts
    // each increment by doubling the number prior

    // base case: if n == 0, return
    if(num === 0) return ["0:00"];
    return getAllTimes(num).map(time => {
        return `${time[0].toString()}:${time[1] < 10 ? '0' + time[1].toString() : time[1].toString()}`
    })
    
    function getAllTimes(num, values = [1,2,4,8,1,2,4,8,16,32], times = [], type = "hours") {
        if(num === 0) return;
        for(let i = 0; i < values.length; i++){
            const recurseTime = getAllTimes(num-1, values.slice(1), times, type)
            times = [...times, ...iterateTimes(values[i], type, recurseTime)]
            if(i !== values.length-1 && values[i+1] < values[i]) type = "minutes"
        }  
        return times;
    }
    
    function iterateTimes(current, type, times=[]){
        if(!times.length){
            let time = [0, 0];
            if(type === "hours"){
                time[0] += current
            }
            else if (type === "minutes"){
                time[1] += current
            }
            times.push(time)
        } else {
            times = times.map(time => {
                if(type === "hours" && (time[0]+current < 12)){
                    time[0] += current
                }
                else if (type === "minutes" && (time[1]+current < 59)){
                    time[1] += current
                }
                return time
            })
        }
        return times;
    }
    
    
};

// over 9000 times on n = 2
// don't run on n = 3
const result = readBinaryWatch(2);
console.log(result);