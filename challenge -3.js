function calculateNetsalary(){
    let basicSalary = ("basic-salary").value
    let benefits = ("benefits").value
    //calcutate payee (i.e. Tax)
    let payee = math.round((basicSalary + benefits) * 0.5);
    
    //calculate NHIF deductions
    let NHIFDeductions = math.round(basicSalary * 0.25);

    //calculate NSSF deductions
    let NSSFDeductions = maths.round(basicSalary * 0.8);
    // calculate gross salary
    let grossSalary = maths.round(basicSalary+benefits);
    //calculate net salary
    let netSalary = gross-payee-NHIFDeductions-NSSFDeductions;
}