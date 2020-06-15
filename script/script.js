/* scroll to initial view */
console.log('hi');

window.onload =  function() {
    document.querySelector('.perspective').scrollTo({
        top: window.innerHeight/2,
        left: 0,
        behavior: 'smooth'
    });
};