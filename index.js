let random = Math.floor(Math.random() * 99) + 1;
let i = 0;
let iswining = false;

document.getElementById("submit").onclick = function(){
    if (iswining == false){
        const max = 5;
    
        if(i<max){
            let input = document.getElementById("mynumber").value;
            if(input <= 99 && input > 0){
                if(random == input){
                    console.log('u win')
                    document.getElementById("result").innerHTML = `yey u win!`
                    document.getElementById("result").style.color = "#03fc2c"
                    iswining == true
                    i = 0;
                    random = Math.floor(Math.random() * 99) + 1;
                    return
                }
                else{
                    if(random < input){
                        console.log(`go lower`)
                        document.getElementById("result").innerHTML = `go lower`
                        document.getElementById("result").style.color = "#fcd303"
            
                    }
                    else{
                        console.log(`go higher`)
                        document.getElementById("result").innerHTML = `go higher`
                        document.getElementById("result").style.color = "#fc0303"
                    }
                }  
            }
            else{
                document.getElementById("error").innerHTML = `invalid number, please enter a number between 1 and 99`
                document.getElementById("error").style.color = "#fc0303";
            }
    
            i++;
        console.log(i) 
        }
        
        
        if (i === max) {
            console.log('u lose');
            document.getElementById("result").innerHTML = "oops u lose!";
            document.getElementById("result").style.color = "#fc0303";
            document.getElementById("message").textContent = `the correct number was ${random}`
            console.log(`game ended`)
        }
    }
    // for(let i = 0; i<5; i++){


};

