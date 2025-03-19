const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('good bye smileshark');
});

// 서버 실행
const PORT = 3000; // 포트 번호 설정
server.listen(PORT, () => {
  console.log(`Server running at http://13.209.81.7:${PORT}/`);
});
