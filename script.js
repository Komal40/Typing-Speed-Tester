const setOfWords=["Incomings of large social networks, which are nowadays measured in billions of dollars and are steepling rise from year to year, mostly come out of online advertising. When managing advertising campaigns, decisions.",
"Our research shows that knowledge of experts is not semantically different, but rather that information is more connected between each other. The conducted experiments demonstrated that the size of the words and retrieval speed of words. ",
"The findings of our study could also help to give better, personalized instructions to the users in different fields, and help with the construction of a more interactive dialog between the user and an intelligent tutoring system.",
"It is common belief that children should be educated a foreign language for children in primary school rather than secondary school. There are several reasons explaining why it is better for children to begin learning a foreign language in primary school.",
"Children are between five and nine years old have the capacity to remember things fast twice as people in others age group. One research shown that learning any language could activate various new parts of the brain were never used before."]

const msg=document.getElementById("msg");
const typeWords=document.getElementById("mywords");
const btn=document.getElementById("btn");
let startTime, endTime;


const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}

const wordCounter = (str) => {
    let response=str.split(" ").length;
    return response;
}

const compareWords = (str1, str2) =>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;

    words1.forEach(function(item, index){
        if(item == words2[index]){
            count++;
        }
    })

    let errorWords=(words1.length - count);
    return `${count} correct out of ${words1.length} words and the total number of error are ${errorWords}.`

}

const endPlay = () => {
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);

    let totalStr=typeWords.value;
    let wordCount=wordCounter(totalStr);

    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg=`You typed total at ${speed} words per minute. `;
    
    finalMsg += compareWords(msg.innerText, totalStr);
    
    msg.innerText=finalMsg;


}

btn.addEventListener("click", function(){
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        typeWords.oncopy=false;
        playGame();
    }
    else if(this.innerText=="Done"){
        typeWords.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})