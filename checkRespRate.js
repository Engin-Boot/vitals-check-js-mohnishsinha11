function checkRespRate(respRate)
{
    if(respRate<30){
        console.log("respRate low");
        return (true);
    }
    else if(respRate>95){
        console.log("respRate high");
        return(true);
    }
    return(false);
}
module.exports=checkRespRate;