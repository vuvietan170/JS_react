//Viết function tạo stopwatch có start(), stop(), reset()
const createStopwatch = ()=>{
    let startTime = 0;
    let elapsedTime = 0;
    let running = false;

    return {
        start(){
            if (!running){
                startTime = Date.now();
                running = true;
            }
        },

        stop(){
            if(running){
                elapsedTime +=  Date.now() - startTime;
                running = false;
            }
        },

        reset(){
            startTime = 0;
            elapsedTime = 0;
            running = false;
        },

        getTime(){
            if(running){
                return elapsedTime + (Date.now() - startTime);
            }
            else{
                return elapsedTime;
            }
        }
    }
}

const stopWatch1 = createStopwatch();
stopWatch1.start();
setTimeout(()=>{
    stopWatch1.stop();
    console.log(stopWatch1.getTime());
},3000);
setTimeout(() => {
    stopWatch1.reset();
    console.log(stopWatch1.getTime());
},3000);