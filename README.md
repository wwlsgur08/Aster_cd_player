# Aster Alarm - 전시용 매력 음악 플레이어

전시회에서 사용할 수 있는 매력 음악 플레이어입니다.

## 🎵 주요 기능

- **플레이리스트 자동 로드**: Firebase에서 생성된 모든 음악을 자동으로 불러옵니다
- **음악 재생 제어**: 재생/일시정지, 이전/다음 곡 이동
- **진행 바**: 현재 재생 시간과 전체 시간 표시, 클릭하여 원하는 위치로 이동
- **CD 애니메이션**: 재생 중 CD가 회전합니다
- **매력 정보 표시**: 각 음악의 매력 조합과 생성 정보를 표시
- **키보드 단축키**: 스페이스바(재생/일시정지), 화살표(이전/다음)
- **자동 재생**: 곡이 끝나면 자동으로 다음 곡 재생

## 📁 파일 구조

```
Aster_cd_player/
├── index.html          # 메인 HTML
├── styles.css          # 스타일시트
├── js/
│   └── player.js       # 플레이어 JavaScript
└── images/
    ├── logo.png        # 로고 이미지 (필요)
    ├── cd.png          # CD 이미지 (필요)
    └── download_icon.png # 다운로드 아이콘 (선택)
```

## 🚀 사용 방법

1. `images/` 폴더에 필요한 이미지 파일들을 추가하세요:
   - `logo.png`: 상단에 표시될 로고
   - `cd.png`: 플레이어에 표시될 CD 이미지

2. 웹 서버를 실행하세요:
   ```bash
   # Python 3가 설치되어 있다면
   python -m http.server 8000
   
   # 또는 Node.js의 http-server
   npx http-server
   ```

3. 브라우저에서 `http://localhost:8000`으로 접속

## 🎨 커스터마이징

### 색상 변경
`styles.css`의 `:root` 섹션에서 색상 변수를 수정할 수 있습니다:

```css
:root {
  --primary-color: #6a5acd;      /* 주 색상 */
  --secondary-color: #9370db;    /* 보조 색상 */
  --accent-color: #ffd700;       /* 강조 색상 */
  --bg-dark: #0a0a1f;           /* 배경색 */
}
```

### Firebase 설정
Firebase 설정은 `index.html`의 `<script>` 태그에 있습니다. 필요시 수정하세요.

## 🔧 개발 예정

- [ ] 볼륨 조절 기능
- [ ] 재생 모드 (반복, 셔플)
- [ ] 검색 기능
- [ ] 즐겨찾기 기능
- [ ] 다운로드 기능

## 📝 라이선스

© Aster Alarm
