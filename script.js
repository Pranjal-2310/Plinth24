// window.addEventListener('load', function() {
//     var loadingScreen = document.getElementById('loader');
//     setTimeout(function() {
//         loadingScreen.style.display = 'none';
//     }, 3000);
// });

document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader initially
    const preloader = document.querySelector("#loader");
    const content = document.querySelector("#content");

    content.style.display = "none"; // Hide main content initially

    // Simulate a delay using setTimeout
    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
    }, 5000); // Change 2000 to the desired delay in milliseconds (2 seconds in this example)
});
