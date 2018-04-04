/*友情链接*/
$('.select-t').on('mousedown',function(event){
    event.stopPropagation();//阻止mousedown 事件冒泡（注意只阻止了mousedown事件）
    event.preventDefault();//阻止当前元素默认事件
    //以上两个方法同样适用于原生js
    if($('.select-ul').is(':hidden')){
        $('.select-ul').show();
    }else{
        $('.select-ul').hide();
    }
});

$(document).on('mousedown',function(){
    $('.select-ul').hide();
});

/*返回顶部*/
var obtn = document.getElementById('goTop');  //获取回到顶部按钮的ID
var timer = null; //定义一个定时器
var isTop = true; //定义一个布尔值，用于判断是否到达顶部
obtn.onclick = function(){    //回到顶部按钮点击事件
    //设置一个定时器
    timer = setInterval(function(){
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        isTop =true;  //用于阻止滚动事件清除定时器
        if(osTop == 0){
            clearInterval(timer);
        }
    },50);
}


$(".menuBtn").click(function(){

    $(".sj-back-0").fadeIn(100);
    $(".i-nav").css("right","0px");

});
$(".menuClose").click(function(){
    $(".sj-back-0").fadeOut(100);
    $(".i-nav").css("right","-310px");
});


