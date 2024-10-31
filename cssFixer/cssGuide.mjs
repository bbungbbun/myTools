// fs 모듈을 import로 불러오기
import fs from 'fs';
import path from 'path';

// CSS 파일을 규칙에 맞춰 변환하는 함수
function formatCSS(css) {
    // 여는 중괄호 앞에 공백 추가
    css = css.replace(/{/g, ' {');

    // 의사 클래스 및 의사 요소를 제외한 규칙을 처리하기 위한 정규식
    const regex = /([^{]+?)(\{([^}]*)\})/g;

    // 각 규칙을 반복 처리
    css = css.replace(regex, (match, selector, declarationBlock) => {
        // 의사 클래스 또는 의사 요소가 포함된 선택자 여부 확인
        const hasPseudo = /:\s*(before|after|hover|focus|nth-child|nth-of-type|nth-last-child|nth-last-of-type|first-child|last-child|not)/.test(selector);

        // 의사 클래스가 포함되지 않은 경우에만 수정
        if (!hasPseudo) {  
            // 중괄호 내부에서 ':' 뒤에 공백이 없는 경우에만 공백 추가
            declarationBlock = declarationBlock.replace(/:\s*(?!\s)/g, ': ');

            // 중괄호 내부에서 ';' 뒤에 공백이 없는 경우에만 공백 추가
            declarationBlock = declarationBlock.replace(/;\s*(?!\s)/g, '; ');

            // 세미콜론과 닫는 중괄호를 붙여쓰기
            declarationBlock = declarationBlock.replace(/;\s*}/g, ';}');
        }

        // 선택자와 변환된 선언 블록을 다시 조합
        return `${selector}${declarationBlock}`;
    });

    return css;
}

// CSS 파일을 읽고 수정한 후 저장하는 함수
function processCSSFile(filePath) {
    // 파일이 존재하는지 확인
    if (!fs.existsSync(filePath)) {
        console.error('파일을 찾을 수 없습니다:', filePath);
        return;
    }

    // 파일을 읽기
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는 중 오류 발생:', err);
            return;
        }

        // 파일 내용을 규칙에 맞게 변환
        const formattedCSS = formatCSS(data);

        // 변환된 내용을 같은 파일에 덮어쓰기
        fs.writeFile(filePath, formattedCSS, (err) => {
            if (err) {
                console.error('파일을 저장하는 중 오류 발생:', err);
            } else {
                console.log('파일이 성공적으로 변환되었습니다:', filePath);
            }
        });
    });
}

// 사용할 CSS 파일 경로 (예: './style.css')
const cssFilePath = path.join(process.cwd(), 'style.css');

// CSS 파일 처리 함수 호출
processCSSFile(cssFilePath);
