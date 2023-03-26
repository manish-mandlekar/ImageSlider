var btn = document.querySelectorAll('.btn');
var imgCnt = document.querySelector('.img-cnt');



var pictures=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

var counter = 0;
btn.forEach(function(button){
    button.addEventListener('click',function(e){
        if(button.classList.contains('btn-left')){
            counter--;
            if(counter<0){
                pictures.length -1;
            }
            imgCnt.style.background = `url(./${pictures[counter]}.jpg)`
            imgCnt.style.backgroundPosition = 'center'
            imgCnt.style.backgroundSize = 'cover'
        }
        if(button.classList.contains('btn-right')){
            counter++;
            if(counter>pictures.length  -1){
                counter = 0;
            }
            imgCnt.style.background = `url(./${pictures[counter]}.jpg)`
            imgCnt.style.backgroundPosition = 'center'
            imgCnt.style.backgroundSize = 'cover'
        }
    })
})














// var btn = document.querySelectorAll('.btn')
// var imgCnt = document.querySelector('.img-cnt')


// var pictures = [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6'
// ];

// var counter = 0;

// btn.forEach(function(button){
//     button.addEventListener('click',function(e){
//         if(button.classList.contains('btn-left')){
//             counter--;
//             if(counter<0){
//                 pictures.length -1 
//             }
//             imgCnt.style.background =`url(./${pictures[counter]}.jpg)`
//             imgCnt.style.backgroundPosition= 'center';
//             imgCnt.style.backgroundSize= 'cover';
//         }
//         if(button.classList.contains('btn-right')){
//             counter++;
//             if(counter>pictures.length -1 ){
//                 counter = 0;
//             }
//             imgCnt.style.background =`url(./${pictures[counter]}.jpg)`
//             imgCnt.style.backgroundPosition= 'center';
//             imgCnt.style.backgroundSize= 'cover';
//         }
//     })
// })








