onload = function(){

    // 네비
    let menu_nav = document.getElementsByClassName('menu_nav');
    let menu_content = document.getElementsByClassName('menu_content');
    for (let i = 0; i < menu_nav.length; i++) {
        const element = menu_nav[i];
        element.addEventListener('click',function(e){
            const className = this.className;

            for (let j = 0; j < menu_nav.length; j++) {
                const element = menu_nav[j];
                element.classList.remove('menu_nav_select');
                menu_content[j].classList.remove('menu_content_show');
            }
            this.className += ' menu_nav_select';
            menu_content[i].classList.add('menu_content_show');
            
            //console.log(mc);

        },false);
        
        
    }



    // 게시판
    let rv_open = document.getElementsByClassName('rv_open');

    for (let i = 0; i < rv_open.length; i++) {
        const element = rv_open[i];
        element.addEventListener('click',function(e){

            for (let j = 0; j < this.childNodes.length; j++) {
                const className = this.childNodes[j].className ;
                if(className == "rv_content"){
                    this.childNodes[j].classList.add('rv_content_show');
                }
            }

        },false);
    }



    











}
