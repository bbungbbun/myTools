// fs 모듈을 import로 불러오기
import fs from 'fs';
import path from 'path';

// CSS 파일을 규칙에 맞춰 변환하는 함수
function formatCSS(css) {
    // 여는 중괄호 앞에 공백 추가
    css = css.replace(/{/g, ' {');
    
    // 중괄호 내부에서 ':' 뒤에 공백이 없는 경우에만 공백 추가
    css = css.replace(/:\s*(?!\s)/g, ': ');
    
    // 중괄호 내부에서 ';' 뒤에 공백이 없는 경우에만 공백 추가
    css = css.replace(/;\s*(?!\s)/g, '; ');
    
    // 세미콜론과 닫는 중괄호를 붙여쓰기
    css = css.replace(/;\s*}/g, ';}');

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
