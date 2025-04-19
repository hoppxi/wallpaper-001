import network from "@butility/network";
import { setAttribute } from "@butility/dom";

const foreBtn = document.querySelector("button.icon.fore");
const backBtn = document.querySelector("button.icon.back");
const image = document.querySelector("img.main-wp");

const wallpaperHistory = [];
let currentIndex = -1;

const slideshowIntervalMs = 500000; 
let slideshowTimer = null;

function setRandomWallpaper() {
    network.get("https://picsum.photos/1920/1080", {}, {
        method: "GET",
        responseType: "blob",
        useFetch: true,
        success: (response) => {
            const blobUrl = URL.createObjectURL(response);
            wallpaperHistory.splice(currentIndex + 1);

            wallpaperHistory.push(blobUrl);
            currentIndex++;

            setAttribute(image, { src: blobUrl });
        },
        error(error) {
            console.error("Failed to fetch image from Picsum:", error);
        }
    });
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        setAttribute(image, { src: wallpaperHistory[currentIndex] });
    }
}

function goForward() {
    if (currentIndex < wallpaperHistory.length - 1) {
        currentIndex++;
        setAttribute(image, { src: wallpaperHistory[currentIndex] });
    } else {
        setRandomWallpaper();
    }
}

function startSlideshow() {
    stopSlideshow();
    slideshowTimer = setInterval(goForward, slideshowIntervalMs);
}

function stopSlideshow() {
    if (slideshowTimer) {
        clearInterval(slideshowTimer);
        slideshowTimer = null;
    }
}

function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const formatted = now.toLocaleString('en-US', options);
    document.getElementById('clock').textContent = formatted.replace(',', '');
}

function greetUser() {
    const hour = new Date().getHours();
    let greeting = 'Welcome';
    if (hour >= 5 && hour < 12) greeting = 'Good morning';
    else if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
    else greeting = 'Good evening';
  
    document.getElementById('welcome-message').textContent = `${greeting}, EA!`;
  }
  

document.addEventListener("DOMContentLoaded", () => {
    setRandomWallpaper();
    startSlideshow();
});

foreBtn?.addEventListener("click", goForward);
backBtn?.addEventListener("click", goBack);

setInterval(updateClock, 1000);
updateClock();

greetUser();