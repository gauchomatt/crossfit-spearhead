window.isRetina=function(){var t="undefined"==typeof exports?window:exports,e="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";return t.devicePixelRatio>1?!0:t.matchMedia&&t.matchMedia(e).matches?!0:!1}(),jQuery.fn.nextOrFirst=function(t){var e=this.next(t);return e.length?e:this.prevAll(t).last()},jQuery.fn.prevOrLast=function(t){var e=this.prev(t);return e.length?e:this.nextAll(t).last()},$.fn.preload=function(){this.each(function(){$("<img/>")[0].src=this})},window.startupKit=window.startupKit||{},startupKit.hideCollapseMenu=function(){$("body > .navbar-collapse").css({"z-index":1}),$("html").removeClass("nav-visible"),setTimeout(function(){$("body > .navbar-collapse").addClass("collapse"),$("body > .colapsed-menu").removeClass("show-menu")},400)},$(function(){$(".page-wrapper, .navbar-fixed-top, .navbar-collapse a, .navbar-collapse button, .navbar-collapse input[type=submit]").on("click",function(t){$("html").hasClass("nav-visible")&&setTimeout(function(){startupKit.hideCollapseMenu()},200)}),$(window).resize(function(){$(window).width()>965&&startupKit.hideCollapseMenu()});var t=$("#header-dockbar > .colapsed-menu").clone(!0);$("body").append(t),$("#open-close-menu").on("click",function(){$("html").hasClass("nav-visible")?startupKit.hideCollapseMenu():($("body > .colapsed-menu").addClass("show-menu"),$("#header-dockbar").length&&$("body > .colapsed-menu").css({top:$("#header-dockbar").height()}),setTimeout(function(){$("html").addClass("nav-visible")},1))}),$(".social-btn-facebook").length&&$(".social-btn-facebook").sharrre({share:{facebook:!0},enableHover:!1,enableCounter:!1,click:function(t,e){t.simulateClick(),t.openPopup("facebook")}}),$(".social-btn-twitter").length&&$(".social-btn-twitter").sharrre({share:{twitter:!0},enableHover:!1,enableCounter:!1,buttons:{twitter:{via:"Designmodo",url:!1}},click:function(t,e){t.simulateClick(),t.openPopup("twitter")}})}),startupKit.uiKitHeader=startupKit.uiKitHeader||{},startupKit.uiKitHeader._inFixedMode=function(t){var e=$(t+" .navbar-collapse").first().clone(!0);e.attr("id",t.substr(1)),$("body").append(e);var i=$(".navbar-fixed-top");if(fixedNavbarHeader=i.closest("header"),fixedNavbarHeaderClone=fixedNavbarHeader.clone(!0),fixedNavbarHeader.hasClass("fake-header"))var n=$('<div class="fake-wrapper-header" style="width: 100%; height: '+fixedNavbarHeader.outerHeight()+'px;" />');if($("body").prepend(n),$("body").prepend(fixedNavbarHeaderClone),fixedNavbarHeader.detach(),$(t+" .navbar-toggle").on("click",function(){var e=$(this);$("html").hasClass("nav-visible")?startupKit.hideCollapseMenu():($(".navbar-collapse#"+t.substr(1)).removeClass("collapse"),$("#header-dockbar").length&&$(".navbar-collapse#"+t.substr(1)).css({top:$("#header-dockbar").height()}),setTimeout(function(){$("html").addClass("nav-visible")},1),setTimeout(function(){$("body > .navbar-collapse").css({"z-index":101})},400))}),$(t+" .navbar").hasClass("navbar-fixed-top")){var o=$(t+"-sub"),a=o.outerHeight()-70,s=70;if($(t).outerHeight()>0)var r=$(t).css("background-color");else if($(t+"-sub").length>0)var r=$(t+"-sub").css("background-color");else var r="#fff";var c=$('<div class="'+t.slice(1)+'-startup-antiflicker header-antiflicker" style="opacity: 0.0001; position: fixed; z-index: 2; left: 0; top: 0; width: 100%; height: 70px; background-color: '+r+';" />');$("body").append(c);var u=$(".background, .caption, .controls > *",o),d=$(t);u.each(function(){$(this).data("origOpacity",$(this).css("opacity"))});var l=o.outerHeight()-120,h=a;$(window).scroll(function(){var e=(a-$(window).scrollTop())/a;if(e=Math.max(0,e),$(window).scrollTop()>a-s){var i=(a-$(window).scrollTop())/s;i=Math.max(0,i)}else i=1;u.each(function(){$(this).css("opacity",$(this).data("origOpacity")*e)}),c.css({"background-color":$(".pt-page-current",o).css("background-color"),opacity:1.0001-i});var n=-(l-$(window).scrollTop())/(h-l);n=1-Math.min(1,Math.max(0,n)),$(window).resize(function(){r()});var r=function(){$(window).width()<767?$(".navbar",d).css({top:-6+26*n}):$(window).width()<480?$(".navbar",d).css({top:-6+26*n}):$(".navbar",d).css({top:-6+51*n})};r(),$(".navbar .brand",d).css({"font-size":18+7*n,"padding-top":30+-7*n}),$(".navbar .brand img",d).css({width:"auto",height:25+25*n,"margin-top":-1+-9*n}),$(".navbar .btn-navbar",d).css({"margin-top":30+-2*n}),$(window).width()>979?$(t+".navbar .nav > li > a",d).css({"font-size":12+2*n}):$(t+".navbar .nav > li > a",d).css({"font-size":""})})}},startupKit.uiKitHeader.header1=function(){var t=PageTransitions();t.init("#pt-main"),$("#pt-main .control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#pt-main .control-next").on("click",function(){return t.gotoPage(6,"next"),!1}),startupKit.uiKitHeader._inFixedMode(".header-1")},startupKit.uiKitHeader.header2=function(){startupKit.uiKitHeader._inFixedMode(".header-2")},startupKit.uiKitHeader.header3=function(){$(".header-3 .navbar").hasClass("navbar-fixed-top")&&$(".header-3").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-3")},startupKit.uiKitHeader.header4=function(){},startupKit.uiKitHeader.header5=function(){startupKit.uiKitHeader._inFixedMode(".header-5"),$(window).resize(function(){var t=0;$(".header-5-sub .pt-page").css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".header-5-sub .page-transitions").css("height",t+"px")});var t=PageTransitions();t.init("#h-5-pt-1"),$("#h-5-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#h-5-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1});var e=$(".header-5 .navbar");$(".search",e).click(function(){return e.hasClass("search-mode")||(e.addClass("search-mode"),setTimeout(function(){$('header .navbar .navbar-search input[type="text"]').focus()},1e3)),!1}),$(".close-search",e).click(function(){return e.removeClass("search-mode"),!1})},startupKit.uiKitHeader.header6=function(){startupKit.uiKitHeader._inFixedMode(".header-6")},startupKit.uiKitHeader.header7=function(){startupKit.uiKitHeader._inFixedMode(".header-7"),$(window).resize(function(){var t=0;$(".header-7-sub section").css("height",$(this).height()+"px").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".header-7-sub .page-transitions").css("height",t+"px");var e=$(".header-7-sub .pt-controls").height();$(".header-7-sub .pt-controls").css("margin-top",-1*t/2-e+"px"),$(".header-7-sub .pt-controls").css("padding-bottom",t/2-e+"px")});var t=PageTransitions();t.init("#h-7-pt-main"),$(".header-7-sub .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index();$(".header-7-sub").css("background-color",$("#h-7-pt-main").children(".pt-page").eq(i).find("section").css("background-color"));var n=5;return i>e&&(n=6),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitHeader.header8=function(){$(".header-8 .navbar").hasClass("navbar-fixed-top")&&$(".header-8").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-8")},startupKit.uiKitHeader.header9=function(){startupKit.uiKitHeader._inFixedMode(".header-9"),$(window).resize(function(){var t=0;$("body > section:not(.header-9-sub)").each(function(){t+=$(this).outerHeight()}),$(".sidebar-content").css("height",t+"px")})},startupKit.uiKitHeader.header10=function(){$(".header-10 .navbar").hasClass("navbar-fixed-top")&&$(".header-10").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-10"),$(".header-10-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header11=function(){$(".header-11 .navbar").hasClass("navbar-fixed-top")&&$(".header-11").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-11"),$(window).resize(function(){var t=$(".header-11-sub").not("pre .header-11-sub"),e=t.find(".player");$(window).width()<751?(t.find(".signup-form").before(e),t.find(".player-wrapper").hide()):t.find(".player-wrapper").append(e).show()})},startupKit.uiKitHeader.header12=function(){},startupKit.uiKitHeader.header13=function(){},startupKit.uiKitHeader.header14=function(){},startupKit.uiKitHeader.header15=function(){$(".header-15 .navbar").hasClass("navbar-fixed-top")&&$(".header-15").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-15")},startupKit.uiKitHeader.header16=function(){startupKit.uiKitHeader._inFixedMode(".header-16");var t=PageTransitions();t.init("#h-16-pt-main"),$("#h-16-pt-main .pt-control-prev").on("click",function(){return t.gotoPage(2,"prev"),!1}),$("#h-16-pt-main .pt-control-next").on("click",function(){return t.gotoPage(1,"next"),!1}),$(".header-16-sub .scroll-btn a").on("click",function(t){return t.preventDefault(),$.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1}),$(window).resize(function(){$(".header-16-sub").css("height",$(this).height()+"px")}),$(window).resize().scroll()},startupKit.uiKitHeader.header17=function(){$(".header-17 .navbar").hasClass("navbar-fixed-top")&&$(".header-17").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-17");var t=PageTransitions();t.init("#h-17-pt-1"),$(".pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index(),n=44;return i>e&&(n=45),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1}),$(window).resize(function(){$(".header-17-sub .page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px"),$(this).hasClass("calculated")||$(this).addClass("calculated")})})},startupKit.uiKitHeader.header18=function(){$(window).resize(function(){maxH=$(window).height(),$(".header-18 .page-transitions").css("height",maxH+"px")});var t=PageTransitions();t.init("#h-18-pt-main"),$(".header-18 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$(".header-18 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1})},startupKit.uiKitHeader.header19=function(){startupKit.uiKitHeader._inFixedMode(".header-19")},startupKit.uiKitHeader.header20=function(){$(".header-20 .navbar").hasClass("navbar-fixed-top")&&$(".header-20").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-20")},startupKit.uiKitHeader.header21=function(){startupKit.uiKitHeader._inFixedMode(".header-21"),maxH=$(window).height(),0!=$(".navbar-fixed-top").length&&(maxH-=$(".navbar-fixed-top").outerHeight()),0!=$(".header-21").length&&(maxH-=$(".header-21").outerHeight()),maxH/90<3&&$(".header-21-sub .control-btn").css("bottom",0),$(".header-21-sub").height(maxH),$(".header-21-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header22=function(){$(".header-22 .navbar").hasClass("navbar-fixed-top")&&$(".header-22").css("position","fixed").addClass("fake-header"),startupKit.uiKitHeader._inFixedMode(".header-22")},startupKit.uiKitHeader.header23=function(){function t(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent(e,i,!1)}startupKit.attachBgVideo(),startupKit.uiKitHeader._inFixedMode(".header-23"),$("body").prepend($(".mask, .popup-video").not("pre .mask, pre .popup-video")),$("header-23 .mask, header-23 .popup-video").not("pre .mask, pre .popup-video").detach();var e=$("#pPlayer")[0],i=$f(e);i.addEvent("ready",function(){}),$("#play").on("click",function(t){t.preventDefault(),$(".popup-video").addClass("shown"),$(".popup-video, .mask").fadeIn("slow",function(){i.api("play")}),$(".mask").on("click",function(){i.api("pause"),$(".popup-video, .mask").fadeOut("slow",function(){$(".popup-video").removeClass("shown")})})})};var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};startupKit.attachBgVideo=function(){var t=$("#bgVideo");if(!isMobile.any()&&t)var e=new $.backgroundVideo(t,{holder:"#bgVideo",align:"centerXY",path:"video/",width:1920,height:1080,filename:"preview",types:["mp4","ogg","webm"]})},startupKit.uiKitContent=startupKit.uiKitContent||{},startupKit.uiKitContent.content1=function(){},startupKit.uiKitContent.content2=function(){},startupKit.uiKitContent.content3=function(){},startupKit.uiKitContent.content4=function(){},startupKit.uiKitContent.content5=function(){},startupKit.uiKitContent.content6=function(){},startupKit.uiKitContent.content7=function(){!function(t){0!=t.length&&($("img:first-child",t).css("left","-29.7%"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight())}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),$("img:first-child",t).animate({left:0},500))}))}($(".screen"))},startupKit.uiKitContent.content8=function(){},startupKit.uiKitContent.content9=function(){},startupKit.uiKitContent.content10=function(){},startupKit.uiKitContent.content11=function(){},startupKit.uiKitContent.content12=function(){},startupKit.uiKitContent.content13=function(){},startupKit.uiKitContent.content14=function(){},startupKit.uiKitContent.content15=function(){},startupKit.uiKitContent.content16=function(){$(".content-16 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content17=function(){$(window).resize(function(){$("#c-17_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$("#c-17_myCarousel .carousel-inner",this).css("height",t+"px")})}),$("#c-17_myCarousel").carousel({interval:4e3})},startupKit.uiKitContent.content18=function(){$(window).resize(function(){$("#c-18_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$(".carousel-inner",this).css("height",t+"px")})}),$("#c-18_myCarousel").bind("slid.bs.carousel",function(){$(".carousel-control",this).removeClass("disabled").attr("href","#c-18_myCarousel"),0==$(".item.active",this).index()?$(".carousel-control.left",this).addClass("disabled").attr("href","#"):$(".item.active",this).index()==$(".item",this).length-1&&$(".carousel-control.right",this).addClass("disabled").attr("href","#")})},startupKit.uiKitContent.content19=function(){},startupKit.uiKitContent.content20=function(){},startupKit.uiKitContent.content21=function(){$(window).resize(function(){$(".content-21 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px"),$(".features-bodies",this).hasClass("calculated")||$(".features-bodies",this).addClass("calculated")})}),$(".content-21 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content22=function(){!function(t){isRetina&&$(".img img",t).each(function(){$(this).attr("src",$(this).attr("src").replace(/.png/i,"@2x.png"))}),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight()-parseInt(t.css("padding-bottom"),10))}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&t.addClass("ani-processed")})}($(".content-22"))},startupKit.uiKitContent.content23=function(){$(".content-23 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content24=function(){$(window).resize(function(){$(".content-24 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px")})}),$(".content-24 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content25=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),function(t){t.css("opacity",0),$svg=$("#spaceship",t),$("#rocket-raw",$svg).attr("transform","translate(-100,100)"),$("#rocketmask1",$svg).attr("transform","translate(100,-100)"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight());var e=$(".content-25 .svg"),i=$(".content-25 .nosvg");$(".content-25 .col-sm-6:nth-child(2)").show(),$(".content-25 .col-sm-6:nth-child(2)").append(i)}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),t.animate({opacity:1},600),$("#rocket-raw, #rocketmask1",$svg).clearQueue().stop().animate({svgTransform:"translate(0,0)"},{duration:800,easing:"easeInOutQuad"}))})}($(".content-25 .col-sm-6 + .col-sm-6"))},startupKit.uiKitContent.content26=function(){},startupKit.uiKitContent.content27=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),$(window).resize(function(){var t=$(".content-27 .svg"),e=$(".content-27 .nosvg");$(".content-27 .col-sm-4:first-child").show(),$(".content-27 .col-sm-4:first-child").append(e)})},startupKit.uiKitContent.content28=function(){},startupKit.uiKitContent.content29=function(){},startupKit.uiKitContent.content30=function(){$(window).resize(function(){for(var t=$(".content-30 .col-sm-3"),e=0;e<=t.length;e++){var i=$(t[e]).find(".description-top");$(window).width()<=480?$(t[e]).find(".img").after(i):$(t[e]).find(".img").before(i)}})},startupKit.uiKitContent.content31=function(){!function(t){$(window).scroll(function(){$(window).width()>480&&$(".row",t).each(function(t){$(window).scrollTop()>=$(this).offset().top-$(window).height()+$(window).height()/2+100?$(this).addClass("active"):$(this).removeClass("active")})}),$(window).resize(function(){$(".page-transitions",t).each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px")})}),$(".page-transitions",t).each(function(){var t=PageTransitions();t.init(this),$(".pt-control-prev",this).on("click",function(){return t.gotoPage(68,"prev"),!1}),$(".pt-control-next",this).on("click",function(){return t.gotoPage(68,"next"),!1})})}($(".content-31"))},startupKit.uiKitContent.content32=function(){},startupKit.uiKitContent.content33=function(){},startupKit.uiKitContent.content34=function(){$(window).resize(function(){var t=0;$(".content-34 section").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}),$(".content-34 .page-transitions").css("height",t+"px");var e=$(".content-34 .pt-controls").height();$(".content-34 .pt-controls").css("margin-top",-1*e/2+"px")});var t=PageTransitions();t.init("#content-34-pt-main"),$(".content-34 .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var e=$(this).parent().children(".active").index(),i=$(this).index(),n=5;return i>e&&(n=6),t.gotoPage(n,i),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitContent.content35=function(){$(".content-35-slider").length&&$(".content-35-slider").bxSlider({controls:!1,pagerCustom:".content-35-customPager",adaptiveHeight:!0,infiniteLoop:!1});var t=$(".content-35-customPager");t.find($(".menuicon")).on("mouseenter",function(){$(this).parent().addClass("showmenu")}),t.on("mouseleave",function(){$(this).removeClass("showmenu")}),t.find($(".menuicon")).on("click",function(){var t=$(this).parent();t.hasClass("showmenu")?t.removeClass("showmenu"):t.addClass("showmenu")})},startupKit.uiKitContent.content36=function(){},startupKit.uiKitContent.content37=function(){},startupKit.uiKitContent.content38=function(){function t(e,i,n,o,a){function s(){var t=$(".largeScreenshots .picHolder"),e=t.position(),i=$(".largeScreenshots img").outerHeight(),n=$(".largeScreenshots").scrollTop();if(e.top+192>0)$(".largeScreenshots .prev, .largeScreenshots .next").css("top",e.top+192).css("height",$(window).height()-e.top-192);else if(n+$(window).height()>i+192+36){var o=n+$(window).height()-(i+192+36);$(".largeScreenshots .prev, .largeScreenshots .next").css("top",0).css("height",$(window).height()-o)}else $(".largeScreenshots .prev, .largeScreenshots .next").css("top",0).css("height",$(window).height())}$("body").hasClass("largescreenshotsopened")||($("body").addClass("noscroll").addClass("largescreenshotsopened").append('<div class="largeScreenshots"><div class="picHolder"><h1></h1><span></span><div class="imgHolder"><img/></div></div><div class="prev"></div><div class="next"></div><div class="close"></div></div>'),$(".largeScreenshots .close, .largeScreenshots span").click(function(t){$("body").removeClass("noscroll").removeClass("largescreenshotsopened"),$(".largeScreenshots").remove(),window.location.hash="/"})),$(".largeScreenshots .imgHolder img").attr("src",i+e),$(".largeScreenshots .imgHolder img").ready(function(t){$(".largeScreenshots").scrollTop(0),$(".largeScreenshots .imgHolder img"),$(".largeScreenshots h1").text(n.attr("alt")),window.location.hash=n.attr("id");var e="0.75s cubic-bezier(.27,1.64,.32,.95)";$(".picHolder, .picHolder h1").css("-webkit-animation",o+" "+e).css("-moz-animation",o+" "+e).css("-ms-animation",o+" "+e).css("-o-animation",o+" "+e).css("animation",o+" "+e),setTimeout(function(){$(".picHolder, .picHolder h1").removeAttr("style")},750)}),s(),$(".largeScreenshots").scroll(function(){s()});var r=n.parent().nextOrFirst(".samples-holder .sample-box").find("img"),c=r.attr("src"),e=c.split("/"),u=e[e.length-1],d=c.split("/"+u);d=d[0],$([d+"-large/"+u]).preload();var r=n.parent().prevOrLast(".samples-holder .sample-box").find("img"),c=r.attr("src"),e=c.split("/"),u=e[e.length-1],d=c.split("/"+u);d=d[0],$([d+"-large/"+u]).preload(),$(".largeScreenshots .prev,.largeScreenshots .next, .largeScreenshots .imgHolder img").unbind(),setTimeout(function(){$(".largeScreenshots .prev").click(function(){var e=n.parent().prevOrLast(".samples-holder .sample-box").find("img"),i=n.data("structure"),o=e.attr("src"),a=o.split("/"),s=a[a.length-1],r=o.split("/"+s);r=r[0],t(s,r+"-large/",e,"prev",i)}),$(".largeScreenshots .next, .largeScreenshots .imgHolder img").click(function(){var e=n.parent().nextOrFirst(".samples-holder .sample-box").find("img"),i=e.data("structure"),o=e.attr("src"),a=o.split("/"),s=a[a.length-1],r=o.split("/"+s);r=r[0],t(s,r+"-large/",e,"next",i)})},750),isMobile.any()&&$(".largeScreenshots .imgHolder img").touchwipe({wipeLeft:function(){$(".largeScreenshots .next").click()},wipeRight:function(){$(".largeScreenshots .prev").click()},min_move_x:20,min_move_y:20,preventDefaultEvents:!1})}var e=$(".samples-grid");if(setTimeout(function(){e.masonry({itemSelector:".sample-box"})},3e3),isMobile.any()?($(".samples-holder").addClass("shown"),$(".sample-box").addClass("visible")):$(document).scroll(function(){var t=$(".samples-holder"),i=t.offset(),n=$(document).scrollTop();n>=i.top-$(window).height()+200&&e.masonry({itemSelector:".sample-box"}),$(document).scrollTop()>=i.top-$(window).height()/2&&($(".samples-holder").hasClass("shown")||(isMobile.any()||(addSamplesInt=setInterval(function(){var t=$(".sample-box:not(.visible)"),e=Math.round(Math.random()*t.size()),i=t.eq(e);i.addClass("visible"),0==t.size()&&clearInterval(addSamplesInt)},50)),$(".samples-holder").addClass("shown")))}),$(".samples-holder img").click(function(){var e=$(this).attr("src"),i=e.split("/"),n=i[i.length-1],o=$(this).data("structure"),a=e.split("/"+n);a=a[0],t(n,a+"-large/",$(this),"next",o)}),-1!=window.location.hash.indexOf(".samples-holder")){var i=window.location.hash;$(i).click()}$(document).keydown(function(t){return 37==t.keyCode?($(".largeScreenshots .prev").click(),!1):39==t.keyCode?($(".largeScreenshots .next").click(),!1):38==t.keyCode?($(".largeScreenshots").clearQueue().animate({scrollTop:$(".largeScreenshots").scrollTop()-500+"px"},250),!1):40==t.keyCode?($(".largeScreenshots").clearQueue().animate({scrollTop:$(".largeScreenshots").scrollTop()+500+"px"},250),!1):27==t.keyCode?($(".close").click(),!1):void 0})},startupKit.uiKitBlog=startupKit.uiKitBlog||{},startupKit.uiKitBlog.blog1=function(){$(window).resize(function(){$(".page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var e=$(this).outerHeight();e>t&&(t=e)}).css("height",t+"px"),$(this).css("height",t+"px")})});var t=PageTransitions();t.init($("#b1-pt-1")),$("#b1-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b1-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitBlog.blog2=function(){},startupKit.uiKitBlog.blog3=function(){},startupKit.uiKitBlog.blog4=function(){},startupKit.uiKitBlog.blog5=function(){var t=PageTransitions();t.init($("#b5-pt-2")),$("#b5-pt-2 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b5-pt-2 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitCrew=startupKit.uiKitCrew||function(){$(".member .photo img").each(function(){$(this).hide().parent().css("background-image",'url("'+this.src+'")')})},startupKit.uiKitProjects=startupKit.uiKitProjects||{},startupKit.uiKitProjects.project1=function(){},startupKit.uiKitProjects.project2=function(){},startupKit.uiKitProjects.project3=function(){},startupKit.uiKitProjects.project4=function(){$(".overlay").on("hover",function(){$(this).closest(".project").find(".name").toggleClass("hover")})},startupKit.uiKitFooter=startupKit.uiKitFooter||{},startupKit.uiKitFooter.footer1=function(){},startupKit.uiKitFooter.footer2=function(){},startupKit.uiKitFooter.footer3=function(){},startupKit.uiKitFooter.footer4=function(){},startupKit.uiKitFooter.footer5=function(){},startupKit.uiKitFooter.footer6=function(){},startupKit.uiKitFooter.footer7=function(){},startupKit.uiKitFooter.footer8=function(){},startupKit.uiKitFooter.footer9=function(){},startupKit.uiKitFooter.footer10=function(){},startupKit.uiKitFooter.footer11=function(){},startupKit.uiKitFooter.footer12=function(){},startupKit.uiKitFooter.footer13=function(){},startupKit.uiKitFooter.footer14=function(){},startupKit.uiKitFooter.footer15=function(){},function($){$(function(){for(header in startupKit.uiKitHeader)headerNumber=header.slice(6),0!=jQuery(".header-"+headerNumber).length&&startupKit.uiKitHeader[header]();for(content in startupKit.uiKitContent)contentNumber=content.slice(7),0!=jQuery(".content-"+contentNumber).length&&startupKit.uiKitContent[content]();for(blog in startupKit.uiKitBlog)blogNumber=blog.slice(4),0!=jQuery(".blog-"+blogNumber).length&&startupKit.uiKitBlog[blog]();for(project in startupKit.uiKitProjects)projectNumber=project.slice(7),0!=jQuery(".projects-"+projectNumber).length&&startupKit.uiKitProjects[project]();startupKit.uiKitCrew();for(footer in startupKit.uiKitFooter)footerNumber=footer.slice(6),0!=jQuery(".footer-"+footerNumber).length&&startupKit.uiKitFooter[footer]();$(window).load(function(){$("html").addClass("loaded"),$(window).resize()}),/msie/i.test(navigator.userAgent)&&$("img").each(function(){$(this).css({width:$(this).attr("width")+"px",height:"auto"})}),$(".input-prepend, .input-append").on("focus","input",function(){$(this).closest(".control-group, form").addClass("focus")}).on("blur","input",function(){$(this).closest(".control-group, form").removeClass("focus")}),$(".project .photo img").each(function(){$(this).hide().parent().css("background-image",'url("'+this.src+'")')});var t=$(".tiles");$(window).resize(function(){$(this).width()<768?t.hasClass("phone-mode")||($('td[class*="tile-"]',t).each(function(){$("<div />").addClass(this.className).append($(this).contents()).appendTo(t)}),t.addClass("phone-mode")):t.hasClass("phone-mode")&&($('> [class*="tile-"]',t).each(function(e){$('td[class*="tile-"]',t).eq(e).append($(this).contents()),$(this).remove()}),t.removeClass("phone-mode"))}),t.on("mouseenter",'[class*="tile-"]',function(){$(this).removeClass("faded").closest(".tiles").find('[class*="tile-"]').not(this).addClass("faded")}).on("mouseleave",'[class*="tile-"]',function(){$(this).closest(".tiles").find('[class*="tile-"]').removeClass("faded")})})}(jQuery),function($){$.fn.touchwipe=function(t){var e={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};return t&&$.extend(e,t),this.each(function(){function t(){this.removeEventListener("touchmove",i),o=null,s=!1}function i(i){if(e.preventDefaultEvents&&i.preventDefault(),s){var n=i.touches[0].pageX,r=i.touches[0].pageY,c=o-n,u=a-r;Math.abs(c)>=e.min_move_x?(t(),c>0?(e.wipeLeft(),i.preventDefault()):(e.wipeRight(),i.preventDefault())):Math.abs(u)>=e.min_move_y&&(t(),u>0?e.wipeDown():e.wipeUp())}}function n(t){1==t.touches.length&&(o=t.touches[0].pageX,a=t.touches[0].pageY,s=!0,this.addEventListener("touchmove",i,!1))}var o,a,s=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",n,!1)}),this}}(jQuery);