// Implement function debounce đơn giản
function useDebounce(callback, delay){
    let timeoutID;
    return  () => {
        clearTimeout(timeoutID); //huy timer truoc 
        timeoutID = setTimeout(() => {
            callback();
        },delay);
    };
}
function Hello(){
    console.log("Hello");
}
const debounceHello = useDebounce(Hello,2000);
debounceHello(); //tao timer1 (mat 2s)

setTimeout(() => debounceHello(),500); // huy timer1 luc 500ms, tao timer2
setTimeout(() => debounceHello(),1000); // huy timer2 luc 1000ms, tao timer3
setTimeout(() => debounceHello(),1500); // huy time3 luc 1500ms, tao timer4
//3500ms Hello