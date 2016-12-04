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
// 海纳百川
var engine = {
    All: [{
            "id": 0,
            "name": "",
            "color": "#E6E7EC",
            "icon": "dahai",
            "wap": "https://wap.sogou.com/web/searchList.jsp?keyword=",
            "url": "http://www.sogou.com/web?ie={inputEncoding}&query="
        }, {
            "id": 1,
            "name": "搜狗",
            "color": "#fd6853",
            "icon": "sogou",
            "wap": "https://wap.sogou.com/web/searchList.jsp?keyword=",
            "url": "http://www.sogou.com/web?ie={inputEncoding}&query="
        }, {
            "id": 2,
            "name": "必应",
            "color": "#ffb900",
            "icon": "bing",
            "url": "http://cn.bing.com/search?q="
        }, {
            "id": 3,
            "name": "知乎",
            "color": "#0f88eb",
            "icon": "zhihu",
            "wap": "http://zhihu.sogou.com/zhihuwap?query=",
            "url": "http://zhihu.sogou.com/zhihu?query="
        }, {
            "id": 4,
            "name": "微信",
            "color": "#00bc0c",
            "icon": "weixin",
            "wap": "http://weixin.sogou.com/weixinwap?type=2&query=",
            "url": "http://weixin.sogou.com/weixin?type=2&query="
        }, {
            "id": 5,
            "name": "百度百科",
            "color": "#2319dc",
            "icon": "baidu",
            "url": "http://baike.baidu.com/item/"
        }, 6, 7, 8, 9, {
            "id": 10,
            "name": "w3school",
            "color": "#bd2d30",
            "url": "http://cn.bing.com/search?q=site:w3school.com.cn+"
        }, {
            "id": 11,
            "name": "MDN",
            "color": "#056B9F",
            "url": "https://developer.mozilla.org/zh-CN/search?q="
        }, {
            "id": 12,
            "name": "阮一峰",
            "color": "#556677",
            "url": "http://cn.bing.com/search?q=site:ruanyifeng.com+"
        }, {
            "id": 13,
            "name": "JavaScript",
            "color": "#08c",
            "url": "https://www.zybuluo.com/iwangyang/note/519509?="
        }, {
            "id": 14,
            "name": "Python",
            "color": "#08c",
            "url": "https://www.zybuluo.com/iwangyang/note/460072?="
        }, 15, 16, 17, 18, 19, {
            "id": 20,
            "name": "有道词典",
            "color": "#e31333",
            "icon": "youdao",
            "url": "http://m.youdao.com/dict?q="
        }, {
            "id": 21,
            "name": "电子书",
            "color": "#101010",
            "url": "https://www.jiumodiary.com/?="
        }, {
            "id": 22,
            "name": "公开课",
            "color": "#206740",
            "wap": "http://m.open.163.com/?=",
            "url": "http://c.open.163.com/search/search.htm?query="
        }, {
            "id": 23,
            "name": "世图",
            "color": "#00618e",
            "url": "http://mx.wdl.org/zh/search/?q="
        }, 24, 25, 26, 27, 28, 29, {
            "id": 30,
            "name": "花瓣",
            "color": "#DF4751",
            "icon": "huaban",
            "url": "http://huaban.com/search/?q="
        }, {
            "id": 31,
            "name": "Topit.me",
            "color": "#FC6B96",
            "url": "http://www.topit.me/items/search?query="
        }, {
            "id": 32,
            "name": "站酷",
            "color": "#282828",
            "wap": "http://m.idea.zcool.com.cn/search.do?keys=",
            "url": "http://idea.zcool.com.cn/index.do?keys="
        }, {
            "id": 33,
            "name": "动图搜索",
            "color": "#e84763",
            "wap": "http://www.gifmiao.com/search?keyword=",
            "url": "http://www.soogif.com/search/"
        }, 34, 35, 36, 37, 38, 39, {
            "id": 40,
            "name": "澎湃新闻",
            "color": "#000000",
            "wap": "http://m.thepaper.cn/search.jsp?k=",
            "url": "http://www.thepaper.cn/searchResult.jsp?inpsearch="
        }, {
            "id": 41,
            "name": "新浪微博",
            "color": "#E73137",
            "icon": "sina",
            "url": "http://s.weibo.com/weibo/"
        }, {
            "id": 42,
            "name": "好奇心日报",
            "color": "#FFD000",
            "wap": "http://m.qdaily.com/mobile/searches?key=",
            "url": "http://www.qdaily.com/searches?key="
        }, 43, 44, 45, 46, 47, 48, 49, {
            "id": 50,
            "name": "淘宝",
            "color": "#ed4403",
            "icon": "taobao",
            "wap": "https://s.m.taobao.com/h5?q=",
            "url": "https://s.taobao.com/search?q="
        }, {
            "id": 51,
            "name": "京东",
            "color": "#B1191A",
            "wap": "https://so.m.jd.com/ware/search.action?keyword=",
            "url": "https://search.jd.com/Search?&enc=utf-8&keyword="
        }, {
            "id": 52,
            "name": "亚马逊",
            "color": "#000",
            "wap": "https://www.amazon.cn/gp/aw/s/ref=nb_sb_noss?k=",
            "url": "https://www.amazon.cn/s/ref=nb_sb_noss?field-keywords="
        }, {
            "id": 53,
            "name": "天猫",
            "color": "#BF0000",
            "url": "https://list.tmall.com/search_product.htm?q="
        }, 54, 55, 56, 57, 58, 59, {
            "id": 60,
            "name": "马蜂窝",
            "color": "#FFCB10",
            "wap": "https://m.mafengwo.cn/mdd/query.php?q=",
            "url": "http://www.mafengwo.cn/group/s.php?q="
        }, {
            "id": 61,
            "name": "飞猪",
            "color": "#3C3C3C",
            "wap": "https://h5.m.taobao.com/trip/search/result/index.html?keyword=",
            "url": "https://www.alitrip.com/kezhan/?="
        }, {
            "id": 62,
            "name": "去哪儿",
            "color": "#0088a4",
            "wap": "https://touchsearch.qunar.com/intention/productlist.htm?q=",
            "url": "http://bnb.qunar.com/?="
        }, 63, 64, 65, 66, 67, 68, 69, {
            "id": 70,
            "name": "高德地图",
            "color": "#4C90F9",
            "icon": "amap",
            "wap": "http://m.amap.com/search/mapview/keywords=",
            "url": "http://ditu.amap.com/search?city=100000&query="
        }, {
            "id": 71,
            "name": "腾讯地图",
            "color": "#3399FF",
            "wap": "http://map.qq.com/m/nearby/search?=",
            "url": "http://map.qq.com?="
        }, {
            "id": 72,
            "name": "百度地图",
            "color": "#2319dc",
            "url": "http://map.baidu.com/mobile/webapp/search/search/qt=s&wd="
        }, 73, 74, 75, 76, 77, 78, 79, {
            "id": 80,
            "name": "酷狗音乐",
            "color": "#2CA2F9",
            "url": "http://m.kugou.com/search?keyword="
        }, {
            "id": 81,
            "name": "虾米音乐",
            "color": "#FF6F32",
            "url": "http://h.xiami.com/#!/search/result/?key="
        }, {
            "id": 82,
            "name": "酷我音乐",
            "color": "#feca2e",
            "url": "http://m.kuwo.cn/?key="
        }, {
            "id": 83,
            "name": "网易云音乐",
            "color": "#f40a01",
            "icon": "cloud-music",
            "url": "http://music.163.com/#/search/m/?s="
        }, {
            "id": 84,
            "name": "喜马拉雅",
            "color": "#ef5619",
            "wap": "http://m.ximalaya.com/search/",
            "url": "http://www.ximalaya.com/search/"
        }, 85, 86, 87, 88, 89, {
            "id": 90,
            "name": "豆瓣电影",
            "color": "#2e963d",
            "url": "https://movie.douban.com/subject_search?search_text="
        }, {
            "id": 91,
            "name": "优酷",
            "color": "#2fb3ff",
            "url": "http://www.soku.com/search_video/q_"
        }, {
            "id": 92,
            "name": "磁力链接",
            "color": "#3860BB",
            "url": "http://pianyuan.net/search?q="
        }, {
            "id": 93,
            "name": "哔哩哔哩",
            "color": "#f25d8e",
            "wap": "http://www.bilibili.com/mobile/search.html?keyword=",
            "url": "http://search.bilibili.com/all?keyword="
        }, 94, 95, 96, 97, 98, 99],
    Default: 0,
    Logo: function(input, e) {
        input.dataset.id = e.id
        if (e.icon !== undefined) {
            input.placeholder = e.name
            $('logo').html(`<i class="fa-logo-da iconfont icon-${e.icon}"></i>`)
        } else {
            input.placeholder = ''
            $('logo').html(`<span class="fa-logo-zi" style="color:${e.color}">${e.name}</span>`)
        }
    },
    Read: function(key) {
        if (localStorage.getItem(key) === null) {
            return ['记事本','']
        } else {
            return JSON.parse(localStorage.getItem(key))
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
        name: '图片'
    },{
        id: 4,
        name: '新闻'
    },{
        id: 5,
        name: '网购'
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
    search: function(value) {
        var input = $('.search-input')[0]
        var id = Number(input.dataset.id)
        if (value === undefined) {
            var value = input.value
        }
        var e = engine.All[id]
        if (screen.width < 768) {
            if (e.wap === undefined) {
                var url = e.url + value
            } else {
                var url = e.wap + value
            }
        } else {
            var url = e.url + value
        }
        if (value !== '') {
            window.open(url)
            // window.location.href = url
        } else {
            $('.search-input').focus()
        }
    },
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
        $('.search-list').removeAttr('style')
        $('.search-li').hide()
    },
    show: function() {
        $('.search-list').css('border-color', '#037DD8')
        for (var i = 0; i < so.sug.length; i++) {
            $('.search-list').append(`<div data-id=${i} class="search-li">${so.sug[i]}</div>`)
        }
    },
    moreHide: function() {
        $('.so-note').hide()
        $('.fa-mini').hide()
        $('.search-list-button').css('color', 'transparent')
        $('.search-list').removeAttr('style')
    },
    sug: [],
    now: -1,
    note: engine.Read('note'),
}
var __init__ = function() {
    var init = function() {
        var i = 0
        for (i of engine.All) {
            // 迷你
            if (i.id > 0 && i.id < 6) {
                if (i.icon !== undefined) {
                    var mini = `<i title="${i.name}" data-id=${i.id} class="fa-mini iconfont icon-${i.icon}" aria-hidden="true"></i>`
                } else {
                    var mini = ``
                }
                $('.search-list-mini').append(mini)
                $('.fa-mini').css({'display':'none','color':'#E6E7EC'})
            }
            // 默认
            if (i.id === engine.Default) {
                var input = $('.search-input')[0]
                var e = engine.All[engine.Default]
                engine.Logo(input, e)
            }
        }
        for (i of engine.Tag) {
            $('.engine-tag').append(`<tag data-id=${i.id}>${i.name}</tag>`)
        }
        for (var i = 0; i < so.note.length; i++) {
            $('.search-list').append(`<input class="so-note" data-id="${i}" type="text" placeholder="" maxlength="100" style="display: none;">`)
            $('.so-note')[i].value = so.note[i]
            if (i === 1) {
                $('.so-note')[i].placeholder = "输入内容 ／ Enter 换行"
            }
        }
    }
    init()
    // 导航按钮
    $('logo').on('click', function() {
        $('.top').fadeIn(618)
        $('.search').slideUp(618)
        setTimeout("$('.engine').slideDown(618)", 618)
    })
    $('.top').on('click', function() {
        so.moreHide()
        $('.top').fadeOut(382)
        $('.engine').slideUp(382)
        setTimeout("$('.search').slideDown(382)", 382)
    })
    // 搜索按钮
    $('.search-button').on('click', function() {
            so.search()
        })
    // 迷你图标 + ToDo
    $('.search-list-button').on('click', function() {
        if ($('.fa-mini').css('display') === 'none') {
            $('.fa-mini').fadeIn(382)
            $('.so-note').fadeIn(382)
            $('.search-list').css('border-color','#C0C0C0')
        } else {
            $('.so-note').fadeOut(382)
            $('.fa-mini').fadeOut(382)
            $('.search-list').removeAttr('style')
        }
    })
    $('.search-list-mini').on('mouseover', function() {
        $('.search-list-button').css('color', '#333')
    })
    $('.search-list-mini').on('click', '.fa-mini', function(event) {
        var id = Number(event.target.dataset.id)
        var input = $('.search-input')[0]
        var e = engine.All[id]
        engine.Logo(input, e)
        so.moreHide()
    })
    $('.search-list-mini').on('mouseover', 'i', function(event) {
        if (event.target.dataset.id) {
            $(event.target).removeAttr('style')
        }
    })
    $('.search-list-mini').on('mouseout', 'i', function(event) {
        if (event.target.dataset.id) {
            $(event.target).css('color','#E6E7EC')
        }
    })
    // ToDo
    $('.search-list').on('keyup', '.so-note', function(event) {
        if (event.keyCode === 13) {
            var id = so.note.length
            $('.search-list').append(`<input class="so-note" data-id="${id}" type="text" placeholder="" maxlength="100">`)
            so.note.push('')
            $($('.so-note')[id]).focus()
        } else if (event.keyCode === 8 && event.target.value === '') {
            var i = Number(event.target.dataset.id)
            if (i < 2) {
                event.target.value = ''
            } else if (i !== so.note.length) {
                event.target.remove()
                $($('.so-note')[i-1]).focus()
                so.note.splice(i, 1)
                localStorage.setItem("note",JSON.stringify(so.note))
                $('.so-note').each( function(index, e) {
                    if (e.dataset.id > i) {
                        e.dataset.id = Number(e.dataset.id) - 1
                    }
                })
            }
        }
    })
    $('.search-list').on('focus', '.so-note', function(event) {
        $('.fa-mini').fadeOut(618)
    })
    $('.search-list').on('blur', '.so-note', function(event) {
        var val = event.target.value
        var id  = Number(event.target.dataset.id)
        so.note[id] = val
        localStorage.setItem("note",JSON.stringify(so.note))
    })
    // 智能提示
    $('.search-list').on('mouseover', '.search-li', function(event) {
        so.now = Number(event.target.dataset.id)
        var hover = true
        so.addClass(hover)
    })
    $('.search-list').on('mousedown', '.search-li', function(event) {
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
        so.moreHide()
        if (so.sug.length === 0) {
            so.hide()
        } else {
            $('.search-list').css('border-color', '#037DD8')
            $('.search-li').show()
        }
    })
    // 标签
    $('.engine-tag').on('click', 'tag', function(event) {
        $('.engine-show').empty()
        var id = Number(event.target.dataset.id + '0')
        var end   = id + 10
        while (id < end) {
            var e = engine.All[id]
            if (e.id !== undefined) {
                if (e.icon !== undefined) {
                    // 初始化 颜色
                    var style = document.querySelector( "style" ).innerHTML
                    if (style.indexOf(`.icon-${e.icon}{color`) === -1) {
                        $('style').append(`.icon-${e.icon}{color:${e.color}}`)
                    }
                    // 初始化 图标
                    var temp = `<engine data-id=${e.id} title="${e.name}"> <i class="fa-logo iconfont icon-${e.icon}"></i> </engine>`
                    $('.engine-show').append(temp)
                } else {
                    var temp = `<engine data-id=${e.id} title="${e.name}"><span style="color:${e.color}" class='engine-font'>${e.name}</span></engine>`
                    $('.engine-show').append(temp)
                }
            }
            id++
        }
    })
    $('.engine-show').on('click', 'engine', function(event) {
        var id = Number(event.target.parentElement.dataset.id)
        if (!id && id !== 0) {
            id = Number(event.target.dataset.id)
        }
        var input = $('.search-input')[0]
        var e = engine.All[id]
        engine.Logo(input, e)
        $('.top').click()
    })
    $('tag')[0].click()
}
__init__()

log('想加入我？发送邮件至 iwangyang@vip.qq.com\nʅ（´◔౪◔）ʃ')
