//Ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2
//Yaitu Counted loop dan Uncounted loop

//Perbedaan nya :

// 1. counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya.
//contoh counted loop
// function PushUp({
//     //code
// })
// for(i = 0; i<10; i++){
//     PushUp();
// }

// 2. uncounted loop merupakan perulangan yang tidak jelas berapa kali harus mengulang.
// contoh uncounted loop
// let bosan;
// while(bosan == false){
//     PushUp();
// }

//Macam macam perulangan counted loop:
//1. Perulangan For
//1. Perulangan ForEach
//3. Perulangan Repeat

//Macam macam perulangan uncounted loop:
//1. Perulangan while
//2. Perulangan Do/While'

//Perulangan For
//Perulangan For merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah perulangan.
// for(let i = 0; i <= 20; i++){
//     document.write(`<p>Perulangan ini berulang ${i} kali</p>`)
// }

//Perulangan While
//Perulangan While merupakan perulangan yang termasuk kedalam perulangan uncounted loop namun perulangan while juga dapat masuk atau menjadi perulangan yang counted loop dengan memberikan sebuah counter didalamnya

//Contoh
// let ulang = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("Apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang == false;
//     }
// }

// document.write("Perulangan sudah dilakukan sebanyak" + counter + " kali")

//Perulangan Do/While
//Perulangan Do/While sama seperti perulangan while.

//Perbedaan nya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while.     

// do{
//     //code
// }while(kondisi);

//contoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter ++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);

// document.write("Perulangan yang sudah dilakukan sebanyak" + counter + "kali")

let sum = "";
while(true){
    let value = prompt("Masukkan sebuah Huruf", '');
    if(!value) break;

    sum+= value;
}

alert('sum : ' + sum);