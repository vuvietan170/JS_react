//Convert callback function thành Promise
function fetchUser(){
    
    return new Promise((resolve,rejects) =>{
        setTimeout(()=>{
            const succes = true;

            if (succes){
                resolve({
                    id:1,
                    name: "Tan"
                });
            } else{
                rejects("Error");
            }
        },2000);
    });
}
fetchUser()
.then(user => {console.log(user);})
.catch(error => {console.log(error);});