import fs from 'fs';
import path from 'path';

// 속성만 검사하고 수정하는 함수
function formatDeclarations(declarationBlock) {
    // 선언 블록에서 ':' 뒤에 공백이 없는 경우 공백을 추가
    declarationBlock = declarationBlock.replace(/:\s*(?!\s)/g, ': ');
    
    // 선언 블록에서 ';' 뒤에 공백이 없는 경우 공백을 추가
    declarationBlock = declarationBlock.replace(/;\s*(?!\s)/g, '; ');
    
    // 세미콜론과 닫는 중괄호는 붙여쓰기
    declarationBlock = declarationBlock.replace(/;\s*}/g, ';}');

    return declarationBlock;
}

// CSS 파일을 규칙에 맞춰 변환하는 함수
function formatCSS(css) {
    const regex = /([^{]+)(\{[^}]*\})/g;

    // 각 규칙을 반복 처리
    css = css.replace(regex, (match, selector, declarationBlock) => {
        declarationBlock = formatDeclarations(declarationBlock); // 선언 블록만 수정

        // 선택자와 변환된 선언 블록을 다시 조합
        return `${selector}${declarationBlock}`;
    });

    return css;
}

// CSS 파일을 읽고 수정한 후 저장하는 함수
function processCSSFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error('파일을 찾을 수 없습니다:', filePath);
        return;
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는 중 오류 발생:', err);
            return;
        }

        const formattedCSS = formatCSS(data);

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
