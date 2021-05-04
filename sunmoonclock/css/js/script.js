
function getCurrentTime() {


    const now = new Date();
    const seconds = now.getSeconds().toString();
    const minutes = now.getMinutes().toString();
    const hours = now.getHours().toString();

    const str1 = (hours.concat(minutes.concat(seconds)));

    console.log(str1);

    return str1;


}


function controlBackground(){
    const time = getCurrentTime();

    








}




