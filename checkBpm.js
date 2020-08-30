function checkBpm(bpm)
{
    if(bpm<70){
        console.log("bpm low");
        return(true);
    }
    else if(bpm>150){
        console.log("bpm high");
        return(true);
    }
    return(false);
}
module.exports=checkBpm;