// type Dummy = {
//     name : string;
//     age : number;
//     address : string
// }
// function yoo(info : Dummy) : Dummy{
//     return info;
// }
// console.log(yoo({name : "Prathvi", age : 25, address : "Bhopal"}));

// type CardNumber  = {
//     cardNumberInfo : string;
// }

// type CardDetails = {
//     cvv : number;
// }

// type Card = CardNumber & CardDetails & {
//     name : string;
//     age : number
// }

// function printCardDetails(cardDetails : Card) : Card{
//     return cardDetails;
// }

// console.log(printCardDetails({cardNumberInfo : "12ne3&dh!@#", cvv : 2354353, name : "Prathvi", age : 25}));

// type info = {
//     mobile : string;
//     price : number;
//     shop : string
// }
// const mobileInfo : info[] = [];

// function insertMobileInfo(info : info[]){
//     return info;
// }

// const details = insertMobileInfo([
//     {
//         mobile : "iPhone 16",
//         price : 160000,
//         shop : "Apple Store"
//     },
//     {
//         mobile : "iPhone 6",
//         price : 60000,
//         shop : "Apple Store"
//     },
//     {
//         mobile : "Samsung S25",
//         price : 90000,
//         shop : "Samsung Store"
//     },
// ])

// console.log(details)

// let d : string | number | boolean;
// d = 23;
// console.log(d)
// d = true;
// console.log(d)
// d = "Devil";
// console.log(d)
// let rf : (string | number)[] = [1, "3", 5];
// console.log(rf);

// let obj : [string, number, boolean, string, boolean, number];
// obj = ["yoo", 34, false, "yooo", true, 989];
// console.log(obj);

// const enum GAMES {
//     DMC = "Devil May Cry",
//     VL = "Valorant",
//     GTA = "Grant theft Auto"
// }

// const myFav = GAMES.VL;
// console.log(myFav);

// interface ComputerStats {
//     name : string;
//     hardware : string;
//     modelNo : number;
// }

// const enum MOVIES {
//     DDLJ = "DDLJ",
//     YJHD = "YJHD",
// }

// interface MyComputer {
//     name : string;
//     hardware : string;
//     modelNo : number;
//     getCompName : (name : string, hardware : string, modelNo : number)=> ComputerStats;
// }

// interface MyComputer {
//     movies : MOVIES
// }

// function printCompName(name : string, hardware : string, modelNo : number): ComputerStats{
//     return {
//         name : "Prathvi",
//         hardware : "HP SuperNova",
//         modelNo : 83834934343432,
//      }
// }


// let compStats = function printMyComp(name : string, hardware : string, modelNo : number) : MyComputer{
//     return {
//         name : "Prathvi",
//         movies : MOVIES.DDLJ,
//         hardware : "HP SuperNova",
//         modelNo : 83834934343432,
//         getCompName : printCompName
//     }
// }
// console.log(compStats);

// class User {
//     readonly city : string = "Jaipur";
//     private age : number = 18
//     constructor(public email : string, public name : string){
//         this.email = email;
//         this.name = name;
//     }

//     get printEmail(): string{
//         return this.email
//     }

//     set setAge(num : number){
//         this.age = num;
//         console.log(this.age)
//     }

//     get printAge(){
//         return this.age;
//     }

// }

// const newUser = new User("Prathvi", "25");
// console.log(newUser.printEmail);
// console.log(newUser.setAge(25));


// interface Video {
//     name : string;
//     size : string;
//     uploadedBy : string;
//     date : string;
//     likes : number;
//     comments : number;
// }

// interface VideoData {
//     getVideoData() : void
// }

// class Instagram implements Video {
//     constructor(
//         readonly id : string,
//         public name : string,
//         public size : string,
//         public uploadedBy : string,
//         public date : string,
//         public likes : number,
//         public comments : number
//     ){}
// }

// class Youtube implements Video, VideoData{
//         constructor(
//         readonly id : string,
//         public name : string,
//         public size : string,
//         public uploadedBy : string,
//         public date : string,
//         public likes : number,
//         public comments : number
//     ){}

//     getVideoData() : void {
//         console.log("Video Data")
//     }
// }