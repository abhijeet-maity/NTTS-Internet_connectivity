console.log("Hello Browser Buddy");

if (navigator.onLine) {
    console.log("Browser is connected to internet");
} else {
    console.log("Application is Offline !!!, Please check the Internet connection");
}

const checkStatus = () => {
    const status = document.querySelector("#Status");
    console.log(status);
    if (navigator.onLine) {
        status.innerText = "You are Online";
        status.classList.remove('offline');
        status.classList.add('online');
        document.body.style.backgroundColor='#99d98c';
    } else {
        status.innerText = "OOPS!!!, You are Offline";
        status.classList.remove('online');
        status.classList.add('offline');
        document.body.style.backgroundColor='#f26a4f';
    }
}

checkStatus();