
var darkMode_icone = document.getElementById('mode');
var side_bars = document.getElementById('sideBars');

darkMode_icone.addEventListener('click',function(){
    document.body.classList.toggle('darkMode');

    if(darkMode_icone.classList.contains('fa-moon')){
        darkMode_icone.classList.add('fa-sun');
        darkMode_icone.classList.remove('fa-moon');
    }else{
        darkMode_icone.classList.remove('fa-sun');
        darkMode_icone.classList.add('fa-moon');
    }
});

side_bars.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});