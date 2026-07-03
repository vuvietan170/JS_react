// Tạo function với callback để simulate API call
function fetchUser(callback){
    console.log("Call API...");

    setTimeout(() => {
        const user = {
             name:"tan",
             id: 1
        };

        callback(null,user);
    },2000);
}
fetchUser((error,data) => {
    if (error){
        console.log("ERROR: ", error);
    }
    else{
        console.log(data);
    }
});