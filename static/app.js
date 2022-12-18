
const getGeo = (position) => {
    document.getElementById("long").value = position.coords.latitude;
    document.getElementById("latit").value = position.coords.longitude;
}

const errorLog = (log) => {
    console.log(log)
}

navigator.geolocation.getCurrentPosition(getGeo, errorLog, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
})