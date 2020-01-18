window.onload = function(){
    document.querySelector('.show_menu').onclick =showM;
    document.querySelector('.hide_menu').onclick =hideM;
    var overflowMenu= document.createElement('div');
    document.onkeydown = function(event){
        if(event.code =='KeyM') showM();
        if(event.code =='Escape') hideM();
    }
    function showM(e){
        document.querySelector('.menu').style.display= 'flex';
        document.querySelector('.hide_menu').style.display= 'flex';
        document.querySelector('.show_menu').style.display= 'none';
        overflowMenu.className= "overflow";
        document.body.appendChild(overflowMenu);
    }
    function hideM(e){
        overflowMenu.remove();
        document.querySelector('.menu').style.display= 'none';
        document.querySelector('.hide_menu').style.display= 'none';
        document.querySelector('.show_menu').style.display= 'block';
    }
    overflowMenu.onclick = function(){
        document.querySelector('.menu').style.display= 'none';
        document.querySelector('.hide_menu').style.display= 'none';
        document.querySelector('.show_menu').style.display= 'block';
        overflowMenu.remove();
    }
}