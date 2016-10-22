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
            .tan-buttons {
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
                    <button id="id-tan-OK"     class="tan-buttons pure-button" type="button">进入</button>
                    <button id="id-tan-Cancel" class="tan-buttons pure-button" type="button">取消</button>
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

var ckXian = function () {
    var body = document.querySelector('body')
    var style =
    `<style id="xm" media="screen">
        div{outline: 1px red dashed;}
    </style>`
    var i = false
    body.addEventListener('keydown', function(event){
        if (event.keyCode === 77 && event.ctrlKey) {
            if (i) {
                var styletog = document.querySelector('#xm')
                styletog.remove(); i= false
            } else {
                body.insertAdjacentHTML('afterbegin', style); i = true
            }
        }
    })
} //后台添加代码,使用 ctrl+m 显示参考线 如果要全部看用把'div'改'*'
ckXian ()

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
// time() === "10月22日 星期六"

var comment = function() {
    //
}

//－－－－－－－－－－－－－－－－－－－
var words = 140
var html = `
    <div class="comment">
        <form class="comment-text pure-form">
            <textarea id="id-comment-text" maxlength="${words}" placeholder="在此输入评论" rows="4" required></textarea>
            <div id="id-comment-okay">
                <span class="pure-button pure-button-disabled">还能输入
                <span   id="id-words">${words}</span> 个字</span>
                <input  id="id-comment-input" type="text" placeholder="昵称" maxlength="10" required>
                <button id="id-comment-put" class="pure-button">提交评论</button>
            </div>
        </form>
    </div>
    `
$('.cont').after(html)
$('.comment-text').on('keydown', function() {
    var word = words - $('#id-comment-text').val().length
    $('#id-words').text(word)
})
// 添加 评论 comments 模块
var comments = [
    {name:'少杰',date:'10月07日 星期三',message:'123'},
    {name:'癫仁',date:'10月02日 星期二',message:'abc'}
]
// 读取 评论 comments 数据
for (i of comments) {
    var temp =`
        <div class="message">
            <div class="message-time">
                <button class="message-name pure-button">${i.name} 评论于 ${i.date}</button>
            </div>
            <div class="message-cont">
                ${i.message}
            </div>
        </div>`
    $('.comment-text').after(temp)
}
// 加载 评论 comments 数据

$('#id-comment-put').on('click', function(event) {
    var ku = {
        name: $('#id-comment-input').val(),
        date: time(),
        message: $('#id-comment-text').val(),
    }
    $('#id-comment-input').val('')
    $('#id-comment-text').val('')

    comments.push(ku)
    var temp =`
        <div class="message">
            <div class="message-time">
                <button class="message-name pure-button">${ku.name} 评论于 ${ku.date}</button>
            </div>
            <div class="message-cont">
                ${ku.message}
            </div>
        </div>`
    $('.comment-text').after(temp)
})
