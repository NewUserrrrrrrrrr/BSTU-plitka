 
function reportWindowSize(event) {
    var myWindow;
    // 320
    if(window.outerWidth <= 767) {
        if(!window.location.href.includes('temp')) {
            myWindow = window.open('temp/index.html', '_self');
        }
        
    } if(window.outerWidth >= 768 && window.outerWidth <= 1023 ) {
        
        if(window.location.href.includes('temp')) {
           myWindow = window.open('../index.html', '_self');
        } 

    } if(window.outerWidth >= 1024) {
        if(window.location.href.includes('temp')) {
            console.log('1024');
            myWindow = window.open('../index.html', '_self');
        } 
    }

    if (myWindow) {  
        myWindow.console = console; 
      }
}

function onPageLoad(event){
    reportWindowSize(event);
}

addEventListener("resize", reportWindowSize);
addEventListener("load", onPageLoad);
addEventListener('DOMContentLoaded', reportWindowSize);

 

 