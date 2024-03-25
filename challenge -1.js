function calculatorGrade(studentMark){
    if (studentMarks<0 && studentMark){
        return 'invalid marks'
    }
    else if(studentMark>79 && studentMark<=100){
        return 'A'
    }else if(studentMark>60 && studentMark<79){
        return 'B'
    }else if(studentMark>49 && studentMark<59){
        return 'C'
    }else if (studentMark>39 && studentMark<49){
        return 'D'
    }else if (studentMark>=o && studentMark<39){
        return 'E'
    }
}  
console.log(grading(85))