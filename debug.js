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
                opacity: 1;
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
                font-size: 130%;
                text-align: center;
                font-weight: 400;
            }
            /* 按钮 */
            .tan-buttons {
                color: rgb(104, 113, 116);
                background: rgb(0, 0, 0);
                font-size: 110%;
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
ckXian()
// 布局 参考线

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
    $('#id-comment-put').on('click', function(event) {
        var user = $('#id-comment-input').val()
        var text = $('#id-comment-text').val()
        if ( user.length > 1 && text.length > 1 ) {
            var ku = { name: user, date: time(), message: text }
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
            $('#id-comment-text').val('')
            comments.push(ku)
            localStorage.comments = JSON.stringify(comments)
        }
    })
    $('body').on('dblclick', '.message-name', function(event) {
        $(event.target).closest( '.message' ).remove()
        localStorage[ 'comments' ] = JSON.stringify([ ])
    })
}
comment()
// 添加 评论 comments 模块
if (localStorage.comments === undefined) {
    var comments = []
    } else {
        var comments = JSON.parse(localStorage[ 'comments' ])
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
    }
// 初始 评论 comments 数据
