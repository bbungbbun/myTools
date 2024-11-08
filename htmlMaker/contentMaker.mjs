const data = `
남성의류	1	남성 슬림핏 트레이닝복 헬스 라운드넥 긴팔티 IS-LT08	12,000	/product/남성-슬림핏-트레이닝복-헬스-라운드넥-긴팔티-is-lt08/68/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/0cda9bed4d3bb27b295418601608e789.jpg
남성의류	2	리오넬 세미 남자 트레이닝팬츠 SH-7106	9,000	/product/리오넬-세미-남자-트레이닝팬츠-sh-7106/67/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/9fe362ae934a89211d775a01de92cfbb.jpg
남성의류	3	투턱 남자 바지 와이드 데님 팬츠 남성 흑청 바지	41,000	/product/투턱-남자-바지-와이드-데님-팬츠-남성-흑청-바지/66/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/8df72c2cf193122c134e77ec07cf7bf3.jpg
남성의류	4	남성 와이드 청바지 간절기 일자 팬츠 진청 중청 블랙진	20,000	/product/남성-와이드-청바지-간절기-일자-팬츠-진청-중청-블랙진/65/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/5519eeefd812c5647da7dcea863846e3.jpg
남성의류	5	보아털 방수 방풍 패딩 남자 팬츠 겨울 팬츠 방수 팬츠 두꺼운 바지 배달바지 밴딩바지 라이	21,000	/product/보아털-방수-방풍-패딩-남자-팬츠-겨울-팬츠-방수-팬츠-두꺼운-바지-배달바지-밴딩바지-라이/64/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/d530dc2e3a2c57be07d84084aea129a9.jpg
남성의류	6	남성 기모 신사 등산바지 [ 기본벨트 무료증정 ]	20,000	/product/남성-기모-신사-등산바지-기본벨트-무료증정/63/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/589be88d95ef7e3e36741deb3b9a5afa.jpg
남성의류	7	남성 데일리 베스트 초경량 간절기 회사 사무실 조끼	20,000	/product/남성-데일리-베스트-초경량-간절기-회사-사무실-조끼/62/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/a87f2ce19d9f738060993a207f7ec822.jpg
남성의류	8	빅사이즈 패딩조끼 경량 캐주얼점퍼 남여공용 쪼끼패딩 IS-JP51	24,000	/product/빅사이즈-패딩조끼-경량-캐주얼점퍼-남여공용-쪼끼패딩-is-jp51/61/category/24/display/1/	//www.shopbud.market/web/product/medium/202411/b84bf2689b53435a189c3e904089c502.jpg
여성의류	1	기모 여성 트레이닝복 세트 놈코어룩 겨울 츄리닝	28,000	https://www.shopbud.market/product/기모-여성-트레이닝복-세트-놈코어룩-겨울-츄리닝/97/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/0de33f5387fc391a7878cee6ab667938.jpg
여성의류	2	통큰트레이닝팬츠 트레이닝바지 baigneuse	33,000	https://www.shopbud.market/product/통큰트레이닝팬츠-트레이닝바지-baigneuse/96/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/c57ac435f1c470181adcf843ece0f054.jpg
여성의류	3	여성 스트링 카고 워싱 청바지 데님 팬츠 [편한 Y2K 여자 연청 허리 밴딩 절개라인 포켓	29,000	https://www.shopbud.market/product/여성-스트링-카고-워싱-청바지-데님-팬츠-편한-y2k-여자-연청-허리-밴딩-절개라인-포켓/95/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/206d59eb382e37d0242d5065c0579ec0.jpg
여성의류	4	브라운 빈티지 워싱 여자 청바지 데님 팬츠 [2size 와이드 여성 일자핏 통 바지 블랙	40,000	https://www.shopbud.market/product/브라운-빈티지-워싱-여자-청바지-데님-팬츠-2size-와이드-여성-일자핏-통-바지-블랙/94/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/bb6d92dd6b39a48890557a46cb8f56c2.jpg
여성의류	5	데일리 일자핏 데님팬츠 여성청바지 진 LK-DP01	21,000	https://www.shopbud.market/product/데일리-일자핏-데님팬츠-여성청바지-진-lk-dp01/93/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/27a8f6e99b2874597e7ce9f92fe1714c.jpg
여성의류	6	은창]골지 코듀로이 기모 보온 와이드 팬츠 바지 겨울 가을 봄 겨울 바지 밴딩 팬츠 무지	11,000	https://www.shopbud.market/product/은창골지-코듀로이-기모-보온-와이드-팬츠-바지-겨울-가을-봄-겨울-바지-밴딩-팬츠-무지/92/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/11dfad82108b332528d369331edbb098.jpg
여성의류	7	패딩/패딩바지 오리털패딩 깃털패딩 여성패딩바지 기모바지	28,000	https://www.shopbud.market/product/패딩패딩바지-오리털패딩-깃털패딩-여성패딩바지-기모바지/91/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/a3b02f6a930d707983848e5c7b2259fd.jpg
여성의류	8	여성 뽀글이 양털 조끼 퍼베스트 후리스 수면조끼	14,000	https://www.shopbud.market/product/여성-뽀글이-양털-조끼-퍼베스트-후리스-수면조끼/90/category/25/display/1/	https://www.shopbud.market/web/product/medium/202411/792d2a02f4088b21fe4f5b0587b67876.jpg
패션잡화	1	여성 융털 기모니삭스 겨울양말	2,000	https://www.shopbud.market/product/여성-융털-기모니삭스-겨울양말/106/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/eff3ae6f66824ad79fa7f7a50068a8ae.jpg
패션잡화	2	*새롬샵* 캐시미어 스카이 버진울 머플러	5,000	https://www.shopbud.market/product/새롬샵-캐시미어-스카이-버진울-머플러/105/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/e809b4a12997816e53da71038b9ff01c.jpg
패션잡화	3	입체G로고 파우치 백팩 ELG-221	28,000	https://www.shopbud.market/product/입체g로고-파우치-백팩-elg-221/104/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/325be54bf53c00e2af76aa375c93b9a6.jpg
패션잡화	4	포올 초경량 조리 백팩 FA760 남녀공용 (4color)	23,000	https://www.shopbud.market/product/포올-초경량-조리-백팩-fa760-남녀공용-4color/103/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/73dddc79f4fdcc371f5e1faaa4524aa7.jpg
패션잡화	5	남성 스니커즈 가죽 로퍼 DS-CC060	25,000	https://www.shopbud.market/product/남성-스니커즈-가죽-로퍼-ds-cc060/102/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/88cdaf09bcaf6dd282db59aa278c44ed.jpg
패션잡화	6	230-250 스웨이드 옆지퍼 털부츠	17,000	https://www.shopbud.market/product/230-250-스웨이드-옆지퍼-털부츠/101/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/d861f37d60126fcb609e00916d60484e.jpg
패션잡화	7	빈티지 패치 헌팅캡 ELM-180	11,000	https://www.shopbud.market/product/빈티지-패치-헌팅캡-elm-180/100/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/22a4b85785280d82e56930981af06232.jpg
패션잡화	8	도톰 니트 벙거지 겨울 버킷햇	4,000	https://www.shopbud.market/product/도톰-니트-벙거지-겨울-버킷햇/99/category/27/display/1/	https://www.shopbud.market/web/product/medium/202411/f7355faf5c049822ebf86f19d4d196eb.jpg
식품	1	닥터그루트 탈모 집중케어 샴푸 400ML 지성모발용 탈모기능성	25,000	https://www.shopbud.market/product/닥터그루트-탈모-집중케어-샴푸-400ml-지성모발용-탈모기능성/111/category/26/display/1/	https://www.shopbud.market/web/product/medium/202411/4c38586f40a3e6353989a92a5b671735.jpg
식품	2	에코 로비스타 정수리 냄새 제거 샴푸 천연 무실리콘 향기 좋은 청소년 아저씨 아르간 헤어	17,000	https://www.shopbud.market/product/에코-로비스타-정수리-냄새-제거-샴푸-천연-무실리콘-향기-좋은-청소년-아저씨-아르간-헤어/110/category/26/display/1/	https://www.shopbud.market/web/product/medium/202411/bc856dc891ec9037eedcc41efbaf3bfd.jpg
식품	3	3W 콜라겐 화이트 클리어 소프너 스킨소프트너 150ml	9,000	https://www.shopbud.market/product/3w-콜라겐-화이트-클리어-소프너-스킨소프트너-150ml/109/category/26/display/1/	https://www.shopbud.market/web/product/medium/202411/2422efdc5349582fa47618df65d5924e.jpg
식품	4	엔프라니 옴므 피토파워 올인원 에센스 200ml	29,000	https://www.shopbud.market/product/엔프라니-옴므-피토파워-올인원-에센스-200ml/108/category/26/display/1/	https://www.shopbud.market/web/product/medium/202411/ff647b8de15d2ebc85783d7bf162e743.jpg
식품	5	캐릭터 리파이닝 로션 350ml	5,000	https://www.shopbud.market/product/캐릭터-리파이닝-로션-350ml/107/category/26/display/1/	https://www.shopbud.market/web/product/medium/202411/27257759edaf6eab9f1da08e89e9da32.jpg
식품	6	헤어스타일 남자왁스 소프트왁스	43,000	https://www.shopbud.market/product/헤어스타일-남자왁스-소프트왁스/44/category/26/display/1/	https://www.shopbud.market/web/product/medium/202410/6f405d048e36829417bb97c596a4a4f3.jpg
가전/휴대폰	1	맥세이프 카드지갑 애니메이션 (5가지 색상)	17,900	https://www.shopbud.market/product/맥세이프-카드지갑-애니메이션-5가지-색상/115/category/28/display/1/	https://www.shopbud.market/web/product/medium/202411/f31d530c9aa1baedff4360366d88b0e0.jpg
가전/휴대폰	2	매직홀 맥세이프 호환 메탈 젤리케이스 갤럭시 S24 S23 S22 울트라 플러스 Magsa	10,000	https://www.shopbud.market/product/매직홀-맥세이프-호환-메탈-젤리케이스-갤럭시-s24-s23-s22-울트라-플러스-magsa/114/category/28/display/1/	https://www.shopbud.market/web/product/medium/202411/6a29e0fc40c470db19aef7da9110afe3.jpg
가전/휴대폰	3	회전 이동식 TV거치대 세로TV거치대 TV스탠드	105,000	https://www.shopbud.market/product/회전-이동식-tv거치대-세로tv거치대-tv스탠드/113/category/28/display/1/	https://www.shopbud.market/web/product/medium/202411/5ef76ea82e41e2aeb597721154778baf.jpg
가전/휴대폰	4	쿨웨이 복합식 깐깐 가습기 100도 살균 간편세척 자동습도조절 RR-H940	88,000	https://www.shopbud.market/product/쿨웨이-복합식-깐깐-가습기-100도-살균-간편세척-자동습도조절-rr-h940/112/category/28/display/1/	https://www.shopbud.market/web/product/medium/202411/c9bdcf31c9187722b32d8cf25a5ed7e8.jpg
가전/휴대폰	5	휴대용 미니 삼발이 스마트폰 핸드폰 삼각대	20,000	https://www.shopbud.market/product/휴대용-미니-삼발이-스마트폰-핸드폰-삼각대/39/category/28/display/1/	https://www.shopbud.market/web/product/medium/202410/6e98e5280e22ad29f2a64648e0a0fc33.jpg
가전/휴대폰	6	석영관 히터 점보 4단 전기히터 가정용 업소용 사무실 난방기 대형온풍히터	130,000	https://www.shopbud.market/product/석영관-히터-점보-4단-전기히터-가정용-업소용-사무실-난방기-대형온풍히터/38/category/28/display/1/	https://www.shopbud.market/web/product/medium/202410/a2e8361492e03b00d3e7345cbcba2b6f.jpg
`

const rows = data.trim().split("\n");

export const content = rows.reduce((result, row) => {
    const [type, id, title, price, link, image] = row.split("\t");

    let category = result.find(item => item.type === type);
    if (!category) {
        category = { type, children: [] };
        result.push(category);
    }

    category.children.push({
        id: parseInt(id),
        title,
        price,
        link,
        image
    });

    return result;
}, []);
