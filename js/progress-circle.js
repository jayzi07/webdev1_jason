var calcSrollValue = () => {
    var scrollProgress = document.getElementById('progress');
    var pos = document.documentElement.scrollTop;
    var calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = 'grid';
    }else{
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#eab208 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcSrollValue;
window.onload = calcSrollValue;