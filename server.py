#!/usr/bin/env python3
"""
Aster Alarm 전시용 플레이어 - 로컬 개발 서버
"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # CORS 헤더 추가
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def log_message(self, format, *args):
        # 로그 메시지 포맷팅
        print(f"[서버] {args[0]} - {args[1]}")

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("🎵 Aster Alarm 전시용 플레이어 서버 시작")
        print("=" * 60)
        print(f"📍 서버 주소: http://localhost:{PORT}")
        print(f"📂 디렉토리: {os.getcwd()}")
        print("\n💡 팁:")
        print("  - 브라우저에서 자동으로 열립니다")
        print("  - 종료하려면 Ctrl+C를 누르세요")
        print("=" * 60)
        
        # 브라우저 자동 열기
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n서버를 종료합니다...")

if __name__ == "__main__":
    main()
