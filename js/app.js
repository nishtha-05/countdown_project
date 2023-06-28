const enddate = " 28 June 2023 02:03:15 PM"

document.getElementById("end date").innerText = enddate; 
const input = document.querySelectorAll("input");//provide list



function clock(){
    const end = new Date(enddate);//date when timer will stop
    const now =new Date //present Date
    const diff = (end-now)/1000 //this will give data in mili seconds after dividing 1000 will be converted in seconds
    if (diff<0) return;

    input[0].value = (Math.floor(diff/3600/24)); //days
    input[1].value = (Math.floor(diff/3600) % 24); //remaining hours after removong days
    input[2].value = (Math.floor(diff/60) % 60); //calculate minute
    input[3].value = (Math.floor(diff) % 60);
    //now we have to convert this miliseconf]ds in to days,hours,minute ,second
    //convert in to days

}
//inital call
clock()//initial call means value will be chnged when page will refresh

/** only for day conversion
 * 1 day=24 hrs
 * 1 hr = 60 min
 * 1 min=3600 sec
 */

setInterval(
    () => {
    clock()
}, 1000
);