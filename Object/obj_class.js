// class identyCard {
//     constructor(studentName , age , address, Date_of_birth , contact , rollnumber){
//         this.studentName = studentName;
//         this.age = age ;
//         this.address = address ;
//         this.Date_of_birth = Date_of_birth;
//         this.contact = contact ; 
//         this.rollnumber = rollnumber ; 
//     }
    
    
// }
// let studentData = new identyCard('Ayush' , 23 , 'Ujjain', '25 June 2000', 9993551109 , 25)
// console.log(studentData);

// let studentData1 = new identyCard('saloni' , 21 , 'Dewas', '07 June 2001' , 8889847671 , 7)
// console.log(studentData1);

// let studentData2 = new identyCard('shivam' , 22 , 'jamui', '10 November 2000', 123456745 , 12)
// console.log(studentData2);

// let studentData3 = new identyCard('Ashu' , 20 , 'Indore', '21 september 2002' , 4567876545 , 22)
// console.log(studentData3);



class moterShowroom {
    constructor(Hero , Honda , Suzuki , TVS , Bajaj){
        this.Hero = Hero ;
        this.Honda = Honda ; 
        this.Suzuki = Suzuki ;
        this.TVS = TVS ;
        this.Bajaj = Bajaj;
    }
    HeroBike(){
        return Hero
    }
    HondaBike(){
        return Honda
    }
    SuzukiBike(){
        return Suzuki
    }
    TVS_bike(){
        return TVS
    }
    BajajBike(){
        return Bajaj
    }
}

let Hero = {
    model_1 : 'splander' ,
    model_2 : 'HF_delux' ,
    model_3 : 'Passion' , 
    model_4 : 'Xtream'
}
let Honda = {
    model_1 : 'Sp_125' ,
    model_2 : 'Shine' ,
    model_3 : 'Honda_CBR' , 
    model_4 : 'Honda_Navi'
}
let Suzuki = {
    model_1 : 'Hayabusa' ,
    model_2 : 'Gixxer' ,
    model_3 : 'v_strom' , 
    model_4 : 'Burgman'
}
let TVS = {
    model_1 : 'TVS_sport' ,
    model_2 : 'TVS_Rider' ,
    model_3 : 'Apache' , 
    model_4 : 'Jupiter'
}
let Bajaj = {
    model_1 : 'Pulser' ,
    model_2 : 'platina' ,
    model_3 : 'Dominar' , 
    model_4 : 'Avenger'
}
let Models = new moterShowroom(Hero , Honda , Suzuki , TVS , Bajaj)
console.log(Models) ;
// console.log(TVS) ;
