// document.getElementById('buttonOne').addEventListener('click', function () {
//     let img1 = document.getElementById('img1')
//     img1.style.filter = 'grayScale(0%)';
    // img1.style.transition = 'all 0.7s';
    // img1.style.transform = 'Scale(1.5)'

// })

// document.getElementById('img1').addEventListener( 'ondblclick' , function () {
//     let img1 = document.getElementById('img1')
//     img1.style.filter = 'grayScale(100%)';
//     img1.style.transform = 'Scale(0.5)'
// })

// document.getElementById('buttonTwo').addEventListener('click', function () {
//     let img2 = document.getElementById('img2')
//     img2.style.filter = 'grayScale(0%)' ;
//     img2.style.transition = 'all 0.7s';
//     img2.style.transform = 'Scale(1.5)'
// })
// document.getElementById('img2').addEventListener('click', function () {
//     let img2 = document.getElementById('img2')
//     img2.style.filter = 'grayScale(100%)';
//     img2.style.transform = 'Scale(0.5)'
// })

let done = true;
document.getElementById('buttonOne').addEventListener('click', () => {
    if (done) {
        document.getElementById('img1').style.filter = 'grayScale(100%)' ;
        img1.style.transition = 'all 0.7s';
        img1.style.transform = 'Scale(1.4)'
        let done = false

    }
    else{
        document.getElementById('img1').style.filter = 'grayScale(0%)' ;
        img1.style.transition = 'all 0.7s';
        img1.style.transform = 'Scale(1)'
    }
})

let done1 = true;
document.getElementById('buttonTwo').addEventListener('click', () => {
    if (done1) {
        document.getElementById('img2').style.filter = 'grayScale(100%)' ;
        img2.style.transition = 'all 0.7s';
        img2.style.transform = 'Scale(1.2)' ;
        let done1 = false
    }
    else{
        document.getElementById('buttonTwo').addEventListener('click' ,() => {
            if(done1){
                document.getElementById('img2').style.filter = 'grayScale(0%)' ;
                img2.style.transition = 'all 0.7s';
                img2.style.transform = 'Scale(1)'
            }
        })

    }
})
    
    