import { content } from './contentMaker.mjs';

// HTML 변환 함수
function renderProducts(content) {
    let htmlContent = '<div class="adtech-section">\n';

    content.forEach((section, index) => {
        // 각 섹션에 대한 ul 태그 생성
        htmlContent += `    <ul class="list-type list-4 mg-st2" id="shop${index + 1}">\n`;

        section.children.forEach(product => {
            // 각 제품에 대한 li 태그 생성
            htmlContent += `
            <li>
                <a href="${product.link}">
                    <div class="img">
                        <div class="img-tag1">종료 2 일전</div>
                        <img src="${product.image}" alt="${product.title}" />
                    </div>
                    <div class="prd-desc">
                        <div class="prd-info">
                            <div class="tag-info">
                                <span class="tag1">단품구성</span>
                                <span class="tag2">무료배송</span>
                            </div>
                            <div class="view"><i class="ico-view"></i><span>1,222</span></div>
                        </div>
                        <b class="prd-tit">${product.title}</b>
                        <div class="price">
                            <span class="sale"><span>8%</span><i class="ico-down"></i></span>
                            <b>${product.price}</b><span class="unit">원</span>
                        </div>
                    </div>
                </a>
            </li>\n`;
        });

        htmlContent += `    </ul>\n`;
    });

    htmlContent += '</div>';
    console.log(htmlContent);
}

renderProducts(content);
