import { text } from './text.mjs'; 

function formatCSS(css) {
    // 주어진 규칙에 맞춰 패턴을 교체합니다
    let formattedCSS = css
        .replace(/{/g, ' {')               // 여는 중괄호 앞에 공백 추가
        .replace(/:/g, ': ')               // 콜론 뒤에 공백 추가
        .replace(/;/g, '; ')               // 세미콜론 뒤에 공백 추가
        .replace(/; }/g, ';}');            // 세미콜론과 닫는 중괄호는 붙여쓰기

    return formattedCSS;
}

console.log(formatCSS(text));
