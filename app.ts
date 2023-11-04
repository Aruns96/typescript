const numArray :Array<number> = [];
const stringArray :string[] = [];

type NumOrStr = string | number;
type objT = {val:number;timestamp:Date};

interface resultObj {
    val:number;
    timestamp:Date;
}


function add (num1:NumOrStr,num2:NumOrStr){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1+num2
    }
    if(typeof num1 === "string" && typeof num2 === "string"){
        return num1+ " " +num2
    }

    return +num1+ +num2;
}
function printObjVal(obj:resultObj){
    console.log(obj.val)
}

var input1 = document.getElementById("num1") as HTMLInputElement;
var input2 = document.getElementById("num2") as HTMLInputElement;
var p = document.getElementById("result") as HTMLParagraphElement;

var btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click",()=>{
    const n1 = input1.value ;
    const n2 = input2.value;
   
    const ans = add(+n1,+n2);
    numArray.push(ans as number)
    const stringans = add(n1,n2);
    stringArray.push(stringans as string)
    printObjVal({val:ans as number,timestamp:new Date()})
    
    

   


})

const pr = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },1000)
})

pr.then((res)=>{
   console.log(res.split("e"))
})