document.write("<h2>Hello world from javascript.</h2>");

// let num = 3;
// let name = "noyon";
// let full_name = 'Md mohaymenul Islam';
// let flag = true;
// document.write(full_name + ' ' + name + '\n');
// alert(num);
// let v;  // declearation
// v = 'something'; // initialization
// document.write(v)

// let num1 = -8;
// if (num1 > 0){
//     if (num1 % 2 == 0)
//         result = num1 + ' is positive and even'
//     else
//         result = num1 + ' is positive and odd'
// }else{
//     if (num1 % 2 == 0)
//         result = num1 + ' is negative and even'
//     else
//         result = num1 + ' is negative and odd'
// }

// document.write('Result is: ' + result)

// day = 33;
// switch(day){
//     case 1:
//         document.write('Sunday');
//         break;
//     case 2:
//         document.write('Monday');
//         break;
//     case 3:
//         document.write('Tuesday');
//         break;
//     case 4:
//         document.write('Wednesday');
//         break;
//     case 5:
//         document.write('Thursday');
//         break;
//     case 6:
//         document.write('Friday');
//         break;
//     case 7:
//         document.write('Saturday');
//         break;
//     default:
//         document.write('Something went wrong!');
//         break;
// }


for(let i=1; i<=10;i++){
    document.write("<h2> 5 x " + i + " = ", i*5 + "</h2>");
}

let i = 1;
while(i <= 10){
    document.write("<h2> 7 x " + i + " = ", i*7 + "</h2>");
    i += 1;
}

let j = 1;
do{
    document.write("<h2> 39 x " + j + " = ", j*39 + "</h2>");
    j += 1;
}while(j <= 10);

