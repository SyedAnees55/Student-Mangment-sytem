import { log } from "console";
import inquirer  from "inquirer";

const randomNumber:number=Math.floor(10000+Math.random()*90000);

let mybalance:number=0;

const Answer=await inquirer.prompt([{
    name:'Name',

    message:"Enter a student name",

    type:'input',

    validate:function(value){

        if(value.trim() !== " "){
            return true;
        }

        return "please enter a student name";
    }
   },{
    name:"f_name",
    message:"Enter a Father Name",
    type:"input",
    validate:function(value){
        if(value.trim()!== " "){
            return true;
        }
        return "please Enter a Father Name";
    }
   },{
    name:"CNIC",
    message:"Enter your CNIC number",
    type:"input",
   
    }
   ,{
       name:"courses",
       message:"select the course",
       type:"list",
       choices:["c++","java","MS office","python","HTML","Excel"]

   }
 ]
);

const coursefee:{[key:string]:number}={
    "c++":9000,
    "java":5000,
    "MS office":3000,
    "python":10000,
    "HTML":4000,
    "Excel":2000,
};

console.log(`\n coursefees :${coursefee[Answer.courses]}\n`);
console.log(`Mybalance is :${mybalance}\n`);

let Paymentanswer=await inquirer.prompt(
    [
        {
            name:"Payment",
            message:"select a payment Method",
            type:"list",
            choices:["Bank transfer","Easy paisa","jazz cash","Debirt card"]
        },
        {
            name:"amount",
            message:"enter the amount",
            type:"input",
            validate:function(value){
                if(value.trim()!== " "){
                    return true;
                }
                return "please enter the amount";
            }
        }
    ]
);

console.log(`\n You select payment Method: ${Paymentanswer.Payment }\n`);

const coursefees = coursefee[Answer.courses];

const paymentamount =parseFloat(Paymentanswer.amount);

if (coursefees == paymentamount) {
    console.log(`\n congratulations, you have succesfully completed the payment amount. \n`);
    
const ans = await inquirer.prompt([{
    name:"select",

    message:"select an option",

    type:"list",

    choices:["Check status","Exit"]

}]);

if (ans.select  === "Check status") {
    console.log(`\n ------------YOUR STATUS------------ \n `);

    console.log(`\n Student Name : ${Answer.Name} \n`);

    console.log(`\n Father Name : ${Answer.f_name} \n`);

    console.log(`\n Student ID : ${randomNumber} \n`);

    console.log(`\n CNIC number : ${Answer.CNIC} \n`);

    console.log(`\n You Selected Course : ${Answer.courses}\n`);
    
    console.log(`\n Course fees :${paymentamount}\n`);

    console.log( `\n\n\n                                                  Balance : ${(mybalance += paymentamount)} \n`);

}
else if (ans.select === "Exit") {

    console.log(`\n Exiting the student Management system. \n`);
    
}
    
}


else{
    console.log(`\n Invalid amount due to ${Answer.courses} course. \n`);
    
}
