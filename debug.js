var log = function() {
        console.log.apply(console, arguments)
    }
    //定义自己的log很重要 enSure增强进化版 穿衣服
var ensure = function(def, result, message) {
    if (JSON.stringify(def) !== JSON.stringify(result)) {
        log('异常————————————>', message)
        log('def    = "' + def + '"\nresult = "' + result + '"')
    }
}
var ckXian = function(mc) {
        var body = document.querySelector('body')
        var style =
            `<style id="xm" media="screen">
            ${mc}{outline: 1px red dashed} </style>`
        var i = false
        body.addEventListener('keydown', function(event) {
            if (event.keyCode === 77 && event.ctrlKey) {
                if (i) {
                    var styletog = document.querySelector('#xm')
                    styletog.remove();
                    i = false
                } else {
                    body.insertAdjacentHTML('afterbegin', style);
                    i = true
                }
            }
        })
    }
ckXian('*')
// 定义 log enSure

$('#id-top').on('mouseover', function() {
    $('.top').fadeIn()
    var t = setTimeout("$('.top').fadeOut()", 5000)
    $('.top').on('click', function() {
        $('.search').slideToggle(1000)
        setTimeout("$('.engine').slideToggle(2000)", 1000)
        clearTimeout(t)
    })
})
