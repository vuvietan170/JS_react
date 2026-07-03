// Implement retry mechanism với async/await
function fakeApi(){
    return new Promise((resolve, reject)=> {
        const succes = Math.random() > 0.7;

        setTimeout(()=>{
            if(succes){
                resolve("Complete!");
            }
            else{
                reject("Failed data");
            }
        },1000);
    });
}
async function retryApi(maxRetry) {
    for(let i = 1 ; i <= maxRetry;i++){
        try{
            const data = await fakeApi();
            console.log(`thanh cong o lan thu ${i}`);
            return data;
        }
        catch (error)
        {
            console.log(`lan ${i} that bai`);
            if(i === maxRetry){throw error;}
        }
    }
}
retryApi(3);