import { useEffect, useState } from "react";

export default function Practice() {
  
  const [reply, setReply] = useState(0);

  
  const changeReply = () => {
    setReply(parseInt(prompt("Please enter the number you would like to FizzBuzz up to: ")));
  }

  useEffect(changeReply,[]);
  
  const replyOut = makeFizzBuzz(reply);
  

  return(
    <>
      <div className="demo">
        <div>
          <p> {replyOut} </p>
        </div>
      </div>
  
    </>

  )

}


function makeFizzBuzz(number){
  
  //if answer % 3 == 0 print fizz
  //if answer % 5 == 0 print buzz
  //if answer % 3 check 5 and vice versa

  let newString = "";

  for(let i = 1; i < number; i++){
    if(i%3 === 0 && i%5 === 0){
     newString += "FizzBuzz ";
    }
    else if(i%3 === 0){
      newString += "Fizz ";
    }
    else if(i%5 === 0){
      newString += "Buzz ";
    }
    else{
      newString += i.toString()+" ";
    }
  }

  return(newString);
}



