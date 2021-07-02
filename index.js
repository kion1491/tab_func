var testFunc = function(){
    var tabLi = $("ul.tab_button li"),
        tabCont = $(".tab_cont");

    function init(){
        tabLiClickFunc();
    }

    function tabLiToggle(target){
        tabLi.removeClass("on")
        target.addClass("on");
    }

    function tabContFunc(){
        for(var i = 0; i<tabLi.length; i++){
            if(tabLi.eq(i).hasClass('on')){
                tabCont.eq(i).addClass('on')
                return true
            }
        }
    }

    function tabLiClickFunc(){
        tabLi.on("click",function(){
            tabLiToggle($(this))

            tabCont.removeClass("on")
            tabContFunc();

        })
    }

    return{
        init: init
    }
}();

testFunc.init()





