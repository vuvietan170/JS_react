//Viết async function để gọi multiple APIs
function getUser(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("user");
        },2000);
    });
}
function getAdress(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("adress");
        },1000);
    });
}
function getNumber(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("number");
        },500);
    });
}

// async function loadData(){
//     const user = await getUser();
//     console.log(user);

//     const adress = await getAdress();
//     console.log(adress);

//     const number = await getNumber();
//     console.log(number);
// }
async function loadData() {
    const[user,adress,number] = await Promise.all([getUser(),getAdress(),getNumber()]);
    console.log(user);
    console.log(adress);
    console.log(number);
}
loadData();