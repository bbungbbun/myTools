export const text = `
@charset "utf-8";
@import url("font.css");

/******************************************************************************
 *** initialize ***************************************************************
 ******************************************************************************/
 * {margin:0;padding:0;line-height:1.4em;-webkit-overflow-scrolling:touch;box-sizing:border-box;-webkit-hyphens:auto;hyphens:auto;letter-spacing:-0.05em;vertical-align:middle;font-family:inherit;color:inherit;font-weight:inherit;}
 html, body {height:100%;font-size:12px;font-family:'Noto Sans KR', 'sans-serif';}
 body {color:#333;-webkit-text-size-adjust:none;word-break:keep-all;word-wrap:break-word;}
 legend, caption, figcaption {display:none;}
 ul,ol {list-style-image:none;list-style-position:outside;list-style-type:none;border:0px;}
 img,fieldset, frameset, frameborder, frame {border:0;}
 a, img, span, b, input, select, em, textarea, label, strong {vertical-align:middle;outline-style:none;color:inherit;font-family:inherit;}
 a {color:inherit;text-decoration:none;cursor:pointer;color:inherit;font-family:inherit;}
 a:hover {text-decoration:none;}
 i, em {font-style:normal;}
 textarea {resize:none;}
 button {border:none;background:none;outline:none;cursor:pointer;}
 input[type="text"],input[type="password"], textarea {-webkit-appearance:none; -webkit-box-shadow:none; -moz-box-shadow:none; box-shadow:none;border-radius:0;}
 select {border-radius:0;background:#fff;}
 label {cursor:pointer;}

/* scrollbar */

/******************************************************************************
 *** layout *******************************************************************
 ******************************************************************************/
.wrap{position:relative;overflow:hidden;}
.header{position:absolute;top:0;left:0;width:100%;height:60px;z-index:20;}
.header .inner{display:flex;align-items:center;padding:10px 0;justify-content: flex-end;}
.header .inner .logo {width:50%;text-align:center;}
.header .inner .logo a{display:inline-block;padding:8px 0;}
.header .inner .gnb-menu-btn{height:35px;}
.header .inner .gnb-menu-btn img{height:100%;}
.header .inner .top-menu button{display:none;}
.header .inner .top-menu li{float:left;}
.header .inner .top-menu li a{display:block;padding:10px 20px;color:#fff;font-size:16px;}
.header .inner .language{position:absolute;top:0;right:0;padding:18px;}
.header .inner .language button{background:none;color:#fff;font-size:16px;}
.header .inner .language .layer{display:none;position:absolute;top:50px;right:10px;margin-left:-10px;border:1px solid #d6d6d6;border-radius:3px;background:#fff;z-index:10000}
.header .inner .language .layer .arr{position:relative;left:50%}
.header .inner .language .layer .arr:after{display:block;content:'';position:absolute;top:-10px;left:-4px;display:block;width:0;border-bottom:10px solid #fff;border-left:7px solid transparent;border-right:7px solid transparent;}
.header .inner .language .layer .arr:before{display:block;content:'';position:absolute;top:-11px;left:-5px;display:block;width:0;border-bottom:11px solid #ccc;border-left:8px solid transparent;border-right:8px solid transparent;}
.header .inner .language .layer li{margin: 0 10px;padding:0 5px;border-top:1px solid #e9e9e9;}
.header .inner .language .layer li:first-child{border-top:none;}
.header .inner .language .layer li a{display:block;margin:3px 0;padding:0 5px;line-height:22px;font-size:14px;}
.header .inner .right-area{width:50%;float:right;display: flex;align-items: center;padding:0 20px}
.header .inner .right-area .right{margin-left:auto;}
.header .inner .btn-home{display: flex;justify-content: center;align-items: center;border-radius: 10px;padding: 10px;height: 40px;color: #fff;font-size: 14px;font-weight: 500;background-color: #ff7863;}


.profile {margin-left:10px;}
.profile .account {cursor: pointer;}
.profile span.normal {cursor:pointer;font-size:1.3rem;font-weight:500;}
.profile > a {position:relative;display:inline-flex;align-items: center; vertical-align:top;line-height:30px;margin-left:10px;}
.profile .thumb {width:30px;height:30px;border-radius:30px;overflow:hidden;background:#979797;display:inline-block;}
.profile > a:after {content:'';display:block;width:10px;height:5px;background: url("data:image/svg+xml,%3Csvg width='65' height='36' viewBox='0 0 65 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.9507 29.8373L29.9417 29.8464L29.9328 29.8557C29.3873 30.43 29.0855 31.1677 29.0855 31.9457C29.0855 32.7009 29.3527 33.4561 29.9507 34.0542C31.111 35.2144 32.9876 35.2144 34.1479 34.0541L62.1344 6.08729L62.1347 6.08704C63.2949 4.92678 63.2949 3.03046 62.1347 1.8702L61.4276 2.5773L62.1347 1.8702C60.9744 0.709935 59.0781 0.709935 57.9178 1.8702L29.9507 29.8373Z' fill='%23ffffff' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M1.00003 3.97862L1.00003 4.97862L1.18609 4.97862C1.32526 5.37838 1.55466 5.75668 1.88503 6.08705L29.8521 34.0541C31.0124 35.2144 32.889 35.2144 34.0492 34.0541C35.2095 32.8939 35.2095 31.0173 34.0492 29.857L33.3421 30.5641L34.0492 29.857L6.0624 1.8702L5.35529 2.57731L6.0624 1.8702C4.90213 0.709939 3.02555 0.709939 1.86529 1.8702L1.85622 1.87926L1.8474 1.88856C1.30182 2.46285 1.00003 3.20057 1.00003 3.97862Z' fill='%23ffffff' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;position:absolute;color:#000;top:50%;right:0;transform:translateY(-50%);-webkit-transform:translateY(-50%);}
.profile.active > a:after {transform: rotate(180deg);margin-top:-1px;}
.profile > a.normal {padding-right:0;}
.profile > a.normal:after {display:none;}
.profile .popup {display:none;position:absolute;top:50px;right:15px;width:250px;background:#fff;border:1px solid #e2e2e2;border-radius: 5px;box-shadow: 2px 4px 12px 2px rgba(224, 224, 224, 0.6);z-index:80;}
.profile.active .popup {display:block !important;}
.profile .popup .info {position:relative;background: linear-gradient(90deg, rgba(2,0,36,1) 0%,#f0544f 0%, #ffd9d7 100%);padding:25px 25px 70px;line-height:40px;color:#fff;text-align:left;}
.profile .popup .info .thumbnail {display:inline-block;width:40px;height:40px;border-radius:40px;background:#fff;margin-right:10px;vertical-align:top;overflow:hidden;}
.profile .popup p {display:inline-block;line-height:40px;vertical-align:top;font-size:1.3rem;font-weight:400;}
.profile .popup p b {vertical-align:baseline;margin-right:2px;}
/* 마이페이지 텍스트 수정 */
.profile .popup .info a {position:absolute;top:35px;right:25px;padding:0 10px;height:20px;font-size:1rem;color:#f0544f;line-height:20px;display:inline-block;background:#fff;letter-spacing:-0.18px;border-radius:20px;}
.profile .popup .point {position:relative;margin:0 20px;margin-top:-35px;background:#fff;border-radius:5px;}
.profile .popup .point ul {overflow:hidden;display:flex;}
.profile .popup .point ul li {position:relative;width:50%;line-height:1;margin:0;text-align:center;padding:15px 0;}
.profile .popup .point ul li span {display:block;}
.profile .popup .point ul li span.tit {display:inline-block;padding:0 10px;height:20px; font-size:1rem;color:#fff;line-height:20px;border-radius:3px;background:#f0544f;}
.profile .popup .point ul li:last-child:after {content:'';width:2px;height:50px;position:absolute;top:50%;left:-1px;margin-top:-25px;background:#f4f4f4;}
.profile .popup .point ul li:last-child span.tit {background:#ffd9d7;color:#f0544f;}
.profile .popup .point ul li span.point {margin-top:6px;font-size:1.3rem;color:#2c2c2c;letter-spacing:-0.29px;font-weight:600;}
.profile .popup .menu {margin:0 20px;}
.profile .popup .menu ul li {float:none;display:block;margin-right:0;border-bottom:1px solid #f4f4f4;}
.profile .popup .menu ul li:last-child {border-bottom:0;}
.profile .popup .menu ul li a {display:block;text-align:center;color:#666;letter-spacing:-0.21px;height:35px;line-height:35px;font-size:1.2rem;}
.profile .popup .menu ul li:hover a {background:none;}
.profile .popup .language {margin:0 20px;margin-bottom:10px;margin-top:5px;}
.profile .popup .language > a {background: #f15e59;padding:7px;font-size:1.3rem;}
.profile .popup .language ul li a {padding:7px;}

.content-wrap .content{padding:30px 20px 40px 20px;}
.content-wrap .content.sub-content{padding:25px 0 0 0;}

.title-content{font-size: 28px; color:#000;}

.sub-depth{position:relative;margin-top:10px;z-index:10;}
.sub-depth .han{font-size:inherit;vertical-align:baseline;font-family:'Nanum Gothic';vertical-align:baseline;}
.sub-depth .depth{position:relative;height:38px;text-align:left;border-radius:2px;background:#775be1;}
.sub-depth.js-sub-depth .depth:before{content:""; display: block;position:absolute;top:13px;right:25px;width:3px;height:13px;background:#fff;}
.sub-depth.js-sub-depth .depth:after{content:""; display: block;position:absolute;top:18px;right:20px;width:13px;height:3px;background:#fff;}
.sub-depth .depth.on:before{display:none;}
.sub-depth .depth strong{display:inline-block;padding-left:20px;line-height:38px;font-size:20px;font-weight:normal;color:#fff;}
.sub-depth.js-sub-depth .selected{cursor:pointer;}
.sub-depth .layer{display:none;position:absolute;top:37px;left:0;width:100%;padding:0 15px;z-index:10;border:1px solid #775be1;background:#fff;}
.sub-depth .layer li{border-top:1px solid #aaaaaa;}
.sub-depth .layer li:first-child{border-top:none;}
.sub-depth .layer li a{display:block;padding:5px 0;font-size:20px;color:#444;}
@media all and (max-width:480px){
	.title-content{font-size: 20px;}
	.sub-depth{margin-top:12px;}
	.sub-depth .depth{height:28px;}
	.sub-depth .depth strong{line-height:28px;font-size:16px;}
	.sub-depth.js-sub-depth .depth:before{top:8px;right:20px;}
	.sub-depth.js-sub-depth .depth:after{top:13px;right:15px;}
	.sub-depth .layer{top:27px;padding:0 10px;}
	.sub-depth .layer li a{padding:3px 0;font-size:16px;}
}

.gnb-menu{
	-webkit-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
	-moz-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
	-ms-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
	transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
	-webkit-transform: translateZ(0);
}
.gnb-menu .inner{padding:10px 20px 20px 20px;}
.gnb-menu .inner:after{content:""; display: block;clear:both;}
.gnb-menu .logo{height:40px;padding:10px 0;}
.gnb-menu .logo img{height:100%;}
.gnb-menu .close{position:absolute;top:20px;right:26px;width:22px;height:22px;background:url("../images/2_close_gnb.png") no-repeat 0 0;}
.gnb-menu .line{display:block;margin-top:9px;border-top:1px solid #5e5965;}
.gnb-menu .menu{padding:30px 25px 0 25px;}
.gnb-menu .menu .tit{font-size:22px;color:#ffdcdf;}
.gnb-menu .menu ul li{border-bottom:1px solid #5e5965;}
.gnb-menu .menu ul li a{display:block;padding:4px 0;font-size:16px;color:#fff7dc;}
.gnb-menu .menu ul li.on a{color:#ffc600;}
.gnb-menu .language{display:none;}

	/* @mediaquary - LAYOUT */
	@media all and (min-width:1200px){
	.pc-hidden {display:none !important;}

	.header .inner{position:relative;max-width:1920px;margin: 0 auto;}
	.header .inner .top-menu{position:absolute;top:10px;left:50%;;}

	.gnb-menu{position:fixed;top:0;left:-100%;bottom:0;z-index:20;width:300px;overflow-y:auto;overflow-x:hidden;background:rgba(54,47,62, 0.95);}
	.gnb-menu.on{left:0;display:block;}

	.content-wrap{height:100%;}
	.container{height:100%;max-width:1920px;margin: 0 auto;}
	.container .visual-section{position:fixed;top:0; height:100vh;width:960px;overflow:hidden;max-width: 50%;}
	.container .content-section{ height:100%;position:relative;overflow:hidden;}
	.container .visual-section ~ .content-section{width:50%;left:50%;}
	}

	@media all and (max-width:1199px){
	.mobile-hidden {display:none !important;}

	.wrap{min-width:320px;}
	.header .inner .logo{width:100%;}
	.header .inner .top-menu{position:absolute;top:0;right:-100%;width:100%;height:62px;
		 -webkit-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
		 -moz-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
		 -ms-transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
		 transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
		 -webkit-transform: translateZ(0);
		}

	.header .inner .top-menu button{display:block;position:absolute;top:0;left:-60px;width:60px;height:60px;border:none;background:url("../images/2_topMenu_off.png") no-repeat 0 0;background-size:auto 100%;}
	.header .inner .top-menu.on{right:0}
	.header .inner .top-menu.on{width:100%;padding-left:40px;background:rgba(119,106,166, 0.8);}
	.header .inner .top-menu.on button{left:0;background-image:url("../images/2_topMenu_on.png");}
	.header .inner .top-menu ul{display:table;width:100%;right:0;}
	.header .inner .top-menu ul li{display:table-cell;width:25%;text-align:center;}
	.header .inner .top-menu ul li a{padding:20px 5px}

	.header .inner .language{display:none;}

	.gnb-menu{position:absolute;top:-100%;left:0;width:100%;z-index:20;overflow-y:auto;overflow-x:hidden;background:rgba(54,47,62, 0.95);}
	.gnb-menu.on{top:0;}
	.gnb-menu .close{top:43px;right:23px;}
	.gnb-menu .line{display:none;}
	.gnb-menu .menu{float:left;width:50%;padding-top:15px;}
	.gnb-menu .menu:nth-child(odd){padding-left:10px;}
	.gnb-menu .menu:nth-child(even){clear:both;padding-right:10px;}
	.gnb-menu .menu{padding-left:0;padding-right:0;}
	.gnb-menu .menu .tit{font-size:24px;}
	.gnb-menu .menu ul li a{display:block;padding:6px 0 3px 0;font-size:14px;}
	.gnb-menu .language{display:block;float:right;padding-top:30px;width:50%;padding-left:10px;}
	.gnb-menu .language .tit{padding:4px 0;font-size:16px;color:#ffffff;}
	.gnb-menu .language ul li a{display:block;padding:4px 0;font-size:14px;color:#fff7dc;}
	.gnb-menu .language ul li.on a{color:#ffc600;}

	.container .content-section{padding-top:60px;}
	.container .content-section{padding-top:0;}/*?*/
	}

	@media all and (max-width:479px){
	.wrap{padding-top:0;}

	.header{height:48px;}
	.header .inner .logo a{padding:6px 0;}
	.header .inner .logo img{height:35px;}
	/* .header .inner .gnb-menu-btn{width:34px;height:34px;}
	.header .inner .gnb-menu-btn span{height:4px;top:10px;width:20px;}
	.header .inner .gnb-menu-btn span:before{height:4px;width:20px;top:-6px;}
	.header .inner .gnb-menu-btn span:after{height:4px;width:20px;bottom:-6px;} */
	.header .inner .top-menu button{height:48px;width:48px;left:-48px;}
	.header .inner .top-menu.on ul li a{padding:15px 5px;font-size:14px;white-space:nowrap;}
	.header .inner .top-menu.on{padding-left:40px;height:48px;}

	.content-wrap .content{padding:20px;}

	}

	.footer .util { border-top: 1px solid #e8e8e8; border-bottom: 1px solid #e8e8e8; }
	.footer .util .wrapper { overflow: hidden; padding:0 20px;}
	.footer .util .wrapper .left { float: left; }
	.footer .util .wrapper .right { float: right; }
	.footer .util ul { font-size: 0; }
	.footer .util ul li { position: relative; display: inline-block; font-size: 14px; line-height: 60px; padding: 0 10px; }
	.footer .util ul li:first-child { padding-left: 0; }
	.footer .util ul li a { color: #666; }
	.footer .footer-bottom .right { width: 33.333%; float: right; max-width: 350px; }
	.footer .util .right .social-list { float: right; margin-top: 14px; }
	.footer .util .right .social-list a { display: inline-block; vertical-align: top; width: 32px; height: 32px; line-height: 32px; background: transparent; font-size: 20px; margin: 0 2px; background-size: 32px; text-align: center; }
	.footer .util .social-list a.deddang { background: url(../images/4_sns_1.png) no-repeat 50%/contain; }
	.footer .util .social-list a.youtube { background: url(../images/4_sns_2.png) no-repeat 50%/contain; }
	.footer .util .social-list a.facebook { background: url(../images/4_sns_3.png) no-repeat 50%/contain; }
	.footer .util .social-list a.instagram { background: url(../images/4_sns_4.png) no-repeat 50%/contain; }
	.footer .util .social-list a.kakao { background: url(../images/4_sns_5.png) no-repeat 50%/contain; }
	.footer .footer-top { display: flex; flex-wrap: wrap; -webkit-box-pack: start; place-content: stretch flex-start; margin-right: -12px; margin-left: -12px; }
	.footer .footer-top .site-map { width: 66.667%; padding: 0 12px; }
	.footer .footer-top .site-map ul { font-size: 0; padding-top: 10px; }
	.footer .footer-top .site-map ul li { display: inline-block; vertical-align: top; margin-right: 20px; }
	.footer .footer-top .site-map ul li a { font-size: 14px; color: #858a8d; letter-spacing: -0.15px; line-height: 20px; }
	.footer .footer-top .site-map ul li a img { vertical-align: middle; }
	.footer .footer-top .cs-center { width: 33.333%; padding: 0 12px; }
	.footer .footer-top .cs-center a { display: block; text-align: center; height: 40px; line-height: 40px; border: 1px solid #dfdfdf; border-radius: 3px; }
	.footer .footer-bottom { padding: 25px 20px; overflow: hidden; display: flex; }
	.footer .footer-bottom .left {flex:1;overflow:hidden;}
	.footer .footer-bottom .left h1 { display: block; margin-bottom: 15px; font-size: 18px; }
	.footer .footer-bottom .left h1 img { height: 25px; }
	.footer .footer-bottom .addr { margin-top: 10px; }
	.footer .footer-bottom .addr p { font-size: 12px; font-weight: normal; color: #666; line-height: 1.5; letter-spacing: normal; }
	.footer .footer-bottom .addr p:nth-child(1), #footer .footer-bottom .addr p:nth-child(2) { font-size: 13px; }
	.footer .footer-bottom .left .certification-icon { margin-top: 20px; }
	.footer .footer-bottom .left .certification-icon ul { font-size: 0; }
	.footer .footer-bottom .left .certification-icon ul li { display: inline-block; margin-right: 10px; width:130px;}
	.footer .footer-bottom .addr p a { display: inline-block; height: 26px; line-height: 24px; border: 1px solid #e8e8e8; font-size: 12px; margin: 20px 0; margin-right: 10px; padding: 0 10px; border-radius: 5px; }
	.footer .footer-bottom .addr p.last-info { font-size: 11px; max-width: 50vw;}
	.footer .footer-bottom .addr p.copyright { font-size: 11px; color: #a39fa9; }
	.footer .footer-bottom .right{margin-left:30px;}
	.footer .footer-bottom .right h2 { font-size: 16px; font-weight: bold; color: rgb(27, 28, 29); letter-spacing: -0.15px; margin-bottom: 15px; }
	.footer .footer-bottom .right h2 b { color: #f43142; vertical-align:baseline;}
	.footer .footer-bottom .right p { margin: 10px 0 20px 0; color: #666; font-size: 13px; }
	.footer .footer-bottom .right img{max-width: 100%;}

	@media all and (max-width:768px) {
		.footer .util{padding-top:10px;}
		.footer .util .wrapper .left,
		.footer .util .wrapper .right { float: none; width:100%;}
		.footer .util ul{text-align:center;}
		.footer .util ul li { font-size: 12px; line-height: 30px; }
		.footer .util .right .social-list { float: none; margin-top: 0; margin-bottom: 5px; text-align: center; }
		.footer .footer-bottom .addr p { font-size: 11px; max-width:100% !important;}
		.footer .footer-bottom .addr p a { margin: 10px 5px; margin-right: 5px; }
		.footer .footer-bottom{display:block;}
		.footer .footer-bottom .left,
		.footer .footer-bottom .right{width:100%;max-width: 100%;text-align:center;}
		.footer .footer-bottom .left .certification-icon { display: none; }
		.footer .footer-bottom .right{margin-top:15px;}
		.footer .footer-bottom .map{width:350px;margin:0 auto;}

		.footer-fix-menu { display: block; position: fixed; width: 100%; bottom: 0; left: 0; background: #fff; border-top: 1px solid #dfdfdf; z-index: 999; }
		.footer-fix-menu ul { overflow: hidden; }
		.footer-fix-menu ul li { padding: 10px 0; width: 20%; text-align: center; float: left; position: relative; }
		.footer-fix-menu ul li a { display: block; }
		.footer-fix-menu ul li a span { display: inline-block; }
		.footer-fix-menu ul li a span.icon { font-size: 20px; line-height: 20px; }
		.footer-fix-menu ul li a span.desc { display: block; font-size: 10px; margin-top: 2px; }
		.footer-fix-menu ul li a .count { width: 16px; height: 16px; border-radius: 16px; line-height: 16px; background: #46c3bc; color: #fff; text-align: center; font-size: 9px; position: absolute; top: 5px; right: 50%; font-style: normal; margin-right: -22px; -webkit-animation: joinAnimation 3s; -webkit-animation-iteration-count: infinite; -webkit-animation-timing-function: ease-in-out; }
	}

	@media all and (max-width:640px) {
		.footer .footer-bottom .addr p a:last-child {display:none;}
	 }


/******************************************************************************
 *** home ***********************************************************
 ******************************************************************************/

.main-slide{position:relative;}
.main-slide .slick-slider{height:100%;}
.main-slide .slick-slider .slick-list{height:100%;}
.main-slide .slick-slider .slick-list .slick-track{height:100%;}
.main-slide{width:100%;height:100%;overflow:hidden;}
.main-slide li{float:left;height:100%;text-align:center;}
.main-slide li .object{height:100%;position:relative;text-align:center;background-position:0 0;background-size:cover;background-repeat:no-repeat;transition: background 0.5s ease;-webkit-transition: background 0.5s ease;}
.main-slide li .object img{width:100%;}
.main-slide .slick-dots{position:absolute;bottom:60px;left:60px;}
.main-slide .slick-dots li{margin-left:12px;}
.main-slide .slick-dots li button{text-indent:-9999px;width:14px;height:14px;border-radius:14px;border:none;background:#999999;outline:none;cursor:pointer;}
.main-slide .slick-dots li.slick-active button{width:40px;background:#ffbf42;}



.visual-slider{position:relative;overflow:hidden;height:300px;width:100%;}
.visual-slider.h-type2{height:200px;}
.visual-slider:not(.swiper-initialized) .swiper-button-prev,
.visual-slider:not(.swiper-initialized) .swiper-button-next{display:none;}
.visual-slider .swiper-button-prev,
.visual-slider .swiper-button-next{background-color: rgba(0, 0, 0, 0.3); margin-left: 10px; padding: 25px 25px; transition: 0.5s;position: absolute; top: 50%; width: 27px; height: 44px; margin-top: -22px; z-index: 10; cursor: pointer; background-size: 18px 22px; background-position: center; background-repeat: no-repeat;}
.visual-slider .swiper-button-prev:after,
.visual-slider .swiper-button-next:after{display:none;}
.visual-slider .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");}
.visual-slider .swiper-button-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");}
.visual-slider img {width:100%;position:absolute;top:50%;left:50%;width: 100%;height: 100%;transform:translate(-50%, -50%);object-fit: cover;}
.visual-slider .text{position:absolute;top:35%;left:50%;z-index: 10;transform:translateX(-50%);text-align:center;}
.visual-slider .title{opacity: 0;color: #fff; font-size: 30px;  font-weight: 800;}
.visual-slider .txt{opacity: 0;color: #fff; font-size: 15px;  font-weight: 500;}
.visual-slider .btn-wrap{margin-top:30px;}
.visual-slider .btn-wrap a{position:relative; opacity: 0;color: #fff; font-family: "Roboto"; font-weight: 400; letter-spacing: 0.8px; font-size: 16px; line-height: 43px; padding-left: 30px; text-align: left; min-height: 50px; min-width: 180px; border-radius: 3em; display: inline-block; border: 1px #fff solid; background-color: transparent; background-image: none; background-repeat: no-repeat; background-position: 85% 50%;}
.visual-slider .btn-wrap a:after{content:'';display:block;width:50px;height:1px;background:#fff;position:absolute;top:50%;right:20px;transform:translateY(-50%);}
.visual-slider .animated{-webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both;}
.visual-slider .swiper-slide-active .title,
.visual-slider .swiper-slide-active .txt{-webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both;-webkit-animation-name: fadeInUp;animation-name: fadeInUp}
.visual-slider .swiper-slide-active .txt{animation-delay: 0.3s;}
@-webkit-keyframes fadeInUp { 0% { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0) } to { opacity: 1; -webkit-transform: none; transform: none } }
@keyframes fadeInUp { 0% { opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0) } to { opacity: 1; -webkit-transform: none; transform: none } }

@media screen and (max-width:1260px) {
    .visual-slider .swiper-button-prev,
    .visual-slider .swiper-button-next{display:none;}
    .visual-slider .title{ font-size: 3.2rem; line-height: 3.84rem;}
    .visual-slider .line{ width: 4.8rem; height: 1.2rem; border-top:0.08rem solid #fff;}
    .visual-slider .btn-wrap{margin-top:1.2rem;}
    .visual-slider .btn-wrap a{ letter-spacing: 0.032rem; font-size: 1rem; line-height: 1.72rem; padding-left: 1.2rem; min-height: 2rem; min-width: 7.2rem;}
    .visual-slider .btn-wrap a:after{width:2rem;right:0.8rem;}
}

.global-menu{margin-top:-25px;position:relative;z-index: 10;}
.global-menu ul{display:flex;justify-content:center;align-items:center;gap:15px;padding:0 50px;}
.global-menu li{flex:1;max-width: 150px;}
.global-menu a{display:flex;justify-content:center;align-items:center;border-radius:10px;height:50px; color:#fff;font-size:16px;font-weight:500;}
@media all and (max-width:479px){
	.visual-slider .text{top:30%;}
	.global-menu ul{gap:8px;padding:0 20px;}
	.global-menu a{font-size:14px;}
}

.section1 .notice .img img {width:100%;}
.section1 .notice .subject {margin-top:15px;font-weight:bold;color:#111;font-size:14px;}
.section1 .notice .title {margin-top:15px;margin-bottom:8px;font-size:20px;font-weight:bold;	overflow: hidden; text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 2; -webkit-box-orient: vertical; word-wrap:break-word; 	line-height: 1.2em; height: 2.8em;}
.section1 .notice .date {margin-top:7px;font-size:14px;color:#222;}
.section1 .notice .txt {overflow:hidden;margin-top:15px;font-size:16px;color:#222222;height:6em;}
.section1 .notice .txt a:hover{text-decoration:underline;}

.section2{margin-top:30px;}
.story-slide{position:relative;}
.story-slide .slick-slider{height:100%;}
.story-slide .slick-slider .slick-list{height:100%;}
.story-slide .slick-slider .slick-list .slick-track{height:100%;}
.story-slide{width:100%;height:100%;overflow:hidden;}
.story-slide li{float:left;height:100%;text-align:center;}
.story-slide li .object{height:100%;position:relative;text-align:center;}
.story-slide li .object img{width:100%;}
.story-slide .slick-dots{position:absolute;bottom:20px;left:30px;z-index:10}
.story-slide .slick-dots li{margin-left:12px;}
.story-slide .slick-dots li button{text-indent:-9999px;width:14px;height:14px;border-radius:14px;border:none;background:#999999;outline:none;cursor:pointer;}
.story-slide .slick-dots li.slick-active button{width:40px;background:#ff5151;}

.sign-exercise .tit {font-size:14px;color:#000;font-weight:bold;}
.sign-exercise .txt {margin-top:10px;font-size:16px;color:#444444;}
.sign-exercise .participation {margin-top:10px;}
.sign-exercise .participation p {letter-spacing:-1px;}
.sign-exercise .participation p .num {width:140px;padding-right:15px;line-height:1em;font-weight:bold;text-align:right;display:inline-block;font-size:24px;color:#ff5454;vertical-align:baseline;}
.sign-exercise .participation p .tt {display:inline-block;font-size:14px;font-weight:bold;line-height:1em;text-align:right;vertical-align:baseline;color:#111;}
.sign-exercise .gage-bar {position:relative;height:36px;margin:25px 0 30px 0;border:10px solid #cccccc;border-radius:30px;}
.sign-exercise .gage-bar .gage {height:100%;border-radius:30px;background:#8766ff;}
.sign-exercise .gage-bar .bg {position:absolute;bottom:-30px;right:0;text-align:right;/*background:url("../images/2_gage.png") no-repeat 0 0;*/}
.sign-exercise .gage-bar .bg img{width:65%;height:auto;}
.sign-exercise .goal {font-weight:bold;font-size:22px;color:#999999;text-align:right;letter-spacing:-1px;line-height:1em;letter-spacing:-2px;white-space:nowrap;}
.sign-exercise .goal .num{vertical-align:baseline;font-size:36px;letter-spacing:-3px;font-weight:bold;line-height:1em;}
.sign-exercise .link{margin-top:7px;}
.sign-exercise .link:after{content:""; display: block;clear:both;}
.sign-exercise .link a {float:left;height:110px;width:50%;padding-right:10px;text-align:center;font-size:20px;color:#fff;line-height:1.2em;}
.sign-exercise .link a strong{display:block;line-height:1.2em;}
.sign-exercise .link a:last-child{float:right;padding-left:10px;padding-right:0;}
.sign-exercise .link a img {width:100%;}
.sign-exercise .link a span{display:block;overflow:hidden;height:100%;line-height:1em;padding-top:34px;}
.sign-exercise .link .sign-exercise01 span{background:#28aeb9 url("../images/1_sign-exercise_1.png") no-repeat 50% 50%;background-size:auto 100%;}
.sign-exercise .link .sign-exercise02 span{background:#9a5539 url("../images/1_sign-exercise_2.png") no-repeat 50% 50%;background-size:auto 100%;}

.news-area .tit {font-size:14px;color:#111;font-weight:bold;}
.news-area .txt {margin-top:10px;font-size:16px;color:#444;}
.news-area .list {border-top:1px solid #c2c2c2;}
.news-area .list li {display:table;width:100%;border-bottom:1px solid #c2c2c2;table-layout: fixed;}
.news-area .list li > .cell{display:table-cell;text-align:left;padding:5px 0;}
.news-area .list li > .cell.auto{width:auto !important;}
.news-area .list li > .cell:first-child{width:47px;}
.news-area .list li > .cell:last-child{width:85px;}
.news-area .list li .label {width:47px;display:inline-block;line-height:19px;font-size:12px;color:#fff;text-align:center;border-radius:2px;}
.news-area .list li .label.faq{background:#54afd5;}
.news-area .list li .label.notice{background:#80c269;}
.news-area .list li .label.event{background:#ff5e5e;}
.news-area .list li .label.media{background:#aaaaaa;}
.news-area .list li .post {display:block;font-size:14px;padding:0 10px;color:#444;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.news-area .list li .date {text-align:right;font-size:14px;color:#444;}
.family-link:after{content:""; display: block;clear:both;}
.family-link .link1 {margin-bottom:20px;}
.family-link .link1 a {display:block;}
.family-link .link1 a img {width:100%;}
.family-link .link2 {float:left;width:50%;padding-right:10px;}
.family-link .link2 a {display:block;}
.family-link .link2 a img {width:100%;}
.family-link .link3 {float:right;width:50%;padding-left:10px;}
.family-link .link3 a {display:block;}
.family-link .link3 a img {width:100%;}
.family-link.type2 .link1{float:left;width:50%;padding-right:10px;margin-top:0;margin-bottom:0;}
.family-link.type2 .link2{float:right;width:50%;padding-left:10px;padding-right:0;}
.family-link.type2 .link3{clear:both;float:none;width:100%;margin-top:0;padding-top:40px;padding-left:0;}

	.section1{overflow:hidden;}
	.section1 .notice-list:not(.swiper-wrapper){display:flex;gap:30px;flex-wrap:wrap;}
	.section1 .notice-list.swiper-wrapper li ~ li{margin-left:30px;}
	.section1 .notice-list li{min-width:250px;flex:1;}

	/* @mediaquary - HOME */
	@media all and (min-width:1200px){
	.section1:after{content:""; display: block;clear:both;}
	.section1 .left{float:left;width:50%;padding-right:20px;}
	.section1 .right{float:right;width:50%;padding-left:20px;}
	.section2:after{content:""; display: block;clear:both;}
	.section2 .left{float:left;width:50%;padding-right:20px;}
	.section2 .right{float:right;width:50%;padding-left:20px;}

	.section3{margin-top:30px;}
	.section3:after{content:""; display: block;clear:both;}
	.section3 .left{float:left;width:50%;padding-right:20px;}
	.section3 .right{float:right;width:50%;padding-left:20px;}
	}
	@media (min-width:1200px) and (max-width:1600px) {
	.section1 .notice .title {font-size:18px;}
	.section1 .notice .date {font-size:13px;}
	.section1 .notice .txt{font-size:15px;}

	.sign-exercise .txt {font-size:14px;}
	.sign-exercise .participation p .num {font-size:22px;}
	.sign-exercise .participation p .tt {font-size:12px;}
	.sign-exercise .gage-bar {height:24px;margin:20px 0 26px 0;border:6px solid #cccccc;}
	.sign-exercise .gage-bar .bg img{width:60%;}
	.sign-exercise .goal{padding-top:10px;font-size:20px;letter-spacing:-1px;}
	.sign-exercise .goal .num{font-size:34px;}
	.sign-exercise .goal .num:before{content:""; display: block;}
	.sign-exercise .link a {height:95px;font-size:18px;}

	.news-area .list li .post{font-size:13px;}
	.news-area .list li .date{font-size:13px;}

	.family-link.type2 .link3{padding-top:20px;}
	}

	@media all and (max-width:1600px){
	.section1 .left{padding-right:10px;}
	.section1 .right{padding-left:10px;}
	.section2 .left{padding-right:10px;}
	.section2 .right{padding-left:10px;}
	.section3 .left{padding-right:10px;}
	.section3 .right{padding-left:10px;}
	}

	@media all and (max-width:1199px){
	.section1 .right,
	.section2 .right,
	.section3 .right{margin-top:30px;}
	.section3{margin-top:30px;}
	.section2 .sign-exercise .link{margin-top:25px;}

	.section1 .notice .txt{height:auto;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;white-space: normal; text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp:5; -webkit-box-orient: vertical;}
	}

	@media all and (max-width:959px){
	.family-link.type2 .link3{padding-top:1.8rem;}
	}

	@media all and (max-width:479px){
	.container .main-slide .slick-dots{bottom: 30px;left: 30px}
	.section1 .notice .subject{margin-top:10px;font-size:16px;}
	.section1 .notice .title{margin-top:5px;font-size:16px;}
	.section1 .notice .date{margin-top:3px;}
	.section1 .notice .txt{font-size:14px;}

	.section2 .sign-exercise .tit{font-size:16px;}
	.section2 .sign-exercise .txt{margin-top:10px;font-size:14px;}
	.section2 .sign-exercise .participation{display:table;}
	.section2 .sign-exercise .participation p{display:table-row;}
	.section2 .sign-exercise .participation p .num{display:table-cell;font-size:18px;width:auto;padding-right:5px;}
	.section2 .sign-exercise .participation p .tt{display:table-cell;font-size:12px;text-align:left;}


	.section3 .news-area .tit{font-size:16px;}
	.section3 .news-area .txt{font-size:13px;}
	.section3 .news-area .list{margin-top:3px;}
	.section3 .news-area .list li .label{width:40px;height:17px;line-height:17px;font-size:11px;}
	.section3 .news-area .list li .post{font-size:13px;}
	.section3 .news-area .list li .date{font-size:13px;}

	.sign-exercise .gage-bar {height:24px;margin:20px 0 26px 0;border:6px solid #cccccc;}
	.sign-exercise .gage-bar .bg img{width:60%;}
	.sign-exercise .gage-bar .bg img{width:55%;}
	.sign-exercise .goal .num{font-size:30px;}
	.sign-exercise .goal .num:before{content:""; display: block;}
	}


/******************************************************************************
 *** contents common ***********************************************************
 ******************************************************************************/
/* 메뉴 카테고리 */

.tab-type3 {border-bottom:2px solid #000;padding:0 10px;padding-bottom:30px;margin-bottom:40px;}
.tab-type3 ul {overflow-x:auto;text-align:center;white-space: nowrap;}
.tab-type3 ul li {display:inline-block;}
.tab-type3 ul li ~ li {margin-left:6px;}
.tab-type3 ul li a {position:relative;display:inline-flex;justify-content:center;align-items:center;    padding: 0 20px; border:1px solid #e4e4e4; border-radius: 30px; font-size: 18px; font-weight: 700; line-height: 48px; color: #767676; letter-spacing: -.3px;white-space: nowrap;}
.tab-type3 ul li .ico-new {display:inline-block;width:15px;height:15px;position:absolute;top:0;right:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none' class='categoryMenu_icon_new__kD5Q3'%3E%3Ccircle cx='8' cy='8' r='7.25' fill='%23FF4D66' stroke='%23fff' stroke-width='0.5'%3E%3C/circle%3E%3Cpath d='M5.012 11.5h1.41V6.993h.738l-1.035-.522L9.763 11.5h1.22V4.454h-1.41v4.487H8.84l1.03.523-3.628-5.01h-1.23V11.5z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E") no-repeat 0 0;background-size:auto 100%;}
.tab-type3 ul li.on a {background-color: #5368ff; font-weight: 700; color: #fff;}
@media all and (max-width:1260px) {
    .tab-type3 {padding-bottom:15px;}
}


/* 목록 */
.list-type {clear:both;display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:40px}
.list-type:after {content:"";display:block;clear:both;}
.list-type li .img {position:relative;width:100%;overflow:hidden;background-position:50% 50%;background-size:cover;background-repeat:no-repeat;border-radius:8px;}
.list-type li .img a {display:block;height:100%;}
.list-type li .img img {width:100%;}
.list-type li .text {margin-top:15px;}
.list-type li .text > a > .tit {display:block;font-size:20px;color:#222;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.2em;}
.list-type li .text > a > .txt {display:block;margin-top:15px;font-size:16px;color:#222;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.2em;height:4.8em;text-align:justify;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.2em;height:2.4em;word-break:break-all;}
.list-type li .text .sale {display:block;}
.list-type li .text .sale:after {content:"";display:block;clear:both;}
.list-type li .text .sale > .tit {float:left;color:#ff3b3b;font-weight:bold;font-size:24px;}
.list-type li .text .sale > .account {float:right;font-size:24px;color:#222222;}
.list-type li .info {margin-top:15px;display:flex;flex-direction:row;align-items:center;font-size:14px;}
.list-type li .info .right {margin-left:auto;}
.list-type li .info .favorite i {display:inline-block;width:15px;height:15px;margin-right:5px;background:url("data:image/svg+xml,%3Csvg width='34' height='30' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_7301)'%3E%3Cpath d='M31.0725 3.09937C27.2647 -0.649401 21.0659 -0.649401 17.2581 3.09937L17.1204 3.23712L16.6776 2.80419C12.8698 -0.934741 6.68088 -0.934741 2.87307 2.81403C1.02329 4.6343 0 7.05476 0 9.6425C0 12.2204 1.02329 14.6409 2.87307 16.471L16.2644 29.6556C16.5005 29.8819 16.8055 30.0098 17.1302 30.0098C17.4549 30.0098 17.7599 29.8819 17.9961 29.6556L31.0922 16.7661C32.942 14.9459 33.9652 12.5156 33.9652 9.93768C33.9652 7.35978 32.942 4.92948 31.0922 3.10921L31.0725 3.09937ZM31.4857 9.92784C31.4857 11.8465 30.7281 13.6471 29.3506 15.0049L17.1204 27.0482L4.59495 14.7097C3.21745 13.3519 2.45982 11.5513 2.45982 9.63266C2.45982 7.714 3.21745 5.91341 4.59495 4.55558C5.97245 3.19776 7.8124 2.44998 9.77042 2.44998C11.7284 2.44998 13.5684 3.19776 14.9459 4.55558L16.2447 5.83469C16.717 6.30698 17.4943 6.30698 17.9665 5.83469L18.9702 4.84092C21.8236 2.02689 26.4775 2.02689 29.3309 4.84092C30.7084 6.19875 31.4661 7.99934 31.4661 9.918L31.4857 9.92784Z' fill='%231F2125'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_7301'%3E%3Crect width='33.9456' height='30' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;}
.list-type li .info .user img {width:25px;height:25px;overflow:hidden;border-radius:100%;}
.list-type li.mask .img:after {content:'';display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);}
.list-type li.ready .img:after {content:'비공개';align-items:center;justify-content:center;color:#fff;font-size:25px;font-family:'GangwonEdu_OTFBoldA';}
.list-type.list-2 {grid-template-columns:repeat(2, 1fr);}
.list-type.list-3 {grid-template-columns:repeat(3, 1fr);}
/* .list-type.list-3 li .img {width:280px;height:158px;} */
.list-type.list-4 {grid-template-columns:repeat(4, 1fr);}
.list-type.list-5 {grid-template-columns:repeat(5, 1fr);}
.list-type.type2 li .img {border:1px solid #dddddd;}
.list-type.type2 li .text .txt {-webkit-line-clamp:2;height:2.4em;}
.list-type.mg-st1 {grid-gap: 20px 15px;}
.list-type.mg-st2 {grid-gap: 25px 30px;}
.list-type .desc {margin-top:10px;display:block;}
.list-type .desc .price {display: block; overflow: hidden; text-overflow: ellipsis; line-height: 20px; white-space: nowrap; font-size: 14px; font-weight: 700; color: #121212;}
.list-type .desc .txt {display: block; overflow: hidden; text-overflow: ellipsis; line-height: 20px; display: -webkit-box; max-height: 40px; white-space: normal; word-wrap: break-word; word-break: keep-all; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-top: 2px; font-size: 14px; font-weight: 400; color: #3f3f3f; word-break: break-all;}
.list-type li .prd-info { margin-top:12px; font-size:12px; }
.list-type li .prd-part { line-height:14px; font-size:12px; font-weight:500; color:#999; letter-spacing:-0.21px; }
.list-type li .prd-name { margin-top:2px; line-height:19px; font-size:16px; letter-spacing:-0.29px; overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.2em; color:#1e1e1f; }
.list-type li .prd-info .prd-point { padding-top:8px; margin-top:8px; border-top:1px solid #efefef; }
.list-type li .prd-info .prd-point ul { padding:0; font-size:0; }
.list-type li .prd-info .prd-point > ul > li { font-size:14px; font-weight:500; letter-spacing:-0.3px; color:#1e1e1f; line-height:25px; position:relative; display:inline-block; width:100%; margin-bottom:5px; }
.list-type li .prd-info .prd-point > ul > li span.point-tit { display:inline-block; padding:0 8px; height:25px; line-height:25px; text-align:center; border-radius:3px; margin-right:5px; font-size:12px; font-weight:500; }
.list-type li .prd-info .prd-point > ul > li.cash-point span.point-tit { background:#ffd9d7; color:#f0544f; }
.list-type li .prd-info .prd-point > ul > li.visit-point span.point-tit { background:#f0544f; color:#fff; }
.list-type li .prd-info .prd-point > ul > li.active-point span.point-tit { background:#ffd9d7; color:#f0544f; }
.list-type li .prd-info .prd-point > ul > li.coupon-point span.point-tit { background:#ffd9d7; color:#f0544f; }
.list-type li .prd-info .prd-point > ul > li del { color:#979797; font-weight:500; }
.list-type li .prd-info .prd-point > ul > li em.percent { font-style:normal; color:#f13440; }
.list-type li .prd-info .prd-point > ul > li .sale-point { display:block; padding-left: 77px; }
.list-type .img .img-tag1 {display:inline-flex;justify-content:center;align-items:center;padding: 0 7px; border-radius: 5px; background-color: rgba(0,0,0,.6); font-size: 13px; line-height: 24px; color: #fff; letter-spacing: -.5px; vertical-align: top;position:absolute;top:10px;left:10px;}
.list-type .prd-desc {margin-top: 12px;}
.list-type .prd-desc .prd-info {display:flex;align-items:center;margin-bottom: 6px;}
.list-type .prd-desc .prd-info .tag-info  [class*=tag] {display: inline-flex;height:18px;line-height:18px; padding:0 3px;font-size:11px; position: relative; border-radius: 4px; text-align: center; vertical-align: top;}
.list-type .prd-desc .prd-info .tag-info .tag1 { color:#fff;background:#000;}
.list-type .prd-desc .prd-info .tag-info .tag2 {    border: 1px solid rgba(51,51,51,.2);background:#fff; color:#666;}
.list-type .prd-desc .prd-info .tag-info .tag3 {background-image: linear-gradient(90deg,#ff7043,#ff3356); color:#fff;    background-color: #ff3356;}
.list-type .prd-desc .prd-info .view {margin-left:auto;font-size:14px;line-height:1;display:flex;align-items:center;}
.list-type .prd-desc .prd-info .view .ico-view {display:inline-block;width:16px;position:relative;top:1px;height:15px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' class='productCard_icon_eye__QZlLt'%3E%3Cg opacity='0.5' stroke='%23000' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M.583 7S2.916 2.333 7 2.333C11.083 2.333 13.416 7 13.416 7S11.083 11.667 7 11.667C2.916 11.667.583 7 .583 7z'%3E%3C/path%3E%3Cpath d='M7 8.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat 0 50%;background-size:auto 100%;}
.list-type .prd-desc .prd-info .view span {line-height:1;display:inline-block;}
.list-type .prd-desc .prd-tit {display: block; overflow: hidden; text-overflow: ellipsis; line-height: 22px; display: -webkit-box; max-height: 44px; white-space: normal; word-wrap: break-word; -webkit-line-clamp: 2; -webkit-box-orient: vertical; font-size: 16px; font-weight: 600; color: #111; word-break: keep-all;}
.list-type .prd-desc .price {margin-top:5px;font-size: 14px;font-weight:bold;}
.list-type .prd-desc .price .sale {font-size: 17px;color: #f03f45;margin-right:5px;}
.list-type .prd-desc .price .sale .ico-down {display:inline-block;width:13px;height:20px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='20' viewBox='0 0 13 20' fill='none' class='productCard_icon__Rg7FQ'%3E%3Cpath d='M6.521 3.5c-.606 0-1.021.415-1.021 1.046v6.973l.066 1.402-1.303-1.51-1.328-1.32a.983.983 0 00-.722-.324c-.548 0-.963.407-.963.98 0 .265.108.514.315.73l4.2 4.208c.192.2.474.308.756.308.274 0 .556-.108.747-.308l4.209-4.208c.207-.216.315-.465.315-.73 0-.573-.415-.98-.963-.98-.307 0-.54.133-.73.324L8.77 11.41l-1.304 1.51.067-1.402V4.546c0-.631-.407-1.046-1.013-1.046z' fill='%23F03F45'%3E%3C/path%3E%3C/svg%3E") no-repeat 0 0;background-size:auto 100%;}
.list-type .prd-desc .price b {font-size: 17px;font-weight:bold; color:#000;}

@media screen and (max-width:1024px) {
    .list-type {gap:20px;}
    /* .list-type li {margin-top:20px;padding-left:20px;} */
    .list-type li .img img {width:100%;}
    .list-type li .text {margin-top:10px;}
    .list-type li .text > a > .tit {font-size:0.938rem;}
    .list-type li .text > a > .txt {margin-top:10px;font-size:0.875rem;}
    .list-type li .text .sale > .tit {font-size:1.375rem;}
    .list-type li .text .sale > .account {padding-top:6px;font-size:0.938rem;}
    /* .list-type.list-2 li {width:50%;}
    .list-type.list-4 li {width:25%;}
    .list-type.list-5 li {width:20%;} */
}
@media screen and (max-width:768px) {
    .list-type {grid-template-columns:repeat(3, 1fr) !important;}
}
@media screen and (max-width:540px) {
    .list-type {grid-template-columns:repeat(2, 1fr) !important;}
}
@media screen and (max-width:420px) {
    .list-type {grid-template-columns:repeat(1, 1fr) !important;}
}


/* PC 상세 */
.content-detail{margin-top:30px;}
.board-read-info .left span a img {vertical-align: top;}
.board-read-info .btn-ico-type {display: inline-flex; align-items: center;}
.board-read-info .btn-ico-type i {margin-right: 5px; background-size: auto 100% !important;}
.board-read-info .btn-ico-type span {font-size: 14px;}
.board-read-info .ico-file {display: inline-block; width: 18px; height: 18px; background: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath d='M30 6.54167V27.5C30 28.1667 29.75 28.75 29.25 29.25C28.75 29.75 28.1667 30 27.5 30H2.5C1.83333 30 1.25 29.75 0.75 29.25C0.25 28.75 0 28.1667 0 27.5V2.5C0 1.83333 0.25 1.25 0.75 0.75C1.25 0.25 1.83333 0 2.5 0H23.4583L30 6.54167ZM27.5 7.66667L22.3333 2.5H2.5V27.5H27.5V7.66667ZM14.9902 24.7917C16.1912 24.7917 17.2153 24.3713 18.0625 23.5306C18.9097 22.69 19.3333 21.6691 19.3333 20.4681C19.3333 19.2672 18.913 18.2431 18.0723 17.3958C17.2316 16.5486 16.2108 16.125 15.0098 16.125C13.8088 16.125 12.7847 16.5453 11.9375 17.386C11.0903 18.2267 10.6667 19.2475 10.6667 20.4485C10.6667 21.6495 11.087 22.6736 11.9277 23.5208C12.7684 24.3681 13.7892 24.7917 14.9902 24.7917ZM4.70833 10.6667H19.625V4.70833H4.70833V10.6667ZM2.5 7.66667V27.5V2.5V7.66667Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-view {display: inline-block; width: 24px; height: 20px; background: url("data: image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath d='M11.6023 4.8725C11.1613 3.73162 10.3956 2.74498 9.39989 2.03453C8.4042 1.32408 7.22215 0.920965 5.99984 0.875C4.77753 0.920965 3.59549 1.32408 2.59979 2.03453C1.6041 2.74498 0.838401 3.73162 0.39734 4.8725C0.367553 4.95489 0.367553 5.04511 0.39734 5.1275C0.838401 6.26838 1.6041 7.25502 2.59979 7.96547C3.59549 8.67592 4.77753 9.07903 5.99984 9.125C7.22215 9.07903 8.4042 8.67592 9.39989 7.96547C10.3956 7.25502 11.1613 6.26838 11.6023 5.1275C11.6321 5.04511 11.6321 4.95489 11.6023 4.8725ZM5.99984 8.375C4.01234 8.375 1.91234 6.90125 1.15109 5C1.91234 3.09875 4.01234 1.625 5.99984 1.625C7.98734 1.625 10.0873 3.09875 10.8486 5C10.0873 6.90125 7.98734 8.375 5.99984 8.375Z' fill='black'/%3E%3Cpath d='M6 2.75C5.55499 2.75 5.11998 2.88196 4.74997 3.12919C4.37996 3.37643 4.09157 3.72783 3.92127 4.13896C3.75097 4.5501 3.70642 5.0025 3.79323 5.43895C3.88005 5.87541 4.09434 6.27632 4.40901 6.59099C4.72368 6.90566 5.12459 7.11995 5.56105 7.20677C5.99751 7.29358 6.4499 7.24903 6.86104 7.07873C7.27217 6.90843 7.62357 6.62004 7.87081 6.25003C8.11804 5.88002 8.25 5.44501 8.25 5C8.25 4.40326 8.01295 3.83097 7.59099 3.40901C7.16903 2.98705 6.59674 2.75 6 2.75ZM6 6.5C5.70333 6.5 5.41332 6.41203 5.16665 6.2472C4.91997 6.08238 4.72771 5.84811 4.61418 5.57402C4.50065 5.29994 4.47095 4.99834 4.52882 4.70736C4.5867 4.41639 4.72956 4.14912 4.93934 3.93934C5.14912 3.72956 5.41639 3.5867 5.70737 3.52882C5.99834 3.47094 6.29994 3.50065 6.57403 3.61418C6.84812 3.72771 7.08238 3.91997 7.24721 4.16664C7.41203 4.41332 7.5 4.70333 7.5 5C7.5 5.39782 7.34197 5.77936 7.06066 6.06066C6.77936 6.34196 6.39783 6.5 6 6.5Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-up {display: inline-block; width: 20px; height: 20px; background: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.3613 0.237031C14.6787 0.547392 14.2993 0.999437 13.4081 2.56454C12.0569 4.93703 9.64146 8.58764 8.4135 10.1131C8.10856 10.492 8.08736 10.4975 7.77839 10.281C7.50055 10.0861 7.01812 10.0568 4.08245 10.0568C0.958296 10.0568 0.682466 10.0761 0.389463 10.3135L0.0727141 10.5703L0.036357 19.4532L0 28.3363L0.394964 28.7317L0.789927 29.1271H4.09748H7.40503L7.80187 28.7298L8.19871 28.3326L8.89835 28.8652C9.28312 29.1581 9.93003 29.5333 10.3359 29.6989C11.0488 29.9898 11.2232 30 15.501 30H19.9282L20.8003 29.5829C22.3271 28.8524 22.7343 28.3687 26.2074 23.1588C27.983 20.4952 29.5446 18.0301 29.6779 17.6806C30.4558 15.6399 29.787 13.2683 28.0774 12.0054C26.8959 11.1326 26.1587 10.9969 22.5973 10.9969C20.8711 10.9969 19.4575 10.9515 19.4561 10.8962C19.4548 10.8409 19.7688 9.35891 20.154 7.6031C20.8145 4.59256 20.8455 4.36788 20.6971 3.65973C20.6106 3.24677 20.3833 2.64176 20.1921 2.31515C19.8098 1.66206 18.6198 0.63952 17.7817 0.243746C17.0987 -0.0787017 16.0618 -0.081522 15.3613 0.237031ZM17.4193 2.62511C18.1847 3.15276 18.5179 3.6412 18.5222 4.24178C18.5237 4.44859 18.1485 6.32929 17.6883 8.42097C16.9103 11.957 16.8656 12.2494 17.0524 12.5823C17.4252 13.2474 17.6222 13.2758 21.8443 13.278C24.8313 13.2794 25.8762 13.3234 26.2044 13.4609C26.8127 13.7158 27.6092 14.6454 27.7184 15.2277C27.9524 16.4768 27.8927 16.5957 24.3671 21.8901C20.7642 27.3005 20.6191 27.4649 19.1705 27.7758C18.8052 27.8542 17.1038 27.9184 15.3895 27.9184C10.9857 27.9184 10.5937 27.7865 9.05478 25.7864L8.18932 24.6615V19.1008C8.18932 14.2283 8.21481 13.5303 8.39499 13.4612C9.07987 13.1981 12.5575 8.34375 14.8267 4.48351C15.9739 2.5319 16.2686 2.13331 16.5651 2.13331C16.6427 2.13331 17.027 2.35463 17.4193 2.62511ZM6.04278 19.5248V26.844H4.16456H2.28633V19.5248V12.2056H4.16456H6.04278V19.5248Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-down {display: inline-block; width: 20px; height: 20px; background: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6387 29.763C15.3213 29.4526 15.7007 29.0006 16.5919 27.4355C17.9431 25.063 20.3585 21.4124 21.5865 19.8869C21.8914 19.508 21.9126 19.5025 22.2216 19.719C22.4994 19.9139 22.9819 19.9432 25.9175 19.9432C29.0417 19.9432 29.3175 19.9239 29.6105 19.6865L29.9273 19.4297L29.9636 10.5468L30 1.66368L29.605 1.2683L29.2101 0.872934H25.9025H22.595L22.1981 1.27018L21.8013 1.66744L21.1016 1.13481C20.7169 0.841911 20.07 0.466685 19.6641 0.301096C18.9512 0.0102084 18.7768 1.22954e-06 14.499 1.22954e-06H10.0718L9.19975 0.417129C7.67289 1.14757 7.26571 1.63131 3.79261 6.84124C2.01702 9.50476 0.455411 11.9699 0.322057 12.3194C-0.455796 14.3601 0.212985 16.7317 1.92257 17.9946C3.10411 18.8674 3.84131 19.0031 7.40269 19.0031C9.12891 19.0031 10.5425 19.0485 10.5439 19.1038C10.5452 19.1591 10.2312 20.6411 9.84599 22.3969C9.18553 25.4074 9.15454 25.6321 9.30291 26.3403C9.38945 26.7532 9.61671 27.3582 9.80789 27.6849C10.1902 28.3379 11.3802 29.3605 12.2183 29.7563C12.9013 30.0787 13.9382 30.0815 14.6387 29.763ZM12.5807 27.3749C11.8153 26.8472 11.4821 26.3588 11.4778 25.7582C11.4763 25.5514 11.8515 23.6707 12.3117 21.579C13.0897 18.043 13.1344 17.7506 12.9476 17.4177C12.5748 16.7526 12.3778 16.7242 8.15572 16.722C5.16868 16.7206 4.12385 16.6766 3.79556 16.5391C3.18729 16.2842 2.39078 15.3546 2.28158 14.7723C2.04761 13.5232 2.10731 13.4043 5.63287 8.10995C9.23584 2.69951 9.38086 2.53513 10.8295 2.22423C11.1948 2.1458 12.8962 2.08161 14.6105 2.08161C19.0143 2.08161 19.4063 2.21349 20.9452 4.21358L21.8107 5.33845V10.8992C21.8107 15.7717 21.7852 16.4697 21.605 16.5388C20.9201 16.8019 17.4425 21.6562 15.1733 25.5165C14.0261 27.4681 13.7314 27.8667 13.4349 27.8667C13.3573 27.8667 12.973 27.6454 12.5807 27.3749ZM23.9572 10.4752V3.15599H25.8354H27.7137V10.4752V17.7944H25.8354H23.9572V10.4752Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-share {display: inline-block; width: 20px; height: 20px; background: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.7897 3.51867L15.7586 7.0756L15.348 7.10656C14.2922 7.18631 12.6002 7.53487 11.5181 7.89575C8.96472 8.74722 6.91164 10.0361 4.90113 12.0502C2.304 14.6518 0.814655 17.5121 0.213731 21.0522C0.00564207 22.2777 -0.0181692 22.8806 0.00927879 26.2198L0.0404803 30L1.25558 27.1885C2.5691 24.1494 3.24861 22.9862 4.64659 21.384C7.22353 18.4305 11.0188 16.478 15.1428 15.9841L15.8172 15.9034V19.4451C15.8172 21.6381 15.8598 22.972 15.929 22.9477C16.0835 22.8938 29.9991 11.5464 30 11.4737C30.0008 11.409 16.074 0.0620186 15.9179 0.000210993C15.8644 -0.021017 15.8067 1.56229 15.7897 3.51867ZM22.4821 7.65532C25.0097 9.71585 27.078 11.4343 27.078 11.474C27.078 11.5138 24.9666 13.2704 22.386 15.3778L17.694 19.2094V16.6316V14.0539L16.8436 14.0548C11.2627 14.0611 5.70076 16.8268 2.39256 21.2406C2.20993 21.4843 2.03691 21.66 2.00794 21.6311C1.92337 21.5466 2.19797 20.2885 2.52253 19.2729C3.21917 17.0935 4.33117 15.2382 5.96057 13.5371C8.69705 10.6804 12.1883 9.0898 16.0812 8.92631L17.694 8.85864V6.3447C17.694 4.96206 17.7372 3.84835 17.7901 3.86993C17.8429 3.89139 19.9543 5.5948 22.4821 7.65532Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info {display: flex; flex-direction: row; align-items: center; font-size: 1.2rem; border-bottom: 1px solid #ddd; padding: 0 11px 12px 11px;}
.board-read-info .bar {color: #ccc; font-size: 10px; margin: 0 10px;}
.board-read-info .right {margin-left: auto;}
.board-read-info .right > * ~ * {margin-left: 15px;}
.board-read-content {padding: 20px 10px; font-size: 1.3rem; white-space: pre-line;}


.board-read-tit.type2 {background: #fff; border: none; font-weight: bold; font-size: 20px;}
.board-read-info.type2 {flex-wrap: wrap; color: #777; position: relative;}
.board-read-info.type2 .user .thumb {display: inline-block; width: 30px; height: 30px; border-radius: 100%; margin-right: 5px; overflow: hidden;}
.board-read-info.type2 .user .thumb img{width:100%;height: 100%;}
.board-read-info.type2 .user .thumb:empty {background: #ddd; border: 1px solid #ccc;}
.board-read-info.type2 .time {display: flex; align-items: center;}
.board-read-info.type2 .time i {display: inline-block; margin-right: 5px; width: 14px; height: 14px; background: url("data: image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6774 0.0780474C6.78531 1.05258 0.936164 7.05529 0.0756001 15.063C-0.269944 18.2799 0.583184 22.0006 2.345 24.96C6.4298 31.8215 14.8487 34.7572 22.3397 31.9322C30.1169 28.9994 34.548 20.5403 32.5023 12.5313C30.6688 5.35291 24.5653 0.375732 17.1563 0.0170779C16.3716 -0.0208526 15.2561 0.00654135 14.6774 0.0780474ZM19.8433 3.51862C24.5362 4.7102 28.2497 8.43765 29.4927 13.2041C29.8003 14.3835 29.8591 14.9132 29.8591 16.5055C29.8591 18.0977 29.8003 18.6275 29.4927 19.8068C28.2458 24.5883 24.5732 28.2659 19.7981 29.5145C17.788 30.0401 15.2145 30.0401 13.2043 29.5145C8.43025 28.266 4.76437 24.5962 3.50747 19.8068C2.97983 17.7961 2.97885 15.2181 3.50509 13.2141C4.91981 7.82669 9.30948 3.93755 14.8528 3.15997C16.1689 2.97552 18.3102 3.12935 19.8433 3.51862ZM15.7665 6.18907C14.981 6.61586 14.958 6.78121 14.958 12.01C14.958 15.8796 14.9963 16.8733 15.1575 17.1798C15.491 17.8139 20.1771 22.374 20.6048 22.4806C21.7067 22.7551 22.7428 21.7174 22.4681 20.6146C22.4092 20.3786 21.5302 19.3792 20.2081 18.0453L18.0445 15.8623V11.5409C18.0445 6.79526 18.014 6.59999 17.2073 6.18233C16.6955 5.91738 16.263 5.91934 15.7665 6.18907Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: 100% 100%;}
.board-read-info.type2 .info .label {margin-right: 5px;}
.board-read-info.type2 .info .num {font-weight: 500;}
.board-read-info.type2 > * {position: relative; display: inline-block; white-space: nowrap;}
.board-read-info.type2 > * ~ * {padding-left: 20px;}
.board-read-info.type2 > * ~ *:not(.right):before {content: ''; display: block; position: absolute; top: 50%; left: 10px; transform: translateY(-50%); -webkit-transform: translateY(-50%); width: 2px; height: 2px; border-radius: 100%; background: #333;}

@media screen and (max-width: 1024px) {
    .board-read-info.type2 {font-size: 1rem;}
    .board-read-info.type2 .user {width: 100%; margin-bottom: 5px;}
    .board-read-info.type2 .user + span {padding-left: 0;}
    .board-read-info.type2 .user + span:before {display: none;}
    .board-read-info.type2 .m-patr {position: absolute; top: 0; right: 0;}
}

/* 이전 글 다음 글 */
.data-prev-next {margin-top: 20px; color: #222;}
.data-prev-next table {width: 100%; border-top: 1px solid #dbdbdb}
.data-prev-next th {padding: 10px 10px; text-align: center; font-size: 14px; border-bottom: 1px solid #dbdbdb;}
.data-prev-next td {padding: 11px 20px; font-size: 14px; border-bottom: 1px solid #cccccc; text-align: left;}
.data-prev-next th span {display: inline-block; position: relative; padding-right: 16px;}
.data-prev-next th span:after {content: ''; display: inline-block; position: absolute; top: 9px; right: 0; width: 10px; height: 6px;}
.data-prev-next .next th span:after {background-position: 0 -6px;}

@media all and (max-width: 1260px) {
    .data-prev-next th {font-size: 0.875rem;}
    .data-prev-next td {font-size: 0.875rem;}
}


.recomend-gage {margin-top: 50px;}
.recomend-gage dl ~ dl {margin-top: 30px;}
.recomend-gage dl {display: flex; flex-direction: row; align-items: center;}
.recomend-gage dl dt {font-weight: bold; color: #000; font-size: 20px; margin-right: 30px;}
.recomend-gage dl dt b {vertical-align: baseline; color: #ff0000;}
.recomend-gage dl dd {flex: 1;}
.recomend-gage dl dd .recomend-rate {position: relative; height: 50px; border-radius: 5px; display: flex; flex-direction: row; align-items: center; overflow: hidden;}
.recomend-gage dl dd .recomend-rate > * {height: 100%; display: flex; justify-content: center; align-items: center; color: #fff; font-size: 1rem;}
.recomend-gage dl dd .recomend-rate .good {background: #46C3BC;}
.recomend-gage dl dd .recomend-rate .soso {background: #f99700;}
.recomend-gage dl dd .recomend-rate .bad {background: #FE3A4A;}

@media all and (max-width: 768px) {
    .recomend-gage dl {display: block;}
    .recomend-gage dl dt {margin-bottom: 10px;}
}


/* 게시판 버튼 유형 */
.btn-area {padding-top: 20px; text-align: center; display: flex; align-items: center;}
.btn-area  [class*=btn-type] ~ [class*=btn-type] {margin-left: 5px;}
.btn-area .right {margin-left: auto;}
.btn-area.line {margin-top: 30px; padding-top: 20px;}
.btn-area.line {border-top: 1px solid #e4e4e4;}
.btn-type {display: inline-flex; cursor: pointer; height: 38px; line-height: 38px; padding: 0 20px; text-align: center; font-size: 1.3rem; border-radius: 2px; vertical-align: middle; align-items: center;}
.btn-type i:first-child {margin-right: 5px;}
.btn-type.btn-yellow {border: 1px solid #f2d42a; color: #6a6a6a; background: #ffdf2c;}
.btn-type.btn-red {border: 1px solid #e5001f; color: #fff; background: #f72e3e;}
.btn-type.btn-white {border: 1px solid #d8d8d8; color: #6a6a6a; background: #fff;}
.btn-type.btn-red:focus {background: #bb2222;}
.btn-type.btn-white:focus {background: #cccccc;}
.btn-type.btn-yellow:focus {background: #e7ca27;}
.btn-type.btn-darkgray {border: 1px solid #333; color: #fff; background: #333333;}
.btn-type.btn-favorite {border: 1px solid #333; color: #fff; background: #333333;}
.btn-type.btn-favorite .ico-favorite {display: inline-block; width: 18px; height: 16px; background: url("data: image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath d='M16.467 1.65187C14.449 -0.346899 11.164 -0.346899 9.146 1.65187L9.073 1.72532L8.83835 1.49449C6.82039 -0.499036 3.54056 -0.499036 1.5226 1.49973C0.542294 2.47027 0 3.76081 0 5.14054C0 6.51502 0.542294 7.80557 1.5226 8.78134L8.61935 15.8111C8.7445 15.9318 8.90614 16 9.07821 16C9.25029 16 9.41194 15.9318 9.53708 15.8111L16.4774 8.93873C17.4577 7.9682 18 6.67241 18 5.29792C18 3.92344 17.4577 2.62765 16.4774 1.65712L16.467 1.65187Z' fill='%23E9573E'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.btn-type.btn-favorite .num {margin-left: 5px;}
.btn-type.btn-popup {margin-top: 50px;}

@media screen and (max-width: 1260px) {
    .btn-type {font-size: 1rem;}
}


.reple-list-wrap .title {font-size: 1.667rem; font-weight: 700;}
.reple-list-wrap .title .num {margin-left: 5px;}
.reple-list-wrap .reple-regist .regist-input {margin-top: 15px; display: flex; align-items: center;}
.reple-list-wrap .reple-regist .regist-input input {flex: 1; height: 50px; padding: 0 15px; font-size: 1.3rem; width: 100%; border: 1px solid #aaa;}
.reple-list-wrap .reple-regist .regist-input .btn-regist {height: 50px; padding: 0 20px; margin-left: 10px; background: #46C3BC; border-radius: 5px; color: #fff;  font-size: 1.1rem;}
.reple-list-wrap .reple-list .reple-list {border-top: 1px solid #eee; margin-top: 20px; background: #f9f9f9;}
.reple-list-wrap .reple-list li {padding: 20px; border-bottom: 1px solid #EEEEEE;}
.reple-list-wrap .reple-list li .from {font-size: 1.1rem; display: flex; align-items: center;}
.reple-list-wrap .reple-list li .from > * {position: relative;}
.reple-list-wrap .reple-list li .from > * ~ * {padding-left: 10px;}
.reple-list-wrap .reple-list li .from > * ~ *:before {content: ''; position: absolute; top: 50%; left: 5px; display: block; width: 2px; height: 2px; border-radius: 100%; background: #95969B; transform: translateY(-50%);}
.reple-list-wrap .reple-list li .from .name {color: #5DB1CB;}
.reple-list-wrap .reple-list li .txt {color: #222; margin-top: 10px; font-size: 1.1rem;}
.reple-list-wrap .reple-list li .info {margin-top: 20px; display: flex; align-items: center; font-size: 0.9rem;}
.reple-list-wrap .reple-list li .info > * ~ * {padding-left: 18px;}
.reple-list-wrap .reple-list li .info > * {color: #95969B; font-size: 0.9rem; display: flex; align-items: center;}
.reple-list-wrap .reple-list li .info > *  [class*=ico-] {margin-right: 5px; background-size: 100% 100%; width: 13px; height: 13px; display: inline-block; background-repeat: no-repeat; background-position: 0 0;}
.reple-list-wrap .reple-list li .info > * .ico-time {background-image: url("data: image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6774 0.0780474C6.7853 1.05258 0.936164 7.05529 0.0756001 15.063C-0.269944 18.2799 0.583184 22.0006 2.345 24.96C6.4298 31.8215 14.8487 34.7572 22.3397 31.9322C30.1169 28.9994 34.548 20.5403 32.5023 12.5313C30.6688 5.35291 24.5653 0.375732 17.1563 0.0170779C16.3716 -0.0208526 15.2561 0.00654135 14.6774 0.0780474ZM19.8433 3.51862C24.5362 4.7102 28.2497 8.43765 29.4927 13.2041C29.8003 14.3835 29.8591 14.9132 29.8591 16.5055C29.8591 18.0977 29.8003 18.6275 29.4927 19.8068C28.2458 24.5883 24.5732 28.2659 19.7981 29.5145C17.788 30.0401 15.2145 30.0401 13.2043 29.5145C8.43025 28.266 4.76437 24.5962 3.50747 19.8068C2.97983 17.7961 2.97885 15.2181 3.50509 13.2141C4.91981 7.82669 9.30948 3.93755 14.8528 3.15997C16.1689 2.97552 18.3102 3.12935 19.8433 3.51862ZM15.7665 6.18907C14.981 6.61586 14.958 6.78121 14.958 12.01C14.958 15.8796 14.9963 16.8733 15.1575 17.1798C15.491 17.8139 20.1771 22.374 20.6048 22.4806C21.7067 22.7551 22.7428 21.7174 22.4681 20.6146C22.4092 20.3786 21.5302 19.3792 20.2081 18.0453L18.0445 15.8623V11.5409C18.0445 6.79526 18.014 6.59999 17.2073 6.18233C16.6955 5.91738 16.263 5.91934 15.7665 6.18907Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-up {background-image: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.3613 0.237031C14.6787 0.547392 14.2993 0.999437 13.4081 2.56454C12.0569 4.93703 9.64146 8.58764 8.4135 10.1131C8.10856 10.492 8.08736 10.4975 7.77839 10.281C7.50055 10.0861 7.01812 10.0568 4.08245 10.0568C0.958296 10.0568 0.682466 10.0761 0.389463 10.3135L0.0727141 10.5703L0.036357 19.4532L0 28.3363L0.394964 28.7317L0.789927 29.1271H4.09748H7.40503L7.80187 28.7298L8.19871 28.3326L8.89835 28.8652C9.28312 29.1581 9.93003 29.5333 10.3359 29.6989C11.0488 29.9898 11.2232 30 15.501 30H19.9282L20.8003 29.5829C22.3271 28.8524 22.7343 28.3687 26.2074 23.1588C27.983 20.4952 29.5446 18.0301 29.6779 17.6806C30.4558 15.6399 29.787 13.2683 28.0774 12.0054C26.8959 11.1326 26.1587 10.9969 22.5973 10.9969C20.8711 10.9969 19.4575 10.9515 19.4561 10.8962C19.4548 10.8409 19.7688 9.35891 20.154 7.6031C20.8145 4.59256 20.8455 4.36788 20.6971 3.65973C20.6106 3.24677 20.3833 2.64176 20.1921 2.31515C19.8098 1.66206 18.6198 0.63952 17.7817 0.243746C17.0987 -0.0787017 16.0618 -0.081522 15.3613 0.237031ZM17.4193 2.62511C18.1847 3.15276 18.5179 3.6412 18.5222 4.24178C18.5237 4.44859 18.1485 6.32929 17.6883 8.42097C16.9103 11.957 16.8656 12.2494 17.0524 12.5823C17.4252 13.2474 17.6222 13.2758 21.8443 13.278C24.8313 13.2794 25.8762 13.3234 26.2044 13.4609C26.8127 13.7158 27.6092 14.6454 27.7184 15.2277C27.9524 16.4768 27.8927 16.5957 24.3671 21.8901C20.7642 27.3005 20.6191 27.4649 19.1705 27.7758C18.8052 27.8542 17.1038 27.9184 15.3895 27.9184C10.9857 27.9184 10.5937 27.7865 9.05478 25.7864L8.18932 24.6615V19.1008C8.18932 14.2283 8.21481 13.5303 8.39499 13.4612C9.07987 13.1981 12.5575 8.34375 14.8267 4.48351C15.9739 2.5319 16.2686 2.13331 16.5651 2.13331C16.6427 2.13331 17.027 2.35463 17.4193 2.62511ZM6.04278 19.5248V26.844H4.16456H2.28633V19.5248V12.2056H4.16456H6.04278V19.5248Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-down {background-image: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6387 29.763C15.3213 29.4526 15.7007 29.0006 16.5919 27.4355C17.9431 25.063 20.3585 21.4124 21.5865 19.8869C21.8914 19.508 21.9126 19.5025 22.2216 19.719C22.4994 19.9139 22.9819 19.9432 25.9175 19.9432C29.0417 19.9432 29.3175 19.9239 29.6105 19.6865L29.9273 19.4297L29.9636 10.5468L30 1.66368L29.605 1.2683L29.2101 0.872934H25.9025H22.595L22.1981 1.27018L21.8013 1.66744L21.1016 1.13481C20.7169 0.841911 20.07 0.466685 19.6641 0.301096C18.9512 0.0102084 18.7768 1.22954e-06 14.499 1.22954e-06H10.0718L9.19975 0.417129C7.67289 1.14757 7.26571 1.63131 3.79261 6.84124C2.01702 9.50476 0.455411 11.9699 0.322057 12.3194C-0.455796 14.3601 0.212985 16.7317 1.92257 17.9946C3.10411 18.8674 3.84131 19.0031 7.40269 19.0031C9.12891 19.0031 10.5425 19.0485 10.5439 19.1038C10.5452 19.1591 10.2312 20.6411 9.84599 22.3969C9.18553 25.4074 9.15454 25.6321 9.30291 26.3403C9.38945 26.7532 9.61671 27.3582 9.80789 27.6849C10.1902 28.3379 11.3802 29.3605 12.2183 29.7563C12.9013 30.0787 13.9382 30.0815 14.6387 29.763ZM12.5807 27.3749C11.8153 26.8472 11.4821 26.3588 11.4778 25.7582C11.4763 25.5514 11.8515 23.6707 12.3117 21.579C13.0897 18.043 13.1344 17.7506 12.9476 17.4177C12.5748 16.7526 12.3778 16.7242 8.15572 16.722C5.16868 16.7206 4.12385 16.6766 3.79556 16.5391C3.18729 16.2842 2.39078 15.3546 2.28158 14.7723C2.04761 13.5232 2.10731 13.4043 5.63287 8.10995C9.23584 2.69951 9.38086 2.53513 10.8295 2.22423C11.1948 2.1458 12.8962 2.08161 14.6105 2.08161C19.0143 2.08161 19.4063 2.21349 20.9452 4.21358L21.8107 5.33845V10.8992C21.8107 15.7717 21.7852 16.4697 21.605 16.5388C20.9201 16.8019 17.4425 21.6562 15.1733 25.5165C14.0261 27.4681 13.7314 27.8667 13.4349 27.8667C13.3573 27.8667 12.973 27.6454 12.5807 27.3749ZM23.9572 10.4752V3.15599H25.8354H27.7137V10.4752V17.7944H25.8354H23.9572V10.4752Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-reple {background-image: url("data: image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http: //www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6037 0.0350711C13.507 0.0581542 13.0325 0.140293 12.5491 0.217627C9.98691 0.627851 7.02794 2.03358 5.09387 3.75919C2.605 5.97998 1.14045 8.42175 0.332069 11.6983C0.0965508 12.6525 0.0844819 13.0405 0.0432369 20.9695L0 29.2447L0.366401 29.611C0.954611 30.1992 1.43244 30.1319 2.35811 29.3302C3.273 28.5379 4.06767 28.1496 5.15691 27.9629C6.25143 27.7753 7.15964 27.9322 8.52061 28.5443C9.90911 29.1687 11.2746 29.5891 12.648 29.815C14.1181 30.0569 16.8514 29.9723 18.3021 29.6401C24.1041 28.3117 28.434 23.8122 29.7429 17.7513C30.0673 16.2497 30.0261 13.0511 29.6636 11.5811C29.1458 9.48111 28.3532 7.76382 27.1508 6.13675C24.9285 3.12997 21.7429 1.04967 18.1545 0.262035C17.3768 0.0913138 14.0608 -0.0741344 13.6037 0.0350711ZM17.6571 2.60398C21.8392 3.50047 25.4104 6.57873 26.8525 10.5299C27.4189 12.0819 27.5791 13.001 27.5872 14.7448C27.6038 18.3583 26.2919 21.5208 23.7196 24.0681C20.0132 27.7386 14.4607 28.6239 9.40984 26.3496C7.92759 25.6822 6.99958 25.4897 5.57733 25.5547C4.50356 25.6038 3.60355 25.8201 2.56012 26.2797C2.36631 26.3651 2.35507 26.0424 2.35507 20.4079C2.35507 17.0493 2.40733 14.0287 2.47482 13.4908C2.90824 10.0341 4.61428 7.03957 7.3054 5.01165C8.90212 3.80852 11.0457 2.86445 12.8421 2.57316C13.2932 2.50005 13.7941 2.41767 13.9552 2.39025C14.5199 2.29394 16.8339 2.42752 17.6571 2.60398ZM9.50674 13.6076C8.67785 13.8957 8.31825 14.9828 8.79374 15.7625C9.08234 16.2359 9.43514 16.4242 10.033 16.4242C10.8541 16.4242 11.4946 15.791 11.4946 14.9791C11.4946 13.9601 10.4888 13.2662 9.50674 13.6076ZM14.5452 13.6076C13.2843 14.046 13.3294 15.9515 14.6105 16.3601C15.8697 16.7618 16.97 15.4609 16.3632 14.2877C16.0366 13.656 15.2512 13.3621 14.5452 13.6076ZM19.5836 13.6076C18.3227 14.046 18.3679 15.9515 19.6489 16.3601C20.9082 16.7618 22.0084 15.4609 21.4017 14.2877C21.075 13.656 20.2896 13.3621 19.5836 13.6076Z' fill='%23999999'/%3E%3C/svg%3E%0A");}

@media screen and (max-width: 1260px) {
    .reple-list-wrap .title {font-size: 1.25rem;}
    .reple-list-wrap .reple-regist .regist-input input {font-size: 1rem;}
    .reple-list-wrap .reple-list li .from {font-size: 0.9rem;}
    .reple-list-wrap .reple-list li .txt {font-size: 0.9rem;}
    .reple-list-wrap .reple-list li .info {font-size: 0.7rem;}
    .reple-list-wrap .reple-list li .info > * {font-size: 0.7rem;}
}

`