// 매력 카테고리 정의
const CHARM_CATEGORIES = {
  empathy: {
    name: '이해심 및 공감 능력',
    color: { from: '#ec4899', to: '#be185d' },
    charms: ['다정함', '공감 능력', '이해심', '배려심', '경청 능력', '위로 능력', '섬세함']
  },
  responsibility: {
    name: '성실성 및 책임감',
    color: { from: '#06b6d4', to: '#0e7490' },
    charms: ['성실함', '책임감', '인내심', '계획성', '세심함', '신중함', '절제력']
  },
  curiosity: {
    name: '지적 호기심 및 개방성',
    color: { from: '#eab308', to: '#a16207' },
    charms: ['호기심', '창의성', '열린 마음', '모험심', '비판적 사고력', '통찰력', '넓은 시야', '집중력']
  },
  stability: {
    name: '정서적 안정 및 자기 인식',
    color: { from: '#22c55e', to: '#15803d' },
    charms: ['침착함', '안정감', '자기 성찰', '긍정적', '현실 감각', '자기 객관화', '자존감', '겸손']
  },
  morality: {
    name: '도덕성 및 양심',
    color: { from: '#3b82f6', to: '#1d4ed8' },
    charms: ['정직함', '양심', '일관성', '원칙 준수', '진정성', '약자보호']
  },
  humor: {
    name: '유머감각 및 사교성',
    color: { from: '#f97316', to: '#c2410c' },
    charms: ['유머 감각', '분위기 메이커', '다양한 친분', '타인을 편하게 해주는 능력', '연락 등 관계를 이어가는 능력', '사교적 에너지']
  },
  passion: {
    name: '목표 지향성 및 야망',
    color: { from: '#ef4444', to: '#b91c1c' },
    charms: ['목표 의식', '열정', '자기 계발 의지', '리더십', '야망', '경쟁심', '전략적 사고']
  }
};

// 데모 음악 데이터 (7곡)
const DEMO_TRACKS = [
  {
    id: '1',
    name: '지민',
    traits: [
      { charm_name: '침착함', stage: 6 },
      { charm_name: '안정감', stage: 5 },
      { charm_name: '긍정적', stage: 4 }
    ],
    duration: 60,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    createdAt: Date.now() - 3600000
  },
  {
    id: '2',
    name: '승현',
    traits: [
      { charm_name: '유머 감각', stage: 6 },
      { charm_name: '분위기 메이커', stage: 5 },
      { charm_name: '사교적 에너지', stage: 4 }
    ],
    duration: 45,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    createdAt: Date.now() - 7200000
  },
  {
    id: '3',
    name: '수진',
    traits: [
      { charm_name: '호기심', stage: 8 },
      { charm_name: '창의성', stage: 7 },
      { charm_name: '통찰력', stage: 6 }
    ],
    duration: 90,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    createdAt: Date.now() - 10800000
  },
  {
    id: '4',
    name: '민수',
    traits: [
      { charm_name: '정직함', stage: 7 },
      { charm_name: '양심', stage: 6 },
      { charm_name: '진정성', stage: 5 }
    ],
    duration: 75,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    createdAt: Date.now() - 14400000
  },
  {
    id: '5',
    name: '혜린',
    traits: [
      { charm_name: '다정함', stage: 8 },
      { charm_name: '공감 능력', stage: 7 },
      { charm_name: '배려심', stage: 6 }
    ],
    duration: 55,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    createdAt: Date.now() - 18000000
  },
  {
    id: '6',
    name: '태양',
    traits: [
      { charm_name: '목표 의식', stage: 9 },
      { charm_name: '열정', stage: 8 },
      { charm_name: '리더십', stage: 7 }
    ],
    duration: 80,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    createdAt: Date.now() - 21600000
  },
  {
    id: '7',
    name: '은서',
    traits: [
      { charm_name: '성실함', stage: 7 },
      { charm_name: '책임감', stage: 6 },
      { charm_name: '계획성', stage: 5 }
    ],
    duration: 65,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    createdAt: Date.now() - 25200000
  }
];

// 유틸리티 함수들
function getCategoryByCharm(charmName) {
  for (const [key, category] of Object.entries(CHARM_CATEGORIES)) {
    if (category.charms.some(charm => charmName.includes(charm) || charm.includes(charmName))) {
      return key;
    }
  }
  return 'passion'; // 기본값
}

function getDominantCategory(traits) {
  const categoryCounts = {};
  
  traits.forEach(trait => {
    const categoryKey = getCategoryByCharm(trait.charm_name);
    categoryCounts[categoryKey] = (categoryCounts[categoryKey] || 0) + 1;
  });

  let maxCount = 0;
  let dominantKey = 'passion';
  
  for (const [key, count] of Object.entries(categoryCounts)) {
    if (count > maxCount) {
      maxCount = count;
      dominantKey = key;
    }
  }

  return CHARM_CATEGORIES[dominantKey];
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// 메인 플레이어 클래스
class ExhibitionPlayer {
  constructor() {
    this.tracks = [];
    this.currentIndex = -1;
    this.isPlaying = false;
    
    // DOM 요소들
    this.audioPlayer = document.getElementById('audio-player');
    this.playBtn = document.getElementById('play-btn');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.progressBar = document.getElementById('progress-bar');
    this.progressFill = document.getElementById('progress-fill');
    this.currentTimeEl = document.getElementById('current-time');
    this.totalTimeEl = document.getElementById('total-time');
    this.trackTitle = document.getElementById('track-title');
    this.trackSubtitle = document.getElementById('track-subtitle');
    this.cdImage = document.getElementById('cd-image');
    this.playlistContainer = document.getElementById('playlist-container');
    this.musicInfo = document.getElementById('music-info');
    this.infoName = document.getElementById('info-name');
    this.infoCharms = document.getElementById('info-charms');
    
    this.init();
  }

  init() {
    console.log('🎵 전시용 플레이어 초기화');
    this.loadTracks();
    this.setupEventListeners();
  }

  loadTracks() {
    // 데모 트랙 로드
    this.tracks = DEMO_TRACKS;
    this.renderPlaylist();
    
    // 첫 번째 트랙을 기본으로 선택
    if (this.tracks.length > 0) {
      this.selectTrack(0);
    }
  }

  setupEventListeners() {
    // 재생/일시정지
    this.playBtn.addEventListener('click', () => this.togglePlay());
    
    // 이전/다음
    this.prevBtn.addEventListener('click', () => this.playPrevious());
    this.nextBtn.addEventListener('click', () => this.playNext());
    
    // 진행 바 클릭
    this.progressBar.addEventListener('click', (e) => this.seek(e));
    
    // 오디오 이벤트
    this.audioPlayer.addEventListener('loadedmetadata', () => this.onLoadedMetadata());
    this.audioPlayer.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.audioPlayer.addEventListener('ended', () => this.onEnded());
    this.audioPlayer.addEventListener('play', () => this.onPlay());
    this.audioPlayer.addEventListener('pause', () => this.onPause());
    
    // 키보드 단축키
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  renderPlaylist() {
    this.playlistContainer.innerHTML = '';
    
    this.tracks.forEach((track, index) => {
      const category = getDominantCategory(track.traits);
      const isActive = index === this.currentIndex;
      
      const item = document.createElement('div');
      item.className = `playlist-item ${isActive ? 'active' : ''}`;
      item.dataset.index = index;
      
      const charmsHTML = track.traits.map(trait => 
        `<span class="charm-tag">${trait.charm_name} Lv.${trait.stage}</span>`
      ).join('');
      
      item.innerHTML = `
        <div class="playlist-item-header">
          <div class="playlist-item-name">${track.name}의 매력 음악</div>
          ${isActive ? '<div class="playlist-item-status">재생중</div>' : ''}
        </div>
        <div class="playlist-item-category" style="background: linear-gradient(135deg, ${category.color.from}, ${category.color.to})">
          ${category.name}
        </div>
        <div class="playlist-item-charms">${charmsHTML}</div>
        <div class="playlist-item-meta">
          <span>⏱ ${formatTime(track.duration)}</span>
          <span>📅 ${formatDate(track.createdAt)}</span>
        </div>
      `;
      
      item.addEventListener('click', () => this.selectTrack(index));
      this.playlistContainer.appendChild(item);
    });
  }

  selectTrack(index) {
    if (index < 0 || index >= this.tracks.length) return;
    
    this.currentIndex = index;
    const track = this.tracks[index];
    const category = getDominantCategory(track.traits);
    
    console.log('▶️ 트랙 선택:', track.name);
    
    // UI 업데이트
    this.updateTrackInfo(track, category);
    this.updateMusicInfo(track, category);
    this.renderPlaylist();
    
    // CD 이미지 색상 업데이트
    this.updateCDColor(category);
    
    // 오디오 로드
    this.audioPlayer.src = track.audioUrl;
    
    // 버튼 상태 업데이트
    this.playBtn.disabled = false;
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex === this.tracks.length - 1;
    
    // 자동 재생은 하지 않음 (사용자가 재생 버튼을 눌러야 함)
  }

  updateTrackInfo(track, category) {
    this.trackTitle.textContent = `🎵 ${track.name}의 매력 음악`;
    this.trackSubtitle.textContent = category.name;
  }

  updateMusicInfo(track, category) {
    this.musicInfo.classList.remove('hidden');
    this.infoName.textContent = track.name;
    
    this.infoCharms.innerHTML = track.traits.map(trait => 
      `<span class="charm-badge" style="background: linear-gradient(135deg, ${category.color.from}, ${category.color.to})">${trait.charm_name} Lv.${trait.stage}</span>`
    ).join('');
  }

  updateCDColor(category) {
    // CD SVG의 그라데이션 색상 업데이트
    const svg = this.cdImage.querySelector('svg') || this.cdImage;
    if (svg) {
      // SVG 내부의 그라데이션 스탑 색상 변경
      const stops = svg.querySelectorAll('stop');
      if (stops.length >= 2) {
        stops[0].setAttribute('stop-color', category.color.from);
        stops[1].setAttribute('stop-color', category.color.to);
      }
    }
  }

  togglePlay() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play().catch(err => {
        console.error('재생 실패:', err);
      });
    } else {
      this.audioPlayer.pause();
    }
  }

  playPrevious() {
    if (this.currentIndex > 0) {
      this.selectTrack(this.currentIndex - 1);
    }
  }

  playNext() {
    if (this.currentIndex < this.tracks.length - 1) {
      this.selectTrack(this.currentIndex + 1);
    }
  }

  seek(e) {
    if (!this.audioPlayer.duration) return;
    
    const rect = this.progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    this.audioPlayer.currentTime = percent * this.audioPlayer.duration;
  }

  onLoadedMetadata() {
    this.totalTimeEl.textContent = formatTime(this.audioPlayer.duration);
  }

  onTimeUpdate() {
    if (!this.audioPlayer.duration) return;
    
    const percent = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
    this.progressFill.style.width = `${percent}%`;
    this.currentTimeEl.textContent = formatTime(this.audioPlayer.currentTime);
  }

  onEnded() {
    // 자동으로 다음 곡 재생
    if (this.currentIndex < this.tracks.length - 1) {
      this.selectTrack(this.currentIndex + 1);
      this.audioPlayer.play();
    } else {
      // 마지막 곡이면 처음으로
      this.selectTrack(0);
    }
  }

  onPlay() {
    this.isPlaying = true;
    this.playBtn.querySelector('.play-icon').textContent = '⏸';
    this.cdImage.classList.add('spinning');
  }

  onPause() {
    this.isPlaying = false;
    this.playBtn.querySelector('.play-icon').textContent = '▶';
    this.cdImage.classList.remove('spinning');
  }

  handleKeyboard(e) {
    switch(e.key) {
      case ' ':
        e.preventDefault();
        this.togglePlay();
        break;
      case 'ArrowLeft':
        this.playPrevious();
        break;
      case 'ArrowRight':
        this.playNext();
        break;
    }
  }
}

function createDynamicStars() {
  const container = document.querySelector('.dynamic-stars');
  if (!container) return;

  const numStars = 50;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    star.style.animationDuration = `${duration}s, ${duration}s`;
    star.style.animationDelay = `${delay}s, ${delay}s`;

    container.appendChild(star);
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Aster Alarm 전시용 플레이어 시작');
  new ExhibitionPlayer();
  createDynamicStars();
});