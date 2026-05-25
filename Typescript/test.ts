
let username:string = "Arbind";

console.log(username);


// function  print(): void {
//     console.log("its working")

// }

// print()



// const sayHello = ():void =>{

// }

let  counter:number = 100


function handleIncrement():void{
    if (counter>=10) {
        console.log(`please enter the value less then : ${counter}`);
        return;
        
    }else{
        counter+=1;
        console.log(`after added the value is : ${counter}`);
        
    }

}


const handleDecrement = (): void =>{

    if (counter<=0) {
        console.log(`please enter the value gt : ${counter}`);
        return
    }else{
        counter-=1;
        console.log(`after decrement  the value is : ${counter}`);
        
    }
}

function addTwoNumbers(a: number , b: number):number{
        return a + b;

}

console.log(addTwoNumbers(90 , 90));
