// fs 모듈을 import로 불러오기
import fs from 'fs';
import path from 'path';

// CSS 파일을 규칙에 맞춰 변환하는 함수
function formatCSS(css) {
    // 주어진 규칙에 맞춰 패턴을 교체
    let formattedCSS = css
        .replace(/{/g, ' {')               // 여는 중괄호 앞에 공백 추가
        .replace(/:/g, ': ')               // 콜론 뒤에 공백 추가
        .replace(/;/g, '; ')               // 세미콜론 뒤에 공백 추가
        .replace(/; }/g, ';}');            // 세미콜론과 닫는 중괄호는 붙여쓰기

    return formattedCSS;
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
