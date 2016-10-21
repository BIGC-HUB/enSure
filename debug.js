var tanChuang = function(title, mima) {
    var style = `
        <style>
            /* 弹窗 */
            .tanChuang {
                z-index: 1;
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.96;
                color: white;
                text-align: center;
            }
            /* 背景 */
            .img-background {
                position:relative;
                top: 50%;
                transform: translateY(-88%);
                z-index: -1;
            }
            #img-background { display: inline-block; }
            /* 居中 */
            .tan-center {
                position:relative;
                top: 50%;
                transform: translateY(-61.8%);
                }
            /* 标题 */
            .tan-title {
                font-size: 1.81em;
                padding: 10px;
            }
            /* 内容框 */
            .tan-message {
                padding: 10px;
            }
            /* 输入框 */
            #id-tan-input {
                font-size: 1.61em;
                color: black;
                text-align: center;
                border-radius: 20px;
            }
            #id-tan-input:focus { outline-style: none; }
            /* 按钮 */
            .pure-button {
                color: white;
                border-radius: 20px;
                background: rgb(51, 103, 214);
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
                font-size: 100%;
            }
        </style>
        `
    var temp = `
        <div class="tanChuang">
            <div class="tan-center">
                <div class="tan-title">${title}</div>
                <div class="tan-message">
                    <input id="id-tan-input" type="text" value="">
                </div>
                <div class="tan-button">
                    <button id="id-tan-OK"     class="pure-button" type="button">知道</button>
                    <button id="id-tan-Cancel" class="pure-button" type="button">母鸡</button>
                </div>
            </div>
            <div class="img-background">
                <img id="img-background pure-img" width="70%" src="imgs/105.Earth.png" alt="background">
            </div>
        </div> `
    $('body').append(style)
    $('body').append(temp)
    $('#id-tan-OK').on('click', function() {
        let value = $('#id-tan-input')[0].value
        if (value === mima) {
            $('.tanChuang').remove()
        }
    })
    $('#id-tan-Cancel').on('click', function() {
        $('.tanChuang').remove()
    })
}
// tanChuang('你好，是否知道个人档案密钥','123')


var GuaSlide = function(element, images) {
    var style = `
            <style>
                .GuaSlide {
                    margin: auto;
                    /* 边框 */
                    width: 730px;
                    height: 454px;
                    /* 大小 */
                    border-radius: 4px;
                }
                .img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    /* 定位 */
                }
                .img:hover { cursor: pointer; }
                .img-button {
                    display: none;
                    width: 25px;
                    height: 70px;
                    background: black;
                    color: white;
                    border: 0;
                    padding: 0;
                    outline: 0;
                    opacity: 0.418;
                    font-family: Microsoft YaHei;
                    font-size: 26px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-61.8%);
                }
                .img-button:hover { opacity: 0.5; cursor: pointer; }
                .img-button-left  { left: 0;  text-align: left;}
                .img-button-right { right: 0; text-align: right;}
                .img-bottom {
                    position: relative;
                    bottom: 35px;
                    /* 定位 */
                }
                .imgs-button {
                    border: 0;
                    padding: 0;
                    outline: 0;
                    width: 18px;
                    height: 18px;
                    font-family: Microsoft YaHei;
                    font-size: 12px;
                    border-radius: 50%;
                    background: black;
                    color: white;
                    opacity: 0.618;
                }
                .imgs-button:hover {
                    opacity: 0.8;
                    background: #b61b1f;
                    cursor: pointer;
                }
                .imgs {
                    position: absolute;
                    display: block;
                }
                .imgs-kai {
                    display: block;
                }
                .imgs-button-kai {
                    background: #b61b1f;
                }
            </style>`
    var html = `
            <div class="GuaSlide">
                <div class="img">
                    <img class="imgs" src=${images[0]} >
                    <img class="imgs" src=${images[1]} >
                    <img class="imgs" src=${images[2]} >
                    <img class="imgs" src=${images[3]} >
                    <img class="imgs" src=${images[4]} >
                    <img class="imgs" src=${images[5]} >
                    <button class="img-button img-button-left"  type="button"> < </button>
                    <button class="img-button img-button-right" type="button"> > </button>
                </div>
                <div class="img-bottom">
                    <button class="imgs-button" type="button" data-id='1'> 1 </button>
                    <button class="imgs-button" type="button" data-id='2'> 2 </button>
                    <button class="imgs-button" type="button" data-id='3'> 3 </button>
                    <button class="imgs-button" type="button" data-id='4'> 4 </button>
                    <button class="imgs-button" type="button" data-id='5'> 5 </button>
                    <button class="imgs-button" type="button" data-id='6'> 6 </button>
                </div>
            </div>`
    $(element).append(style)
    $(element).append(html)
    $( '.img' ).on( 'mouseover', function() {
        $('.img-button').css('display','block')
    })
    $( '.img' ).on( 'mouseout' , function() {
        $('.img-button').css('display','none')
    })
    var i = 0 % images.length
    $('.imgs').each( function(index) {
        var jiu = $($('.imgs')[index])
        jiu.fadeOut(0)
        jiu.removeClass('imgs-kai')
        index =  ( index + 1 ) % images.length
        var xin = $($('.imgs')[index])
        xin.addClass('imgs-kai')
        xin.fadeIn(0)
    })
    $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    $( '.img-button-right' ).on( 'click', function() {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i =  ( i + 1 ) % images.length
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
    $( '.img-button-left'  ).on( 'click', function() {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i =  ( (i - 1) + images.length ) % images.length
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
    $( '.img-bottom'       ).on( 'mouseover', '.imgs-button', function(event) {
        var jiu = $($('.imgs')[Math.abs(i)])
        jiu.fadeOut()
        jiu.removeClass('imgs-kai')
        $($('.imgs-button')[Math.abs(i)]).removeClass('imgs-button-kai')
        i = $(event.target).data('id') - 1
        var xin = $($('.imgs')[Math.abs(i)])
        xin.addClass('imgs-kai')
        xin.fadeIn()
        $($('.imgs-button')[Math.abs(i)]).addClass('imgs-button-kai')
    })
}
var images = [
    "imgs/GuaSlide/1.jpg",
    "imgs/GuaSlide/2.jpg",
    "imgs/GuaSlide/3.jpg",
    "imgs/GuaSlide/4.jpg",
    "imgs/GuaSlide/5.jpg",
    "imgs/GuaSlide/6.jpg",
]
GuaSlide('body',images)
