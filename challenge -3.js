function calculateNetSalary(basicSalary,benefits){
       //canstants
    const TAX_RATE = 0.15; // 15% tax rate
    const NHIF_RATE = 0.025; //2.5% NHIF rate
    const NSSF_RATE = 0.06; //6% NSSF rate
    //calculate gross salary
    const grossSalary = basicSalary + benefits;
     //calculate tax (payee)
    const tax = grossSalary * TAX_RATE;
     //calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_RATE;
     //calculate NSSF deductions
    const nssfDeduction = grossSalary * NSSF_RATE
     //calculate net salary
    const netsalary = grossSalary - tax -nhifDeductions-nssfDeduction 
    // Return results
    return{
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions:nhifDeductions,
        nssfDeduction:nssfDeduction,
        netsalary:netsalary

    }; 
}
//Example usage
const basicSalary = 20000; // Example basic salary
const benefits = 40000; // Example benefits

const salaryDetails = calculateNetSalary(basicSalary,benefits)

console.log("gross salary:", salaryDetails.grossSalary);
console.log("Tax (PAYE):", salaryDetails.tax);
console.log("NHIF Deduction:",salaryDetails.nhifDeductions);
console.log("net salary:",salaryDetails.netsalary);