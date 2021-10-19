document.addEventListener('DOMContentLoaded', function() {
    let counterNumber = 0;
    let counterOn = 1;

    let likedNumbers = [];
    let numberOfLikes = [];
    
    function operateCounter() { 
        setTimeout(function () {
            if(counterOn === 1) { 
                counterNumber++ 
                document.getElementById("counter").textContent = counterNumber
                operateCounter()
                }
            }, 1000)
        }
    
    operateCounter();

    document.getElementById("minus").addEventListener("click", function () {
        counterNumber--;
        document.getElementById("counter").textContent = counterNumber;
    })

    
    document.getElementById("plus").addEventListener("click", function () {
        counterNumber++;
        document.getElementById("counter").textContent = counterNumber;
    })

    document.getElementById("heart").addEventListener("click", function () {
        if(likedNumbers[counterNumber] === undefined) {
            //There is no message for this number. Create an element:
            likedNumbers[counterNumber] = document.createElement("li");

            //We start with 0 likes bc we are automatically going to add 1 to it.
            numberOfLikes[counterNumber] = 0;
            document.getElementsByTagName("ul")[0].appendChild(likedNumbers[counterNumber]); 
        }
        
        //Whether this is a new element or not, add 1 to it:
        numberOfLikes[counterNumber]++;

        if(numberOfLikes[counterNumber] == 1) {
            //The number is 1, so it should be "...1 time.":
            likedNumbers[counterNumber].textContent = `The number ${counterNumber} has been liked 1 time`;
        }
        else {
        likedNumbers[counterNumber].textContent = `The number ${counterNumber} has been liked ${numberOfLikes[counterNumber]} times`;
        }
        })

    document.getElementById("pause").addEventListener("click", function () {
        
        if (document.getElementById("pause").textContent === " pause ") {
            //The counter is currently running. Turn off the counter:
            counterOn = 0;
            document.getElementById("pause").textContent = " resume "
            document.getElementById("minus").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("comment-input").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        else {
            //The counter is currently not running. Change it back:
            counterOn = 1;
            document.getElementById("pause").textContent = " pause "
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("comment-input").disabled = false;
            document.getElementById("submit").disabled = false;
            operateCounter();
        }
    })

    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault();
        const commentRow = document.createElement("div");
        commentRow.textContent = document.getElementById("comment-input").value;
        document.getElementById("list").appendChild(commentRow);
        document.getElementById("comment-input").value = "";
    })
    })