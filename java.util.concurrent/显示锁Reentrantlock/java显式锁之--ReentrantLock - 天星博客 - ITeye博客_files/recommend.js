!function(l,p,u){p.write("<script language=javascript src='https://g.csdnimg.cn/recommend/1.3.0/iconfont.js'><\/script>");var c={channelId:"",productId:"",options:{}},a={loadStyle:function(e){u("<link/>",{rel:"stylesheet",type:"text/css",href:"https://g.csdnimg.cn/recommend/1.3.0/css/recommend.css"}).appendTo("head"),u("<link/>",{rel:"stylesheet",type:"text/css",href:"https://g.csdnimg.cn/recommend/1.3.0/css/iconfont.css"}).appendTo("head"),setTimeout(function(){e()},1e3)},render:function(){p.body.firstChild;var e=u("<div class='newbox'></div>");c.options.contentBox&&u(e).addClass(c.options.contentBox);var n=/[^\/]\d*$/g;if(e.length){e.html('<div class="recommend-right">\n  <ul class="recommend-fixed-box" >\n    \n</ul>\n</div>'),c.options.postBox?c.options.postBox.append(e):u("body").append(e);var t=l.location.href;t&&t.match(n)&&(t.match(n).length?c.productId=t.match(n)[0]:c.productId=""),t&&-1<t.indexOf("content_center")?c.channelId="0":t&&-1<t.indexOf("news")?t&&-1<t.indexOf("iteye")?c.channelId="7":c.channelId="1":t&&-1<t.indexOf("blog")?c.channelId="2":t&&-1<t.indexOf("download")?c.channelId="3":t&&-1<t.indexOf("blog:1")?c.channelId="4":t&&-1<t.indexOf("hackernews")?c.channelId="5":t&&-1<t.indexOf("hackernewsv2")?c.channelId="6":t&&-1<t.indexOf("iteye_blog")?c.channelId="7":t&&-1<t.indexOf("iteye")?c.channelId="7":t&&-1<t.indexOf("course")?c.channelId="8":t&&-1<t.indexOf("edu")?c.channelId="8":t&&-1<t.indexOf("edu_open_course")?c.channelId="9":t&&-1<t.indexOf("edu_open_series")?c.channelId="10":t&&-1<t.indexOf("discussion_topic")?c.channelId="11":t&&-1<t.indexOf("ask_topic")?c.channelId="12":t&&-1<t.indexOf("mall")?c.channelId="13":c.channelId="";var i,d="";if(d=!c.productId&&c.channelId?c.channelId+":_":c.productId&&c.channelId?c.channelId+":"+c.productId:"",t&&-1<t.indexOf("so")){var o=encodeURIComponent(c.options.query)||"";i={size:c.options.size||10,queryWord:o,flag:!0,url:"https://so.csdn.net/so/search/stackOverFlow.do?queryWord="+o}}else i={userId:"hou28364",his:d,start:0,size:c.options.size||15,query:c.options.query||"",url:"https://recsidebar.csdn.net/getSideBarRecommend.html"};a.loadData(i)}},loadData:function(e){u.ajax({type:"POST",url:e.url,data:e,dataType:"json",success:function(e){if(e.content){var n=JSON.parse(e.content).result;n.length&&n.map(function(e){for(var n in e.created_at&&(e.date=e.created_at.split(" ")[0]||""),e)"null"===e[n]&&(e[n]="");return e})}if(n.length){for(var t="",i=0;i<n.length;i++)t+='  <li class="right-item cebian_item"  data-track-click="{&quot;mod&quot;:&quot;popu_'+c.options.popu+"&quot;,&quot;con&quot;:&quot;,"+n[i].url+',-&quot;}"><a href='+n[i].url+' target="_blank"><div class="content clearfix"><h5 class="" title='+n[i].title+">"+n[i].title+'</h5><span class="time">'+n[i].date+'</span><span class="read so_read"> <svg class="icon no-active hover-hide" aria-hidden="true"><use xlink:href="#yuedushu"></use></svg>'+n[i].views+'</span></div><div class="right-item-desc">'+n[i].desc+"</div></a></li>";u(".recommend-fixed-box").html(t),c.options.noAd||function(e){var n=p.createElement("script");n.src="https://cpro.baidustatic.com/cpro/ui/c.js",n.async="async",n.defer="defer",u("body").append(n);var t="_"+Math.random().toString(36).slice(2),i="_"+Math.random().toString(36).slice(2),d="_"+Math.random().toString(36).slice(2);l.slotbydup=l.slotbydup||[];var o=[{id:"u3586193",container:t}],c=[{id:"u3586193",container:t},{id:"u3591305",container:i}],a=[{id:"u3586193",container:t},{id:"u3591305",container:i},{id:"u3591311",container:d}];14<=e.length?(u(".cebian_item:nth-child(2)").after('<div style="" id="'+t+'" class="right-item ad_item"></div>'),u(".cebian_item:nth-child(7)").after('<div style="" id="'+i+'" class="right-item ad_item"></div>'),u(".cebian_item:nth-child(13)").after('<div style="" id="'+d+'" class="right-item ad_item"></div>'),a.map(function(e){return l.slotbydup.push(e),e})):8<=e.length?(u(".cebian_item:nth-child(2)").after('<div style="" id="'+t+'" class="right-item ad_item"></div>'),u(".cebian_item:nth-child(7)").after('<div style="" id="'+i+'" class="right-item ad_item"></div>'),c.map(function(e){return l.slotbydup.push(e),e})):(u(".cebian_item:nth-child(2)").after('<div style="" id="'+t+'" class="right-item ad_item"></div>'),o.map(function(e){return l.slotbydup.push(e),e}));var s=u(".ad_item"),r=Array.prototype.slice.call(s);r.length&&r.map(function(e){return 0==u(e).find("iframe").length&&(console.log("是广告box 但不包含广告代码==="),u(e).css("border-bottom","none")),e}),console.log("window.slotbydup",l.slotbydup)}(n);var d={mod:"popu_"+c.options.popu,con:","+n[0].url+",-"},o=JSON.stringify(d);u(".recommend-fixed-box li").eq(0).attr("data-track-view",o)}c.options.callback&&"function"==typeof c.options.callback&&c.options.callback()},dataType:"json"})},recommendSide:function(e){c.options=e,c.options&&!c.options.popu&&(c.options.popu=""),c.options=e}};u(function(){a.loadStyle(function(){a.render()})}),void 0===l.csdn&&(l.csdn={}),l.csdn.recommendSide=a.recommendSide}(window,document,jQuery);