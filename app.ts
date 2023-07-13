
const num1Element=document.querySelector('#num1') as HTMLInputElement;
const num2Element=document.querySelector('#num2') as HTMLInputElement;
const btnElement=document.querySelector('button')! ;

const numResults:number[]=[];

type NumOrString=number|string;
type resultObj={val:number,active:boolean};

interface resultInterface{val:number;active:boolean};

btnElement.addEventListener('click',btn);
function btn (e:any){
    e.preventDefault();
    const result=add(+num1Element.value,+num2Element.value)
    numResults.push(result as number)
    printResult({val:result as number,active:false})
}
function add(num1: NumOrString,num2: NumOrString){
    if(typeof num1==='number'&& typeof num2==='number')
    return num1+num2
    if(typeof num1==='string'&& typeof num2==='string')
    return num1+num2;

    else return +num1 + +num2;
}

function printResult(result:resultInterface){
    console.log(result.val)
}


const myPromise=new Promise<string>((res,rej)=>{
    setTimeout(()=>{console.log(res('worked'))},1000);
})

myPromise
.then((result)=>{console.log(result.split('o'))})