$(function() {
	//鼠标移入导航出现上边框	
	$('.header-nav').find('li').mouseover(function(e) {
		$(this).addClass('active').siblings().removeClass('active');
	}).mouseout(function() {
		$(this).removeClass('active')
	});

	//主页轮播图————淡入淡出
	$('#banner_page').myBanner({
		bannerImg: '#banner_list', //存放轮播图片的最外层容器的id名
		bannerImgInnerTag: 'a', //存放轮播图片的外层容器的标签名
		activeClassName: 'active', //差异样式的class名
		bannerPageInnerTag: 'li', //存放缩略图的标签名
		bannerInfo: null, //存放图片信息的容器的id名
		bannerBtn: '#banner_btn', //存放前进、后退按钮的容器的id名
		nextBtn: '#next_btn', //前进按钮的id名
		prevBtn: '#prev_btn', //后退按钮的id名
		currentIndex: 0, //页面加载完成时，当前要显示的轮播图及其对应的缩略图和图片信息的索引，默认从第一张开始，默认的可以不用写
		speed: 2000, //轮播时间间隔
		type: 1, //轮播效果，1：淡入淡出，2：向左滑动
		thumbnail: false, //是否有缩略图，默认是false:没有，默认项可以不写，如果要缩略图，必须写true
		fullPageW: true
	});

	//主页鼠标移入罩层变高
	$('.section-mask').on('mouseenter', function() {
		var imgListH = $('.img-list').eq($(this).index()).find('img').height();
		$(this).animate({
			'height': imgListH,
			'padding': 0
		}, 300).slideDown();
	}).mouseleave(function() {
		$(this).animate({
			'height': '55px',
			'padding': '10px 0'
		}, 300);
	});

	//签证
	$('.country-nav').on('click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	//ajax获取签证数据
	$.ajax({
			type: "get",
			url: "http://localhost/Travel1/app/php/qz-country.php",
			success: function(data) {
				var jdata = JSON.parse(data);
				$('.country-nav .oz').click(function() {
					$(jdata.oz).each(function(index, ele) {
						$(".guojia").eq(index).attr("src", $(jdata.oz)[index].src);
						$('.section-mask h3').eq(index).text($(jdata.oz)[index].nation);
					});
				}).click();
				$('.country-nav .mz').click(function() {
					$(jdata.mz).each(function(index, ele) {
						$(".guojia").eq(index).attr("src", $(jdata.mz)[index].src);
						$('.section-mask h3').eq(index).text($(jdata.mz)[index].nation);
					});
				});
				$('.country-nav .yz').click(function() {
					$(jdata.yz).each(function(index, ele) {
						$(".guojia").eq(index).attr("src", $(jdata.yz)[index].src);
						$('.section-mask h3').eq(index).text($(jdata.yz)[index].nation);
					});
				});
				$('.country-nav .else').click(function() {
					$(jdata.mz).each(function(index, ele) {
						$(".guojia").eq(index).attr("src", $(jdata.else)[index].src);
						$('.section-mask h3').eq(index).text($(jdata.else)[index].nation);
					});
				});
			}
		});
		//ajax获取签证数据
/*	$.ajax({
			type: "get",
			url: "http://localhost/Travel1/app/php/destination.php",
			success: function(data) {
				var jdata = JSON.parse(data);
				$('.country-nav .oz').click(function() {
					$(jdata.oz).each(function(index, ele) {
						$(".big-bg").eq(index).attr("src", $(jdata.oz)[index].bg_src);
						$(".sm-bg").eq(index).attr("src", $(jdata.oz)[index].sm_src);
						//					$('.section-mask h3').eq(index).text($(jdata.oz)[index].nation);
					});
				}).click();
				$('.country-nav .mz').click(function() {
					$(jdata.mz).each(function(index, ele) {
						$(".big-bg").eq(index).attr("src", $(jdata.mz)[index].bg_src);
						$(".sm-bg").eq(index).attr("src", $(jdata.mz)[index].sm_src);
						//					$('.section-mask h3').eq(index).text($(jdata.mz)[index].nation);
					});
				});
				$('.country-nav .yz').click(function() {
					$(jdata.yz).each(function(index, ele) {
						$(".big-bg").eq(index).attr("src", $(jdata.yz)[index].bg_src);
						$(".sm-bg").eq(index).attr("src", $(jdata.yz)[index].sm_src);
						//					$('.section-mask h3').eq(index).text($(jdata.yz)[index].nation);
					});
				});
				$('.country-nav .else').click(function() {
					$(jdata.mz).each(function(index, ele) {
						$(".big-bg").eq(index).attr("src", $(jdata.else)[index].bg_src);
						$(".sm-bg").eq(index).attr("src", $(jdata.else)[index].sm_src);
						//					$('.section-mask h3').eq(index).text($(jdata.else)[index].nation);
					});
				});
			}
		})*/
		//产品详情页轮播图————向左滑动
	$('#banner_place_page').myBanner({
		bannerImg: '#banner_place_img', //存放轮播图片的最外层容器的id名
		bannerImgInnerTag: 'a', //存放轮播图片的外层容器的标签名
		activeClassName: 'active', //差异样式的class名
		bannerPageInnerTag: 'li', //存放缩略图的标签名
		bannerInfo: '', //存放图片信息的容器的id名
		bannerBtn: '#banner_btn', //存放前进、后退按钮的容器的id名
		nextBtn: '#next_btn', //前进按钮的id名
		prevBtn: '#prev_btn', //后退按钮的id名
		currentIndex: 0, //页面加载完成时，当前要显示的轮播图及其对应的缩略图和图片信息的索引，默认从第一张开始，默认的可以不用写
		speed: 2000, //轮播时间间隔
		type: 2, //轮播效果，1：淡入淡出，2：向左滑动
		thumbnail: true, //是否有缩略图，默认是false:没有，默认项可以不写，如果要缩略图，必须写true
		imgFullPageW: false, //
		btnShow: false //不显示翻页按钮
	});

	//产品详情页tab图————事件委托
	//place-info-sub的初始高度等于初始显示的place-info-sublist的高度
	if ($('.place-info-sublist').eq(0).hasClass('active')) {
		var initH = $('.place-info-sublist').eq(0).height();
		$('.place-info-sub').height(initH);
	}
	//动态原型模式封装tab选项卡函数
	function Tab(supMenu, supListTag, subList, subWrap) {
		$(this).supMenu = $(supMenu);
		$(this).supListTag = supListTag;
		$(this).subList = $(subList);
		$(this).subWrap = $(subWrap);
		if (typeof($(this)).fn != "function") {
			Tab.prototype.fn = function() {
				return $(supMenu).on('click', supListTag, function() {
					$(this).addClass('active').parent().siblings().children(supListTag).removeClass('active');
					$(subList).eq($(this).parent().index()).show().siblings().hide();
					if ($(subList).is($('.place-info-sublist'))) {
						//鼠标点击切换tab后，哪个place-info-sublist显示就让place-info-sub的高度等于它的高度
						var h = $(subList).eq($(this).parent().index()).height();
						$(subWrap).height(h);
					}
				});
			}
		}
	}
	var contactUs = new Tab('.left-menu', 'a', '.right-content-list', null); //联系我们
	contactUs.fn();
	var leftMenu = new Tab('.place-info', 'a', '.place-info-sublist', '.place-info-sub'); //产品详情
	leftMenu.fn();

	/*$('.place-info').on('click', 'a', function() {
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$(".place-info-sublist").eq($(this).parent().index()).show().siblings().hide();
		//鼠标点击切换tab后，哪个place-info-sublist显示就让place-info-sub的高度等于它的高度
		var h = $(".place-info-sublist").eq($(this).parent().index()).height();
		$('.place-info-sub').height(h);
	});*/

	//联系我们tab图
	/*$('.left-menu').on('click','a',function() {
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
	});*/

})