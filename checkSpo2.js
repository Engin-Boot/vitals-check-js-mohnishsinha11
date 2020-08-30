function checkSpo2(spo2)
{
    if(spo2<90){
        console.log("spo2 low");
        return(true);
    }
    else if(spo2>100){
        console.log("spo2 high");
        return(true);
    }
    return(false);
}
module.exports=checkSpo2;