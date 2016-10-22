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
                font-weight: 300;
                padding: 10px;
            }
            /* 输入框 */
            .tan-message {
                padding: 10px;
            }
            #id-tan-input {
                color: black;
                font-size: 150%;
                text-align: center;
                font-weight: 400;
            }
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
                <div class="tan-message pure-form">
                    <input id="id-tan-input" type="text" placeholder="">
                </div>
                <div class="tan-button">
                    <button id="id-tan-OK"     class="pure-button" type="button">进入</button>
                    <button id="id-tan-Cancel" class="pure-button" type="button">取消</button>
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
        } else {
            $('#id-tan-input')[0].value = ''
            $('#id-tan-input')[0].placeholder = '密码错误'
        }
    })
    $('#id-tan-Cancel').on('click', function() {
        $('#id-tan-input')[0].placeholder = '123'
    })
    $('#id-tan-input').on('keydown', function() {
        if (event.key === 'Enter') {
            $('#id-tan-OK').click()
        }
    })
}
// tanChuang('你好，是否知道个人档案密钥','123')

var ckXian = function() {
    var button = '<button class="xian-button" type="button">线 开关</button>'
    $('body').append(button)
    var style  = '<style id="id-xian">div { border: 0.1em; border-style: solid none; }</style>'
    var i = true
    $('.xian-button').on('click', function() {
        if (i) {
            $('body').append(style); i = false
        } else {
            $('#id-xian').remove();  i = true
        }
    })
} // 在页面底部生成一个按钮 开关 参考线
// ckXian()

var time = function( z ) {
    if (z === undefined) { z = new Date() }
    var x = z.toString()
    var zh     = '天一二三四五六'
    var Year   = x.slice(10,15)
    var Month  = z.getMonth() + 1
    var Day    = x.slice(8,10)
    var Hour   = x.slice(16,18)
    var Minute = x.slice(19,21)
    var Second = x.slice(22,24)
    var Week   = zh[ z.getDay() ]
    if ( String(Month).length === 1) {
        Month = '0' + Month
    }
    return `${Month}月${Day}日 星期${Week}`
}
time( )
