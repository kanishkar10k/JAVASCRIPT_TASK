function mul(x){
    let i=0;
    for(i=0;i<=100;i++){
        if(i%3==0 && i%5==0){
            document.write("FizzBuzz<br>");
        }
        else if(i%3==0){
            document.write("Fizz<br>");
        }
        else if(i%5==0){
            document.write("Buzz<br>");
        }
        else{
            document.write(i+"<br>");
        }
    }
} //1

function palindrome(){
    let str = prompt("Enter the String for Palindrome");
    let str2="";
    let i;
    for(i=(str.length)-1;i>=0;i--){
        str2+=str.charAt(i);
    }
    document.write("String ="+str+"<br>");
    if(str===str2){
        document.write("The given string is a Palindrome");
    }
    else{
        document.write("The given string is Not a Palindrome");
    }
} //2 

function max(){
    let arr=[12,323,43,54,63,23,124,322];
    let max_num=0;
    let i=0;
    for(i=0;i<arr.length;i++){
        if(arr[i] > max_num){
            max_num= arr[i];
        }
    }
    document.write(max_num);
} //3
function big_word(){
    let str1 = prompt("Enter the String for Largest Word");
    let arr2 = str1.split(" ");
    let max_string = "";
    for(let i in arr2){
        if(arr2[i].length > max_string.length){
            max_string = arr2[i];
        }
    }
    document.write(str1+"<br>");
    document.write(max_string);
} //5 

function fact()
{
    let num = prompt("Enter the number for Factorial");
    let factorial=1;
    for(let i=1;i<=num;i++){
        factorial*=i;
    }
    document.write("The Factorial of "+num+" is "+factorial);
} //6 

function fahrenheit(){
    let c= prompt("Enter the celsius");
    let f= (c*(9/5))+32;
    document.write("Celsius is "+c+"<br> Fahrenheit is "+f);
} //7

function missing(){
    let array=[1,3,4,6,8,9];
    let original=[1,2,3,4,5,6,7,8,9,0]
    let miss=[];
    let flag=0;
    for(let i=0;i<original.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j]===original[i]){
                flag=1;
                break;
            }
        }
        if(flag===0){
            miss.push(original[i])
        }
        flag=0;
    }
    document.write("Given Array: "+array+"<br> Missing Values: "+miss);
} //8