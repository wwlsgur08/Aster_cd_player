# PowerShell 스크립트로 로컬 서버 실행
# 사용법: .\start-server.ps1

Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "🎵 Aster Alarm 전시용 플레이어 서버 시작" -ForegroundColor Yellow
Write-Host "=" * 60 -ForegroundColor Cyan

$port = 8000
$url = "http://localhost:$port"

Write-Host "`n📍 서버 주소: $url" -ForegroundColor Green
Write-Host "📂 디렉토리: $PWD" -ForegroundColor Green

Write-Host "`n💡 팁:" -ForegroundColor Yellow
Write-Host "  - 브라우저에서 자동으로 열립니다" -ForegroundColor White
Write-Host "  - 종료하려면 Ctrl+C를 누르세요" -ForegroundColor White
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""

# Python이 설치되어 있는지 확인
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "✅ Python을 사용하여 서버를 시작합니다...`n" -ForegroundColor Green
    Start-Process $url
    python server.py
} 
elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    Write-Host "✅ Python3을 사용하여 서버를 시작합니다...`n" -ForegroundColor Green
    Start-Process $url
    python3 server.py
}
else {
    Write-Host "❌ Python이 설치되어 있지 않습니다." -ForegroundColor Red
    Write-Host "`n대안:" -ForegroundColor Yellow
    Write-Host "1. Python 설치: https://www.python.org/downloads/" -ForegroundColor White
    Write-Host "2. 또는 npx 사용: npx http-server -p $port" -ForegroundColor White
    Write-Host ""
    
    # Node.js가 설치되어 있으면 대안 제시
    if (Get-Command npx -ErrorAction SilentlyContinue) {
        $response = Read-Host "`nnpx http-server를 사용하시겠습니까? (y/n)"
        if ($response -eq 'y' -or $response -eq 'Y') {
            Write-Host "✅ npx http-server를 시작합니다...`n" -ForegroundColor Green
            Start-Process $url
            npx http-server -p $port
        }
    }
}
