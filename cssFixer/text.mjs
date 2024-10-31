export const text = `
@charset "utf-8";

/* =============================================================================
   templates
============================================================================= */
/* 템플릿 제목 */
.tpl-tit {margin:30px 0;padding:10px;font-size:1.5rem;background:#fdd600;}
@media only screen and (max-width:1260px) {
    .tpl-tit {font-size:1.2rem;margin-top:10px;}
}
@media only screen and (max-width:768px) {
    .tpl-tit {font-size:1.5rem}
}

.greeting, .greeting2, .greeting3, .greeting4, .history, .history2, .explanation, .explanation2, .explanation2, .introduction, .introduction2 {font-size:14px;}

/* 인사말 */
.greeting .txt {padding-top:30px;font-size:1.5rem;line-height:1.5em;text-align:justify;}
.greeting .txt p {margin-top:24px;text-align:justify;line-height:1.5em;}
.greeting .txt p:first-child {margin-top:0;}
.greeting .ceo {display:flex;align-items:center;width:350px;border:1px solid #ccc;padding:10px;margin-top:20px;}
.greeting .ceo .img {display:flex;justify-content:center;align-items:center;margin-right:15px;}
.greeting .ceo .info {flex:1;}
.greeting .ceo .info .name {font-size:1.5rem;font-weight:bold;border-bottom:1px solid #666;padding-bottom:8px;display:block;}
.greeting .ceo .info .desc {padding-top:8px;}
.greeting .ceo .info .desc ul li {position:relative;font-size:1.2rem;padding-left:10px;}
.greeting .ceo .info .desc ul li:before {content:"";display:block;width:5px;height:1px;background:#333;position:absolute;top:10px;left:0;}
@media only screen and (max-width:1260px) {
    .greeting .theme {font-size:2.5rem;}
    .greeting .theme .small-font {font-size:2rem;}
    .greeting .txt {padding-top:23px;font-size:1.2rem;line-height:1.2em;}
    .greeting .ceo .info .desc ul li {font-size:1rem;}
}

@media only screen and (max-width:768px) {
img {max-width:100%;}
    .greeting .txt {padding-top:23px;font-size:1.5rem;line-height:1.5em;}
    .greeting .txt p {margin-top:18px;}
    .greeting .ceo .info .desc ul li {font-size:1.3rem;}
    .greeting2 .txt {padding-top: 23px;font-size: 1.2rem;line-height: 1.5em;}
    .greeting3 .article {border-left: none;padding-left: 0;}
    .greeting3 .txt {padding-top: 23px;font-size: 1.2rem;line-height: 1.5em;}
    .greeting4 .txt {padding-top: 23px;font-size: 1.2rem;line-height: 1.5em;}
}

.greeting2 .tit {font-weight:bold;font-size:1.8rem;color:#000;font-style:italic;}
.greeting2 .tit ~ .tit {margin-top:40px;}
.greeting2 .txt {margin-top:25px;font-size:1.5rem;line-height:1.5em;text-align:justify;background:#fff url("/storage/2_greeting2.png") 0 0 repeat;}
.greeting2 .txt .img {float:right;margin-left:20px;}
.greeting2 .txt p {margin-top:24px;text-align:justify;line-height:1.5em;}
.greeting2 .txt p:first-child {margin-top:0;}

@media only screen and (max-width:1260px) {
    .greeting2 .tit {font-size:2rem;}
    .greeting2 .txt {font-size:1.2rem;}
}
@media only screen and (max-width:768px) {
    .greeting2 .tit {font-size:1.8rem;}
    .greeting2 .txt {margin-top:19px;font-size:1.5rem;line-height:1.5em;text-align:justify;}
    .greeting2 .txt .img {margin-right:8px;}
}

.greeting3 .img {float:left;padding-right:34px;}
.greeting3 .article {overflow:auto;padding-left:34px;border-left:1px solid #e4e1dc;}
.greeting3 .txt {font-size:1.5rem;line-height:1.5em;text-align:justify;} /* d왜 여긴 line-height:2rem로 해야 1.5rem 처럼 보이지?? */
.greeting3 .txt p {margin-top:24px;text-align:justify;line-height:1.5em;}
.greeting3 .txt p:first-child {margin-top:0;}
.greeting3 .sign {text-align:right;margin-top:24px;}
@media only screen and (max-width:1260px) {
    .greeting3 .theme .tit {font-size:2rem;}
    .greeting3 .theme p {font-size:1.3rem;}
    .greeting3 .txt {font-size:1.2rem;}
}
@media only screen and (max-width:768px) {
    .greeting3 .img {display:none;padding-right:26px;}
    .greeting3 .theme .tit {font-size:2rem;}
    .greeting3 .theme p {font-size:1.5rem;}
    .greeting3 .txt {font-size:1.5rem;}
    .greeting3 .sign {margin-top:18px;}
    .greeting3 .sign {margin-top:18px;}
    .greeting3 .sign  img {height:30px;width:auto;}
}

.greeting4 .img img {max-height:100%;}
.greeting4 .img {height:160px;text-align:right;}
.greeting4 .tit {padding-bottom:25px;line-height:1.2em;font-size:24px;color:#c4c4c4;font-weight:bold;}
.greeting4 .tit strong {font-size:26px;color:#1382b1;}
.greeting4:after {display:block;content:'';clear:both;}
.greeting4 .left {float:left;width:50%;box-sizing:border-box;padding-right:20px;}
.greeting4 .right {float:right;width:50%;box-sizing:border-box;padding-left:20px;}
.greeting4 .txt {padding-top:30px;font-size:1.5rem;line-height:1.5em;text-align:justify;}
.greeting4 .txt p {margin-top:24px;text-align:justify;line-height:1.5em;}
.greeting4 .txt p:first-child {margin-top:0;}
.greeting4 .sign {clear:both;text-align:right;padding-top:24px;}
@media only screen and (max-width:1260px) {
    .greeting4 .tit {font-size:1.5rem;}
    .greeting4 .tit strong {font-size:1.625rem;}
    .greeting .txt {padding-top:23px;font-size:1.2rem;line-height:1.2em;}
}
@media only screen and (max-width:768px) {
img {max-width:100%;}
    .greeting4 .tit {padding-bottom:19px;}
    .greeting4 .image {height:120px;}
    .greeting4 .left {padding-right:15px;}
    .greeting4 .right {padding-left:15px;}
    .greeting4 .txt {padding-top:23px;font-size:1.5rem;line-height:1.5em;}
    .greeting4 .txt p {margin-top:18px;}
    .greeting4 .sign {padding-top:18px;}
    .greeting4 .left ,
    .greeting4 .right {float:none;width:100%;padding:0 0;}
    .greeting4 .right {margin-top:20px;}
}

/* 연혁 */
.history2 .img {text-align:center;}
.history2 .data-list {display:flex;}
.history2 .data-list ul {display:table;font-size:1.3rem;flex:1;}
.history2 .data-list ul > li {display:table-row;width:100%;}
.history2 .data-list ul > li > .cell {display:table-cell;vertical-align:top;}
.history2 .data-list > ul > li > .cell {padding:30px 0;}
.history2 .data-list .innder-data .cell {padding:3px 0;color:#596368;vertical-align:top;}
.history2 .data-list .innder-data .date {padding:3px 0;padding-right:12px;color:#3c6a81;white-space:nowrap;font-weight:bold;vertical-align:top;}
.history2 .data-list .innder-data .date strong {vertical-align:top;}
.history2 .data-list .innder-data .date strong:before {display:inline-block;content:'';vertical-align:middle;width:3px;height:3px;margin-right:5px;background:#3c6a81;}
.history2 .data-list .year {width:140px;text-align:center;font-size:30px;color:#74a4b5;}
.history2 .data-list .year strong {display:block;line-height:1em;margin-top:6px;}
.history2 .data-list .year strong:last-child {position:relative;padding-top:20px;}
.history2 .data-list .year strong:last-child:after {position:absolute;top:8px;left:50%;content:'';display:block;margin-left:-3px;width :0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #b6d3d7;}
.history2 .data-list .img {margin:20px 0 0 20px;}
@media only screen and (max-width:1260px) {
    .history2 {font-size:1rem;}
    .history2 .data-list .img {display:none;}
    .history2 .data-list ul {font-size:1rem;}
    .history2 .data-list .year {font-size:1.6rem;}
}
@media only screen and (max-width:768px) {
    .history2 .data-list ul {display:block;font-size:1.3rem;}
    .history2 .data-list ul li {display:block;}
    .history2 .data-list ul li .cell {display:block;}
    .history2 .data-list ul li .innder-data li {display:flex;}
    .history2 .data-list ul li .innder-data li .cell:last-child {flex:1;padding-top:4px;}
    .history2 .data-list .year {width:auto;padding:0 0 !important;margin-bottom:15px;text-align:left;display:flex !important;align-items:center;}
    .history2 .data-list .year strong {padding-top:0 !important;}
    .history2 .data-list .year strong ~ strong {padding-left:40px;}
    .history2 .data-list .year strong:after {content:"";display:block;left:18px !important;top:50% !important;transform:translateY(-50%) rotate(90deg);}
    .history2 .data-list .year ~ .cell {padding-top:0;}
}

.history3 {color:#000000;display:flex;}
.history3 .title {width:230px;padding-right:10px;}
.history3 .title .tit {font-size:20px;font-weight:700;}
.history3 .achievements {width:320px;}
.history3 .achievements ul li ~ li {margin-top:30px;}
.history3 .achievements ul li .label {font-size:16px;margin-bottom:5px;}
.history3 .achievements ul li .txt {font-weight:700;font-size:20px;}
.history3 .history {flex:1;}
.history3 .history ul li {display:flex;font-size:16px;}
.history3 .history ul li ~ li {margin-top:7px;}
.history3 .history ul li .year {width:80px;}
.history3 .history ul li .text {flex:1;}
.history3 .history ul li .text .txt ~ .txt {margin-top:5px;}
@media only screen and (max-width:1024px) {
    .history3 {flex-wrap:wrap;}
    .history3 .title {width:100%;margin-bottom:20px;}
    .history3 .title .tit {font-size:1.25rem;}
    .history3 .achievements ul li .label {font-size:1rem;}
    .history3 .achievements ul li .txt {font-size:1.25rem;}
    .history3 .history ul li {font-size:1rem;}
}
@media only screen and (max-width:768px) {
    .history3 {display:block;}
    .history3 .achievements ul li ~ li {margin-top:15px;}
    .history3 .history {margin-top:25px;}
}

/* 설명 */
.explanation .tit-line {margin-top:20px;font-size:1.7rem;color:#0077a2;border-bottom:1px solid #d9d9db;padding-bottom:7px;font-weight:bold;background:url("../static/images/4_e1.png") 0 20% no-repeat;}
.explanation .tit-bg {margin-top:15px;padding:10px;color:#333333;font-size:1.5rem;font-weight:bold;background:#ededef;background:#fcde58 url("../static/images/4_e1_2.png") 10px 8px no-repeat;}
.explanation .txt-ul {position:relative;margin-top:8px;padding-left:25px;font-size:1.4rem;color:#666;}
.explanation .txt-ul:before {content:"";display:block;position:absolute;top:12px;left:12px;width:3px;height:3px;border-radius:3px;background:#0277a3;}
.explanation span,.explanation b, .explanation u, .explanation a {vertical-align:baseline}
.explanation .txt {margin:10px 10px 16px 10px;font-size:1.4rem;color:#666;line-height:1.6em;}
.explanation .txt2 {margin:10px 0 16px;font-size:1.4rem;color:#666;line-height:1.6em;}
.explanation ul.tit-num {margin-top:15px;}
.explanation ul.tit-num li {text-align:justify;}
.explanation ul.tit-num li ~ li {margin-top:20px;}
.explanation ul.tit-num li > b {color:#000;display:block;margin-bottom:10px;font-size:1.5rem;display:flex;align-items:center;}
.explanation ul.tit-num li .num {color:#fff;background:#42ccff;display:inline-block;text-align:center;line-height:33px;height:33px;min-width:33px;padding:0 5px;border-radius:3px;font-size:1.5rem;font-weight:700;font-family:'NanumGothic', sans-serif;letter-spacing:0.5px;transition:all 0.3s ease;margin-right:10px;}
.explanation ul.tit-num li p {margin-top:10px;font-size:1.4rem;text-align:justify;}
.explanation ul.tit-num li p:first-child {margin-top:0;}
.explanation ul.tit-num li p b {color:#000;}
@media only screen and (max-width:768px) {
    .explanation .tit-line {font-size:1rem;}
    .explanation .tit-bg {font-size:0.875rem;}
    .explanation .txt-ul,
    .explanation .txt {font-size:1.3rem;}
    .explanation .txt2 {font-size:1.3rem;}
    .explanation ul.tit-num li .num {font-size:0.875rem;}
    .explanation ul.tit-num {font-size:1rem;}
}

.explanation2 .unit {padding:20px 0 40px 0;border-bottom:1px solid #d8d8d8;}
.explanation2 .unit:after {clear:both;content:'';display:block;}
.explanation2 .unit .img {float:left;padding-right:35px;}
.explanation2 .unit .txt-box {position:relative;}
.explanation2 .unit .txt-box .tit {padding-top:6px;padding-bottom:7px;font-weight:bold;border-bottom:1px solid #ececec;}
.explanation2 .unit .txt-box .tit strong {color:#344b99;font-size:1.7rem;}
.explanation2 .unit .txt-box .tit span {color:#9cbc7d;font-size:1.7rem;}
.explanation2 .unit .txt-box .txt-ico {position:relative;padding-left:13px;margin-top:7px;font-size:1.5rem;color:#666;}
.explanation2 .unit .txt-box .txt-ico:before {content:"";display:block;position:absolute;top:8px;left:0;width:7px;height:7px;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAjVBMVEX///+RuYWTu3SKt2aNummPrZWBtFeGyER7xjh/yDt+xzeCzjp7xTqSxWl+wT5/xjqCyzt8xzZ9xjmByDyJrl6PwmXh/rvn/8Hl/8KAukKRw0iUuWmNuWKOv2SGumWKumaSyVKFu0OHsnp8tU6AxEmFzUd9xkF6v0qFwnWTymR+w0Z6wkKAyUOAxFP////tS93ZAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQflCQIVBRvAu9ZZAAAAPUlEQVQI1wXBhQGAMADAsOLuznAb+v97JKComm6AadmO6/kEYRQnaUZelFXdtIiuH8ZpZlm3/ZAnXPfzfvxOvAQMhN4gQgAAAABJRU5ErkJggg==') no-repeat 0 0;}
.explanation2 .unit .txt-box .txt {margin-top:7px;font-size:1.5rem;color:#666;text-align:justify}
.explanation2 .unit .txt-box .scroll {margin-top:20px;font-size:1.5rem;line-height:1.8rem;max-height:150px;overflow:hidden;overflow-y:auto;}
.explanation2 .unit .txt-box .link {position:absolute;top:2px;right:0;display:inline-flex;height:26px;;line-height:22px;font-size:1.2rem;font-weight:700;color:#fff;padding:4px 20px 4px 14px;border-radius:3px;justify-content:center;align-items:center;background:#ccc url("data:image/svg+xml,%3Csvg width='18' height='30' viewBox='0 0 18 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.24655 0.0935678C0.157905 0.526329 -0.301779 1.67044 0.207227 2.68051C0.281407 2.82773 2.42295 4.98059 6.44426 8.95054L12.5684 14.9964L6.39347 21.0983C0.578074 26.845 0.212582 27.2176 0.11529 27.498C-0.331597 28.7863 0.650225 30.0913 1.99399 29.995C2.76088 29.94 2.2663 30.387 9.87196 22.8757C17.7247 15.1203 17.0831 15.8329 17.0392 14.9166C17.0199 14.5118 16.9863 14.3586 16.8678 14.1351C16.7561 13.9243 15.0527 12.2138 9.82557 7.06322C3.99067 1.31379 2.88726 0.250627 2.64876 0.148108C2.245 -0.0254081 1.6082 -0.0502039 1.24655 0.0935678Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat right 7px top 50%;background-size:auto 10px;}
@media only screen and (max-width:768px) {
    .explanation2 {font-size:1rem;}
    .explanation2 .unit .txt-box .tit strong {font-size:1rem;}
    .explanation2 .unit .txt-box .tit span {font-size:0.875rem;}
    .explanation2 .unit .txt-box .link {font-size:0.813rem;}
}

.explanation3 {position:relative;}
.explanation3 .tit {margin-bottom:10px;margin-top:20px;}
.explanation3 .tit span {color:#333;font-size:1.3rem;font-weight:bold;}
.explanation3 .tit .btn-down {position:absolute;top:0;right:0;display:inline-flex;height:26px;line-height:22px;color:#fff;padding:4px 20px 4px 14px;border-radius:3px;font-size:13px;font-weight:700;justify-content:center;align-items:center;background:#ccc url("data:image/svg+xml,%3Csvg width='18' height='30' viewBox='0 0 18 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.24655 0.0935678C0.157905 0.526329 -0.301779 1.67044 0.207227 2.68051C0.281407 2.82773 2.42295 4.98059 6.44426 8.95054L12.5684 14.9964L6.39347 21.0983C0.578074 26.845 0.212582 27.2176 0.11529 27.498C-0.331597 28.7863 0.650225 30.0913 1.99399 29.995C2.76088 29.94 2.2663 30.387 9.87196 22.8757C17.7247 15.1203 17.0831 15.8329 17.0392 14.9166C17.0199 14.5118 16.9863 14.3586 16.8678 14.1351C16.7561 13.9243 15.0527 12.2138 9.82557 7.06322C3.99067 1.31379 2.88726 0.250627 2.64876 0.148108C2.245 -0.0254081 1.6082 -0.0502039 1.24655 0.0935678Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat right 7px top 50%;background-size:auto 10px;}
.explanation3 .txt {font-size:1.3rem;color:#666;line-height:1.4em;text-align:justify;}
.explanation3 .txt em {font-style:normal;color:#ed8c00;}
.explanation3 .img {margin-top:15px;text-align:center;}
.explanation3 .unit-item {display:table;width:100%;table-layout:fixed;}
.explanation3 .row {display:table-row;}
.explanation3 .cell {display:table-cell;width:50%;padding:0 15px;vertical-align:top;text-align:justify;font-size:1.3rem;color:#7a7a7a;}
.explanation3 .cell:first-child {padding-left:0;}
.explanation3 .cell:last-child {padding-right:0;}
@media only screen and (max-width:1260px) {
    .explanation3 {font-size:1rem;}
    .explanation3 .tit span {font-size:1rem;}
    .explanation3 .tit .btn-down {font-size:1rem;}
    .explanation3 .txt {font-size:1rem;}
    .explanation3 .cell {font-size:1rem;}
}
@media only screen and (max-width:768px) {
    .explanation3 .cell {display:block;width:100%;padding:0 0;margin:0 0 0 0;}
    .explanation3 .cell:last-child {margin-top:15px;}
}

/* 소개 */
.introduction .item-wrap {margin-top:20px;border-radius:4px;}
.introduction .item-wrap.line {border:1px solid #ccc;}
.introduction .item-wrap.line .item-unit {padding:15px;}
.introduction .item-wrap:first-child {margin-top:0;}
.introduction .item-unit {display:flex;flex-direction:row;align-items:flex-start;}
.introduction .item-unit ~ .item-unit {margin-top:15px;}
.introduction .img-box {display:flex;flex-direction:row;flex:1;}
.introduction .info {position:relative;vertical-align:bottom;display:flex;flex-direction:column;align-self:stretch;}
.introduction .info .top {flex:1;font-size:1.3rem;font-weight:bold;color:#6d6d5e;}
.introduction .info .top .box-num {font-style:normal;margin-bottom:5px;}
.introduction .info .bar {content:'';display:inline-block;width:5px;background:#6d6d5e;height:16px;margin-left:4px;vertical-align:middle;}
.introduction .info .bottom {text-align:right;padding-right:15px;}
.introduction .info .bottom em,
.introduction .info .bottom span {display:block;white-space:nowrap;color:#6d6e5e;font-weight:bold;}
.introduction .info .bottom em {font-size:2rem;font-style:normal;margin-bottom:5px;}
.introduction .info .bottom .contact-list li {text-align:right;justify-content:flex-end;}
.introduction .img {flex:1;overflow:hidden;}
.introduction .img img {max-width:100%;height:auto;}
.introduction .resume-list {flex:1;padding-left:20px;min-width:300px;}
.introduction .resume-list li {font-size:1.3rem;text-align:justify;}
.introduction .resume-list li ~ li {margin-top:3px;}
.introduction .tit-bar {height:auto;margin-top:20px;padding:10px 0;color:#fff;background:#c9c9c9;text-align:center;font-size:1.3rem;font-weight:bold;}
.introduction .cell-list {display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:40px}
.introduction .cell-list .cell {flex-basis:350px;}
.introduction .cell-list .cell:empty {padding-left:0;margin-top:0;}
.introduction .item-unit {flex-wrap:wrap;}
.introduction .item-unit .resume-list {display:flex;}
.introduction .item-unit .resume-list ul {flex:1;}
.introduction .item-unit .resume-list ul ~ ul {margin-left:30px;}
@media screen and (max-width:1260px) {
    .introduction {font-size:1rem;}
    .introduction .info .top {font-size:1rem;}
    .introduction .info .top .box-num {font-size:1.5rem;}
    .introduction .info .bottom em {font-size:1.5rem;}
    .introduction .tit-bar {font-size:0.875rem;}
    .introduction .cell-list {grid-template-columns:repeat(2, 1fr);grid-gap:20px}
}
@media screen and (max-width:768px) {
    .introduction .item-wrap .item-unit:not(.type2) {display:block;}
    .introduction .item-wrap .item-unit ~ .item-unit {margin-top:30px;}
    .introduction .resume-list {min-width:0;margin-top:20px;padding-left:80px;}
}
@media screen and (max-width:520px) {
    .introduction .item-wrap .item-unit.type2 {display:block;}
    .introduction .cell-list {display:block;}
    .introduction .cell-list .cell ~ .cell {margin-top:15px;}
    .introduction .img-box .img {max-width:100%;}
    .introduction .resume-list {padding-left:74px;margin-top:20px;}
    .introduction .item-unit .resume-list ul {width:auto;}
}

.introduction2 .box-tit {position:relative;margin-top:50px;padding-left:30px;font-size:20px;font-weight:700;color:#333;padding-left:25px;margin-bottom:15px;}
.introduction2 .box-tit:first-child {margin-top:0;}
.introduction2 .box-tit:before {content:"";display:block;width:18px;height:18px;position:absolute;top:3px;left:0;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAByFBMVEX///+vIGKwHWOuH1+wH2CuH2GvH2SvIF6uHV6uHmOtHmCwH2KrH1ysIF+vHmGtIGKtIWCtHWKvIGCsH2GtHl6sImCvHGOvH2euHWisIVquH12rI2GuHWKwIF13Axp0AhlyAhhzAxl0Bxx0Aht4AhxzASLJKGzIJWbKKWzMJ2nMJ2uuIWWwHWGwH2RzARt2BBt2BB12ARt3BR5wBRlyBRrHJW7JKmrJJ3DIKWzJKG6wIF6sH2SsH2N2AyBwBhx4Ahp0BRhzBhlzBhvMKGfKJ2bLJW3KJ2qsIWJyABd4BBlzAhZyAxZ1Axp4ABlxAyDJJWzIJnHLJ2zGKWyvHmOwIWGvHl9zAxt1BR11AiF0BRZtAhZ4BBt2Bh7IJ2rHKGjIJ2utHlyuImFzBxdyAxR0AxdxBx3LKGvJKGvLJmpxBBt1Bhl3BR94AyB2BB7KKW3KJWrKKmqrHmCtIV6wIlx0AyF3ARd0AxV1Bhd2AhdzAxx2AiXNKGTHKGrLJ27HJmrIKWvIJm/IKG7JKmzMJnDFKGvKJmvMKG3KJ2jKJm/JKWnLKGnNKG3JKW/IJGvHK2zGKmvKJWnJJmfLK2vJKm3HKGvNKm3IJWj///8Xy27GAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAHdElNRQflBgQAAAnzo/rCAAABHUlEQVQY02NghAImZhZWZgYwYIMCRnYOTiaIEBcUcPPw8vFDhASgQJBRSFgEIiQqJs4vIcnEySYqJCUN1SjDKcsjJ6+gqKSsoqqmrqGpxcDMr62jq6eob2BoZGxiamZuYclgxWXNamOrLGdn7+Do5Ozi6qbB4M4vKCXg4enlrezj6+cfEBAYxBAcEsrBGBYeEWkYFR0TG6cZr8agm8AslJiUbJQSFpOqnJYeGJjBwMoczCmYmaWQnZMSmZuXX2ARz1BYJMVYXFJaVl6hWFlVXVObVgdxnGZsfUOjWnp6XqNlfRpEKL2pubE2Pza9pbXNshUq1N7R2ZWRZtHd0xsEVWXRZ6nW76YWOKE+zQIqVDNx0mS1QIspU6d1pXcCAOqMQncAZIAUAAAAAElFTkSuQmCC') no-repeat 0 0;background-size:auto 100%;}
.introduction2 .item-wrap:first-child {margin-top:0;}
.introduction2 .item-unit ~ .item-unit {margin-top:10px;}
.introduction2 .item-unit .row {display:flex;}
.introduction2 .item-unit .row ~ .row {margin-top:10px;}
.introduction2 .item-unit.noline {border-spacing:0;}
.introduction2 .item-unit.noline .cell {border:none;padding:0 0;}
.introduction2 .cell {flex:1;vertical-align:top;}
.introduction2 .cell.line {padding:15px 12px;border:1px solid #cccccc;}
.introduction2 .cell ~ .cell {margin-left:10px;}
.introduction2 .item-unit .img {float:left;padding-right:24px;max-width:50%;}
.introduction2 .resume-list {overflow:hidden;}
.introduction2 .resume-list .tit {font-size:18px;color:#000000;font-weight:bold;margin-bottom:10px;line-height:1;}
.introduction2 .resume-list .tit strong {color:#67b428;line-height:1;display:inline-block;}
.introduction2 .resume-list .tit span {line-height:1;display:inline-block;margin-left:3px;}
.introduction2 .resume-list .text {font-size:15px;margin-bottom:15px;}
.introduction2 .resume-list ul li {padding:3px 0;color:#000;}
.introduction2 .resume-list ul.bullet li {position:relative;padding-left:10px;}
.introduction2 .resume-list ul.bullet li:before {content:"";display:inline-block;width:3px;height:3px;background:#666;position:absolute;top:12px;left:0;}
.introduction2 .resume-list .txt {clear:both;padding-top:10px;text-align:justify;}
.introduction2 .resume-list .btn {margin-top:10px;}
.introduction2 .resume-list .btn a {display:inline-flex;height:30px;line-height:22px;color:#fff;background:#ccc;padding:4px 14px;border-radius:3px;font-size:13px;font-weight:700;justify-content:center;align-items:center;}
.introduction2 .resume-list .btn a .arr {font-size:8px;position:relative;display:inline-block;margin-left:5px;}
.introduction2 .item-unit2 > ul {display:flex;flex-direction:row;flex-wrap:wrap;}
.introduction2 .item-unit2 > ul > li {width:50%;}
.introduction2 .item-unit2 > ul > li .box {border:1px solid #ddd;border-radius:10px;overflow:hidden;}
.introduction2 .item-unit2 > ul > li .box .img {margin-right:15px;}
.introduction2 .item-unit2 > ul > li .top-area {display:flex;flex-direction:row;padding:10px;}
.introduction2 .item-unit2 > ul > li .box .text {flex:1;min-width:300px;}
.introduction2 .item-unit2 > ul > li .tit {font-size:18px;font-weight:bold;margin-bottom:15px;}
.introduction2 .item-unit2 > ul > li .txt {color:#666;text-align:justify;}
.introduction2 .item-unit2 > ul > li .bg-box {display:flex;width:100%;background:#eee;height:40px;text-align:right;display:flex;flex-direction:row;align-items:center;padding:0 10px;justify-content:flex-end;color:#3892b5;}
.introduction2 .item-unit2 > ul > li .bg-box .right {margin-left:auto;}
.introduction2 .item-unit2 > ul > li:nth-child(even) {padding-left:10px;}
.introduction2 .item-unit2 > ul > li:nth-child(odd) {padding-right:10px;}
.introduction2 .item-unit2 > ul > li:nth-child(2) ~ li {margin-top:15px;}
.introduction2 .item-unit .resume-list .tit {font-size:21px;padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:15px;}
.introduction2 .item-unit .resume-list ul li {color:#666;}
.introduction2 .item-unit .row ~ .row .cell {padding-top:20px;}
.introduction2 .item-unit .txt {font-size:15px;color:#666;margin-top:10px;}
.introduction2 .item-unit .info {font-size:13px;color:#666;margin-top:5px;}
.introduction2 .item-unit .info li {padding:0;}
.introduction2 .item-unit .btn {margin-top:12px;}
.introduction2 .item-unit .btn a {display:inline-flex;height:30px;line-height:22px;color:#fff;background:#ccc;padding:4px 14px;border-radius:3px;font-size:13px;font-weight:700;justify-content:center;align-items:center;}
.introduction2 .item-unit .btn a .arr {font-size:8px;position:relative;display:inline-block;margin-left:5px;}
@media only screen and (min-width:769px) {
    .introduction2 .item-unit {width:calc(100% + 20px);margin-left:-10px;}
}
@media only screen and (max-width:1260px) {
    .introduction2 {font-size:1rem;}
    .introduction2 .box-tit {font-size:1.25rem;}
    .introduction2 .resume-list .tit {font-size:1.125rem;}
    .introduction2 .resume-list .text {font-size:0.938rem;}
    .introduction2 .item-unit2 > ul > li .tit {font-size:1.125rem;}
    .introduction2 .item-unit .resume-list .tit {font-size:1.313rem;}
    .introduction2 .item-unit .txt {font-size:0.938rem;}
    .introduction2 .item-unit .info {font-size:0.813rem;}
    .introduction2 .item-unit .btn a {font-size:0.813rem;}
    .introduction2 .item-unit .btn a .arr {font-size:0.5rem;}
    .introduction2 .item-unit2 > ul > li > .box .img {width:120px;}
    .introduction2 .item-unit2 > ul > li > .box .text {min-width:0;}
}
@media only screen and (max-width:768px) {
    .introduction2 .item-unit {display:block;}
    .introduction2 .item-unit + .item-unit {margin-top:10px;}
    .introduction2 .resume-list .tit {left:0;}
    .introduction2 .row {display:block !important;}
    .introduction2 .row .cell {width:100%;margin-top:0 !important;}
    .introduction2 .row .cell ~ .cell {margin-left:15px;}
    .introduction2 .row .cell ~ .cell {margin-top:10px !important;margin-left:0;}
    .introduction2 .row:first-child .cell:first-child {margin-top:0;}
    .introduction2 .row .resume-list {margin-top:12px;}
    .introduction2 .row .resume-list .tit {left:0;}
    .introduction2 .row .resume-list ul li {padding-left:0px;}
    .introduction2 .cell {display:block;width:100%;}
    .introduction2 .cell:after {content:"";display:block;clear:both;}
    .introduction2 .item-unit2 li {width:100%;padding:0 0 !important;margin-top:15px;}
    .introduction2 .item-unit2 > ul > li {width:100%;}
}
@media only screen and (max-width:540px) {
    .introduction2 .item-unit2 li .top-area {display:block;}
    .introduction2 .item-unit2 li .box .text {margin-top:15px;min-width:0}
}
@media only screen and (max-width:420px) {
    .introduction2 .row {display:block !important;}
    .introduction2 .row .cell .img {width:100%;}
    .introduction2 .row .cell .img img {width:100%;}
    .introduction2 .row .cell ~ .cell {margin-top:15px !important;margin-left:0;}
}

.introduction3 {color:#000;text-align:center;}
.introduction3 .tit {display:block;font-size:20px;margin-bottom:70px;font-weight:700;}
.introduction3 > ul {display:inline-grid;grid-template-columns:repeat(3, 1fr);grid-gap:40px 20px;}
.introduction3 > ul > li {width:265px;}
.introduction3 > ul > li .img img {width:100%;max-width:100%;}
.introduction3 > ul > li .name {margin-top:24px;display:block;text-align:center;font-size:16px;font-weight:700; margin-bottom:24px;}
.introduction3 > ul > li dl:after {content:'';display:block;clear:both;}
.introduction3 > ul > li dl dt {font-weight:700;font-size:14px;float:left;clear:both;}
.introduction3 > ul > li dl dt + .auto {padding-left:30px;}
.introduction3 > ul > li dl dt ~ dt,
.introduction3 > ul > li dl dd ~ dd {margin-top:10px;}
.introduction3 > ul > li dl .auto {overflow:hidden;text-align:left;}
.introduction3 > ul > li dl dd:not(.auto) {width:100%;clear:both;}
.introduction3 > ul > li dl dd .dash {padding-top:5px;}
.introduction3 > ul > li dl dd .dash li {position:relative;padding-left:8px;text-align:left;}
.introduction3 > ul > li dl dd .dash li ~ li {margin-top:3px;}
.introduction3 > ul > li dl dd .dash li:before {content:'';display:block;position:absolute;top:7px;left:0;width:4px;height:1px;background:#000;}
@media only screen and (max-width:1260px) {
    .introduction3 .tit {font-size:1.25rem;}
    .introduction3 > ul {grid-template-columns:repeat(3, 1fr);}
    .introduction3 > ul > li .name {font-size:1rem;}
    .introduction3 > ul > li dl dt {font-size:0.875rem;}
}
@media only screen and (max-width:1024px) {
    .introduction3 > ul > li {width:100%;}
}
@media only screen and (max-width:768px) {
    .introduction3 > ul {grid-template-columns:repeat(2, 1fr);}
}
@media only screen and (max-width:480px) {
    .introduction3 > ul {display:block;}
    .introduction3 > ul > li ~ li {margin-top:30px;}
}

.contact-list {margin-top:15px;font-size:1.3rem;display:flex;flex-direction:column !important;}
.contact-list li {display:flex;align-items:center;padding:0 0 !important;color:#888 !important;}
.contact-list li ~ li {margin-top:5px;}
.contact-list li .ico-tel {display:inline-block;width:12px;height:11px;margin-right:10px;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAMAAAB8rpxtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAh1BMVEX85cu1q6qqqqqqr8DZ9v/Zvqqqqq2yt7Wtqqq1zu/Wvaq1zO////zbwa2yyemqqrLI6P/////84cWvqqr//9vAraqqscXh/PzmybKyyeb8//TbwrKvvsjFua+yyOT6///67u/0///vzbiqssDQ4O//+unOua3kxq+60vf//ObOuq+qq621wtvXGL80AAAAAWJLR0QR4rU9ugAAAAd0SU1FB+UGBAAMMu4dXOoAAABXSURBVAjXRc1FDoBAEETRpnB3l8H9/ueDhAH+7qUWRSSAJ0okQ1G1RzoZMC37gUOG6/lB+AJmFH8LkjT7gbwoUdUcaFjbWT0HhpFN840FXyttO788zu4CIC0FWqHTfv8AAAAASUVORK5CYII=') no-repeat 0 0;background-size:auto 100%;}
.contact-list li .ico-mail {display:inline-block;width:12px;height:11px;margin-right:10px;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAMAAAB8rpxtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAilBMVEX85cu1q6qqqqqqr8DZ9v/Zvqq1zu/WvaqttbrAwMC4saqyyemqqq/D3/z////vzLW4wcXL3fH8//////rkzsDDu7WqqrLI6P/66dDDwMve8Pz66dPFwsv/173//PHk0MjI2On6///I5f/30biqq62vr6+vr62tqqrkxq+60vf//ObOuq+1wtv0///R2LPrAAAAAWJLR0QOb70wTwAAAAd0SU1FB+UGBAANJ5rbiUAAAABfSURBVAjXY2BgZIICZhYGViY4YGNgZ+LgBAMuJm4Gdh5ePjDgB3MEBIX4+IRFREEcMXEJSSlpGSlZCIdPTl5BkQ/CUYLoUQZxmFRUQUBNHcjRQNijyaClrQ5hqujoAgCMfAcwXQ25cgAAAABJRU5ErkJggg==') no-repeat 0 0;background-size:auto 100%;}
@media only screen and (max-width:1260px) {
    .contact-list {font-size:0.813rem;}
}

/* 다이어그램 */
@media screen and (min-width:1259px) {
    .diagram {position:relative;height:500px;background:url("../images/0_diagram.png") no-repeat 50% 50%;}
    .diagram .title {font-size:28px;color:#4e4e39;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);line-height:1.2;}
    .diagram ol > li {position:absolute;}
    .diagram ol > li ul li {position:relative;font-size:1.1rem;width:200px;color:#675e5e;padding-left:15px;}
    .diagram ol > li ul li:before {content:'';display:block;position:absolute;top:6px;left:0;width:6px;height:6px;background:#ddd;border-radius:100%;}
    .diagram ol > li ul li em {color:#1a640f;}
    .diagram ol > li:nth-child(1) {top:40px;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);}
    .diagram ol > li:nth-child(1) .tit:before {content:'';display:block;position:absolute;top:28px;left:90%;width:110px;height:1px;background:#ddd;}
    .diagram ol > li:nth-child(1) ul {position:absolute;top:20px;left:200px;}
    .diagram ol > li:nth-child(2) {top:265px;left:50%;margin-left:-210px;}
    .diagram ol > li:nth-child(2) ul {position:absolute;top:132px;left:25px;}
    .diagram ol > li:nth-child(2) .tit:before {content:'';display:block;position:absolute;top:90%;left:28px;width:1px;height:50px;background:#ddd;}
    .diagram ol > li:nth-child(3) {top:265px;left:50%;margin-left:100px;}
    .diagram ol > li:nth-child(3) ul {position:absolute;top:132px;left:25px;}
    .diagram ol > li:nth-child(3) .tit:before {content:'';display:block;position:absolute;top:90%;left:28px;width:1px;height:50px;background:#ddd;}
    .diagram ol > li .tit > div {position:relative;display:flex;width:100px;height:100px;background:#4e4e39;font-size:16px;color:#fff;border-radius:100%;justify-content:center;align-items:center;flex-direction:column;}
    .diagram ol > li .tit b {font-size:24px;font-weight:700;display:block;}
    .diagram ol > li .tit span {display:block;}
}
@media screen and (max-width:1260px) {
    .diagram {padding:30px 0;}
    .diagram .title {font-size:1.75rem;color:#4e4e39;font-weight:700;text-align:center;display:block;margin-bottom:20px;}
    .diagram .title br {display:none;}
    .diagram ol > li ul {padding:10px;}
    .diagram ol > li ul li {position:relative;font-size:1.1rem;color:#675e5e;padding-left:15px;}
    .diagram ol > li ul li ~ li {margin-top:5px;}
    .diagram ol > li ul li:before {content:'';display:block;position:absolute;top:0.6rem;left:0;width:6px;height:6px;background:#ddd;border-radius:100%;}
    .diagram ol > li .tit > div {position:relative;display:flex;padding:15px;background:#4e4e39;font-size:1rem;color:#fff;display:flex;flex-direction:row;align-items:center;}
    .diagram ol > li .tit b {font-size:1.5rem;font-weight:700;display:block;margin-right:10px;}
    .diagram ol > li .tit span {display:block;}
}

/* 조직도 */
.org {padding:30px 0;}
.org > .org-box > .org-bx {position:relative;z-index:2;}
.org .org-box {position:relative;}
.org .org-box .left-org {position:absolute;top:0;left:0;z-index:1;}
.org .org-box .right-org {position:absolute;top:0;right:0;z-index:1;}
.org .org-box ~ .org-box .org-bx {padding-top:80px;position:relative;}
.org .org-box ~ .org-box.small-gap .org-bx {padding-top:30px;}
.org .org-box:first-child .org-bx {padding-top:0;}
.org .org-box ~ .org-box .org-bx:before {content:'';display:block;height:100%;width:1px;background:#9a9a9a;position:absolute;bottom:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);}
.org .org-box .org {width:100%;background:#fff;position:relative;width:150px;margin:0 auto;}
.org .org-box .org .tit {padding:5px;min-height:30px;background:#fff28c;display:flex;justify-content:center;align-items:center;font-weight:bold;font-size:13px;text-align:center;}
.org .org-box .org .desc {padding:5px;min-height:30px;border:1px solid #9a9a9a;background:#fff;display:flex;justify-content:center;align-items:center;color:#6d6d6d;font-size:12px;text-align:center;}
.org .org-box .center-org {position:relative;display:flex;padding-top:60px;justify-content:space-around;}
.org .org-box .center-org:before {content:'';display:block;height:60px;width:1px;background:#9a9a9a;position:absolute;top:0;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);}
.org .org-box .center-org .org-bx {padding-top:0;flex:1;}
.org .org-box .center-org .org-box ~ .org-box {margin-left:30px;}
.org .org-box .center-org .org-box,
.org .org-box .center-org .org-box .org-bx,
.org .org-box .center-org .org-box .org-bx .org {width:100%;}
.org .org-box .center-org .org-box .org-bx {padding-top:10px;}
.org .org-box .center-org .org-box:before {content:'';display:block;position:absolute;top:0;left:0%;width:150%;height:1px;background:#9a9a9a;}
.org .org-box .center-org .org-box:first-child:before {left:50%;width:calc(50% + 30px);}
.org .org-box .center-org .org-box:last-child:before {left:initial;right:50%;width:calc(50% + 30px);}
.org .org-box .center-org.btm-line .org-box .org-bx {padding-bottom:10px;}
.org .org-box .center-org.btm-line .org-box.btm-line-no .org-bx {padding-bottom:0;}
.org .org-box .center-org.btm-line .org-box:after {content:'';display:block;position:absolute;bottom:0;left:0%;width:150%;height:1px;background:#9a9a9a;}
.org .org-box .center-org.btm-line .org-box:first-child:after {left:50%;width:calc(50% + 30px);}
.org .org-box .center-org.btm-line .org-box:last-child:after {left:initial;right:50%;width:calc(50% + 30px);}

.org .org-box .left-org .org-box:not(:first-child) .org-bx,
.org .org-box .right-org .org-box:not(:first-child) .org-bx {padding-top:0;margin-top:10px;}
.org .org-box .left-org .org-box .org,
.org .org-box .right-org .org-box .org {width:200px;}
.org .org-box .left-org .line-t:before,
.org .org-box .right-org .line-t {content:'';display:block;height:10px;width:1px;background:#9a9a9a;position:absolute;bottom:100%;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);}
.org .org-box ~ .org-box .left-org,
.org .org-box ~ .org-box .right-org {padding-top:80px;}

.org .org-box .left-org .org-box:first-child:before {content:'';display:block;height:1px;width:100%;background:#9a9a9a;position:absolute;top:15px;left:100%;transform:translateX(0);-webkit-transform:translateX(0);}
.org .org-box .left-org .org-box .org-bx:before {content:'';display:block;height:1px;width:20px;background:#9a9a9a;position:absolute;top:15px;left:100%;transform:translateX(0);-webkit-transform:translateX(0);}
.org .org-box .left-org .org-box .org-bx:after {content:'';display:block;height:calc(100% + 10px);width:1px;background:#9a9a9a;position:absolute;top:-10px;left:calc(100% + 20px)}
.org .org-box .left-org .org-box:first-child .org-bx:after {top:15px;height:calc(100% + 10px);}
.org .org-box .left-org .org-box:last-child .org-bx:after {top:initial;bottom:calc(100% - 15px);height:25px}
.org .org-box .left-org .org-box:only-child .org-bx:after {display:none;}

.org .org-box .right-org .org-box:first-child:before {content:'';display:block;height:1px;width:100%;background:#9a9a9a;position:absolute;top:15px;left:initial;right:100%;transform:translateX(0);-webkit-transform:translateX(0);}
.org .org-box .right-org .org-box .org-bx:before {content:'';display:block;height:1px;width:20px;background:#9a9a9a;position:absolute;top:15px;left:initial;right:100%;transform:translateX(0);-webkit-transform:translateX(0);}
.org .org-box .right-org .org-box .org-bx:after {content:'';display:block;height:calc(100% + 10px);width:1px;background:#9a9a9a;position:absolute;top:-10px;right:calc(100% + 20px)}
.org .org-box .right-org .org-box:first-child .org-bx:after {top:15px;height:calc(100% + 10px);}
.org .org-box .right-org .org-box:last-child .org-bx:after {top:initial;bottom:calc(100% - 15px);height:25px}
.org .org-box .right-org .org-box:only-child .org-bx:after {display:none;}

/* 이벤트 배너 */
.event-bnr {position:relative;padding:95px 30px;background:url('../images/0_banner_wood.jpg') no-repeat 0 0;background-size:cover;text-align:center;}
.event-bnr > .line {position:absolute;top:50%;left:0;transform:translateY(-50%);-webkit-transform:translateY(-50%);height:40px;background:#3b3229;width:100%;}
.event-bnr .box-wrap {position:relative;background:#fff;box-shadow:0 0 5px rgba(0, 0, 0, .3);padding:7px;display:inline-block;}
.event-bnr .box-wrap .box {border:1px solid #aeb981;font-weight:700;padding:30px;}
.event-bnr .box-wrap .box .tit {font-size:50px;}
.event-bnr .box-wrap .box .txt-medium {font-size:34px;}
.event-bnr .box-wrap .box .line {height:1px;background:#aeb981;margin:10px 0;}
.event-bnr .box-wrap .box .txt-small {font-size:23px;}
@media screen and (max-width:1260px) {
    .event-bnr {padding:50px 30px;}
    .event-bnr .box-wrap .box .tit {font-size:3.1rem;}
    .event-bnr .box-wrap .box .txt-medium {font-size:2.1rem;}
    .event-bnr .box-wrap .box .txt-small {font-size:1.3rem;}
}

/* 테이블 */
.data-table {margin-top:15px;font-size:1.3rem;}
.data-table table {width:100%;border-collapse:collapse;}
.data-table th {padding:5px;border:1px solid #999;color:#666;background:#e2e2e2;}
.data-table table th.history-date {text-align:center;font-weight:bold;background:#fff;}
.data-table td {padding:5px 10px;border:1px solid #999;;color:#666;}
.data-table table td.align-left {text-align:left;padding-left:15px;}
.data-table table td.division {padding:15px;border-left:1px solid #ffe86d;border-right:1px solid #ffe86d;background:#ffe86d;}
@media only screen and (max-width:1260px) {
    .data-table {font-size:1rem;}
}
@media only screen and (max-width:768px) {
    .data-table {font-size:1.3rem;}
}

/* 탭 구성 */
.tab-type-line {position:relative; display:flex; margin:0 auto; border-bottom:1px solid #ddd; margin-bottom:20px;}
.tab-type-line a {display:flex;align-items:center;overflow:hidden;position:relative;min-width:auto; max-width:none; padding:6px 24px; height:48px;font-size:1.5rem; text-transform:initial; }
.tab-type-line .indicator {height:3px; background-color:#000000; width:100%; bottom:0; height:3px; position:absolute; transition:all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; left:151.047px; width:99.5312px; }
.tab-type-line .effect-root {top:0; left:0; right:0; bottom:0; z-index:0; overflow:hidden; position:absolute; border-radius:inherit; pointer-events:none; }
.tab-type-line .effect-ripple {opacity:0; position:absolute; }
.tab-type-line a .effect-ripple-visible {width:200%; height:200%; top:-50%; left:-50%; }
.tab-type-line .effect-ripple-visible {opacity:0.3; animation:effect-keyframes-enter 550ms cubic-bezier(0.4, 0, 0.2, 1); transform:scale(1); }
.tab-type-line .effect-ripple-pulsate {animation-duration:200ms; }
.tab-type-line .effect-child {width:100%; height:100%; display:block; opacity:1; border-radius:50%; background-color:currentColor; }
.tab-type-line .effect-child-leaving {opacity:0; animation:effect-keyframes-exit 550ms cubic-bezier(0.4, 0, 0.2, 1); }
.tab-type-line .effect-child-pulsate {top:0; left:0; position:absolute; animation:effect-keyframes-pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite; }
.tab-conts .gallery-slide {margin-top:0;margin-bottom:20px;}
@-webkit-keyframes effect-keyframes-enter {0% {opacity:0.1; transform:scale(0); } 100% {opacity:0.3; transform:scale(1); } }
@-webkit-keyframes effect-keyframes-exit {0% {opacity:1; } 100% {opacity:0; } }
@-webkit-keyframes effect-keyframes-pulsate {0% {transform:scale(1); } 50% {transform:scale(0.92); } 100% {transform:scale(1); } }
@media only screen and (max-width:1260px) {
    .tab-type-line a {font-size:1.2rem; }
}
@media only screen and (max-width:768px) {
    .tab-type1 {position:relative;padding:4px 0 5px 0; border-radius:2px;display:block;border-bottom:none;
    white-space:nowrap;
    overflow-x:auto;
}
.tab-type-line::-webkit-scrollbar {-webkit-appearance:none; } /* 스크롤바 가로 적용 */
.tab-type-line::-webkit-scrollbar:vertical {width:5px; }
.tab-type-line::-webkit-scrollbar:horizontal {height:5px; }
.tab-type-line::-webkit-scrollbar-thumb {background-color:rgba(0, 0, 0, .3); border-radius:5px; }
.tab-type-line::-webkit-scrollbar-track {border-radius:5px; background-color:#eee; }
.tab-type-line:after {content:'';display:block;position:absolute;bottom:5px;left:0;width:100%;height:1px;background:#ddd;}
.tab-type-line a {height:45px;min-width:48px;display:inline-flex; margin-left:0; padding:6px 11px; font-size:1.4rem; border-radius:2px 2px 0 0;border-bottom:1px solid #ddd;}
.tab-type-line a.on:after {bottom:-2px; height:2px;}
.tab-type-line .indicator {bottom:5px;z-index:2;}
}

.tab-type2 {overflow:hidden; position:relative; min-height:44px;background-color:#fff;margin-top:15px;}
.tab-type2 ul {display:flex;overflow-x:auto;width:100%; min-width:280px; z-index:10; padding:0 0 1px; background-color:#fff; white-space:nowrap;}
.tab-type2 ul li {display:inline-block; text-align:center; vertical-align:top; }
.tab-type2 ul li .menu {display:inline-block; position:relative; min-height:18px; padding:5px 10px; font-size:16px; line-height:21px; color:#484848; letter-spacing:-.5px; vertical-align:top; border-radius:21px;border:1px solid #ccc;}
.tab-type2 ul li + li {margin-left:10px;}
.tab-type2 ul li.on .menu {color:#222; font-weight:700; letter-spacing:-.5px;border-color:#000 }
@media all and (max-width:1260px) {
    .tab-type2 {display:block;margin-top:0;}
}

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

.tab-type-bg {position:relative;display:flex;margin:0 auto;border-bottom:1px solid #ddd;margin-bottom:20px;}
.tab-type-bg li {position:relative;}
.tab-type-bg li a {display:flex;height:45px;text-align:center;color:#fff;line-height:45px;font-weight:bold;font-size:1.5rem;background:#4a4a4a;padding:0 30px}
.tab-type-bg li.on a {background:#07b1ec;}
.tab-type-bg li.on:after {content:"";display:block;position:absolute;bottom:-10px;left:50%;width :0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #07b1ec;transform:translateX(-50%);-webkit-transform:translateX(-50%);}
.tab-conts .gallery-slide {margin-top:0;margin-bottom:20px;}
@media only screen and (max-width:1260px) {
    .tab-type-bg li a {font-size:1rem;}
}
@media only screen and (max-width:768px) {
    .tab-type-bg li a {font-size:1.2rem;}
}

.tab-type-multi ul{display:grid;grid-template-columns: repeat(4, 1fr);grid-gap:8px }
.tab-type-multi ul li{flex:1;border:1px solid #ddd;color:#777;}
.tab-type-multi ul li a{display:flex;justify-content:center;align-items:center;min-height:30px;font-size:1.2rem;padding:5px;text-align:center;}
.tab-type-multi ul li.on{border-color:#000;color:#383838;font-weight:500;background:#fcde58;}
@media only screen and (max-width:1024px) {
    .tab-type-multi ul li a{font-size:1rem}
}
@media only screen and (max-width:768px) {
    .tab-type-multi ul{grid-template-columns: repeat(3, 1fr)}

}

/* 콘텐츠 좌우 분할 구성 유형 */
.relative-layout {display:flex;}
.relative-layout .bar {height:35px; background:#48a090; margin-bottom:40px;}
.relative-layout > .left,
.relative-layout > .right,
.relative-layout > .auto {flex:1;overflow:hidden;}
.relative-layout > * + * {margin-left:30px;}
@media only screen and (max-width:1260px) {
    .relative-layout > .mobile-hidden ~ * {margin-left:0;}
}
@media only screen and (max-width:768px) {
    .relative-layout {display:block;}
    .relative-layout > * {margin-left:0}
    .relative-layout > *:not(.mobile-hidden) ~ * {margin-top:30px;}
}

/* 반응형웹 게시물 */
.theme {line-height:1.2em;font-size:3rem;color:#000000;font-weight:bold;}
.theme .small-font {font-size:2.5rem;color:#bbb;vertical-align:baseline;}
.theme strong {vertical-align:baseline;color:#ff0000;}
@media only screen and (max-width:1260px) {
    .theme {font-size:2.5rem;}
    .theme .small-font {font-size:2rem;}
}

.theme2 .tit {font-size:2rem;color:#2b92c7;display:block;margin-bottom:5px;font-weight:bold;text-align:justify;}
.theme2 p {font-size:1.3rem;color:#bbb;font-weight:bold;text-align:justify;}
.theme2 .line {height:1px;background:#bbb;margin:3px 0;}
@media only screen and (max-width:1260px) {
    .theme2 .tit {font-size:1.5rem;}
    .theme2 p {font-size:1.2rem;}
}

.theme3 {line-height:1.2em;font-size:2rem;color:#c4c4c4;font-weight:bold;}
.theme3 strong {font-size:2rem;color:#1382b1;}
@media only screen and (max-width:1260px) {
    .theme3 {font-size:1.5rem;}
    .theme3 strong {font-size:1.625rem;}
}

.article-box {position:relative;}
.article-box.left-cont .num {right:0;text-align:right;}
.article-box.right-cont {text-align:right;}
.article-box.right-cont .num {left:0;}
.article-box .num {position:absolute;top:0;font-size:150px; color:#d2d2d2; font-weight:700; font-style:normal; line-height:0.7em; letter-spacing:-0.05em;font-family:'Malgun Gothic';}
.article-box .txt {clear:both;font-size:1.3rem;text-align:justify;}
.article-box .txt-em {margin:50px 0;color:#1765b5;font-size:1.3rem;}
.article-box .txt-em > span {display:inline-block;max-width:70%;}
.article-box p {margin-top:24px;text-align:justify;line-height:1.5em;}
.article-box p:first-child {margin-top:0;}
@media only screen and (max-width:1260px) {
    .article-box .num {font-size:8rem;}
    .article-box .txt {font-size:1.2rem;}
}
@media only screen and (max-width:768px) {
    .article-box .img img {width:100%;}
    .article-box .txt,
    .article-box .txt-em {font-size:1.5rem;}
    .article-box .txt-em {margin-top:0;}
}

/* TODO :아래중 넘버와 데코라인을 article-box에 적용 */
.con-wrap {margin-bottom:50px;}
.con-wrap:after {content:"";display:block;clear:both;}
.con-wrap h3 {position:relative;font-size:24px;}
.con-wrap .num {position:absolute;top:0;font-size:180px;color:#d2d2d2;font-weight:bold;font-style:normal;line-height:0.7em;letter-spacing:-0.05em;}
.con-wrap .con-left, .con-wrap .con-right {position:relative;width:calc(50% - 15px); float:left;}
.con-wrap .con-left {margin-right:30px;}
.con-wrap .con-left .num {left:0;}
.con-wrap .con-right .num {right:0;}
.con-wrap .deco-line:before,
.con-wrap .deco-line-2:before {content:'';display:block;height:35px;background:#48a090;margin-bottom:40px;}
.con-wrap .deco-line2:after {content:'';display:block;height:35px;background:#edbab8;margin-top:40px;}
.con-wrap .realimg {width:100%;}
.con-wrap p {font-size:16px; line-height:150%; color:#666666;text-align:justify;}
.con-wrap p.first {margin:50px 0;color:#1765b5;}
.con-wrap .btn-wrap {margin-top:30px; text-align:center;}
.con-wrap .btn {background:#f3b648; color:#222; width:180px; height:45px; line-height:45px; display:inline-block; font-size:14px; font-weight:600;}
.con-wrap .right {text-align:right;}
@media all and (max-width:768px) {
    .con-wrap .con-left, .con-wrap .con-right {width:100%;float:none;padding:20px 0;}
}

/* 카테고리 안내 유형 */
.circle-category-menu {text-align:center;}
.circle-category-menu .tit {display:block;text-align:center;margin-bottom:40px;font-size:20px;font-weight:bold;}
.circle-category-menu ul {text-align:center;display:inline-grid;grid-template-columns:repeat(4, 1fr);grid-gap:40px 20px}
.circle-category-menu ul li {float:left;width:145px;height:145px;box-shadow:0px 3px 6px #00000029;border-radius:100%;}
.circle-category-menu ul li a {display:block;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;}
.circle-category-menu ul li a img {height:70px;}
.circle-category-menu ul li .txt {font-size:14px; color:#000;margin-top:10px;}
@media all and (max-width:768px) {
    .circle-category-menu ul {grid-template-columns:repeat(2, 1fr);grid-gap:34px 17px}
    .circle-category-menu ul li {width:123px;height:123px;}
    .circle-category-menu ul li a img {height:60px;}
    .circle-category-menu ul li .txt {font-size:12px;margin-top:9px;}
}

/* gallery-list :반응형 Gallery로 브라우저가 줄어드면 이미지가 아래로 떨어지는 유형으로 메인, 서브 컨텐츠 공통 사용 */
.gallery-list {margin-top:20px;}
.gallery-list > ul {font-size:0; text-align:left;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:50px 15px;}
.gallery-list > ul > li {position:relative;overflow:hidden;}
.gallery-list ul li a {display:block; cursor:pointer;}
.gallery-list ul li .thumbnail {overflow:hidden; position:relative; padding-bottom:100%;}
.gallery-list ul li .thumbnail img {position:absolute; top:0; left:0; width:100%; height:100%; transform:scale(1); transition:transform 0.3s ease 0s, opacity 0.1s linear 0s !important;}
.gallery-list ul li:hover .thumbnail img {transform:scale(1.1);}
.gallery-list ul li .thumbnail .label-yellow {display:inline-block; color:#000000; background:#ffdf2c; height:20px; line-height:20px; padding:0 5px; position:absolute; top:0; left:0; font-size:12px; z-index:10;}
.gallery-list ul li .info {margin-top:12px; font-size:12px;}
.gallery-list ul li .info .sub-tit {line-height:14px; font-size:12px; font-weight:500; color:#999; letter-spacing:-0.21px;}
.gallery-list ul li .info .tit {margin-top:2px; line-height:19px; font-size:16px; letter-spacing:-0.29px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#1e1e1f;}
@media all and (max-width:1260px) {
    .gallery-list ul {grid-template-columns:repeat(4, 1fr);}
    .gallery-list ul li .info {margin-top:5px;}
    .gallery-list ul li .info .sub-tit {font-size:0.75rem;}
    .gallery-list ul li .info .tit {font-size:1rem;}
}
@media all and (max-width:768px) {
    .gallery-list ul {grid-template-columns:repeat(3, 1fr);}
}
@media all and (max-width:500px) {
    .gallery-list ul {grid-template-columns:repeat(2, 1fr);}
}

/* gallry-list-2 :반응형 Gallery-2 로 브라우저가 줄어드면 이미지가 아래로 떨어지는 유형으로 메인, 서브 컨텐츠 공통 사용 */
.gallery-list2 {margin-top:30px;}
.gallery-list2 .list-wrap {margin:0 auto;padding:20px 0;}
.gallery-list2 ul {margin:-10px 0 0 -10px;}
.gallery-list2 ul:after {content:'';display:block;clear:both;}
.gallery-list2 ul li {float:left;margin-top:10px;width:25%;padding-left:10px;}
.gallery-list2 ul li .box {border-radius:15px;border:1px solid #e4e4e6;overflow:hidden;}
.gallery-list2 ul li .box .img img {max-width:100%;width:100%;}
.gallery-list2 ul li .box .desc {padding:25px 30px 25px 30px;}
.gallery-list2 ul li .box .desc.pd2 {padding: 16px 15px 19px;}
.gallery-list2 ul li .box .desc .tit {font-size:20px;font-weight:bold;color:#3b3b3b;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.gallery-list2 ul li .box .desc .tit2 {overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; font-weight: 500; font-size: 17px; line-height: 22px; color: #303038; letter-spacing: -0.5px; }
.gallery-list2 ul li .box .desc .txt {margin-top:15px;font-size:15px;font-weight:bold;color:#b1b1b1;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.2em;height:2.4em;}
.gallery-list2 ul li .box .desc .date {margin-top:20px;height:45px;border-top:1px solid #e7e7e7;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#4283e7;font-size:14px;}
.gallery-list2.st2 ul,
.gallery-list2.st2 ul li {position:relative;margin:0 !important;padding:0;padding-left:1px;padding-top:1px;}
.gallery-list2.st2 ul li .btn-favorate {position:absolute;top:10px;right:10px;background:#fff;height:22px;border-radius:22px;padding:0 5px;color:#666;}
.gallery-list2.st2 ul li .btn-favorate .ico-heart {   display:inline-block; width:12px; height:12px; margin-right:5px; background:url("data:image/svg+xml,%3Csvg width='34' height='30' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.0456 3.09726C27.2411 -0.650435 21.0477 -0.650435 17.2432 3.09726L17.1055 3.23497L16.6632 2.80217C12.8586 -0.935693 6.67509 -0.935693 2.87058 2.812C1.0224 4.63175 0 7.05152 0 9.63851C0 12.2157 1.0224 14.6354 2.87058 16.465L16.2503 29.6459C16.4862 29.8721 16.791 30 17.1154 30C17.4398 30 17.7445 29.8721 17.9805 29.6459L31.0652 16.7601C32.9134 14.9404 33.9358 12.5108 33.9358 9.93361C33.9358 7.35645 32.9134 4.92684 31.0652 3.1071L31.0456 3.09726Z' fill='%23E9573E'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size:100% 100%; }
@media screen and (max-width:1260px) {
    .gallery-list2 .list-wrap {width:auto;padding:15px 0;}
    .gallery-list2 ul {margin:-10px 0 0 -10px;}
    .gallery-list2 ul li {margin-top:9px;padding-left:9px;}
    .gallery-list2 ul li .box {border-radius:13px;}
    .gallery-list2 ul li .box .desc {padding:15px;}
    .gallery-list2 ul li .box .desc .tit {font-size:1.063rem;}
    .gallery-list2 ul li .box .desc .txt {margin-top:13px;font-size:0.813rem;}
    .gallery-list2 ul li .box .desc .date {margin-top:17px;height:38px;font-size:0.75rem;}
}
@media screen and (max-width:1024px) {
    .gallery-list2 ul li {width:50%;}
}

/* 전시 갤러리 */
.exhibition .gallery-list {display:grid }
.exhibition .gallery-list > * {margin-bottom:30px }
.gallery-list {margin-bottom:60px }
.gallery-list-item {overflow:hidden;position:relative }
.gallery-list-item img {transition:transform 500ms ease-out, opacity 500ms ease-out;backface-visibility:visible }
.gallery-list-item .txt {display:none;}
.gallery-list-item:hover {text-decoration:none }
.gallery-list-item:hover img {transform:scale(1.1) }
.exhibition .background-cover {display:block;height:1px;margin:0;overflow:hidden;padding:75% 0 0 0;position:relative }
.exhibition .background-cover-img {display:block;height:auto;left:0;max-width:none;position:absolute;top:0;transform:translateZ(0) scale(1, 1);width:100%;backface-visibility:hidden }
.ratio3x2 .background-cover {padding-top:66.7% }
@media screen and (min-width:768px) {
    .exhibition .gallery-list {grid-template-columns:repeat(2, 1fr) }
    .exhibition .gallery-list > * {margin-left:15px;margin-right:15px }
}
@media screen and (min-width:1025px) {
    .exhibition .gallery-list {grid-template-columns:repeat(3, 1fr) }
    .gallery-list-mixed-ratios>*:nth-child(1) .background-cover,.gallery-list-mixed-ratios>*:nth-child(5) .background-cover,.gallery-list-mixed-ratios>*:nth-child(9) .background-cover,.gallery-list-mixed-ratios>*:nth-child(10) .background-cover,.gallery-list-mixed-ratios>*:nth-child(14) .background-cover,.gallery-list-mixed-ratios>*:nth-child(18) .background-cover,.gallery-list-mixed-ratios>*:nth-child(19) .background-cover,.gallery-list-mixed-ratios>*:nth-child(23) .background-cover,.gallery-list-mixed-ratios>*:nth-child(27) .background-cover,.gallery-list-mixed-ratios>*:nth-child(28) .background-cover,.gallery-list-mixed-ratios>*:nth-child(32) .background-cover,.gallery-list-mixed-ratios>*:nth-child(36) .background-cover,.gallery-list-mixed-ratios>*:nth-child(37) .background-cover,.gallery-list-mixed-ratios>*:nth-child(41) .background-cover,.gallery-list-mixed-ratios>*:nth-child(45) .background-cover,.gallery-list-mixed-ratios>*:nth-child(46) .background-cover,.gallery-list-mixed-ratios>*:nth-child(50) .background-cover,.gallery-list-mixed-ratios>*:nth-child(54) .background-cover,.gallery-list-mixed-ratios>*:nth-child(55) .background-cover,.gallery-list-mixed-ratios>*:nth-child(59) .background-cover,.gallery-list-mixed-ratios>*:nth-child(63) .background-cover,.gallery-list-mixed-ratios>*:nth-child(64) .background-cover,.gallery-list-mixed-ratios>*:nth-child(68) .background-cover,.gallery-list-mixed-ratios>*:nth-child(72) .background-cover,.gallery-list-mixed-ratios>*:nth-child(73) .background-cover,.gallery-list-mixed-ratios>*:nth-child(77) .background-cover,.gallery-list-mixed-ratios>*:nth-child(81) .background-cover {padding-top:100% }
    .gallery-list-mixed-ratios>*:nth-child(1) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(5) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(9) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(10) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(14) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(18) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(19) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(23) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(27) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(28) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(32) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(36) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(37) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(41) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(45) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(46) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(50) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(54) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(55) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(59) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(63) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(64) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(68) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(72) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(73) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(77) .background-cover img,.gallery-list-mixed-ratios>*:nth-child(81) .background-cover img {width:150%;margin-left:-25% }
    .gallery-list-mixed-ratios>*:nth-child(5),.gallery-list-mixed-ratios>*:nth-child(6),.gallery-list-mixed-ratios>*:nth-child(9),.gallery-list-mixed-ratios>*:nth-child(14),.gallery-list-mixed-ratios>*:nth-child(15),.gallery-list-mixed-ratios>*:nth-child(18),.gallery-list-mixed-ratios>*:nth-child(23),.gallery-list-mixed-ratios>*:nth-child(24),.gallery-list-mixed-ratios>*:nth-child(27),.gallery-list-mixed-ratios>*:nth-child(32),.gallery-list-mixed-ratios>*:nth-child(33),.gallery-list-mixed-ratios>*:nth-child(36),.gallery-list-mixed-ratios>*:nth-child(41),.gallery-list-mixed-ratios>*:nth-child(42),.gallery-list-mixed-ratios>*:nth-child(45),.gallery-list-mixed-ratios>*:nth-child(50),.gallery-list-mixed-ratios>*:nth-child(51),.gallery-list-mixed-ratios>*:nth-child(54),.gallery-list-mixed-ratios>*:nth-child(59),.gallery-list-mixed-ratios>*:nth-child(60),.gallery-list-mixed-ratios>*:nth-child(63),.gallery-list-mixed-ratios>*:nth-child(68),.gallery-list-mixed-ratios>*:nth-child(69),.gallery-list-mixed-ratios>*:nth-child(74) {margin-top:-30% }
}
@media screen and (max-width:1024px) {
    .exhibition .gallery-list > * .background-cover {padding-top:100% }
    .exhibition .gallery-list-mixed-ratios>* .background-cover {padding-top:66.7% }
}

.gallery-show-wrap.hidden-ani {animation:galleryHide .35s ease-in;animation-fill-mode:forwards;}
.gallery-show-wrap.hidden {display:none;}
.gallery-show-wrap {background:#0C1324;position:fixed;z-index:100;top:0;right:0;bottom:0;left:0;animation:galleryShow .35s ease-in;display:block;padding:0;animation-fill-mode:forwards;}
.gallery-show-wrap .close {position:absolute;top:10px;right:10px;width:40px;height:40px;background:url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='27' y='1.5' width='3' height='36' rx='1.5' transform='rotate(45 27 1.5)' fill='white'/%3E%3Crect x='1.5' y='3.62158' width='3' height='36' rx='1.5' transform='rotate(-45 1.5 3.62158)' fill='white'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 16px;}
.gallery-show {height:100%;display:flex;justify-content:center;align-items:center;}
.gallery-show-list .swiper-slide {width:900px;opacity:0.4;transition:all ease-out 300ms;}
.gallery-show-list .swiper-slide.swiper-slide-active {opacity:1;}
.gallery-show-list .swiper-slide.swiper-slide-active .desc {display:block;}
.gallery-show-list .swiper-slide:not(.swiper-slide-active) .img {transform:scale(0.9)}
.gallery-show-list .swiper-slide .img {  padding:66% 0 0 0;overflow:hidden;width:100%;display:flex;justify-content:center;align-items:center;transform:translateZ(0) scale(1, 1);transform:scale(1);transition:all 0.5s ease;-webkit-transition:all 0.5s ease;background-repeat:no-repeat;background-size:cover;background-position:50% 50%;}
.gallery-show-list .swiper-slide .img img {display:none;max-width:100%;border-radius:10px 10px 0 0;width:100%;}
.gallery-show-list .swiper-slide .desc {height:100px;font-size:14px;padding-top:20px;display:none;}
.gallery-show-list .swiper-slide .txt {width:80%;color:#fff;font-size:14px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-wrap:break-word;line-height:1.4em;height:2.8em;}
.gallery-show-list .swiper-menu {position:relative;width:900px;margin:0 auto;}
.gallery-show-list .swiper-paging {position:absolute;right:0;top:-50px;display:flex;align-items:center;z-index:2;}
.gallery-show-list .swiper-paging [class*=swiper-button] {width:30px;height:30px;border:1px solid #fff;border-radius:100%;position:relative;top:0;left:0}
.gallery-show-list .swiper-paging * ~ * {margin-left:10px;}
.gallery-show-list .swiper-paging .swiper-button-prev {background:url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.27394 0.0311893C5.63682 0.175443 5.79005 0.556814 5.62038 0.893505C5.59565 0.942578 4.8818 1.6602 3.54137 2.98351L1.49999 4.99878L3.55829 7.03277C5.49676 8.94832 5.61859 9.07252 5.65102 9.166C5.79999 9.59542 5.47271 10.0304 5.02479 9.99833C4.76916 9.98 4.93402 10.129 2.3988 7.62522C-0.218793 5.04011 -0.00491248 5.27762 0.00970569 4.97221C0.0161693 4.83728 0.0273682 4.7862 0.0668448 4.7117C0.104085 4.64145 0.671882 4.07127 2.41426 2.35441C4.35923 0.437931 4.72703 0.0835423 4.80653 0.0493692C4.94112 -0.00846936 5.15339 -0.0167346 5.27394 0.0311893Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 10px;}
.gallery-show-list .swiper-paging .swiper-button-prev:after {opacity:0;}
.gallery-show-list .swiper-paging .swiper-button-next {background:url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.415515 0.0311893C0.0526349 0.175443 -0.100593 0.556814 0.0690756 0.893505C0.0938024 0.942578 0.80765 1.6602 2.14809 2.98351L4.18946 4.99878L2.13116 7.03277C0.192691 8.94832 0.0708606 9.07252 0.0384301 9.166C-0.110532 9.59542 0.216742 10.0304 0.664663 9.99833C0.920293 9.98 0.755435 10.129 3.29065 7.62522C5.90825 5.04011 5.69437 5.27762 5.67975 4.97221C5.67328 4.83728 5.66208 4.7862 5.62261 4.7117C5.58537 4.64145 5.01757 4.07127 3.27519 2.35441C1.33022 0.437931 0.962419 0.0835423 0.882921 0.0493692C0.748332 -0.00846936 0.536068 -0.0167346 0.415515 0.0311893Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 10px;}
.gallery-show-list .swiper-paging .swiper-button-next:after {opacity:0;}
.gallery-show-list .swiper-pagination {position:relative;text-align:right;color:#ff1541;;font-size:14px;}
.gallery-show-list .swiper-pagination span {color:#fff;font-weight:bold;}
.gallery-show-list .swiper-pagination-fraction {color:#fff;font-size:16px;}
.gallery-show-list .swiper-gage {height:1px;background:#313846;position:relative;}
.gallery-show-list .swiper-gage span {  background:#ff1541;content:'';position:absolute;height:100%;width:0%;display:block;transition:width .4s ease-in;}
@media screen and (max-width:1024px) {
    .gallery-show-list .swiper-slide,
    .gallery-show-list .swiper-menu {width:80vw;}
    .gallery-show-list .swiper-paging {display:none;}
}

@keyframes galleryShow {0% {opacity:0;transform:scale(0.8) } 80% {opacity:0.6;transform:scale(1.05) } 100% {opacity:1;transform:scale(1) } }
@keyframes galleryHide {0% {opacity:1;transform:scale(1) } 80% {opacity:0.6;transform:scale(0.8) } 100% {opacity:0;transform:scale(0.7);display:none;} }


/* 이미지 라운드 */
.round-5 {border-radius:5px;}
.round-10 {border-radius:10px;}


/* =============================================================================
   board
============================================================================= */
/* 상단 */
.board-top {margin-top:30px;padding-bottom:14px;padding-top:10px;display:flex;align-items:center;}
.board-top .left > * ~ * {margin-left:10px;}
.board-top .left {display:flex;align-items:center; }
.board-top .left .total b {color:#2eacbc;vertical-align:baseline;}
.board-top .right {margin-left:auto;text-align:right;display:flex;flex-direction:row;align-items:center;}
.board-top .right > * ~ * {margin-left:10px;}
.board-top .right .board-search.ms {display:none;}
.board-top .input {position:relative;display:inline-block;padding-right:35px;width:220px;height:34px;border:1px solid #cccccc;border-radius:3px;}
.board-top .input input {height:100%;width:100%;border:none;padding-left:5px;font-size:13px;}
.board-top .input .btn-search {position:absolute;top:50%;right:5px;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);overflow:hidden;width:16px;height:16px;text-indent:-9999%;background:url("data:image/svg+xml,%3Csvg width='60' height='63' viewBox='0 0 60 63' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.7723 51.5447C13.1153 51.5447 2 40.4294 2 26.7723C2 13.1153 13.1153 2 26.7723 2C40.4294 2 51.5447 13.1153 51.5447 26.7723C51.5447 40.4294 40.4294 51.5447 26.7723 51.5447ZM26.7723 5.02594C14.7695 5.02594 5.02594 14.7695 5.02594 26.7723C5.02594 38.7752 14.7695 48.5187 26.7723 48.5187C38.7752 48.5187 48.5187 38.7752 48.5187 26.7723C48.5187 14.7695 38.755 5.02594 26.7723 5.02594Z' fill='black' stroke='black' stroke-width='3'/%3E%3Cpath d='M56.4868 60.5618C56.1035 60.5618 55.7202 60.4206 55.4176 60.118L41.115 45.8154C40.53 45.2304 40.53 44.2621 41.115 43.677C41.7 43.092 42.6683 43.092 43.2534 43.677L57.556 57.9796C58.141 58.5647 58.141 59.533 57.556 60.118C57.2534 60.4206 56.8701 60.5618 56.4868 60.5618V60.5618Z' fill='black' stroke='black' stroke-width='3'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;}
.board-top select {height:34px;min-width:80px;padding-right:15px;border:1px solid #cccccc;border-radius:3px; vertical-align:middle;font-size:13px;}
.board-top .date {position:relative;display:inline-block;padding-right:35px;width:150px;height:34px;border:1px solid #cccccc;border-radius:3px;}
.board-top .date input {height:100%;width:100%;border:none;padding-left:5px;font-size:12px;}
.board-top .date .ui-datepicker-trigger {position:absolute;top:50%;right:0;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);}
.board-top .txt {font-size:14px;color:#6f7474;margin-right:8px;}
.board-top .total {font-size:16px;color:#444;line-height:28px;}
@media all and (max-width:1260px) {
    .board-top {padding-top:0;}
    .board-top .left .total {font-size:0.875rem;padding-top:0;font-size:1.2rem;}
    .board-top .right * {font-size:0.688rem;}
    .board-top .right .input {width:50%;}
    .board-top .right .btn {width:20%;}
    .board-top .input {padding-right:28px;height:34px;}
    .board-top .input input {font-size:0.75rem;}
    .board-top select {height:28px;min-width:50px;font-size:0.75rem;}
    .board-top .date {padding-right:30px;width:120px;height:28px;}
    .board-top .date input {height:100%;width:100%;border:none;padding-left:5px;font-size:0.75rem;}
    .board-top .txt {font-size:0.75rem;margin-right:5px;}
    .board-top .total {font-size:0.875rem;}
    .board-top .info * {vertical-align:baseline;}
    .mh {display:none;}
    .board-search.ms {display:block;}
    .board-top .board-search.ms select {min-width:49%;}
    .board-top .right .board-search.ms {display:block;}
    .board-top .board-search {display:flex;}
    .board-top .board-search .input {flex:1;}
    .board-top .board-search * {margin:0 2px;}
    .board-top .board-search *:first-child {margin-left:0;}
    .board-top .board-search *:last-child {margin-right:0;}
}

/* 테이블 */
.board-type {margin-top:30px;}
.board-top + .board-type {margin-top:0;}
.board-type table {table-layout:fixed;width:100%;border-bottom:1px solid #d2d2d2;border-collapse:collapse;}
.board-type thead th:first-child {border-left:1px solid #d2d2d2;}
.board-type thead th:last-child {border-right:1px solid #d2d2d2;}
.board-type tr:hover {background:#ffffe6;}
.board-type th {padding:12px 5px;border-top:1px solid #d2d2d2;font-size:1.3rem;color:#444;background:#f8f8f8;text-align:center;}
.board-type th.rline {border-right:1px solid #d2d2d2;}
.board-type td {padding:15px 5px;border-top:1px solid #d2d2d2;font-size:1.3rem;text-align:center;color:#444;}
.board-type td.rline {border-right:1px solid #d2d2d2;}
.board-type td.right {text-align:right;padding-right:10px;}
.board-type td .tag-noti {height:22px;display:inline-flex;align-items:center;padding:0 5px;border-radius:4px;font-size:0.9rem; color:#fff;background:#333;}
.board-type td .user-thumb {display:inline-flex;margin-right:5px;}
.board-type td .user-thumb img {width:22px;height:22px;border-radius:100%;vertical-align:middle;}
.board-type .bg-noti {background:#eff7ff !important}
.board-type.view td {text-align:left;padding-left:20px;}

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


/* 페이징 */
.paging {padding:20px 0;text-align:center;clear:both;}
.paging a {display:inline-block;line-height:34px;min-width:34px;color:#aaaaaa;margin:0 3px;text-align:center;font-size:1.3rem;color:#aaaaaa;border:1px solid #dedede;border-radius:2px;padding:0 5px;}
.paging a.on {color:#2eacbc;font-weight:bold;background:#f9f9fa;}
.paging button {display:inline-block;line-height:34px;width:34px;border:none;background:none;outline:none;cursor:pointer;padding:0;}
.paging button img {max-width:100%;}
.paging button i {margin:0 -5px;font-weight:bold;font-size:1.3rem;color:#aaa;}
.paging button i:before {font-size:1.3rem;color:#aaa;}
.paging button + a {margin-left:5px;}
@media screen and (max-width:1260px) {
    .paging {padding:16px 0;}
    .paging a {line-height:27px;min-width:27px;margin:0 2px;border-radius:2px;font-size:1.2rem;padding:0 0.3rem;}
    .paging button {line-height:27px;width:27px;}
    .paging button i {margin:0 -4px;font-size:1.3rem;}
    .paging button i:before {font-size:1.3rem;}
    .paging button + a {margin-left:4px;}
}

/* 등록 */
input[type='text'],
input[type='password'] {height:38px;padding:0 10px;width:100%;box-sizing:border-box;font-size:13px;border-radius:3px;color:#777;border:1px solid #cccccc;}
input[type='text'].type2,
input[type='password'].type2 {height:28px;line-height:28px;}
select {height:38px;padding-left:9px;width:100%;font-size:15px;box-sizing:border-box;border-radius:3px;border:1px solid #cccccc;color:#777;}
select.st2 {color:#fff;height:38px;appearance:none;background:#333 url("data:image/svg+xml,%3Csvg width='35' height='20' viewBox='0 0 35 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.44389 0.0248175C1.37379 0.180835 0.468737 0.93353 0.112899 1.96339C0.0204116 2.23099 0 2.3916 0 2.85165C0 3.52484 0.108602 3.93191 0.417464 4.41632C0.567134 4.65105 2.50517 6.61732 8.00027 12.1096C14.8692 18.9751 15.4058 19.4997 15.7239 19.662C16.2314 19.9209 16.5664 20.0026 17.1097 19.9999C17.6632 19.9972 18.0234 19.9106 18.5028 19.6649C18.8261 19.4991 19.3391 18.9976 26.2309 12.1095C31.6323 6.71102 33.6654 4.649 33.809 4.42354C34.1354 3.9113 34.2312 3.55971 34.2306 2.87606C34.2302 2.39268 34.2104 2.2329 34.1178 1.96339C33.9098 1.35876 33.4799 0.816627 32.9198 0.452585C32.0294 -0.126122 30.8638 -0.150782 29.9177 0.389054C29.77 0.473338 27.4766 2.73025 23.4027 6.80024L17.1156 13.0814L10.8773 6.8478C6.66877 2.64245 4.54888 0.557476 4.36205 0.439791C3.81685 0.0965517 3.06606 -0.0659121 2.44389 0.0248175Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat right 10px top 50%;background-size:auto 7px;}
textarea {height:100px;width:100%;padding:9px;font-size:15px;box-sizing:border-box;border-radius:3px;border:1px solid #cccccc;color:#777;}

.board-type-create {margin-top:20px;}
.board-type-create > ul {display:flex;flex-wrap:wrap;}
.board-type-create li {display:flex;list-style:none;align-items:flex-start;width:100%;align-items:stretch;}
.board-type-create li.half {width:50%;}
.board-type-create li .th {height:100%;width:132px;padding:3px 0;padding-right:15px;white-space:nowrap;font-size:1.3rem;color:#777;font-weight:bold;}
.board-type-create li .th > strong {position:relative;display:block;padding:3px 0;padding-left:20px;font-size:1.3rem;height:100%;background:#eee;display:flex;flex-direction:row;align-items:center;}
.board-type-create li .td {flex:1;min-height:49px;padding:6px;padding-right:15px;font-size:1.3rem;vertical-align:middle;}
.board-type-create li:last-child .td {padding-right:0;}
.board-type-create li .td + .th {padding-left:30px;}
.board-type-create input[type='text'],
.board-type-create input[type='password'] {height:38px;padding:0 10px;width:100%;box-sizing:border-box;font-size:1.3rem;border-radius:3px;color:#777;border:1px solid #cccccc;}
.board-type-create select {height:38px;padding-left:9px;padding-right:15px;width:100%;font-size:1.3rem;box-sizing:border-box;border-radius:3px;border:1px solid #cccccc;color:#777;}
.board-type-create label {margin-left:9px;font-size:1.3rem;color:#666666;white-space:nowrap;}
.board-type-create textarea {padding:4px 9px;font-size:1.3rem;border:1px solid #cccccc;border-radius:3px;color:#777;}
.board-type-create .anti-doping {width:270px;}
@media screen and (max-width:1260px) {
    .board-type-create {margin-top:15px;}
    .board-type-create li.half {width:100%;}
    .board-type-create li .th {width:72px;padding-right:15px;font-size:1.3rem;}
    .board-type-create li .th > strong {padding-left:16px;}
    .board-type-create li .td {min-height:25px;padding:3px 0;font-size:1.3rem;}
    .board-type-create input[type='text'] ,
    .board-type-create input[type='password'] {width:100%;height:34px;padding:0 10px;width:100%;box-sizing:border-box;font-size:1.3rem;border-radius:3px;color:#777;}
    .board-type-create select {padding-left:4px;font-size:1.3rem;}
    .board-type-create label {margin-left:4px;font-size:1.3rem;}
    .board-type-create textarea {padding:2px 4px;font-size:1.3rem;}
    .board-type-create .mobile-style li {display:block;}
    .board-type-create .mobile-style li .th {display:block;width:35%;height:32px;clear:both;float:left;}
    .board-type-create .mobile-style li .th strong {padding-top:8px;}
    .board-type-create .mobile-style li .th strong .require {top:17px;}
    .board-type-create .mobile-style li .td {display:block;width:auto !important;min-height:32px;height:auto;float:none;overflow:hidden;}
    .board-type-create .mobile-style li .td + .th {padding-left:0;}
    .board-type-create .cell-box {display:block;margin-top:10px;}
    .board-type-create .cell-box .cell {display:block;width:auto;padding:0 0;}
    .board-type-create .cell-box .cell ~ .cell {margin-top:10px;}
    .board-type-create .cell-box.m-row {display:flex;align-items:center;}
    .board-type-create .cell-box.m-row .cell ~ .cell {margin-left:20px;}
    .board-type-create .anti-doping {width:100%;}
    .board-type-create .mobile-width-100 {width:100% !important;}
}

.reple-list-wrap .title {font-size:1.667rem;font-weight:700;}
.reple-list-wrap .title .num {margin-left:5px;}
.reple-list-wrap .reple-regist .regist-input {margin-top:15px;}
.reple-list-wrap .reple-regist .regist-input input {height:50px;padding:0 15px;font-size:1.3rem;width:100%;border:1px solid #aaa;}
.reple-list-wrap .reple-list .reple-list {border-top:1px solid #eee;margin-top:20px;background:#f9f9f9;}
.reple-list-wrap .reple-list li {padding:20px;border-bottom:1px solid #EEEEEE;}
.reple-list-wrap .reple-list li .from {font-size:1.1rem;display:flex;align-items:center;}
.reple-list-wrap .reple-list li .from > * {position:relative;}
.reple-list-wrap .reple-list li .from > * ~ * {padding-left:10px;}
.reple-list-wrap .reple-list li .from > * ~ *:before {content:'';position:absolute;top:50%;left:5px;display:block;width:2px;height:2px;border-radius:100%;background:#95969B;transform:translateY(-50%);}
.reple-list-wrap .reple-list li .from .name {color:#5DB1CB;}
.reple-list-wrap .reple-list li .txt {color:#222;margin-top:10px;font-size:1.1rem;}
.reple-list-wrap .reple-list li .info {margin-top:20px;display:flex;align-items:center;font-size:0.9rem;}
.reple-list-wrap .reple-list li .info > * ~ * {padding-left:18px;}
.reple-list-wrap .reple-list li .info > * {color:#95969B;font-size:0.9rem;display:flex;align-items:center;}
.reple-list-wrap .reple-list li .info > *  [class*=ico-] {margin-right:5px;background-size:100% 100%;width:13px;height:13px;display:inline-block;background-repeat:no-repeat;background-position:0 0;}
.reple-list-wrap .reple-list li .info > * .ico-time {background-image:url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6774 0.0780474C6.7853 1.05258 0.936164 7.05529 0.0756001 15.063C-0.269944 18.2799 0.583184 22.0006 2.345 24.96C6.4298 31.8215 14.8487 34.7572 22.3397 31.9322C30.1169 28.9994 34.548 20.5403 32.5023 12.5313C30.6688 5.35291 24.5653 0.375732 17.1563 0.0170779C16.3716 -0.0208526 15.2561 0.00654135 14.6774 0.0780474ZM19.8433 3.51862C24.5362 4.7102 28.2497 8.43765 29.4927 13.2041C29.8003 14.3835 29.8591 14.9132 29.8591 16.5055C29.8591 18.0977 29.8003 18.6275 29.4927 19.8068C28.2458 24.5883 24.5732 28.2659 19.7981 29.5145C17.788 30.0401 15.2145 30.0401 13.2043 29.5145C8.43025 28.266 4.76437 24.5962 3.50747 19.8068C2.97983 17.7961 2.97885 15.2181 3.50509 13.2141C4.91981 7.82669 9.30948 3.93755 14.8528 3.15997C16.1689 2.97552 18.3102 3.12935 19.8433 3.51862ZM15.7665 6.18907C14.981 6.61586 14.958 6.78121 14.958 12.01C14.958 15.8796 14.9963 16.8733 15.1575 17.1798C15.491 17.8139 20.1771 22.374 20.6048 22.4806C21.7067 22.7551 22.7428 21.7174 22.4681 20.6146C22.4092 20.3786 21.5302 19.3792 20.2081 18.0453L18.0445 15.8623V11.5409C18.0445 6.79526 18.014 6.59999 17.2073 6.18233C16.6955 5.91738 16.263 5.91934 15.7665 6.18907Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-up {background-image:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.3613 0.237031C14.6787 0.547392 14.2993 0.999437 13.4081 2.56454C12.0569 4.93703 9.64146 8.58764 8.4135 10.1131C8.10856 10.492 8.08736 10.4975 7.77839 10.281C7.50055 10.0861 7.01812 10.0568 4.08245 10.0568C0.958296 10.0568 0.682466 10.0761 0.389463 10.3135L0.0727141 10.5703L0.036357 19.4532L0 28.3363L0.394964 28.7317L0.789927 29.1271H4.09748H7.40503L7.80187 28.7298L8.19871 28.3326L8.89835 28.8652C9.28312 29.1581 9.93003 29.5333 10.3359 29.6989C11.0488 29.9898 11.2232 30 15.501 30H19.9282L20.8003 29.5829C22.3271 28.8524 22.7343 28.3687 26.2074 23.1588C27.983 20.4952 29.5446 18.0301 29.6779 17.6806C30.4558 15.6399 29.787 13.2683 28.0774 12.0054C26.8959 11.1326 26.1587 10.9969 22.5973 10.9969C20.8711 10.9969 19.4575 10.9515 19.4561 10.8962C19.4548 10.8409 19.7688 9.35891 20.154 7.6031C20.8145 4.59256 20.8455 4.36788 20.6971 3.65973C20.6106 3.24677 20.3833 2.64176 20.1921 2.31515C19.8098 1.66206 18.6198 0.63952 17.7817 0.243746C17.0987 -0.0787017 16.0618 -0.081522 15.3613 0.237031ZM17.4193 2.62511C18.1847 3.15276 18.5179 3.6412 18.5222 4.24178C18.5237 4.44859 18.1485 6.32929 17.6883 8.42097C16.9103 11.957 16.8656 12.2494 17.0524 12.5823C17.4252 13.2474 17.6222 13.2758 21.8443 13.278C24.8313 13.2794 25.8762 13.3234 26.2044 13.4609C26.8127 13.7158 27.6092 14.6454 27.7184 15.2277C27.9524 16.4768 27.8927 16.5957 24.3671 21.8901C20.7642 27.3005 20.6191 27.4649 19.1705 27.7758C18.8052 27.8542 17.1038 27.9184 15.3895 27.9184C10.9857 27.9184 10.5937 27.7865 9.05478 25.7864L8.18932 24.6615V19.1008C8.18932 14.2283 8.21481 13.5303 8.39499 13.4612C9.07987 13.1981 12.5575 8.34375 14.8267 4.48351C15.9739 2.5319 16.2686 2.13331 16.5651 2.13331C16.6427 2.13331 17.027 2.35463 17.4193 2.62511ZM6.04278 19.5248V26.844H4.16456H2.28633V19.5248V12.2056H4.16456H6.04278V19.5248Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-down {background-image:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6387 29.763C15.3213 29.4526 15.7007 29.0006 16.5919 27.4355C17.9431 25.063 20.3585 21.4124 21.5865 19.8869C21.8914 19.508 21.9126 19.5025 22.2216 19.719C22.4994 19.9139 22.9819 19.9432 25.9175 19.9432C29.0417 19.9432 29.3175 19.9239 29.6105 19.6865L29.9273 19.4297L29.9636 10.5468L30 1.66368L29.605 1.2683L29.2101 0.872934H25.9025H22.595L22.1981 1.27018L21.8013 1.66744L21.1016 1.13481C20.7169 0.841911 20.07 0.466685 19.6641 0.301096C18.9512 0.0102084 18.7768 1.22954e-06 14.499 1.22954e-06H10.0718L9.19975 0.417129C7.67289 1.14757 7.26571 1.63131 3.79261 6.84124C2.01702 9.50476 0.455411 11.9699 0.322057 12.3194C-0.455796 14.3601 0.212985 16.7317 1.92257 17.9946C3.10411 18.8674 3.84131 19.0031 7.40269 19.0031C9.12891 19.0031 10.5425 19.0485 10.5439 19.1038C10.5452 19.1591 10.2312 20.6411 9.84599 22.3969C9.18553 25.4074 9.15454 25.6321 9.30291 26.3403C9.38945 26.7532 9.61671 27.3582 9.80789 27.6849C10.1902 28.3379 11.3802 29.3605 12.2183 29.7563C12.9013 30.0787 13.9382 30.0815 14.6387 29.763ZM12.5807 27.3749C11.8153 26.8472 11.4821 26.3588 11.4778 25.7582C11.4763 25.5514 11.8515 23.6707 12.3117 21.579C13.0897 18.043 13.1344 17.7506 12.9476 17.4177C12.5748 16.7526 12.3778 16.7242 8.15572 16.722C5.16868 16.7206 4.12385 16.6766 3.79556 16.5391C3.18729 16.2842 2.39078 15.3546 2.28158 14.7723C2.04761 13.5232 2.10731 13.4043 5.63287 8.10995C9.23584 2.69951 9.38086 2.53513 10.8295 2.22423C11.1948 2.1458 12.8962 2.08161 14.6105 2.08161C19.0143 2.08161 19.4063 2.21349 20.9452 4.21358L21.8107 5.33845V10.8992C21.8107 15.7717 21.7852 16.4697 21.605 16.5388C20.9201 16.8019 17.4425 21.6562 15.1733 25.5165C14.0261 27.4681 13.7314 27.8667 13.4349 27.8667C13.3573 27.8667 12.973 27.6454 12.5807 27.3749ZM23.9572 10.4752V3.15599H25.8354H27.7137V10.4752V17.7944H25.8354H23.9572V10.4752Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
.reple-list-wrap .reple-list li .info > * .ico-reple {background-image:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6037 0.0350711C13.507 0.0581542 13.0325 0.140293 12.5491 0.217627C9.98691 0.627851 7.02794 2.03358 5.09387 3.75919C2.605 5.97998 1.14045 8.42175 0.332069 11.6983C0.0965508 12.6525 0.0844819 13.0405 0.0432369 20.9695L0 29.2447L0.366401 29.611C0.954611 30.1992 1.43244 30.1319 2.35811 29.3302C3.273 28.5379 4.06767 28.1496 5.15691 27.9629C6.25143 27.7753 7.15964 27.9322 8.52061 28.5443C9.90911 29.1687 11.2746 29.5891 12.648 29.815C14.1181 30.0569 16.8514 29.9723 18.3021 29.6401C24.1041 28.3117 28.434 23.8122 29.7429 17.7513C30.0673 16.2497 30.0261 13.0511 29.6636 11.5811C29.1458 9.48111 28.3532 7.76382 27.1508 6.13675C24.9285 3.12997 21.7429 1.04967 18.1545 0.262035C17.3768 0.0913138 14.0608 -0.0741344 13.6037 0.0350711ZM17.6571 2.60398C21.8392 3.50047 25.4104 6.57873 26.8525 10.5299C27.4189 12.0819 27.5791 13.001 27.5872 14.7448C27.6038 18.3583 26.2919 21.5208 23.7196 24.0681C20.0132 27.7386 14.4607 28.6239 9.40984 26.3496C7.92759 25.6822 6.99958 25.4897 5.57733 25.5547C4.50356 25.6038 3.60355 25.8201 2.56012 26.2797C2.36631 26.3651 2.35507 26.0424 2.35507 20.4079C2.35507 17.0493 2.40733 14.0287 2.47482 13.4908C2.90824 10.0341 4.61428 7.03957 7.3054 5.01165C8.90212 3.80852 11.0457 2.86445 12.8421 2.57316C13.2932 2.50005 13.7941 2.41767 13.9552 2.39025C14.5199 2.29394 16.8339 2.42752 17.6571 2.60398ZM9.50674 13.6076C8.67785 13.8957 8.31825 14.9828 8.79374 15.7625C9.08234 16.2359 9.43514 16.4242 10.033 16.4242C10.8541 16.4242 11.4946 15.791 11.4946 14.9791C11.4946 13.9601 10.4888 13.2662 9.50674 13.6076ZM14.5452 13.6076C13.2843 14.046 13.3294 15.9515 14.6105 16.3601C15.8697 16.7618 16.97 15.4609 16.3632 14.2877C16.0366 13.656 15.2512 13.3621 14.5452 13.6076ZM19.5836 13.6076C18.3227 14.046 18.3679 15.9515 19.6489 16.3601C20.9082 16.7618 22.0084 15.4609 21.4017 14.2877C21.075 13.656 20.2896 13.3621 19.5836 13.6076Z' fill='%23999999'/%3E%3C/svg%3E%0A");}
@media screen and (max-width:1260px) {
    .reple-list-wrap .title {font-size:1.25rem;}
    .reple-list-wrap .reple-regist .regist-input input {font-size:1rem;}
    .reple-list-wrap .reple-list li .from {font-size:0.9rem;}
    .reple-list-wrap .reple-list li .txt {font-size:0.9rem;}
    .reple-list-wrap .reple-list li .info {font-size:0.7rem;}
    .reple-list-wrap .reple-list li .info > * {font-size:0.7rem;}
}

.cell-box {display:flex;width:100%;align-items:center;}
.cell-box .cell {padding:0 3px;}
.cell-box .cell:first-child {padding-left:0;}
.cell-box .cell:last-child {padding-right:0;}

/* 갤러리 썸네일 등록 시 이미지 Crop */
.crop {position:relative;display:block;}
.crop .crop-wrap span {width:120px;height:120px;border-radius:0%;overflow:hidden;display:block;}
.crop .crop-wrap span .crop-img {width:100%;}
.crop .crop-wrap .thumbnail-img {display:none;}
.crop .crop-btn {margin-top:5px;}
.crop .crop-btn a {position:relative;border:1px solid #dbdbdb;display:inline-block;height:30px;color:#666;line-height:30px;min-width:50px;text-align:center;padding:0 10px;margin-right:4px;}
@media screen and (max-width:1260px) {
    .crop .crop-btn a {font-size:0.813rem;}
}

/* PC 상세 */
.board-read-tit {display:flex;align-items:center;border-top:1px solid #e2e2e2;padding:12px 0 !important;margin-top:20px;margin-bottom:15px;font-size:1.3rem;border-bottom:1px solid #e2e2e2;background:#f8f8f8;padding-left:10px !important;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;}
.board-read-tit .right {margin-left:auto;padding-right:15px;}
.board-read-tit .right > * ~ * {margin-left:15px;}
.board-read-info .left span a img {vertical-align:top;}
.board-read-info .btn-ico-type {display:inline-flex;align-items:center;}
.board-read-info .btn-ico-type i {margin-right:5px;background-size:auto 100% !important;}
.board-read-info .btn-ico-type span {font-size:14px;}
.board-read-info .ico-file {display:inline-block;width:18px;height:18px;background:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 6.54167V27.5C30 28.1667 29.75 28.75 29.25 29.25C28.75 29.75 28.1667 30 27.5 30H2.5C1.83333 30 1.25 29.75 0.75 29.25C0.25 28.75 0 28.1667 0 27.5V2.5C0 1.83333 0.25 1.25 0.75 0.75C1.25 0.25 1.83333 0 2.5 0H23.4583L30 6.54167ZM27.5 7.66667L22.3333 2.5H2.5V27.5H27.5V7.66667ZM14.9902 24.7917C16.1912 24.7917 17.2153 24.3713 18.0625 23.5306C18.9097 22.69 19.3333 21.6691 19.3333 20.4681C19.3333 19.2672 18.913 18.2431 18.0723 17.3958C17.2316 16.5486 16.2108 16.125 15.0098 16.125C13.8088 16.125 12.7847 16.5453 11.9375 17.386C11.0903 18.2267 10.6667 19.2475 10.6667 20.4485C10.6667 21.6495 11.087 22.6736 11.9277 23.5208C12.7684 24.3681 13.7892 24.7917 14.9902 24.7917ZM4.70833 10.6667H19.625V4.70833H4.70833V10.6667ZM2.5 7.66667V27.5V2.5V7.66667Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-view {display:inline-block;width:24px;height:20px;background:url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6023 4.8725C11.1613 3.73162 10.3956 2.74498 9.39989 2.03453C8.4042 1.32408 7.22215 0.920965 5.99984 0.875C4.77753 0.920965 3.59549 1.32408 2.59979 2.03453C1.6041 2.74498 0.838401 3.73162 0.39734 4.8725C0.367553 4.95489 0.367553 5.04511 0.39734 5.1275C0.838401 6.26838 1.6041 7.25502 2.59979 7.96547C3.59549 8.67592 4.77753 9.07903 5.99984 9.125C7.22215 9.07903 8.4042 8.67592 9.39989 7.96547C10.3956 7.25502 11.1613 6.26838 11.6023 5.1275C11.6321 5.04511 11.6321 4.95489 11.6023 4.8725ZM5.99984 8.375C4.01234 8.375 1.91234 6.90125 1.15109 5C1.91234 3.09875 4.01234 1.625 5.99984 1.625C7.98734 1.625 10.0873 3.09875 10.8486 5C10.0873 6.90125 7.98734 8.375 5.99984 8.375Z' fill='black'/%3E%3Cpath d='M6 2.75C5.55499 2.75 5.11998 2.88196 4.74997 3.12919C4.37996 3.37643 4.09157 3.72783 3.92127 4.13896C3.75097 4.5501 3.70642 5.0025 3.79323 5.43895C3.88005 5.87541 4.09434 6.27632 4.40901 6.59099C4.72368 6.90566 5.12459 7.11995 5.56105 7.20677C5.99751 7.29358 6.4499 7.24903 6.86104 7.07873C7.27217 6.90843 7.62357 6.62004 7.87081 6.25003C8.11804 5.88002 8.25 5.44501 8.25 5C8.25 4.40326 8.01295 3.83097 7.59099 3.40901C7.16903 2.98705 6.59674 2.75 6 2.75ZM6 6.5C5.70333 6.5 5.41332 6.41203 5.16665 6.2472C4.91997 6.08238 4.72771 5.84811 4.61418 5.57402C4.50065 5.29994 4.47095 4.99834 4.52882 4.70736C4.5867 4.41639 4.72956 4.14912 4.93934 3.93934C5.14912 3.72956 5.41639 3.5867 5.70737 3.52882C5.99834 3.47094 6.29994 3.50065 6.57403 3.61418C6.84812 3.72771 7.08238 3.91997 7.24721 4.16664C7.41203 4.41332 7.5 4.70333 7.5 5C7.5 5.39782 7.34197 5.77936 7.06066 6.06066C6.77936 6.34196 6.39783 6.5 6 6.5Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-up {display:inline-block;width:20px;height:20px;background:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.3613 0.237031C14.6787 0.547392 14.2993 0.999437 13.4081 2.56454C12.0569 4.93703 9.64146 8.58764 8.4135 10.1131C8.10856 10.492 8.08736 10.4975 7.77839 10.281C7.50055 10.0861 7.01812 10.0568 4.08245 10.0568C0.958296 10.0568 0.682466 10.0761 0.389463 10.3135L0.0727141 10.5703L0.036357 19.4532L0 28.3363L0.394964 28.7317L0.789927 29.1271H4.09748H7.40503L7.80187 28.7298L8.19871 28.3326L8.89835 28.8652C9.28312 29.1581 9.93003 29.5333 10.3359 29.6989C11.0488 29.9898 11.2232 30 15.501 30H19.9282L20.8003 29.5829C22.3271 28.8524 22.7343 28.3687 26.2074 23.1588C27.983 20.4952 29.5446 18.0301 29.6779 17.6806C30.4558 15.6399 29.787 13.2683 28.0774 12.0054C26.8959 11.1326 26.1587 10.9969 22.5973 10.9969C20.8711 10.9969 19.4575 10.9515 19.4561 10.8962C19.4548 10.8409 19.7688 9.35891 20.154 7.6031C20.8145 4.59256 20.8455 4.36788 20.6971 3.65973C20.6106 3.24677 20.3833 2.64176 20.1921 2.31515C19.8098 1.66206 18.6198 0.63952 17.7817 0.243746C17.0987 -0.0787017 16.0618 -0.081522 15.3613 0.237031ZM17.4193 2.62511C18.1847 3.15276 18.5179 3.6412 18.5222 4.24178C18.5237 4.44859 18.1485 6.32929 17.6883 8.42097C16.9103 11.957 16.8656 12.2494 17.0524 12.5823C17.4252 13.2474 17.6222 13.2758 21.8443 13.278C24.8313 13.2794 25.8762 13.3234 26.2044 13.4609C26.8127 13.7158 27.6092 14.6454 27.7184 15.2277C27.9524 16.4768 27.8927 16.5957 24.3671 21.8901C20.7642 27.3005 20.6191 27.4649 19.1705 27.7758C18.8052 27.8542 17.1038 27.9184 15.3895 27.9184C10.9857 27.9184 10.5937 27.7865 9.05478 25.7864L8.18932 24.6615V19.1008C8.18932 14.2283 8.21481 13.5303 8.39499 13.4612C9.07987 13.1981 12.5575 8.34375 14.8267 4.48351C15.9739 2.5319 16.2686 2.13331 16.5651 2.13331C16.6427 2.13331 17.027 2.35463 17.4193 2.62511ZM6.04278 19.5248V26.844H4.16456H2.28633V19.5248V12.2056H4.16456H6.04278V19.5248Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-down {display:inline-block;width:20px;height:20px;background:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6387 29.763C15.3213 29.4526 15.7007 29.0006 16.5919 27.4355C17.9431 25.063 20.3585 21.4124 21.5865 19.8869C21.8914 19.508 21.9126 19.5025 22.2216 19.719C22.4994 19.9139 22.9819 19.9432 25.9175 19.9432C29.0417 19.9432 29.3175 19.9239 29.6105 19.6865L29.9273 19.4297L29.9636 10.5468L30 1.66368L29.605 1.2683L29.2101 0.872934H25.9025H22.595L22.1981 1.27018L21.8013 1.66744L21.1016 1.13481C20.7169 0.841911 20.07 0.466685 19.6641 0.301096C18.9512 0.0102084 18.7768 1.22954e-06 14.499 1.22954e-06H10.0718L9.19975 0.417129C7.67289 1.14757 7.26571 1.63131 3.79261 6.84124C2.01702 9.50476 0.455411 11.9699 0.322057 12.3194C-0.455796 14.3601 0.212985 16.7317 1.92257 17.9946C3.10411 18.8674 3.84131 19.0031 7.40269 19.0031C9.12891 19.0031 10.5425 19.0485 10.5439 19.1038C10.5452 19.1591 10.2312 20.6411 9.84599 22.3969C9.18553 25.4074 9.15454 25.6321 9.30291 26.3403C9.38945 26.7532 9.61671 27.3582 9.80789 27.6849C10.1902 28.3379 11.3802 29.3605 12.2183 29.7563C12.9013 30.0787 13.9382 30.0815 14.6387 29.763ZM12.5807 27.3749C11.8153 26.8472 11.4821 26.3588 11.4778 25.7582C11.4763 25.5514 11.8515 23.6707 12.3117 21.579C13.0897 18.043 13.1344 17.7506 12.9476 17.4177C12.5748 16.7526 12.3778 16.7242 8.15572 16.722C5.16868 16.7206 4.12385 16.6766 3.79556 16.5391C3.18729 16.2842 2.39078 15.3546 2.28158 14.7723C2.04761 13.5232 2.10731 13.4043 5.63287 8.10995C9.23584 2.69951 9.38086 2.53513 10.8295 2.22423C11.1948 2.1458 12.8962 2.08161 14.6105 2.08161C19.0143 2.08161 19.4063 2.21349 20.9452 4.21358L21.8107 5.33845V10.8992C21.8107 15.7717 21.7852 16.4697 21.605 16.5388C20.9201 16.8019 17.4425 21.6562 15.1733 25.5165C14.0261 27.4681 13.7314 27.8667 13.4349 27.8667C13.3573 27.8667 12.973 27.6454 12.5807 27.3749ZM23.9572 10.4752V3.15599H25.8354H27.7137V10.4752V17.7944H25.8354H23.9572V10.4752Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info .ico-share {display:inline-block;width:20px;height:20px;background:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.7897 3.51867L15.7586 7.0756L15.348 7.10656C14.2922 7.18631 12.6002 7.53487 11.5181 7.89575C8.96472 8.74722 6.91164 10.0361 4.90113 12.0502C2.304 14.6518 0.814655 17.5121 0.213731 21.0522C0.00564207 22.2777 -0.0181692 22.8806 0.00927879 26.2198L0.0404803 30L1.25558 27.1885C2.5691 24.1494 3.24861 22.9862 4.64659 21.384C7.22353 18.4305 11.0188 16.478 15.1428 15.9841L15.8172 15.9034V19.4451C15.8172 21.6381 15.8598 22.972 15.929 22.9477C16.0835 22.8938 29.9991 11.5464 30 11.4737C30.0008 11.409 16.074 0.0620186 15.9179 0.000210993C15.8644 -0.021017 15.8067 1.56229 15.7897 3.51867ZM22.4821 7.65532C25.0097 9.71585 27.078 11.4343 27.078 11.474C27.078 11.5138 24.9666 13.2704 22.386 15.3778L17.694 19.2094V16.6316V14.0539L16.8436 14.0548C11.2627 14.0611 5.70076 16.8268 2.39256 21.2406C2.20993 21.4843 2.03691 21.66 2.00794 21.6311C1.92337 21.5466 2.19797 20.2885 2.52253 19.2729C3.21917 17.0935 4.33117 15.2382 5.96057 13.5371C8.69705 10.6804 12.1883 9.0898 16.0812 8.92631L17.694 8.85864V6.3447C17.694 4.96206 17.7372 3.84835 17.7901 3.86993C17.8429 3.89139 19.9543 5.5948 22.4821 7.65532Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.board-read-info {display:flex;flex-direction:row;align-items:center;font-size:1.2rem;border-bottom:1px solid #ddd;padding:0 11px 12px 11px;}
.board-read-info .bar {color:#ccc;font-size:10px;margin:0 10px;}
.board-read-info .right {margin-left:auto;}
.board-read-info .right > * ~ * {margin-left:15px;}
.board-read-content {padding:20px 10px;font-size:1.3rem;white-space: pre-line;}

/* 모바일웹 목록, 상세 */
.board-mobile {font-size:14px;}
.board-mobile ul {border-bottom:1px solid #ddd;}
.board-mobile ul li {border-top:1px solid #ddd;}
.board-mobile ul li.bg-noti {background:#eff7ff !important;}
.board-mobile ul li .tag-noti {margin-bottom:7px;height:20px;display:inline-flex;align-items:center;padding:0 5px;border-radius:4px;font-size:0.8rem; color:#fff;background:#333;}
.board-mobile ul li .user-thumb {display:inline-flex;margin-right:5px;}
.board-mobile ul li .user-thumb img {width:22px;height:22px;border-radius:100%;vertical-align:middle;}
.board-mobile .article {padding:15px 0;display:flex;align-items:center;}
.board-mobile .article > * ~ * {margin-left:10px;}
.board-mobile .article .desc {flex:1;}
.board-mobile .article .desc .tit {overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:1.3rem;word-wrap:break-word;line-height:1.2em;height:2.4em;}
.board-mobile .article .desc .info {display:flex;align-items:center;font-size:1.3rem;color:#999;margin-top:10px;}
.board-mobile .article .desc .info * ~ * {margin-left:5px;font-weight:300;}
.board-mobile .article .img img {height:70px;border-radius:9px;}
.board-mobile .article .reple {background:#f0f0f0;border-radius:6px;padding:13px 5px;width:70px;}
.board-mobile .article .reple b {font-size:15px;color:#000;font-weight:500;display:block;text-align:center;}
.board-mobile .article .reple span {display:block;margin-top:3px;color:#666;font-size:13px;text-align:center;}
@media screen and (max-width:1260px) {
    .board-mobile .article .desc .tit {padding:10px 10px 4px 10px;font-size:2rem;}
    .board-mobile .article .desc .info {font-size:1rem;}
    .board-mobile .article .reple b {font-size:0.938rem;}
    .board-mobile .article .reple span {font-size:0.813rem;}
    .board-mobile .detail {font-size:1rem;}
}
@media screen and (max-width:768px) {
    .board-mobile .article .desc .tit {font-size:1.3rem;}
    .board-mobile .article .desc .info {font-size:1.2rem;}
    .board-mobile .article .reple b {font-size:1.2rem;}
    .board-mobile .article .reple span {font-size:1rem;}
    .board-mobile .detail {font-size:1.3rem;}
}

.board-read-tit.type2 {background:#fff;border:none;font-weight:bold;font-size:20px;}
.board-read-info.type2 {flex-wrap:wrap;color:#777;}
.board-read-info.type2 .user .thumb {display:inline-block;width:30px;height:30px;border-radius:100%;margin-right:5px;overflow:hidden;}
.board-read-info.type2 .user .thumb:empty {background:#ddd;border:1px solid #ccc;}
.board-read-info.type2 .time {display:flex;align-items:center;}
.board-read-info.type2 .time i {display:inline-block;margin-right:5px;width:14px;height:14px;background:url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.6774 0.0780474C6.78531 1.05258 0.936164 7.05529 0.0756001 15.063C-0.269944 18.2799 0.583184 22.0006 2.345 24.96C6.4298 31.8215 14.8487 34.7572 22.3397 31.9322C30.1169 28.9994 34.548 20.5403 32.5023 12.5313C30.6688 5.35291 24.5653 0.375732 17.1563 0.0170779C16.3716 -0.0208526 15.2561 0.00654135 14.6774 0.0780474ZM19.8433 3.51862C24.5362 4.7102 28.2497 8.43765 29.4927 13.2041C29.8003 14.3835 29.8591 14.9132 29.8591 16.5055C29.8591 18.0977 29.8003 18.6275 29.4927 19.8068C28.2458 24.5883 24.5732 28.2659 19.7981 29.5145C17.788 30.0401 15.2145 30.0401 13.2043 29.5145C8.43025 28.266 4.76437 24.5962 3.50747 19.8068C2.97983 17.7961 2.97885 15.2181 3.50509 13.2141C4.91981 7.82669 9.30948 3.93755 14.8528 3.15997C16.1689 2.97552 18.3102 3.12935 19.8433 3.51862ZM15.7665 6.18907C14.981 6.61586 14.958 6.78121 14.958 12.01C14.958 15.8796 14.9963 16.8733 15.1575 17.1798C15.491 17.8139 20.1771 22.374 20.6048 22.4806C21.7067 22.7551 22.7428 21.7174 22.4681 20.6146C22.4092 20.3786 21.5302 19.3792 20.2081 18.0453L18.0445 15.8623V11.5409C18.0445 6.79526 18.014 6.59999 17.2073 6.18233C16.6955 5.91738 16.263 5.91934 15.7665 6.18907Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;}
.board-read-info.type2 .info .label {margin-right:5px;}
.board-read-info.type2 .info .num {font-weight:500;}
.board-read-info.type2 > * {position:relative;display:inline-block;white-space:nowrap;}
.board-read-info.type2 > * ~ * {padding-left:20px;}
.board-read-info.type2 > * ~ *:before {content:'';display:block;position:absolute;top:50%;left:10px;transform:translateY(-50%);-webkit-transform:translateY(-50%);width:2px;height:2px;border-radius:100%;background:#333;}
@media screen and (max-width:768px) {
    .board-read-info.type2 {font-size:1rem;}
    .board-read-info.type2 .user {width:100%;margin-bottom:5px;}
    .board-read-info.type2 .user + span {padding-left:0;}
    .board-read-info.type2 .user + span:before {display:none;}
}

/* 이전 글 다음 글 */
.data-prev-next {margin-top:20px;color:#222;}
.data-prev-next table {width:100%;border-top:1px solid #dbdbdb}
.data-prev-next th {padding:10px 10px;text-align:center;font-size:14px;border-bottom:1px solid #dbdbdb;}
.data-prev-next td {padding:11px 20px;font-size:14px;border-bottom:1px solid #cccccc;text-align:left;}
.data-prev-next th span {display:inline-block;position:relative;padding-right:16px;}
.data-prev-next th span:after {content:'';display:inline-block;position:absolute;top:9px;right:0;width:10px;height:6px;}
.data-prev-next .next th span:after {background-position:0 -6px;}
@media all and (max-width:1260px) {
    .data-prev-next th {font-size:0.875rem;}
    .data-prev-next td {font-size:0.875rem;}
}

/* FAQ 게시판 */
.faq-question {position:relative;font-size:1.3rem !important;margin:5px 0 0 0 !important;padding:12px 100px 12px 10px;border-bottom:1px solid #ccc;cursor:pointer;}
.faq-question:after {content:"";display:block;content:"";display:block;position:absolute;top:50%;right:15px;width :0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid #505050;transform:translateY(-50%);-webkit-transform:translateY(-50%);}
.faq-answer {background:#ebebeb;overflow:hidden;display:none;padding:20px 15px;border:1px solid #cccccc;font-size:1.3rem}
@media screen and (max-width:768px) {
    .faq-question {margin:5px 0 0 0 !important;padding:11px 90px 11px 9px;}
    .faq-question:after {right:14px;border-left:5px solid transparent;border-right:5px solid transparent;border-top:7px solid #505050;}
    .faq-answer {padding:18px 14px;}
}

/* ADTECH 팝업
.popup-layer2 {display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:100}
.popup-layer2 .dim {position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.5);}
.popup-layer2 .wrap {position:fixed;top:50%;left:50%;width:500px;background:#fff;padding:30px;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);max-width:90vw;}
.popup-layer2 .wrap .popup .header .tit {display:block;padding:0 0 10px;font-size:18px;color:#000;font-weight:500;}
.popup-layer2 .wrap .popup .header .close {position:absolute;top:15px;right:20px;width:35px;height:35px;z-index:60;}
.popup-layer2 .wrap .popup .header .close span {position:absolute;top:50%;left:50%;display:inline-block;width:22px;height:0;text-indent:-9999px;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
.popup-layer2 .wrap .popup .header .close span:after {display:block;content:'';position:absolute;top:1px;left:0;display:inline-block;width:22px;height:2px;background:#000;transform:rotate(45deg);-webkit-transform:rotate(45deg);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
.popup-layer2 .wrap .popup .header .close span:before {display:block;content:'';position:absolute;top:0;left:0;display:inline-block;width:22px;height:2px;background:#000;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
 */
/* ADTECH 팝업 */
.popup-layer2 {display:none;position:fixed;top:0;left:0;z-index:100}
.popup-layer2 .dim {position:absolute;top:5vh;left:5vw;background:rgba(0,0,0,0.5);}
.popup-layer2 .wrap {position:fixed;top:50%;left:50%;width:500px;background:#fff;padding:30px;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);max-width:90vw;}
.popup-layer2 .wrap .popup .header .tit {display:block;padding:0 0 10px;font-size:18px;color:#000;font-weight:500;}
.popup-layer2 .wrap .popup .header .close {position:absolute;top:15px;right:20px;width:35px;height:35px;z-index:60;}
.popup-layer2 .wrap .popup .header .close span {position:absolute;top:50%;left:50%;display:inline-block;width:22px;height:0;text-indent:-9999px;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
.popup-layer2 .wrap .popup .header .close span:after {display:block;content:'';position:absolute;top:1px;left:0;display:inline-block;width:22px;height:2px;background:#000;transform:rotate(45deg);-webkit-transform:rotate(45deg);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
.popup-layer2 .wrap .popup .header .close span:before {display:block;content:'';position:absolute;top:0;left:0;display:inline-block;width:22px;height:2px;background:#000;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);-webkit-transition:all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);}
.popup-layer2 .bottom {position:relative;overflow: hidden; padding: 10px 20px; background: rgba(0,0,0,0.5);}
.popup-layer2 .bottom .btn-close {position:absolute;top:0;right:0;width:40px;height:100%;background:url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.748738 3.58579C-0.032311 2.80474 -0.0323117 1.53841 0.748737 0.757359C1.52979 -0.0236896 2.79612 -0.0236896 3.57716 0.757359L26.9117 24.0919C27.6927 24.8729 27.6927 26.1393 26.9117 26.9203C26.1306 27.7014 24.8643 27.7014 24.0833 26.9203L0.748738 3.58579Z' fill='white'/%3E%3Cpath d='M23.9203 0.585787C24.7014 -0.195262 25.9677 -0.195262 26.7487 0.585786C27.5298 1.36683 27.5298 2.63316 26.7487 3.41421L3.41421 26.7487C2.63317 27.5298 1.36683 27.5298 0.585786 26.7487C-0.195262 25.9677 -0.195262 24.7014 0.585786 23.9203L23.9203 0.585787Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 18px;}
.popup-layer2 .bottom .check {float: left; cursor: pointer;}
.popup-layer2 .bottom .check span {display: block; float: left; margin: 0 5px 0 0; width: 20px; height: 20px; border-radius: 50%; background: #FFF; text-align:center; display:flex; flex-direction: column; justify-content:center; align-items:center;}
.popup-layer2 .bottom .check p { margin: 0; line-height: 20px; font-size: 15px; color: #FFF;}
.popup-layer2 .bottom .check label {display:flex;}
.popup-layer2 .bottom .check .inp {display:inline-block;position:relative;width:20px;height:20px;vertical-align: middle;}
.popup-layer2 .bottom .check .inp input {opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
.popup-layer2 .bottom .check .inp .ic {display:block;overflow:hidden;position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;}
.popup-layer2 .bottom .check .inp input:checked + .ic {background:#fff url("data:image/svg+xml,%3Csvg width='32' height='20' viewBox='0 0 32 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.9805 0.0714592C27.3794 0.233889 27.3974 0.218485 24.8063 2.79745C23.4474 4.14997 20.4644 7.14661 18.1773 9.45654L14.0191 13.6565L9.0221 8.64287C4.55074 4.15664 3.99513 3.61549 3.74 3.49848C3.31779 3.3048 2.99743 3.23293 2.55319 3.2323C1.43952 3.23068 0.409745 3.99289 0.0880665 5.05695C0.000566899 5.34644 -0.0114936 5.48395 0.00808637 5.9704C0.0333792 6.59908 0.117021 6.88405 0.395389 7.29059C0.683669 7.71161 11.7058 18.8454 12.4516 19.469C13.2671 20.1508 14.5989 20.1796 15.4875 19.5347C15.7886 19.3161 24.6927 10.379 28.7589 6.21407C31.0006 3.91802 31.0443 3.86426 31.1763 3.23813C31.3834 2.25649 31.1557 1.46239 30.47 0.774897C30.0738 0.377579 29.7669 0.1969 29.2711 0.0689571C28.9109 -0.0239581 28.3295 -0.0228297 27.9805 0.0714592Z' fill='%236D6868'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 8px;}
.popup-layer2.window-popup {display:block;position:relative;top:0;left:0;}
@media all and (max-width:768px) {
    .popup-layer2 {left:0 !important; top:0 !important;}
    .popup-layer2 .pop-content img {height:auto !important; max-width:100%;}
}

.adtech-wrapper .table {border-top:3px solid #1e1e1f;border-bottom:1px solid #bdc2c6;}
.adtech-wrapper .table dl {display:table;table-layout:fixed;width:100%;font-size:14px;}
.adtech-wrapper .table dt,
.adtech-wrapper .table dd {display:table-cell;padding:10px 0;vertical-align:middle;}
.adtech-wrapper .table dt {width:110px;font-weight:600;color:#1e1e1f;}

.adtech-wrapper .total-box {border:2px solid #000;margin-top:20px;}
.adtech-wrapper .total-box .title {font-size:16px;background:#f4f4f4;padding:15px 10px;line-height:1.2;}
.adtech-wrapper .total-box .goods-info {padding:20px;}
.adtech-wrapper .total-box .goods-info .goods-brand {font-size:12px;font-weight:600;letter-spacing:-0.21px;color:#1e1e1f;}
.adtech-wrapper .total-box .goods-info .goods-name {margin-top:8px;font-size:14px;letter-spacing:-0.29px;color:#1e1e1f;}
.adtech-wrapper .total-box .goods-info .goods-point {margin-top:5px;}
.adtech-wrapper .total-box .goods-info .goods-point > ul > li {font-size:16px;font-weight:600;letter-spacing:-0.3px;color:#1e1e1f;line-height:25px;position:relative;margin-bottom:5px;}
.adtech-wrapper .total-box .goods-info .goods-point > ul > li .point-tit {font-size:13px;padding:2px 10px;border-radius:4px;}
.adtech-wrapper .total-box .goods-info .goods-point > ul .active-point .point-tit {background:#ffd9d7;color:#f0544f;}
.adtech-wrapper .total-box .goods-info .goods-point > ul .visit-point .point-tit {background:#f0544f;color:#fff;}
.adtech-wrapper .total-box .btn-area {padding:0 20px 20px;}
.adtech-wrapper .total-box .btn-area .btn-payment {width:100%;display:block;height:50px;line-height:50px;text-align:center;background:#1e1e1f;color:#fff;font-size:16px;font-weight:600;letter-spacing:-0.51px;border-radius:3px;}

.adtech-wrapper .help {margin-top:30px;}
.adtech-wrapper .help h4 {font-size:18px;letter-spacing:-0.76px;color:#484848;}
.adtech-wrapper .help ul {margin-top:10px;}
.adtech-wrapper .help ul li {display:table;table-layout:fixed;width:100%;}
.adtech-wrapper .help ul li > span.desc {letter-spacing:-0.28px;color:#39393b;}
@media all and (max-width:768px) {
    .popup-layer2 .wrap .popup .header .tit {font-size:1.125rem;}
    .popup-layer2 .wrap .popup .body .rulll-box {font-size:1rem;}
    .adtech-wrapper .table dl {font-size:0.875rem;}
    .adtech-wrapper .total-box .title {font-size:1rem;}
    .adtech-wrapper .total-box .goods-info .goods-brand {font-size:0.75rem;}
    .adtech-wrapper .total-box .goods-info .goods-name {font-size:0.875rem;}
    .adtech-wrapper .total-box .goods-info .goods-point > ul > li {font-size:1rem;}
    .adtech-wrapper .total-box .goods-info .goods-point > ul > li .point-tit {font-size:0.813rem;}
    .adtech-wrapper .total-box .btn-area .btn-payment {font-size:1rem;}
    .adtech-wrapper .help h4 {font-size:1.125rem;}
}

/* 게시판 버튼 유형 */
.btn-area {padding-top:20px;text-align:center;display:flex;align-items:center;}
.btn-area  [class*=btn-type] ~ [class*=btn-type] {margin-left:5px;}
.btn-area .right {margin-left:auto;}
.btn-area.line {margin-top:30px;padding-top:20px;}
.btn-area.line {border-top:1px solid #e4e4e4;}
.btn-type {display:inline-flex;cursor:pointer;height:38px;line-height:38px;padding:0 20px;text-align:center;font-size:1.3rem;border-radius:2px;vertical-align:middle;align-items:center;}
.btn-type i:first-child {margin-right:5px;}
.btn-type.btn-yellow {border:1px solid #f2d42a;color:#6a6a6a;background:#ffdf2c;}
.btn-type.btn-red {border:1px solid #e5001f;color:#fff;background:#f72e3e;}
.btn-type.btn-white {border:1px solid #d8d8d8;color:#6a6a6a;background:#fff;}
.btn-type.btn-red:focus {background:#bb2222;}
.btn-type.btn-white:focus {background:#cccccc;}
.btn-type.btn-yellow:focus {background:#e7ca27;}
.btn-type.btn-darkgray {border:1px solid #333;color:#fff;background:#333333;}
.btn-type.btn-favorite {border:1px solid #333;color:#fff;background:#333333;}
.btn-type.btn-favorite .ico-favorite {display:inline-block;width:18px;height:16px;background:url("data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.467 1.65187C14.449 -0.346899 11.164 -0.346899 9.146 1.65187L9.073 1.72532L8.83835 1.49449C6.82039 -0.499036 3.54056 -0.499036 1.5226 1.49973C0.542294 2.47027 0 3.76081 0 5.14054C0 6.51502 0.542294 7.80557 1.5226 8.78134L8.61935 15.8111C8.7445 15.9318 8.90614 16 9.07821 16C9.25029 16 9.41194 15.9318 9.53708 15.8111L16.4774 8.93873C17.4577 7.9682 18 6.67241 18 5.29792C18 3.92344 17.4577 2.62765 16.4774 1.65712L16.467 1.65187Z' fill='%23E9573E'/%3E%3C/svg%3E%0A") no-repeat 0 0;}
.btn-type.btn-favorite .num {margin-left:5px;}
.btn-type.btn-popup {margin-top: 50px;}
@media screen and (max-width:1260px) {
    .btn-type {font-size:1rem;}
}


/* =============================================================================
   adtech
============================================================================= */
.adtech-section ~ .adtech-section {margin-top:50px;}
.adtech-list {display:grid;grid-template-columns: repeat(4, 1fr);grid-gap:12px; }
.adtech-list.list2 {grid-template-columns: repeat(2, 1fr);}
.adtech-list.list3 {grid-template-columns: repeat(3, 1fr);}
.adtech-header { display: flex; align-items: flex-start; position: relative;padding-bottom:15px;}
.adtech-header .title { font-weight: bold; font-size: 18px; line-height: 21px; color: #1e1e23; letter-spacing: -0.5px; }
.adtech-header .more-link { margin: 2px 6px 0 auto; padding-top: 2px; font-size: 14px; line-height: 17px; color: #767678; letter-spacing: -0.3px; }
.adtech-header .more-link::after { display: inline-block; width: 5px; height: 5px; border: 1px solid #767678; border-width: 1px 1px 0 0; margin: 5px 0 0 2px; vertical-align: top; -webkit-transform: rotate(45deg); transform: rotate(45deg); content: ''; }
.adtech-list .adtech-item {overflow:hidden;flex: 0 0 auto;max-width: none; border: 1px solid #eee; border-radius: 5px;padding: 0 22px; background: #fff; font-size: 14px; box-shadow: 0 2px 3px 0 rgba(0,0,0,0.04)}
.adtech-list .adtech-item .item-header { display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; padding: 15px 0 11px; }
.adtech-list .adtech-item .item-header .link { flex: 1 1 0; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; min-width: 0; }
.adtech-list .adtech-item .item-header .image { position: relative; overflow: hidden; width: 22px; height: 22px; border-radius: 50%; margin-right: 6px; }
.adtech-list .adtech-item .item-header .image::after { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 50%; border: 1px solid rgba(0,0,0,0.04); content: ''; }
.adtech-list .adtech-item .item-header .header-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; -webkit-box-flex: 1; -ms-flex: 1 1 0; flex: 1 1 0; font-weight: bold; font-size: 15px; line-height: 22px; color: #303038; letter-spacing: -0.5px; }
.adtech-list .adtech-item .adtech-subscribe-wrap { position: relative; flex: 0 0 auto; margin: -3px 0 0 6px; }
.adtech-subscribe { display: flex; border-radius: 16px; border: 1px solid rgba(63,108,219,0.7); padding: 3px 8px 2px 7px; line-height: 0; }
.adtech-subscribe-ico { margin-top: 2px; margin-right: -3px; display:flex;}
.adtech-subscribe-ico::before { width: 8px; height: 8px; background-position: -390px -450px; display: block; content: '+'; line-height:0.5;margin-right:5px;}
.adtech-subscribe-text { display: inline-block; font-weight: 500; font-size: 13px; line-height: 16px; color: #3f6cdb; vertical-align: top; }
@media screen and (max-width:1024px) {
    .adtech-list {grid-template-columns: repeat(2, 1fr);}
}

.adtech-item .article-list { padding-bottom: 5px; }
.adtech-item .article-item.as-type-main { padding-bottom: 12px; }
.adtech-item .article-item.as-type-main .link { display: flex; align-items: center; }
.adtech-item .article-item.as-type-main .content { padding-top: 2px; flex: 1 1 0; }
.adtech-item .article-item.as-type-main .content + .image {margin-left:5px;}
.adtech-item .article-item.as-type-main .image { width: 60px; height: 60px; }
.adtech-item .article-item.as-type-main .article-text { display: block;font-weight:bold; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; max-height: 42px; margin-top: -2px; font-size: 17px; line-height: 21px; color: #303038; letter-spacing: -0.3px; word-break: break-all; }
.adtech-item .article-item.as-type-main .sub-info { margin-top: 7px; font-size: 13px; line-height: 16px; color: #929294; letter-spacing: -0.3px; }
.adtech-item .article-item.as-type-main .category::before { display: inline-block; width: 2px; height: 2px; border-radius: 50%; background: #d6d6d6; margin: 7px 4px 0 2px; vertical-align: top; content: ''; }
.adtech-item .article-item.as-type-sub .link { display: block; padding: 7px 0 8px; border-top: 1px solid rgba(239,239,240,0.8); }
.adtech-item .article-item.as-type-sub .article-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; line-height: 22px; color: #303038; letter-spacing: -0.3px; }


/* =============================================================================
   etc
============================================================================= */
/* 슬라이드 페이징 */
.swiper-pagination {display:flex;align-items:center;justify-content:center;bottom:20px !important;}
.swiper-pagination .swiper-pagination-bullet {border:2px solid #fff;text-indent:-9999px;display:block;width:12px;height:12px;margin:0 5px;border-radius:12px;opacity:1;background:transparent !important;}
.swiper-pagination .swiper-pagination-bullet-active {border:2px solid #ff9e2c;background:#ff9e2c !important;}

.ico-up {display:inline-block;width:10px;height:12px;background:url("data:image/svg+xml,%3Csvg width='38' height='45' viewBox='0 0 38 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.4932 4.83901L4 20.1535L7.07997 23.1057L17.3465 12.9575V45H21.6398V12.9575L31.9064 23.1057L34.9863 20.1535L19.4932 4.83901Z' fill='%23666666'/%3E%3Cpath d='M0 0H38V5H0V0Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}

.align-left {text-align:left !important;}
.align-center {text-align:center !important;}
.align-right {text-align:right !important;}

.img-align-left {margin-right:2rem;float:left;}
.img-align-left {margin-left:2rem;float:right;}

.margin5 {margin:5px 0 !important;}
.margin10 {margin:10px 0 !important;}
.margin20 {margin:20px 0 !important;}
.margin30 {margin:30px 0 !important;}
.margin40 {margin:40px 0 !important;}
.margin50 {margin:50px 0 !important;}
.margin60 {margin:60px 0 !important;}
.margin70 {margin:70px 0 !important;}
.margin80 {margin:80px 0 !important;}
.margin90 {margin:90px 0 !important;}
.margin100 {margin:100px 0 !important;}
.margintop-5 {margin-top:5px !important;}
.margin-top10 {margin-top:10px !important;}
.margin-top20 {margin-top:20px !important;}
.margin-top30 {margin-top:30px !important;}
.margin-top40 {margin-top:40px !important;}
.margin-top50 {margin-top:50px !important;}
.margin-top60 {margin-top:60px !important;}
.margin-top70 {margin-top:70px !important;}
.margin-top80 {margin-top:80px !important;}
.margin-top90 {margin-top:90px !important;}
.margin-top100 {margin-top:100px !important;}
.margin-btm5 {margin-top:5px !important;}
.margin-btm10 {margin-bottom:10px !important;}
.margin-btm20 {margin-bottom:20px !important;}
.margin-btm30 {margin-bottom:30px !important;}
.margin-btm40 {margin-bottom:40px !important;}
.margin-btm50 {margin-bottom:50px !important;}
.margin-btm60 {margin-bottom:60px !important;}
.margin-btm70 {margin-bottom:70px !important;}
.margin-btm80 {margin-bottom:80px !important;}
.margin-btm90 {margin-bottom:90px !important;}
.margin-btm100 {margin-bottom:100px !important;}

.common-line {width:100%;height:1px;background:#ccc;margin-bottom:10px;} /* 공통 라인 적용 시 */

/* 갤러리 슬라이드 */
.gallery-slide {margin-top:30px;}
.gallery-slide img {width:100%;}
.gallery-slide .tit {font-size:1.3rem;margin-top:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}

.gallery-slide-two .swiper-slide {width:auto;}
.gallery-slide-two img {height:100px;}
@media all and (max-width:1260px) {
    .gallery-slide .tit {font-size:1rem;}
}
@media all and (max-width:768px) {
    .gallery-slide {margin-top:20px;}
    .gallery-slide .tit {font-size:1.3rem;}
}

/* color */
.color-black {color:#666;}
.color-red {color:#ff0000;}

/* bg color */
.bg-blue {padding:10px;background:#89c2db;}

.flow-proc {color:#000;}
.flow-proc > ul > li {position:relative;display:flex;flex-direction:row;align-items:center;}
.flow-proc > ul > li ~ li {padding-top:57px;}
.flow-proc > ul > li ~ li:before {content:'';display:block;position:absolute;top:22px;left:50px;width:40px;height:20px;background:url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAQAAACwqnx/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCQMDHyeyJkmpAAACOklEQVQ4y52TTUhUURiGn++ce+dOyoxZmqRZNrbJNslA0CZsUZvW40aw6AfCIAzCRW0mgnYtSlq4idKCylZBWBLpMop2/VAMMZASkSA4YPdn7j0tbpM/jaP1rj7OOTzn+17eT4glYBCWySDGiKw+riIDlhEByZNX8eusvDWYHOMCh5che4CSpAxMA9m4MhgMghEjIpOD+jr/pWh0/kLvPEby6r2M65FM5rna+a8Qd+jYTUIiIjEiGgs733nwnrVv44jwa+H8wBQBQS4ajwSF2qMLDgmchxebBjcG8T5OnBz+go9PQBh3o9BY6WTZWUzcOdN2XqXWg8zdPX7F9XHxO4JimRAjgKDR2OnEQjLp5Hb3jdmtNUwtzQyfve25ePgdfjEkJAINCGC6zIzBlPm8EE117nAy1SHl2Renhp6FLh4+wf7yiWjaQIwBA+dMyXyLiJLmTenBxFGdOvA35OfrRwO3PuHh4XX5P8JiGEOoJDQOIRrdZM8lcUiM9GYurXRpbrT/qufj4eFTJiTCVO5WBv23SyTqkotOf0ffmNVWcaRwbfCx5+LhLTmyJL0KE8c7Cky9eVcqPOluTu6F8uzk6csvQxcXl+BI8CFaCakmQWXt7XU0sI12MvdvPH11qJtdtNDYUo/TY627qhVQXmF3JEnTRCvttNNGMw3UYecVymyMAgYEC4d6Nqe3sJVGUmzCzum1Olm7QYV06UVVlBb1PYoXcH1HqnxgBIXGytpYOY2qbWjN4UT+lDX1C3+43HcQzLJzAAAAAElFTkSuQmCC") no-repeat 0 0;background-size:100% 100%;}
.flow-proc > ul > li .box {display:flex;justify-content:center;align-items:center;font-weight:700;font-size:16px;width:130px;height:52px;border-radius:10px;box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);}
.flow-proc > ul > li .text {margin-left:25px;}
.flow-proc > ul > li .text ul {font-size:16px;}
.flow-proc > ul > li .text ul li {position:relative;padding-left:10px;}
.flow-proc > ul > li .text ul li:before {content:'';display:block;position:absolute;top:7px;left:0;width:4px;height:1px;background:#000;}
@media all and (max-width:768px) {
    .flow-proc > ul > li {display:block;}
    .flow-proc > ul > li ~ li:before {left:50%;margin-left:-20px;}
    .flow-proc > ul > li .box {font-size:1rem;width:100%;}
    .flow-proc > ul > li .text {margin-top:20px;}
    .flow-proc > ul > li .text ul {font-size:1rem;}
}

.flow-proc2 {clear:both;}
.flow-proc2 ul {margin-top:-80px;margin-left:calc(-8% - 5px);}
.flow-proc2 ul:after {content:'';display:block;clear:both;}
.flow-proc2 ul li {position:relative;float:left;width:20%;margin-top:80px;padding-left:8%;}
.flow-proc2 ul li:before {content:'';display:block;position:absolute;top:10px;left:17%;width:20px;height:40px;background:url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAABGCAQAAADh95V8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCQMDKAZuSPnDAAAGR0lEQVRYw52YTWhc1xXHf+e80XgkayyNEkkMmFilSqFTWpLOriV09qXdjVviQNOtjQtdNPQjjZ8XKjihlRtTaCnBziK16oGE4lKXpKbTRb8os/RkI4piSwjVJrItO/7Qvfd08d5Yo48ZvckZkAZ031//+7/n/M+5D7pD/lhC+JShW19jNQrzl0omCAI2IGgHSpDYQGaeelc0FgMRs08BpQCxiAJfe/8XsRzVWBCRQbarAGYIek1qAhB978rLDYkVicUYgJmJgaD1iCHyf/nbVbtqV9ffeZahWo6IAXgpiCJ1uSldj41Pf3B2oqlIXSErWE4M6toQBEVMkufkSOW3M0dHaATETED236maQIMEaLorNaJv/PrVtqLZxdet/zata1F3Lg395Hc1FM2qV2ehIGtSku1pObUw/xm0mqzZF1DFYuokYDvzW8a+eGVuoiVVzcJLIbZGyivoLrAjX36D6I6i8b68NKm4CmX2rrr8scsnFwWJ06Ptu0GzmrVlteeSkTMd+fszUxABrAyy0WPR1MK5GRS9JtDbMRSBDUFWpTd9Gfv87+cmkIYihlgvKMNa6R9He5KXLz33alKRp8V6bDKtsYphcK9PcRSOXz6JViWW0z34qwnUaAuUKNIvRs689XwrIkmLvViJQdPIVP/PLPyqk/3sPku1xPgMW2djHyh95nO/IWppTVDAtoOpINRTVkX2C33hyutoU2t7lJlCLA0qlDM6b/7E5ZNoM3H+nbKfsjptCZmNd/jHbz1PhNZluwUoJjQEW7OsnU/GjlyMJ9D/bhlUqpWkAgrcy8hLjnx1AW1JVWPAUjDtwGAlsncqfeHKGzPaIlaRju0nhwrAelacVP6z35mJqrK1ycQ6qFiZLMnQHaNnfjTT6jQSQM1iw9qsMujAIWOf/XNcQuqdTQtInQowLvcGmzcwmSwhHTtXwBq0pTwYChDu/vObJ27MCFIXrKOVzLLK7cwtPYn//fS1G8hSMothlrbURYCBxpaP549dKgpymKo1OJ22cEWJytHqUHGo8Yehr2QBevivrx89+Pj+5oQb2Vz2eAuCGjEAq5QyM3Ir770C98HUAOqIQC6tb4P1Pt6+PRaOnb9OIIzbLcOqBpiZYjEMJPiNufPXCXjC7VAOs9ayRjI2QgzMAv3bRCfWzr18vhBweAIhsrxhIGkyAIuWjdejD7/7Jl4cAY8nLId2wDCje74yKO7Dyq1cOv7I4x54/HiY9rO+GiDGkLScqQFlYEP7Q109fuGjYYcvOjaH3FpYtJYRTllCRAGapMnQl9XSz355DS8et+HxN/1sqAXzmKStP5UdYL3vOd56+/j5Rw7/iUtUIiyGpklXjeQMsRpNoMR6T1Zu5VtzeBzuyc9QD1+wGJPOOKJiSBOkzHpP63MrF19KAIoeR5gJGNawOE2DFAqgRsV6j2rw7x9e+AiHH/WRw+OXQi1gnSR4AmXApD0WoEejXzv32j8KAY+753IePxtqoRkIBttmLQVoyCKwt7ffeffFN/HiDvqif9rd8oRFP5kU2w5lVTCDiiF7sXIr83MFj1d3321sRgFPwBp2ynY3grRfPBZsXHYDXXzpP+sPHf6+w0/7YY8RsOS6xi4osMRFb9vODbbnLlx/6PFsjnvcWhgJpHLvpal2T0nbN7h27vvvFxyOTfxtf9hX/FSIQ+9zVjBLTWbbBu9/8OLZgn/oD/rEBZbDVGhabNazA3TmdgDbcga3PP8DvCQqOfxMIDR3pORuKAEsb4B1Nhjuvvftv64P+weuuImb9ISlQCDEfcs9MWSBwwaH0qXLp99ewj1wOA34m77iCXGS2X3AcskVt50uE4OPf37iooAn4O94fMVPhaMhtngfE1KxmBpVw7C7Qezx3+uvf+K14wCO0A5Ny9ZvBSFiiEJ5hOKf3omf4ykmKDH+dJERCgzVozjT1RJA6lEtR57hydGJQ6UxxhnjEKOMUKjkycW6e7DuzUuJKnkKh4cnRykyOjnKQUY4QL4exWqZr+GpBlOBsBxyAV8ONz2epN44lZhuljAxTFAicuQreQ5wgAPkq0PkiMisEujW9a5uhKmArwY8odXxyQEnQUxiRYmefBKpB3rpJN2/raserU+17R259EnEOm0oQRDL8kqnL0vb931Cr/g/v2bXQE6CMTIAAAAASUVORK5CYII=") no-repeat 0 0;background-size:100% 100%;}
.flow-proc2 ul li:nth-child(5n+1):before {display:none;}
.flow-proc2 ul li .box {display:flex;justify-content:center;align-items:center;font-weight:700;font-size:16px;height:52px;border-radius:10px;text-align:center;line-height:1.2;box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);}
@media all and (max-width:1024px) {
    .flow-proc2 ul {margin-top:-40px;}
    .flow-proc2 ul li {width:25%;margin-top:40px;}
    .flow-proc2 ul li:before {left:12%;}
    .flow-proc2 ul li:nth-child(5n+1):before {display:block;}
    .flow-proc2 ul li:nth-child(4n+1):before {display:none;}
    .flow-proc2 ul li .box {font-size:1rem;}
}
@media all and (max-width:768px) {
    .flow-proc2 ul li {width:33.3333%;}
    .flow-proc2 ul li:before {left:7%;width:16px;height:35px;top:13px}
    .flow-proc2 ul li:nth-child(4n+1):before {display:block;}
    .flow-proc2 ul li:nth-child(3n+1):before {display:none;}
}

.flow-proc3 {display:flex;justify-content:center;align-items:center;}
.flow-proc3 .step {display:flex;align-items:center;justify-content:space-between;}
.flow-proc3 .step .box {position:relative;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:20px;width:210px;height:80px;border-radius:10px;text-align:center;line-height:1.2;box-shadow:0px -1px 2px 0px rgba(0, 0, 0, 0.05) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);}
.flow-proc3 .step .box .num {position:absolute;top:-20px;left:-20px;display:flex;justify-content:center;align-items:center;width:45px;height:45px;border-radius:100%;background:#00A0E9; color:#fff;font-size:16px;}
.flow-proc3 .arr {flex:1;display:flex;justify-content:center;align-items:center;max-width:150px;}
.flow-proc3 .arr:before {content:'';display:block;width:20px;height:40px;background:url("data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAABGCAQAAADh95V8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCQMDKAZuSPnDAAAGR0lEQVRYw52YTWhc1xXHf+e80XgkayyNEkkMmFilSqFTWpLOriV09qXdjVviQNOtjQtdNPQjjZ8XKjihlRtTaCnBziK16oGE4lKXpKbTRb8os/RkI4piSwjVJrItO/7Qvfd08d5Yo48ZvckZkAZ031//+7/n/M+5D7pD/lhC+JShW19jNQrzl0omCAI2IGgHSpDYQGaeelc0FgMRs08BpQCxiAJfe/8XsRzVWBCRQbarAGYIek1qAhB978rLDYkVicUYgJmJgaD1iCHyf/nbVbtqV9ffeZahWo6IAXgpiCJ1uSldj41Pf3B2oqlIXSErWE4M6toQBEVMkufkSOW3M0dHaATETED236maQIMEaLorNaJv/PrVtqLZxdet/zata1F3Lg395Hc1FM2qV2ehIGtSku1pObUw/xm0mqzZF1DFYuokYDvzW8a+eGVuoiVVzcJLIbZGyivoLrAjX36D6I6i8b68NKm4CmX2rrr8scsnFwWJ06Ptu0GzmrVlteeSkTMd+fszUxABrAyy0WPR1MK5GRS9JtDbMRSBDUFWpTd9Gfv87+cmkIYihlgvKMNa6R9He5KXLz33alKRp8V6bDKtsYphcK9PcRSOXz6JViWW0z34qwnUaAuUKNIvRs689XwrIkmLvViJQdPIVP/PLPyqk/3sPku1xPgMW2djHyh95nO/IWppTVDAtoOpINRTVkX2C33hyutoU2t7lJlCLA0qlDM6b/7E5ZNoM3H+nbKfsjptCZmNd/jHbz1PhNZluwUoJjQEW7OsnU/GjlyMJ9D/bhlUqpWkAgrcy8hLjnx1AW1JVWPAUjDtwGAlsncqfeHKGzPaIlaRju0nhwrAelacVP6z35mJqrK1ycQ6qFiZLMnQHaNnfjTT6jQSQM1iw9qsMujAIWOf/XNcQuqdTQtInQowLvcGmzcwmSwhHTtXwBq0pTwYChDu/vObJ27MCFIXrKOVzLLK7cwtPYn//fS1G8hSMothlrbURYCBxpaP549dKgpymKo1OJ22cEWJytHqUHGo8Yehr2QBevivrx89+Pj+5oQb2Vz2eAuCGjEAq5QyM3Ir770C98HUAOqIQC6tb4P1Pt6+PRaOnb9OIIzbLcOqBpiZYjEMJPiNufPXCXjC7VAOs9ayRjI2QgzMAv3bRCfWzr18vhBweAIhsrxhIGkyAIuWjdejD7/7Jl4cAY8nLId2wDCje74yKO7Dyq1cOv7I4x54/HiY9rO+GiDGkLScqQFlYEP7Q109fuGjYYcvOjaH3FpYtJYRTllCRAGapMnQl9XSz355DS8et+HxN/1sqAXzmKStP5UdYL3vOd56+/j5Rw7/iUtUIiyGpklXjeQMsRpNoMR6T1Zu5VtzeBzuyc9QD1+wGJPOOKJiSBOkzHpP63MrF19KAIoeR5gJGNawOE2DFAqgRsV6j2rw7x9e+AiHH/WRw+OXQi1gnSR4AmXApD0WoEejXzv32j8KAY+753IePxtqoRkIBttmLQVoyCKwt7ffeffFN/HiDvqif9rd8oRFP5kU2w5lVTCDiiF7sXIr83MFj1d3321sRgFPwBp2ynY3grRfPBZsXHYDXXzpP+sPHf6+w0/7YY8RsOS6xi4osMRFb9vODbbnLlx/6PFsjnvcWhgJpHLvpal2T0nbN7h27vvvFxyOTfxtf9hX/FSIQ+9zVjBLTWbbBu9/8OLZgn/oD/rEBZbDVGhabNazA3TmdgDbcga3PP8DvCQqOfxMIDR3pORuKAEsb4B1Nhjuvvftv64P+weuuImb9ISlQCDEfcs9MWSBwwaH0qXLp99ewj1wOA34m77iCXGS2X3AcskVt50uE4OPf37iooAn4O94fMVPhaMhtngfE1KxmBpVw7C7Qezx3+uvf+K14wCO0A5Ny9ZvBSFiiEJ5hOKf3omf4ykmKDH+dJERCgzVozjT1RJA6lEtR57hydGJQ6UxxhnjEKOMUKjkycW6e7DuzUuJKnkKh4cnRykyOjnKQUY4QL4exWqZr+GpBlOBsBxyAV8ONz2epN44lZhuljAxTFAicuQreQ5wgAPkq0PkiMisEujW9a5uhKmArwY8odXxyQEnQUxiRYmefBKpB3rpJN2/raserU+17R259EnEOm0oQRDL8kqnL0vb931Cr/g/v2bXQE6CMTIAAAAASUVORK5CYII=") no-repeat 0 0;background-size:100% 100%;}
.flow-proc3.vertical {flex-direction:column;}
.flow-proc3.vertical .arr {margin:15px 0;}
.flow-proc3.vertical .arr:before {transform:rotate(90deg);}
@media all and (max-width:1260px) {
    .flow-proc3 .step .box {width:168px;height:64px;font-size:1.1rem;}
    .flow-proc3 .step .box .num {top:-16px;left:-16px;width:36px;height:36px;}
    .flow-proc3 .arr {max-width:120px;}
    .flow-proc3 .arr:before {width:16px;height:32px;}
}
@media all and (max-width:768px) {
    .flow-proc3 {display:block;}
    .flow-proc3 .step .box {width:100%;}
    .flow-proc3 .arr {width:100%;max-width:100%;padding-top:15px;}
    .flow-proc3 .arr:before {transform:rotate(90deg);}
}

.arrangement {color:#000;}
.arrangement > ul {display:flex;justify-content:center;align-items:stretch;}
.arrangement > ul > li {flex:1;padding:30px;max-width:360px;box-shadow:0px 3px 6px #00000029; border:1px solid #707070; border-radius:10px;}
.arrangement > ul > li ~ li {margin-left:20px;}
.arrangement > ul > li .item b {display:block;font-size:20px; font-weight:700;padding-bottom:30px;border-bottom:1px solid #ccc;}
.arrangement > ul > li .item ul {padding-top:30px;}
.arrangement > ul > li .item ul li {position:relative;font-size:16px;padding-left:25px;}
.arrangement > ul > li .item ul li:before {content:'';display:block;position:absolute;top:5px;left:0;width:18px;height:12px;background:url("data:image/svg+xml,%3Csvg width='42' height='30' viewBox='0 0 42 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M37.4432 0.0912349C37.2722 0.143326 36.9373 0.284718 36.6991 0.405396C36.4607 0.526199 31.366 5.51594 25.3775 11.4937C19.3889 17.4714 14.4617 22.3874 14.428 22.4181C14.3944 22.4488 12.2617 20.3725 9.68878 17.8043C4.56298 12.6879 4.49427 12.6337 3.11806 12.6289C1.71457 12.6239 0.561859 13.4663 0.170925 14.7828C-0.0600134 15.5605 -0.0584011 15.7721 0.184692 16.6035C0.373958 17.2508 0.6204 17.5164 6.47908 23.3891C10.503 27.4225 12.748 29.5842 13.0808 29.7455C13.8333 30.1104 15.0144 30.0797 15.8284 29.6741C16.3335 29.4223 18.9392 26.8705 28.6447 17.1224C37.2748 8.45464 40.8935 4.7404 41.0553 4.38456C41.5742 3.2419 41.2113 1.5937 40.256 0.755029C39.5499 0.135017 38.2824 -0.164013 37.4432 0.0912349Z' fill='%2300A0E9'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;}
.arrangement > ul > li .item ul li ~ li {margin-top:14px;}
@media all and (max-width:1260px) {
    .arrangement > ul > li .item b {font-size:1.2rem;}
    .arrangement > ul > li .item ul li {font-size:1rem;}
}
@media all and (max-width:768px) {
    .arrangement > ul {display:block;}
    .arrangement > ul > li {padding:26px;max-width:100%;}
    .arrangement > ul > li ~ li {margin-left:0;margin-top:17px;}
}

.main-progrom-list .program-box {display:flex;align-items:stretch;}
.main-progrom-list .program-box ~ .program-box {margin-top:80px;}
.main-progrom-list .program-box > * ~ * {margin-left:67px;}
.main-progrom-list .program-box .desc {flex:1;display:flex;flex-direction:column;}
.main-progrom-list .program-box .desc .logo {display:block;text-align:center;margin-bottom:35px;}
.main-progrom-list .program-box .desc .logo img {max-width:100%;height:130px;}
.main-progrom-list .program-box .desc .list {padding:40px;background:#F5F5F5;flex:1;}
.main-progrom-list .program-box .desc .list .tit {display:block;font-size:20px;font-weight:700; color:#000;margin-bottom:30px;}
.main-progrom-list .program-box .desc .list ul li {display:flex;align-items:center;font-size:16px;}
.main-progrom-list .program-box .desc .list ul li ~ li {margin-top:15px;}
.main-progrom-list .program-box .desc .list ul li .label {width:70px;font-weight:700;}
.main-progrom-list .program-box .desc .list ul li .text {flex:1;}
.main-progrom-list .program-box .img {width:500px;max-width:50%;display:flex;flex-direction:column;justify-content:space-between;}
.main-progrom-list .program-box .img img {max-width:100%;}
.main-progrom-list .program-box .img img ~ img {margin-top:15px;}
@media all and (max-width:1260px) {
    .main-progrom-list .program-box .desc .list .tit {font-size:1.25rem;}
    .main-progrom-list .program-box .desc .list ul li {font-size:1rem;}
}
@media all and (max-width:768px) {
    .main-progrom-list .program-box {display:block;}
    .main-progrom-list .program-box > * ~ * {margin-left:0;}
    .main-progrom-list .program-box .desc .logo img {height:80px;}
    .main-progrom-list .program-box .img {display:flex;flex-direction:row;width:100%;max-width:100%;}
    .main-progrom-list .program-box .img img {width:50%;}
    .main-progrom-list .program-box .img img ~ img {margin-top:0;}
    .main-progrom-list .program-box .img + .desc {margin-top:30px;}
    .main-progrom-list .program-box .desc .list ul li ~ li {margin-top:10px;}
}

.diagram-slogan ul {position:relative;display:flex;align-items:center;justify-content:space-between;}
.diagram-slogan ul:before {content:'';display:block;width:100%;height:1px;background:#ccc;position:absolute;top:50%;left:0;}
.diagram-slogan ul li {position:relative;border-radius:12px;width:200px;height:200px;max-width:20vw;max-height:20vw;display:flex;justify-content:center;align-items:center; color:#fff;flex-direction:column;}
.diagram-slogan ul li em {display:block;text-align:center;font-size:18px;}
.diagram-slogan ul li b {display:block;text-align:center;font-size:35px;font-weight:500;}
@media all and (max-width:768px) {
    .diagram-slogan ul li em {font-size:1rem;}
    .diagram-slogan ul li b {font-size:1.8rem;}
}

.recomend-wrap .img {text-align:center;}
.recomend-wrap .img img {max-width:100%;}
.recomend-wrap .recomend-menu {margin-top:20px;}
.recomend-wrap .etc-menu {margin-top:15px;}
.recomend-menu {text-align:center;}
.recomend-menu button {padding:0 10px;font-size:0.9rem; color:#fff;background:#666;border-radius:4px;height:24px;display:inline-flex;align-items:center;}
.recomend-menu button .ico-heart {display:inline-block;width:12px;height:12px;margin-right:5px;background:url("data:image/svg+xml,%3Csvg width='34' height='30' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.0725 3.09937C27.2647 -0.649401 21.0659 -0.649401 17.2581 3.09937L17.1204 3.23712L16.6776 2.80419C12.8698 -0.934741 6.68088 -0.934741 2.87307 2.81403C1.02329 4.6343 0 7.05476 0 9.6425C0 12.2204 1.02329 14.6409 2.87307 16.471L16.2644 29.6556C16.5005 29.8819 16.8055 30.0098 17.1302 30.0098C17.4549 30.0098 17.7599 29.8819 17.9961 29.6556L31.0922 16.7661C32.942 14.9459 33.9652 12.5156 33.9652 9.93768C33.9652 7.35978 32.942 4.92948 31.0922 3.10921L31.0725 3.09937ZM31.4857 9.92784C31.4857 11.8465 30.7281 13.6471 29.3506 15.0049L17.1204 27.0482L4.59495 14.7097C3.21745 13.3519 2.45982 11.5513 2.45982 9.63266C2.45982 7.714 3.21745 5.91341 4.59495 4.55558C5.97245 3.19776 7.8124 2.44998 9.77042 2.44998C11.7284 2.44998 13.5684 3.19776 14.9459 4.55558L16.2447 5.83469C16.717 6.30698 17.4943 6.30698 17.9665 5.83469L18.9702 4.84092C21.8236 2.02689 26.4775 2.02689 29.3309 4.84092C30.7084 6.19875 31.4661 7.99934 31.4661 9.918L31.4857 9.92784Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:100% 100%;}
.recomend-menu button.on .ico-heart {background-image:url("data:image/svg+xml,%3Csvg width='34' height='30' viewBox='0 0 34 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.0456 3.09726C27.2411 -0.650435 21.0477 -0.650435 17.2432 3.09726L17.1055 3.23497L16.6632 2.80217C12.8586 -0.935693 6.67509 -0.935693 2.87058 2.812C1.0224 4.63175 0 7.05152 0 9.63851C0 12.2157 1.0224 14.6354 2.87058 16.465L16.2503 29.6459C16.4862 29.8721 16.791 30 17.1154 30C17.4398 30 17.7445 29.8721 17.9805 29.6459L31.0652 16.7601C32.9134 14.9404 33.9358 12.5108 33.9358 9.93361C33.9358 7.35645 32.9134 4.92684 31.0652 3.1071L31.0456 3.09726Z' fill='%23E9573E'/%3E%3C/svg%3E%0A");}
.recomend-menu button .num {margin-left:5px;}
.etc-menu {text-align:center;}
.etc-menu button {padding:0 10px;font-size:0.9rem; color:#fff;background:#aaa;border-radius:4px;height:24px;display:inline-flex;align-items:center;}
.etc-menu button  [class*=ico-] {display:block;background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;margin-right:5px;}
.etc-menu button .ico-scrap {width:12px;height:15px;background-image:url("data:image/svg+xml,%3Csvg width='18' height='27' viewBox='0 0 18 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 1H1V25L9 19.3L17 25V1Z' stroke='white' stroke-width='2' stroke-miterlimit='10'/%3E%3C/svg%3E%0A");}
.etc-menu button .ico-share3 {width:14px;height:14px;background-image:url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M24.4109 0.0403852C20.1657 0.118991 20.1536 0.120061 19.8624 0.480208C19.4653 0.970957 19.4954 1.6206 19.939 2.13689L20.3076 2.566L22.8693 2.61479L25.4308 2.66372L18.6019 9.50056C12.0151 16.095 11.7729 16.3579 11.7729 16.9139C11.7729 17.6995 12.3131 18.2412 13.0965 18.2412C13.648 18.2412 13.9268 17.9843 20.508 11.4122L27.3466 4.58298L27.3955 7.14377L27.4443 9.70441L27.8733 10.0731C28.4339 10.555 29.1059 10.5524 29.5916 10.0664L29.967 9.69111L29.9911 5.51676C30.0046 3.221 30.0024 1.20494 29.9867 1.03672C29.9515 0.661276 29.3872 0.0939102 28.9732 0.0179047C28.805 -0.0129869 26.752 -0.00289367 24.4109 0.0403852ZM1.27491 5.62672C0.861037 5.87492 0.526664 6.23905 0.319343 6.66771C0.00545718 7.31612 0.000258876 7.49612 0.000564659 17.6396C0.00071755 29.1969 -0.063191 28.5223 1.12279 29.4706L1.71035 29.9402L12.1911 29.9815C22.5935 30.0227 22.6767 30.0205 23.34 29.6992C23.788 29.4824 24.1339 29.1615 24.3886 28.7269L24.7687 28.0782V19.531V10.9838L23.4691 12.277L22.1695 13.5701V20.4935V27.4169H12.3845H2.59941V17.6295V7.84204H9.52111H16.4428L17.7357 6.54215L19.0285 5.24226L10.47 5.24363L1.9114 5.24516L1.27491 5.62672Z' fill='white'/%3E%3C/svg%3E%0A");}
.etc-menu button .ico-declaration {width:12px;height:14px;background-image:url("data:image/svg+xml,%3Csvg width='25' height='30' viewBox='0 0 25 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.8079 0.104111C11.5229 0.239596 11.3451 0.425418 11.2247 0.71338C11.1477 0.897678 11.134 1.30489 11.134 3.41363V5.89676L11.2704 6.15508C11.3453 6.29712 11.519 6.49244 11.6563 6.58913C11.8747 6.74295 11.956 6.76493 12.306 6.76493C12.6561 6.76493 12.7374 6.74295 12.9557 6.58913C13.093 6.49244 13.2667 6.29712 13.3417 6.15508L13.478 5.89676V3.3954V0.894045L13.3417 0.635734C13.0521 0.087293 12.353 -0.155078 11.8079 0.104111ZM0.673856 3.37038C0.103205 3.66714 -0.149421 4.33096 0.0901372 4.90425C0.188703 5.14017 3.33918 8.35025 3.6807 8.56267C4.46114 9.04824 5.50775 8.48843 5.50775 7.58534C5.50775 7.14613 5.42893 7.04779 3.61331 5.22046C2.63592 4.23673 1.7616 3.40507 1.65729 3.35989C1.40648 3.25125 0.892377 3.2567 0.673856 3.37038ZM22.9391 3.36909C22.8408 3.41761 21.9663 4.25425 20.9958 5.22831C19.1825 7.04826 19.1043 7.14572 19.1043 7.58534C19.1043 8.08883 19.5292 8.61272 20.0235 8.71873C20.3531 8.78946 20.6486 8.73865 20.9314 8.56267C21.2729 8.35025 24.4234 5.14017 24.5219 4.90425C24.7649 4.3227 24.4543 3.55357 23.8905 3.34055C23.6534 3.25095 23.1476 3.26613 22.9391 3.36909ZM10.9875 9.22726C9.14302 9.5256 7.48674 10.3769 6.15001 11.7137C4.89701 12.9666 4.14189 14.3567 3.74487 16.141C3.6207 16.6991 3.61331 16.8815 3.59016 19.9647L3.56585 23.2024L2.23708 23.2036C0.755604 23.205 0.58619 23.2399 0.277424 23.6069C0.00282248 23.9333 -0.00790143 24.0585 0.0113195 26.728L0.0292512 29.2282L0.205053 29.4778C0.301743 29.615 0.497059 29.7887 0.639106 29.8636L0.897416 30H12.306H23.7147L23.973 29.8636C24.115 29.7887 24.3103 29.615 24.407 29.4778L24.5828 29.2282L24.5992 26.6673L24.6156 24.1064L24.4775 23.8448C24.4016 23.701 24.2272 23.5041 24.09 23.4075L23.8405 23.2317L22.4434 23.2141L21.0462 23.1965L21.0219 19.9617C20.9988 16.8815 20.9913 16.699 20.8672 16.141C20.4702 14.3568 19.7156 12.9681 18.4616 11.7142C17.2117 10.4643 15.7685 9.67345 14.0757 9.31065C13.3184 9.14833 11.739 9.10567 10.9875 9.22726ZM13.0678 11.5427C14.5384 11.733 15.8596 12.3927 16.8631 13.4381C17.6375 14.2446 18.1183 15.0717 18.4219 16.1193C18.6541 16.9207 18.6935 17.5522 18.6935 20.4751V23.2024H12.306H5.91859V20.4751C5.91859 18.929 5.94573 17.5046 5.98124 17.1861C6.14251 15.7397 6.72499 14.5046 7.74898 13.4381C9.12398 12.0059 11.1279 11.2918 13.0678 11.5427ZM22.2681 26.6012V27.656H12.306H2.34397V26.6012V25.5464H12.306H22.2681V26.6012Z' fill='white'/%3E%3C/svg%3E%0A");}

.recomend-gage {margin-top:50px;}
.recomend-gage dl ~ dl {margin-top:30px;}
.recomend-gage dl {display:flex;flex-direction:row;align-items:center;}
.recomend-gage dl dt {font-weight:bold; color:#000;font-size:20px;margin-right:30px;}
.recomend-gage dl dt b {vertical-align:baseline; color:#ff0000;}
.recomend-gage dl dd {flex:1;}
.recomend-gage dl dd .recomend-rate {position:relative;height:50px;border-radius:5px;display:flex;flex-direction:row;align-items:center;overflow:hidden;}
.recomend-gage dl dd .recomend-rate > * {height:100%;display:flex;justify-content:center;align-items:center; color:#fff;font-size:1rem;}
.recomend-gage dl dd .recomend-rate .good {background:#46C3BC;}
.recomend-gage dl dd .recomend-rate .soso {background:#f99700;}
.recomend-gage dl dd .recomend-rate .bad {background:#FE3A4A;}
@media all and (max-width:768px) {
    .recomend-gage dl {display:block;}
    .recomend-gage dl dt {margin-bottom:10px;}
}

@media all and (min-width:1261px) {
    .floating-menu {display:none;}
}
@media all and (max-width:1260px) {
    .floating-menu {position:fixed; bottom:20px; right:20px; display:flex; flex-direction:column;z-index:6; transition:bottom 0.5s ease; ;}
    .floating-menu [class*=btn-] {width:50px; height:50px;}
    .floating-menu [class*=btn-] ~ [class*=btn-] {margin-top:8px; }
    .floating-menu .btn-menu {
        transition:bottom 0.5s ease;
        background:#fff;
        background-size:auto 20px;
        display:flex;justify-content:center;align-items:center;
    }
    .floating-menu .btn-menu img {height:50%;}
    .floating-menu .btn-chat.btm {bottom:0; }
}

/* popup */
.popup-layer {display:none;position:fixed;top:0;left:0;width:100%;height:100%;min-width:320px;z-index:80;}
.popup-layer .dim {position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);}
.popup-layer .wrap {position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);max-width:370px;}
.popup-layer .wrap .content {min-width:300px;max-width:90vw;padding:0 0;max-width:90vw;border-radius:10px;background:#fff;}
.popup-layer .wrap .content .header {position:relative;height:50px;display:flex;flex-direction:row;align-items:center;border-bottom:1px solid #E4E8F1;}
.popup-layer .wrap .content .header .tit {font-size:15px;font-weight:500;color:#000;text-align:center;display:block;flex:1;}
.popup-layer .wrap .content .body {padding:20px;min-height:110px;flex:1;overflow-x:hidden;overflow-y:auto;max-height:65vh;}
.popup-layer .wrap .content .footer {padding:15px;text-align:center;}
.popup-layer .wrap .content .footer .btn-confirm {width:100%;justify-content:center;font-size:1.2rem;}
.popup-layer .wrap .content .notice {text-align:center;padding:30px 0;}
.popup-layer .wrap .content .notice .icon {width:55px;height:55px;margin:0 auto;margin-bottom:20px;}
.popup-layer .wrap .content .notice .icon img {width:100%;height:100%;}
.popup-layer .wrap .content .notice .text {margin-top:20px;font-size:14px;}
@media screen and (max-width:1260px) {
    .popup-layer .wrap .content .header .tit {font-size:1rem;}
    .popup-layer .wrap .content .notice .title b {font-size:1.1rem;}
    .popup-layer .wrap .content .notice .text {font-size:0.9rem;}
    .popup-layer .wrap .content .footer .btn-confirm {font-size:0.9rem;}
}

.menu-category-list ul {display:flex;flex-wrap: wrap;padding:15px;border:1px solid #ccc;border-radius:10px;}
.menu-category-list ul li {margin:10px}
.menu-category-list ul li img {width:36px;height:36px;}

.shop-menu-wrap {display:flex;flex-direction:row;margin-top:20px;}
.shop-menu-wrap .shop-menu {flex:1;overflow:hidden;padding:15px;border:1px solid #eee;border-radius:10px;}
.shop-menu-wrap .shop-menu ~ .shop-menu {margin-left:20px;}
.shop-menu-wrap .shop-menu .shop-title svg { height: 11px;    width: 65px;}
.shop-menu-wrap .shop-menu .shop-title b {display:block;font-size: 18px; color: #121212; letter-spacing: -.8px;font-weight:700;margin-top:10px;}
.shop-menu-wrap .shop-menu .shop-title b em {color: #4377fd;vertical-align:baseline;}
.shop-menu-wrap .shop-menu .buy-history {margin-top:10px;margin-bottom: 16px; padding: 0 12px; border-radius: 8px; background-color: #f1f4f6; height:40px;display:flex;flex-direction:row;align-items:center;font-size: 14px; color: #3f3f3f;}
.shop-menu-wrap .shop-menu .buy-history .img {overflow: hidden; float: left; position: relative; width: 24px; height: 24px; margin-right:8px;border-radius: 50%;}
.shop-menu-wrap .shop-menu .buy-history .txt { flex:1;overflow:hidden;  display:flex;flex-direction:row;align-items:center; overflow: hidden; text-overflow: ellipsis; line-height: 40px; white-space: nowrap; margin: 0 4px; font-weight: 700;}
.shop-menu-wrap .shop-menu .buy-history .txt span {font-weight:400;}
.shop-menu-wrap .shop-menu .buy-history .txt .point {flex:1;display:block;font-weight:bold;overflow:hidden;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.shop-menu-wrap .shop-menu .buy-list {display:grid;grid-template-columns: repeat(3, 1fr);grid-gap:20px 15px; }
.shop-menu-wrap .shop-menu .buy-list li .desc {margin-top:10px;}
.shop-menu-wrap .shop-menu .buy-list li .desc .price {display: block; overflow: hidden; text-overflow: ellipsis; line-height: 20px; white-space: nowrap; font-size: 14px; font-weight: 700; color: #121212;}
.shop-menu-wrap .shop-menu .buy-list li .desc .txt {display: block; overflow: hidden; text-overflow: ellipsis; line-height: 20px; display: -webkit-box; max-height: 40px; white-space: normal; word-wrap: break-word; word-break: keep-all; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-top: 2px; font-size: 14px; font-weight: 400; color: #3f3f3f; word-break: break-all;}
.shop-menu-wrap .shop-menu .menu-paging {margin-top:15px;text-align:center;}
.shop-menu-wrap .shop-menu .menu-paging .prev,
.shop-menu-wrap .shop-menu .menu-paging .next {position: relative; width: 80px; height: 40px; border-radius: 4px; border: 1px solid #e8ecef;}
.shop-menu-wrap .shop-menu .menu-paging .prev,
.shop-menu-wrap .shop-menu .menu-paging .next {background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' class='modulePagingButtonResponsive_icon__tGzQN'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M6.875 16.254l6.25-6.25-6.25-6.25'%3E%3C/path%3E%3C/svg%3E") no-repeat 50% 50%;background-size:auto 50%;}
.shop-menu-wrap .shop-menu .menu-paging .prev {transform: rotate(-180deg);}
.shop-menu-wrap .shop-menu .menu-paging .number-area {display: inline-flex; justify-content:center;align-items:center; position: relative; width: 96px; font-size: 14px; line-height: 40px; color: #959595; letter-spacing: -.5px; vertical-align: top;}
.shop-menu-wrap .shop-menu .menu-paging .number-area .current {line-height:1;margin-right:5px;font-weight:700;}
@media screen and (max-width:768px) {
    .shop-menu-wrap {display:block;}
    .shop-menu-wrap .shop-menu ~ .shop-menu {margin-left:0;margin-top:20px;}
}



.opinion-serialization-list {display:grid;grid-template-columns: repeat(3, 1fr);grid-gap:20px; }
.opinion-serialization-header { display: flex; align-items: flex-start; position: relative;padding-bottom:15px;}
.opinion-serialization-header .title { font-weight: bold; font-size: 18px; line-height: 21px; color: #1e1e23; letter-spacing: -0.5px; }
.opinion-serialization-header .more-link { margin: 2px 6px 0 auto; padding-top: 2px; font-size: 14px; line-height: 17px; color: #767678; letter-spacing: -0.3px; }
.opinion-serialization-header .more-link::after { display: inline-block; width: 5px; height: 5px; border: 1px solid #767678; border-width: 1px 1px 0 0; margin: 5px 0 0 2px; vertical-align: top; -webkit-transform: rotate(45deg); transform: rotate(45deg); content: ''; }
.opinion-serialization-list li{position:relative;}
.opinion-serialization-list .opinion-serialization-item {overflow:hidden;flex: 0 0 auto;max-width: none; border: 1px solid #eee; border-radius: 5px;padding:20px; background: #fff; font-size: 14px; box-shadow: 0 2px 3px 0 rgba(0,0,0,0.04)}
.opinion-serialization-list .opinion-serialization-item .item-header { display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; padding: 15px 0 11px; }
.opinion-serialization-list .opinion-serialization-item .item-header .link { flex: 1 1 0; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; min-width: 0; }
.opinion-serialization-list .opinion-serialization-item .item-header .image { position: relative; overflow: hidden; width: 22px; height: 22px; border-radius: 50%; margin-right: 6px; }
.opinion-serialization-list .opinion-serialization-item .item-header .image::after { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: 50%; border: 1px solid rgba(0,0,0,0.04); content: ''; }
.opinion-serialization-list .opinion-serialization-item .item-header .header-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; -webkit-box-flex: 1; -ms-flex: 1 1 0; flex: 1 1 0; font-weight: bold; font-size: 15px; line-height: 22px; color: #303038; letter-spacing: -0.5px; }
.opinion-serialization-list .opinion-serialization-item .opinion-subscribe{display:flex; align-items: center; position: relative; flex: 0 0 auto; margin: -3px 0 0 6px; display: flex; border-radius: 16px; border: 1px solid rgba(63,108,219,0.7); padding: 3px 8px 2px 7px; line-height: 0;}
.opinion-serialization-list .opinion-serialization-item .opinion-subscribe-ico::before { width: 8px; height: 8px; background-position: -390px -450px; display: block; content: '+'; line-height:0.5;margin-right:5px;}
.opinion-serialization-list .opinion-serialization-item .opinion-subscribe-ico-text { display: inline-block; font-weight: 500; font-size: 12px; line-height: 16px; color: #3f6cdb; vertical-align: top; }

.opinion-serialization-list .article-list { padding-bottom: 5px; }
.opinion-serialization-list .article-item.as-type-main { padding-bottom: 12px; }
.opinion-serialization-list .article-item.as-type-main .link { display: flex; align-items: center; }
.opinion-serialization-list .article-item.as-type-main .desc { padding-top: 2px; flex: 1 1 0; }
.opinion-serialization-list .article-item.as-type-main .desc + .image {margin-left:5px;}
.opinion-serialization-list .article-item.as-type-main .image { width: 60px; height: 60px; }
.opinion-serialization-list .article-item.as-type-main .image img{width:100%;height:100%;}
.opinion-serialization-list .article-item.as-type-main .article-text { display: block;font-weight:bold; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; max-height: 42px; margin-top: -2px; font-size: 17px; line-height: 21px; color: #303038; letter-spacing: -0.3px; word-break: break-all; }
.opinion-serialization-list .article-item.as-type-main .sub-info { margin-top: 7px; font-size: 13px; line-height: 16px; color: #929294; letter-spacing: -0.3px; }
.opinion-serialization-list .article-item.as-type-main .category::before { display: inline-block; width: 2px; height: 2px; border-radius: 50%; background: #d6d6d6; margin: 7px 4px 0 2px; vertical-align: top; content: ''; }
.opinion-serialization-list .article-item.as-type-sub .link { display: block; padding: 3px 0; border-top: 1px solid rgba(239,239,240,0.8); }
.opinion-serialization-list .article-item.as-type-sub .article-text {font-size: 14px; line-height: 22px; color: #303038; letter-spacing: -0.3px; word-break: break-all; text-align: justify;}

.opinion-serialization-list.type2{grid-template-columns: repeat(2, 1fr);}
.opinion-serialization-list.type2 > li{display: flex; padding: 0;}
.opinion-serialization-list.type2 > li > a{display: flex; padding: 20px;}
.opinion-serialization-list.type2 > li .image{width: calc(48% - 40px); margin-right: 20px;}
.opinion-serialization-list.type2 > li .article-list{width: auto; flex: 1;}
.opinion-serialization-list.type2 > li .article-list li{padding: 3px 0;}
.opinion-serialization-list.type2 > li .article-list li ~ li{border-top: 1px solid rgba(239,239,240,0.8); }
.opinion-serialization-list.type2 > li .image img{width: 100%;}

@media screen and (max-width:1024px) {
   .opinion-serialization-list {grid-template-columns: repeat(2, 1fr);}
}
@media screen and (max-width:768px) {
   .opinion-serialization-list {grid-template-columns: repeat(1, 1fr) !important;}
}

.tpl-tit {margin:30px 0;padding:10px;font-size:1.5rem;background:#fdd600;}
@media only screen and (max-width:1260px) {
    .tpl-tit {font-size:1.2rem;margin-top:10px;}
}
@media only screen and (max-width:768px) {
    .tpl-tit {font-size:1.5rem}
}
`