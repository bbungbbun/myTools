import { text } from './text.mjs'; // CSS 코드가 있는 파일을 가져옴

function findCamelCaseInCSSSelectors(text) {
  const regex = /[a-z]+[A-Z][a-z]*/g; // Camel Case 패턴을 찾는 정규 표현식
  const matches = [];

  // 각 줄에서 class와 id 선택자만 추출
  const lines = text.split('\n'); // 텍스트를 줄바꿈으로 나눔
  lines.forEach((line, lineNumber) => {
    // class 선택자 (.) 또는 id 선택자 (#)만 포함된 부분 추출
    const selectors = line.match(/([.#][a-zA-Z0-9-_]+)/g); 
    if (selectors) {
      selectors.forEach((selector) => {
        let match;
        // 각 선택자에서 Camel Case 찾기
        while ((match = regex.exec(selector)) !== null) {
          matches.push({
            camelCaseWord: match[0],     // Camel Case로 추정되는 문자열
            selector,                    // 선택자
            lineNumber: lineNumber + 1,  // 몇 번째 줄인지 (0부터 시작하므로 +1)
            positionInSelector: match.index + 1 // 선택자 내에서의 위치
          });
        }
      });
    }
  });

  return matches;
}

// 예시
const multilineCSS = text;

const camelCasePositions = findCamelCaseInCSSSelectors(multilineCSS);

console.log(camelCasePositions);

