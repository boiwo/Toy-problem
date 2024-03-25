function speedDetector(){
    //checks whether the speed is more than 70
    if(spee<=70){
        return "Ok \n"
    }
    else{
        const demeritPoints=(speed-70)/5; //driver receives 1 point for every 5km/h over the speed limit of 70km/h
            
        if (demeritPoints>12){
            return "licence suspended \n";
        }
        else{
            return `points:${demeritPoints}$\n`;
        }
    }

}