// 定义 log enSure
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
// 天下之水 莫大于海 万川归之
var engine = {
    All: [{
        id: 0, // 综合
        name: '',
        color:'#E6E7EC',
        icon: 'dahai',
        url: `http://www.sogou.com/web?ie={inputEncoding}&query=`,
    },{
        id: 1,
        name: '搜狗',
        color:'#fd6853',
        icon: 'sogou',
        url: `http://www.sogou.com/web?ie={inputEncoding}&query=`,
    },{
        id: 2,
        name: '必应',
        color:'#ffb900',
        icon: 'bing',
        url: `http://cn.bing.com/search?q=`,
    },{
        id: 3,
        name: '知乎',
        color:'#0f88eb',
        icon: 'zhihu',
        wap: `http://zhihu.sogou.com/zhihuwap?query=`,
        url: `http://zhihu.sogou.com/zhihu?query=`,
    },{
        id: 4,
        name: '微信',
        color:'#00bc0c',
        icon: 'weixin',
        wap: `http://weixin.sogou.com/weixinwap?type=2&query=`,
        url: `http://weixin.sogou.com/weixin?type=2&query=`,
    },{
        id: 5,
        name: '百度百科',
        color:'#2319dc',
        icon: 'baidu',
        url: `http://baike.baidu.com/item/`,
    },{
        id: 10, // 编程
        name: 'w3school',
        color:'#bd2d30',
        icon: undefined,
        url: `http://cn.bing.com/search?q=site:w3school.com.cn+`,
    },{
        id: 20, // 认知
        name: '豆瓣电影',
        color:'#2e963d',
        icon: undefined,
        url: `https://movie.douban.com/subject_search?search_text=`,
    },{
        id: 21,
        name: '有道词典',
        color:'#e31333',
        icon: 'youdao',
        url: `http://m.youdao.com/dict?q=`,
    },{
        id: 30, // 设计
        name: '花瓣',
        color:'#DF4751',
        icon: 'huaban',
        url: `http://huaban.com/search/?q=`,
    },{
        id: 40, // 新闻
        name: '澎湃新闻',
        color:'#000000',
        icon: undefined,
        wap: `http://m.thepaper.cn/search.jsp?k=`,
        url: `http://www.thepaper.cn/searchResult.jsp?inpsearch=`,
    },{
        id: 18,
        name: '新浪微博',
        color:'#E73137',
        icon: 'sina',
        url: `http://s.weibo.com/weibo/`,
    },{
        id: 50, // 购物
        name: '淘宝',
        color:'#ed4403',
        icon: 'taobao',
        wap: `https://s.m.taobao.com/h5?q=`,
        url: `https://s.taobao.com/search?q=`,
    },{
        id: 60, // 旅行
        name: '马蜂窝',
        color:'#FFCB10',
        icon: undefined,
        wap: `https://m.mafengwo.cn/mdd/query.php?q=`,
        url: `http://www.mafengwo.cn/group/s.php?q=`,
    },{
        id: 70, // 地图
        name: '高德地图',
        color:'#4C90F9',
        icon: 'amap',
        url: `http://ditu.amap.com/search?city=100000&query=`,
    },{
        id: 80, // 音乐
        name: '酷狗音乐',
        color:'#2CA2F9',
        icon: undefined,
        url: `http://m.kugou.com/search?keyword=`,
    },{
        id: 81,
        name: '酷我音乐',
        color:'#feca2e',
        icon: undefined,
        url: `http://m.kuwo.cn/?key=`,
    },{
        id: 82,
        name: '网易云音乐',
        color:'#f40a01',
        icon: 'cloud-music',
        url: `http://music.163.com/#/search/m/?s=`,
    },{
        id: 90, // 电影
        name: '片源网',
        color:'#3860BB',
        icon: undefined,
        url: `http://pianyuan.net/search?q=`,
    },{
        id: 91,
        name: '优酷视频',
        color:'#2fb3ff',
        icon: undefined,
        url: `http://www.soku.com/search_video/q_`,
    },],
    Default: 0,
    Logo: function(input) {
        input.dataset.id = i.id
        if (i.icon !== undefined) {
            input.placeholder = i.name
            $('logo').html(`<i class="fa-logo-da iconfont icon-${i.icon}"></i>`)
        } else {
            input.placeholder = ''
            $('logo').html(`<span class="fa-logo-zi" style="color:${i.color}">${i.name}</span>`)
        }
    },
    Tag: [{
        id: 0,
        name: '综合',
    },{
        id: 1,
        name: '编程',
    },{
        id: 2,
        name: '认知'
    },{
        id: 3,
        name: '设计'
    },{
        id: 4,
        name: '新闻'
    },{
        id: 5,
        name: '购物'
    },{
        id: 6,
        name: '旅行'
    },{
        id: 7,
        name: '地图'
    },{
        id: 8,
        name: '音乐'
    },{
        id: 9,
        name: '电影'
    }],
}
var so = {
    search: function(value) {
        var input = $('.search-input')[0]
        var id = Number(input.dataset.id)
        if (value === undefined) {
            var value = input.value
        }
        for (i of engine.All) {
            if (i.id === id) {
                if (screen.width < 768) {
                    if (i.wap === undefined) {
                        var url = i.url + value
                    } else {
                        var url = i.wap + value
                    }
                } else {
                    var url = i.url + value
                }
            }
        }
        if (value !== '') {
            window.open(url)
            // window.location.href = url
        } else {
            $('.search-input').focus()
        }
    },
    gou: function(content) {
        //组装 URL
        var data = encodeURI(content)
        var sugurl = `https://www.sogou.com/suggnew/ajajjson?type=web&key=${data}`
            //回调函数
        window.sogou = {
                sug: function(json) {
                    so.sug = json[1]
                    $('.search-li').remove()
                    if (so.sug.length === 0) {
                        so.hide()
                    } else {
                        so.show()
                    }
                }
            }
            //动态 JS脚本
        var temp = `<script src=${sugurl}></script>`
        $("#id-Sug").html(temp)
            //http://www.cnblogs.com/woider/p/5805248.html
    },
    sug: [],
    now: -1,
    addClass: function(hover) {
        $('.search-li').each(function(i, e) {
            if (i === so.now) {
                var e = $(e)
                e.addClass('search-li-hover')
                //如果不是悬浮
                if (!hover) {
                    $('.search-input').val(e.text())
                }
            } else {
                $(e).removeClass('search-li-hover')
            }
        })
    },
    upDown: function(next) {
        if (so.sug.length > 1) {
            var all = so.sug.length
            var old = (so.now + all) % all
            so.now = (old + next) % all
            so.addClass()
        } else if (so.sug.length === 1) {
            var one = $('.search-li')
            one.addClass('search-li-hover')
            $('.search-input').val( one.text() )
        }
    },
    hide: function() {
        $('.search-list').css('border-color', 'transparent')
        setTimeout("$('.search-li').hide()", 100)
    },
    show: function() {
        $('.search-list').css('border-color', '#037dd8')
        for (var i = 0; i < so.sug.length; i++) {
            $('.search-list').append(`<div data-id=${i} class="search-li">${so.sug[i]}</div>`)
        }
        $('.search-list').append(`<div class="search-space">海納百川</div>`)
        $('.search-space')[0].remove()
    },
}
var __init__ = function() {
    var TagLength = Math.round(engine.Tag.length / 2)
    for (i of engine.All) {
        if (i.id > 0 && i.id < 6) {
            if (i.icon !== undefined) {
                // 初始化 颜色
                $('style').append(`.icon-${i.icon}{color:${i.color}}`)
                // 初始化 图标
                var temp = `<engine data-id=${i.id} title="${i.name}"> <i class="fa-logo iconfont icon-${i.icon}"></i> </engine>`
            } else {
                var temp = `<engine data-id=${i.id}><span style="color:${i.color}" class='engine-font'>${i.name}</span></engine>`
            }
            $('.engine-often').append(temp)
        }
        if (i.id > 0 && i.id < 6) {
            if (i.icon !== undefined) {
                var mini = `<i title="${i.name}" data-id=${i.id} class="fa-mini iconfont icon-${i.icon}" aria-hidden="true"></i>`
            } else {
                var mini = ``
            }
            $('.search-list-mini').append(mini)
            $('.fa-mini').css('display','none')
        }
        if (i.id === engine.Default) {
            var input = $('.search-input')[0]
            engine.Logo(input)
        }
    }
    for (i of engine.Tag) {
        $('.engine-tag').append(`<tag class="pure-u-1-${TagLength}">${i.name}</tag>`)
    }
    // 导航按钮
    $('logo').on('click', function() {
        $('.top').fadeIn(618)
        $('.search').slideUp(618)
        setTimeout("$('.engine').slideDown(618)", 618)
    })
    $('.top').on('click', function() {
        $('.fa-mini').hide()
        $('.search-list-button').css('color', 'transparent')

        $('.top').fadeOut(618)
        $('.engine').slideUp(618)
        setTimeout("$('.search').slideDown(618)", 618)
    })
    // 搜索按钮
    $('.search-button').on('click', function() {
            so.search()
        })
    // 引擎按钮
    $('.engine-often').on('click', 'engine', function(event) {
        var id = Number(event.target.parentElement.dataset.id)
        if (!id) {
            id = Number(event.target.dataset.id)
        }
        var input = $('.search-input')[0]
        for (i of engine.All) {
            if (i.id === id) {
                engine.Logo(input)
            }
        }
        $('.top').click()
    })
    // 迷你图标
    $('.search-list-button').on('click', function() {
        if ($('.fa-mini').css('display') === 'none') {
            $('.fa-mini').fadeIn(618)
        } else {
            $('.fa-mini').fadeOut(618)
        }
    })
    $('.search-list-mini').on('mouseover', function() {
        $('.search-list-button').css('color', '#333')
    })
    $('.search-list-mini').on('click', '.fa-mini', function(event) {
        var id = Number(event.target.dataset.id)
        var input = $('.search-input')[0]
        for (i of engine.All) {
            if (i.id === id) {
                engine.Logo(input)
            }
        }
        $('.fa-mini').hide()
        $('.search-list-button').css('color', 'transparent')
    })
    // 智能提示
    $('.search-list').on('mouseover', '.search-li', function(event) {
        so.now = Number(event.target.dataset.id)
        var hover = true
        so.addClass(hover)
    })
    $('.search-list').on('click', '.search-li', function(event) {
        var value = $(event.target).text()
        so.search(value)
    })
    $('.search-input').on('keyup', function() {
        if (event.keyCode === 13) {
            $('.search-button').click()
        } else if (event.keyCode === 38) {
            so.upDown(-1)
        } else if (event.keyCode === 40) {
            so.upDown(1)
        } else {
            so.gou(event.target.value)
            so.now = -1
        }
    })
    $('.search-input').on('blur', function() {
        so.hide()
    })
    $('.search-input').on('focus', function() {
        $('.fa-mini').hide()
        $('.search-list-button').css('color', 'transparent')
        if (so.sug.length === 0) {
            so.hide()
        } else {
            $('.search-list').css('border-color', '#037dd8')
            $('.search-li').show()
        }
    })
}
__init__()
