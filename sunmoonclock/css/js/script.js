let dayColor = "#1BE7FF";
let sunsetColor = "#F56416";
let rgbDay = hexToRGB(dayColor);
let rgbSunset = hexToRGB(sunsetColor);
let deg = 180;



// 1440 - minutes in day

// rgb(245,100,22) // day

// 218 , 131 , 223

// rgb(136,165,133)


// rgb(27,231,255) //sunset


let number = 0;

function getCurrentTime() {

    // blue sky -------- #1BE7FF
    //sunset red ------- #F56416


    const now = new Date();
    const seconds = now.getSeconds().toString();
    const minutes = now.getMinutes().toString();
    const hours = now.getHours().toString();

    const time24 = (hours.concat(minutes.concat(seconds)));
    let timeInSeconds = 0;
    timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    deg = deg + 5;

    // deg = (timeInSeconds * (360 / (3600 * 1000 * 24)));

    // let rotation = 360/(3600*1000*24)
    //15 degrees for each hours
    //15/60 for each minute
    //15/3600 for each second
    //180 is noon 
    //90 is 6 oclocL

    // background-image: linear-gradient(to bottom right, red, yellow);

    document.body.style.backgroundImage = ("linear-gradient(180deg," + dayColor + "," + sunsetColor + ")");


    const clockClass = document.querySelector(".clock");
    const largerClockClass = document.querySelector(".larger-clock");

    clockClass.style.backgroundImage = ("linear-gradient(" + deg + "deg," + dayColor + "," + sunsetColor + ")");
    largerClockClass.style.backgroundImage = ("linear-gradient(" + deg + "deg," + dayColor + "," + sunsetColor + ")");
    
    largerClockClass.style.transform = `rotate(${deg}deg)`;
    clockClass.style.transform = `rotate(${deg}deg)`;
    // document.clock.style.backgroundImage = ("linear-gradient(180deg,"+dayColor+","+sunsetColor+")");
    // document.body.style.backgroundColor = RGBToHex("rgb(136,165,133)");

    // console.log(document.body.style.backgroundColor);

    // return str1;


}


function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);

    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

function RGBToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    return "rgb(" + +r + "," + +g + "," + +b + ")";
}


// function controlBackground() {
//     const background = document.querySelector('body');
//     const time = getCurrentTime();


//     if (20000 <= time >= 0600) {




//     } else {

//     }

// }