// ═══════════════════════════════════════════════════════════
//  STATIC ROOM CONFIG
// ═══════════════════════════════════════════════════════════

const ROOMS = {
  forest:     { name: '🌲 魔法森林', el: 'room-forest',     cookieCount: 2 },
  castle:     { name: '🏰 神秘城堡', el: 'room-castle',     cookieCount: 2 },
  underwater: { name: '🌊 海底世界', el: 'room-underwater', cookieCount: 2 },
  sky:        { name: '☁️ 天空王國', el: 'room-sky',        cookieCount: 2 },
  candy:      { name: '🍭 糖果樂園', el: 'room-candy',      cookieCount: 1 },
  volcano:    { name: '🌋 火山島',   el: 'room-volcano',    cookieCount: 1 },
};

// ═══════════════════════════════════════════════════════════
//  ROOM VARIANTS — background + decorations (3 per room)
// ═══════════════════════════════════════════════════════════

const ROOM_VARIANTS = {
  forest: [
    { // 白天森林
      bg: 'linear-gradient(to bottom, #5bc8f5 55%, #3d8b37 55%, #2a5f24 100%)',
      decos: [
        {e:'☁️',x:70, y:30, s:52},{e:'☁️',x:320,y:14,s:65},{e:'☁️',x:600,y:28,s:44},
        {e:'☀️',x:720,y:60,s:40},
        {e:'🌲',x:20, y:255,s:68},{e:'🌳',x:160,y:240,s:80},{e:'🌲',x:360,y:260,s:60},
        {e:'🌳',x:490,y:248,s:72},{e:'🌲',x:660,y:258,s:58},
        {e:'🍄',x:130,y:340,s:30},{e:'🌸',x:290,y:355,s:26},{e:'🦋',x:450,y:348,s:28},
        {e:'🌻',x:600,y:352,s:26},{e:'🐇',x:740,y:345,s:28},
      ]
    },
    { // 黃昏森林
      bg: 'linear-gradient(to bottom, #ff8c55 55%, #4a7830 55%, #2d5520 100%)',
      decos: [
        {e:'🌤️',x:80, y:30,s:55},{e:'🌥️',x:340,y:14,s:60},{e:'🌅',x:660,y:20,s:55},
        {e:'🌲',x:20, y:255,s:68},{e:'🌳',x:160,y:240,s:80},{e:'🌲',x:360,y:260,s:60},
        {e:'🌳',x:490,y:248,s:72},{e:'🌲',x:660,y:258,s:58},
        {e:'🍁',x:130,y:340,s:30},{e:'🍂',x:290,y:355,s:26},{e:'🦌',x:420,y:340,s:38},
        {e:'🐿️',x:600,y:350,s:28},{e:'🦔',x:740,y:345,s:26},
      ]
    },
    { // 魔法夜晚森林
      bg: 'linear-gradient(to bottom, #1a1a4e 55%, #2d4a20 55%, #1a3010 100%)',
      decos: [
        {e:'🌙',x:700,y:25,s:44},{e:'⭐',x:100,y:30,s:24},{e:'⭐',x:300,y:15,s:20},
        {e:'⭐',x:500,y:25,s:22},{e:'✨',x:200,y:45,s:26},
        {e:'🌲',x:20, y:255,s:68},{e:'🌳',x:160,y:240,s:80},{e:'🌲',x:360,y:260,s:60},
        {e:'🌳',x:490,y:248,s:72},{e:'🌲',x:660,y:258,s:58},
        {e:'🧚',x:130,y:340,s:28},{e:'🌿',x:290,y:355,s:26},{e:'🦉',x:370,y:243,s:34},
        {e:'🐺',x:600,y:345,s:32},{e:'🍀',x:740,y:350,s:26},
      ]
    },
  ],
  castle: [
    { // 幽靈城堡
      bg: 'linear-gradient(to bottom, #1c1c3a 55%, #4a3f6b 55%, #332950 100%)',
      decos: [
        {e:'🏰',x:-10,y:20,s:200,o:0.12},
        {e:'🖼️',x:280,y:90, s:30},{e:'🕯️',x:50, y:195,s:48},{e:'🕯️',x:720,y:195,s:48},
        {e:'🪑',x:110,y:300,s:52},{e:'🗡️',x:660,y:308,s:46},{e:'🧙',x:360,y:285,s:40},
        {e:'💀',x:200,y:355,s:32},{e:'💀',x:590,y:355,s:32},{e:'⚔️',x:400,y:50, s:28},
      ]
    },
    { // 皇家城堡
      bg: 'linear-gradient(to bottom, #2c1810 55%, #5a3a20 55%, #3a2010 100%)',
      decos: [
        {e:'🏰',x:-10,y:20,s:200,o:0.12},
        {e:'👑',x:350,y:50, s:40},{e:'🎺',x:60, y:180,s:42},{e:'🛡️',x:710,y:185,s:44},
        {e:'🪑',x:110,y:300,s:52},{e:'💎',x:660,y:305,s:36},{e:'🤴',x:360,y:280,s:42},
        {e:'🏆',x:200,y:350,s:38},{e:'⚔️',x:590,y:350,s:34},{e:'🖼️',x:280,y:90, s:30},
      ]
    },
    { // 鬼怪城堡
      bg: 'linear-gradient(to bottom, #0a0a0a 55%, #1a0a2a 55%, #0a0015 100%)',
      decos: [
        {e:'🏰',x:-10,y:20,s:200,o:0.12},
        {e:'👻',x:350,y:60, s:44},{e:'🦇',x:100,y:90, s:32},{e:'🦇',x:650,y:80, s:28},
        {e:'🕸️',x:30, y:40, s:40},{e:'🕷️',x:700,y:150,s:30},
        {e:'🧟',x:360,y:285,s:42},{e:'⚰️',x:150,y:340,s:44},
        {e:'💀',x:590,y:355,s:32},{e:'🕯️',x:50, y:195,s:48},{e:'🕯️',x:720,y:195,s:48},
      ]
    },
  ],
  underwater: [
    { // 熱帶海底
      bg: 'linear-gradient(to bottom, #0055aa 0%, #003d88 55%, #002255 100%)',
      decos: [
        {e:'🐠',x:60, y:95, s:50},{e:'🐙',x:670,y:70, s:55},{e:'🐟',x:210,y:195,s:44},
        {e:'🦈',x:510,y:175,s:58},{e:'🫧',x:380,y:110,s:36},{e:'🫧',x:155,y:240,s:28},
        {e:'🫧',x:600,y:265,s:32},{e:'🪸',x:95, y:345,s:52},{e:'🐚',x:310,y:358,s:42},
        {e:'🪸',x:490,y:340,s:54},{e:'⭐',x:690,y:350,s:38},
      ]
    },
    { // 深海世界
      bg: 'linear-gradient(to bottom, #003366 0%, #002244 55%, #001133 100%)',
      decos: [
        {e:'🦑',x:60, y:90, s:52},{e:'🐬',x:640,y:75, s:54},{e:'🐡',x:220,y:200,s:46},
        {e:'🦀',x:510,y:180,s:48},{e:'🫧',x:380,y:110,s:36},{e:'🫧',x:155,y:240,s:28},
        {e:'🐳',x:400,y:60, s:60},{e:'🪸',x:95, y:345,s:52},{e:'🐙',x:310,y:355,s:42},
        {e:'🪸',x:490,y:340,s:54},{e:'⭐',x:690,y:350,s:38},
      ]
    },
    { // 綠色珊瑚海
      bg: 'linear-gradient(to bottom, #005533 0%, #003d22 55%, #002211 100%)',
      decos: [
        {e:'🐢',x:60, y:95, s:50},{e:'🦐',x:670,y:80, s:44},{e:'🐡',x:210,y:195,s:46},
        {e:'🦞',x:510,y:175,s:52},{e:'🫧',x:380,y:110,s:36},{e:'🫧',x:155,y:240,s:28},
        {e:'🫧',x:600,y:265,s:32},{e:'🪸',x:95, y:345,s:52},{e:'🐚',x:310,y:358,s:42},
        {e:'🌿',x:490,y:340,s:54},{e:'⭐',x:690,y:350,s:38},
      ]
    },
  ],
  sky: [
    { // 粉紅白天天空
      bg: 'linear-gradient(to bottom, #ffc2d1 0%, #ffcba4 45%, #d4f1c0 100%)',
      decos: [
        {e:'☁️',x:30, y:40, s:85},{e:'☁️',x:230,y:22, s:65},{e:'☁️',x:470,y:50, s:95},
        {e:'☁️',x:690,y:35, s:70},{e:'☁️',x:140,y:198,s:75},{e:'☁️',x:585,y:195,s:80},
        {e:'🌈',x:340,y:140,s:55},{e:'⭐',x:700,y:355,s:42},{e:'⭐',x:295,y:345,s:38},
        {e:'🦋',x:80, y:375,s:44},{e:'🦅',x:400,y:395,s:46},{e:'⭐',x:555,y:368,s:34},
      ]
    },
    { // 橙色夕陽天空
      bg: 'linear-gradient(to bottom, #ff7043 0%, #ffb74d 40%, #fff176 100%)',
      decos: [
        {e:'🌤️',x:30, y:40, s:80},{e:'⛅',x:250,y:22, s:70},{e:'🌤️',x:490,y:50, s:85},
        {e:'☁️',x:690,y:35, s:60},{e:'🌅',x:350,y:80, s:70},
        {e:'☁️',x:140,y:198,s:75},{e:'☁️',x:585,y:195,s:70},
        {e:'🎈',x:200,y:280,s:44},{e:'🎈',x:600,y:260,s:40},
        {e:'🦅',x:400,y:150,s:50},{e:'🦋',x:80, y:375,s:44},{e:'🌟',x:700,y:355,s:40},
      ]
    },
    { // 深藍夜空
      bg: 'linear-gradient(to bottom, #1a237e 0%, #283593 40%, #3949ab 100%)',
      decos: [
        {e:'🌙',x:700,y:25, s:50},{e:'⭐',x:50, y:30, s:30},{e:'⭐',x:150,y:10, s:24},
        {e:'⭐',x:280,y:30, s:28},{e:'⭐',x:430,y:15, s:26},{e:'⭐',x:570,y:30, s:24},
        {e:'✨',x:680,y:80, s:30},{e:'💫',x:120,y:120,s:34},{e:'🌟',x:350,y:100,s:40},
        {e:'⭐',x:600,y:120,s:28},{e:'🦉',x:200,y:280,s:44},{e:'🌠',x:400,y:350,s:50},
      ]
    },
  ],
  candy: [
    { // 粉紅糖果屋
      bg: 'linear-gradient(to bottom, #ff80c0 0%, #ffaad4 45%, #ffe0f0 100%)',
      decos: [
        {e:'🏠',x:360,y:80, s:70},{e:'🍭',x:95, y:195,s:62},{e:'🍭',x:600,y:195,s:62},
        {e:'🍬',x:285,y:275,s:50},{e:'🍬',x:490,y:265,s:50},
        {e:'🎂',x:195,y:338,s:52},{e:'🧁',x:570,y:338,s:46},
        {e:'🍦',x:700,y:355,s:38},{e:'🍩',x:45, y:358,s:38},{e:'🍫',x:345,y:368,s:34},
      ]
    },
    { // 生日派對糖果屋
      bg: 'linear-gradient(to bottom, #ff4081 0%, #f48fb1 40%, #fce4ec 100%)',
      decos: [
        {e:'🏠',x:360,y:80, s:70},{e:'🎂',x:120,y:190,s:60},{e:'🎁',x:610,y:190,s:55},
        {e:'🎈',x:200,y:120,s:44},{e:'🎈',x:580,y:115,s:40},{e:'🎊',x:380,y:50, s:46},
        {e:'🍰',x:280,y:285,s:50},{e:'🧁',x:490,y:278,s:48},
        {e:'🍭',x:80, y:360,s:38},{e:'🎀',x:680,y:355,s:40},{e:'🍫',x:380,y:368,s:34},
      ]
    },
    { // 冰淇淋王國
      bg: 'linear-gradient(to bottom, #ce93d8 0%, #e1bee7 45%, #f3e5f5 100%)',
      decos: [
        {e:'🏠',x:360,y:80, s:70},{e:'🍦',x:100,y:185,s:60},{e:'🍧',x:615,y:190,s:58},
        {e:'🍨',x:280,y:260,s:52},{e:'🍡',x:495,y:265,s:48},
        {e:'🧊',x:180,y:345,s:44},{e:'🍰',x:570,y:345,s:48},
        {e:'🍬',x:60, y:358,s:38},{e:'🍭',x:700,y:355,s:40},{e:'🍩',x:365,y:370,s:36},
      ]
    },
  ],
  volcano: [
    { // 熔岩火山
      bg: 'linear-gradient(to bottom, #111 40%, #6b0000 70%, #cc2200 100%)',
      decos: [
        {e:'🌋',x:240,y:35, s:145,o:0.85},{e:'🌴',x:45, y:298,s:58},{e:'🌴',x:660,y:298,s:58},
        {e:'🪨',x:158,y:352,s:42},{e:'🪨',x:585,y:352,s:42},
        {e:'🔥',x:355,y:348,s:36},{e:'🔥',x:455,y:342,s:30},
        {e:'🦎',x:710,y:195,s:38},{e:'🦅',x:75, y:200,s:36},
      ]
    },
    { // 恐龍火山島
      bg: 'linear-gradient(to bottom, #0d1b0d 40%, #1a4a1a 70%, #2d7a2d 100%)',
      decos: [
        {e:'🌋',x:240,y:35, s:145,o:0.85},{e:'🦕',x:55, y:285,s:68},{e:'🦖',x:635,y:280,s:70},
        {e:'🪨',x:158,y:352,s:42},{e:'🪨',x:585,y:352,s:42},
        {e:'🔥',x:355,y:348,s:36},{e:'🦴',x:420,y:358,s:34},
        {e:'🌿',x:710,y:195,s:38},{e:'🌿',x:75, y:200,s:36},
      ]
    },
    { // 寶藏火山島
      bg: 'linear-gradient(to bottom, #1a1200 40%, #4a3800 70%, #8b6900 100%)',
      decos: [
        {e:'🌋',x:240,y:35, s:145,o:0.85},{e:'🌴',x:45, y:298,s:58},{e:'🌴',x:660,y:298,s:58},
        {e:'💎',x:155,y:355,s:38},{e:'💰',x:582,y:355,s:38},
        {e:'🔥',x:355,y:348,s:36},{e:'🔥',x:455,y:342,s:30},
        {e:'⚓',x:710,y:195,s:38},{e:'💎',x:72, y:200,s:34},
      ]
    },
  ],
};

// ═══════════════════════════════════════════════════════════
//  PASSAGE SLOTS — 5 possible positions per room
// ═══════════════════════════════════════════════════════════

const PASSAGE_SLOTS = {
  forest: [
    {x:75,  y:290, e:'🕳️', label:'神奇樹洞'},
    {x:695, y:325, e:'🌀', label:'神秘漩渦'},
    {x:340, y:385, e:'🌿', label:'藤蔓小徑'},
    {x:155, y:390, e:'🍄', label:'魔法蘑菇'},
    {x:590, y:388, e:'🌸', label:'花朵傳送門'},
  ],
  castle: [
    {x:22,  y:300, e:'🚪', label:'秘密小門'},
    {x:268, y:78,  e:'🔮', label:'魔法水晶球'},
    {x:718, y:198, e:'🕯️', label:'燭台機關'},
    {x:378, y:282, e:'📖', label:'神秘古書'},
    {x:598, y:362, e:'💎', label:'寶石開關'},
  ],
  underwater: [
    {x:718, y:292, e:'⚓', label:'錨鏈通道'},
    {x:22,  y:282, e:'🌀', label:'大泡泡通道'},
    {x:378, y:352, e:'🐚', label:'神秘貝殼'},
    {x:148, y:382, e:'🪸', label:'珊瑚密道'},
    {x:638, y:378, e:'⭐', label:'海星傳送門'},
  ],
  sky: [
    {x:12,  y:50,  e:'✨', label:'星星傳送門'},
    {x:328, y:122, e:'🌈', label:'彩虹橋'},
    {x:718, y:42,  e:'⭐', label:'流星通道'},
    {x:168, y:382, e:'☁️', label:'雲朵密道'},
    {x:618, y:378, e:'🌟', label:'金星門'},
  ],
  candy: [
    {x:22,  y:328, e:'🌊', label:'巧克力河'},
    {x:712, y:318, e:'🍭', label:'棒棒糖隧道'},
    {x:388, y:372, e:'🍩', label:'甜甜圈洞'},
    {x:168, y:282, e:'🧁', label:'杯子蛋糕門'},
    {x:578, y:288, e:'🎂', label:'蛋糕密道'},
  ],
  volcano: [
    {x:708, y:262, e:'🪨', label:'熔岩洞穴'},
    {x:28,  y:265, e:'🌴', label:'棕櫚樹密道'},
    {x:378, y:368, e:'🔥', label:'火焰通道'},
    {x:148, y:378, e:'💎', label:'火山寶石門'},
    {x:598, y:382, e:'🌋', label:'火山岩縫'},
  ],
};

// ═══════════════════════════════════════════════════════════
//  COOKIE SPOTS — pool of possible positions per room
// ═══════════════════════════════════════════════════════════

const COOKIE_SPOTS = {
  forest:     [{x:155,y:312},{x:218,y:300},{x:295,y:315},{x:388,y:308},{x:460,y:300},
               {x:540,y:318},{x:615,y:305},{x:710,y:312},{x:120,y:275},{x:480,y:272},{x:675,y:270}],
  castle:     [{x:165,y:290},{x:255,y:278},{x:360,y:292},{x:445,y:285},{x:530,y:295},
               {x:630,y:260},{x:160,y:155},{x:520,y:148},{x:680,y:285},{x:380,y:148},{x:100,y:290}],
  underwater: [{x:135,y:200},{x:275,y:255},{x:395,y:185},{x:500,y:250},{x:610,y:195},
               {x:730,y:310},{x:75, y:325},{x:600,y:130},{x:340,y:320},{x:460,y:130},{x:200,y:130}],
  sky:        [{x:115,y:205},{x:225,y:160},{x:375,y:220},{x:500,y:195},{x:655,y:220},
               {x:745,y:162},{x:155,y:375},{x:665,y:375},{x:290,y:240},{x:540,y:250},{x:420,y:380}],
  candy:      [{x:145,y:285},{x:265,y:318},{x:390,y:268},{x:490,y:308},{x:615,y:275},
               {x:718,y:320},{x:50, y:285},{x:410,y:355}],
  volcano:    [{x:125,y:275},{x:250,y:318},{x:390,y:360},{x:540,y:295},{x:655,y:275},
               {x:395,y:228},{x:180,y:228},{x:600,y:228}],
};

// ═══════════════════════════════════════════════════════════
//  DIFFICULTIES
// ═══════════════════════════════════════════════════════════

const DIFFICULTIES = {
  novice: { trapCount: 0,  terrorCount: 0 },
  basic:  { trapCount: 2,  terrorCount: 0 },
  medium: { trapCount: 5,  terrorCount: 0 },
  expert: { trapCount: 15, terrorCount: 0 },
  boss:   { trapCount: 10, terrorCount: 5 },
};

// ═══════════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════════

const state = {
  currentRoom: 'forest',
  cookiesFound: 0,
  collected: new Set(),
  activePassages: {}, // roomId -> [{to, x, y, e, label}, ...]
  trapTimer: null,    // setInterval reference
  trapTimeLeft: 0,
  trapActive: false,
  difficulty: 'novice',
};

// ═══════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ═══════════════════════════════════════════════════════════
//  RANDOM SPANNING TREE (ensures all rooms reachable)
// ═══════════════════════════════════════════════════════════

function generateRoomGraph() {
  const roomIds = Object.keys(ROOMS);
  const inTree  = ['forest'];
  const notYet  = roomIds.filter(r => r !== 'forest');
  const adj = {}; // roomId -> [roomId]
  roomIds.forEach(r => adj[r] = []);

  while (notYet.length > 0) {
    const from  = pick(inTree);
    const toIdx = Math.floor(Math.random() * notYet.length);
    const to    = notYet[toIdx];
    adj[from].push(to);
    adj[to].push(from);
    inTree.push(to);
    notYet.splice(toIdx, 1);
  }
  return adj;
}

// ═══════════════════════════════════════════════════════════
//  BUILD WORLD — called on every new game
// ═══════════════════════════════════════════════════════════

function buildWorld() {
  const adj = generateRoomGraph();

  Object.entries(ROOMS).forEach(([roomId, room]) => {
    const el = document.getElementById(room.el);
    el.innerHTML = ''; // clear everything

    // ── 1. Background (random variant) ──────────────────
    const variant = pick(ROOM_VARIANTS[roomId]);
    el.style.background = variant.bg;

    // ── 2. Decorations ──────────────────────────────────
    variant.decos.forEach(d => {
      const span = document.createElement('span');
      span.className = 'deco';
      span.textContent = d.e;
      span.style.cssText = `font-size:${d.s}px;left:${d.x}px;top:${d.y}px;`;
      if (d.o != null) span.style.opacity = d.o;
      el.appendChild(span);
    });

    // ── 3. Passages (random slots for this room's neighbors) ──
    const neighbors  = adj[roomId];
    const slotPool   = shuffle([...PASSAGE_SLOTS[roomId]]);
    const usedSlots  = slotPool.slice(0, neighbors.length);
    state.activePassages[roomId] = [];

    usedSlots.forEach((slot, i) => {
      const toRoom = neighbors[i];
      const passage = { ...slot, to: toRoom };
      state.activePassages[roomId].push(passage);

      const wrap = document.createElement('div');
      wrap.className = 'passage';
      wrap.style.left = slot.x + 'px';
      wrap.style.top  = slot.y + 'px';

      const icon = document.createElement('div');
      icon.className = 'passage-emoji';
      icon.textContent = slot.e;

      const lbl = document.createElement('div');
      lbl.className = 'passage-label';
      lbl.textContent = '✨ ' + slot.label;

      wrap.appendChild(icon);
      wrap.appendChild(lbl);
      wrap.addEventListener('click', () => goToRoom(toRoom));
      el.appendChild(wrap);
    });

    // ── 4. Cookies (avoid passage positions) ────────────
    const passageXY = usedSlots.map(s => [s.x, s.y]);
    const safeSpots = shuffle([...COOKIE_SPOTS[roomId]]).filter(s =>
      !passageXY.some(([px, py]) => Math.abs(px - s.x) < 72 && Math.abs(py - s.y) < 72)
    );
    room.cookies = safeSpots.slice(0, room.cookieCount).map((spot, i) => ({
      id: roomId + '_c' + i,
      x: spot.x,
      y: spot.y,
    }));

    room.cookies.forEach(c => {
      const cel = document.createElement('div');
      cel.className = 'cookie-item';
      cel.id = c.id;
      cel.textContent = '🍪';
      cel.style.left = c.x + 'px';
      cel.style.top  = c.y + 'px';
      cel.style.animationDelay = (Math.random() * 2) + 's';
      cel.addEventListener('click', e => collectCookie(e, c.id));
      el.appendChild(cel);
    });
  });

  // ── Place trap & terror cookies based on difficulty ──
  const diff = DIFFICULTIES[state.difficulty];
  let allTrapCandidates = [];
  Object.entries(ROOMS).forEach(([roomId, room]) => {
    const cookieXY  = room.cookies.map(c => [c.x, c.y]);
    const passageXY = (state.activePassages[roomId] || []).map(p => [p.x, p.y]);
    COOKIE_SPOTS[roomId].forEach(s => {
      const tooClose =
        cookieXY.some(([ux, uy])  => Math.abs(ux - s.x) < 55 && Math.abs(uy - s.y) < 55) ||
        passageXY.some(([px, py]) => Math.abs(px - s.x) < 72 && Math.abs(py - s.y) < 72);
      if (!tooClose) allTrapCandidates.push({ roomId, x: s.x, y: s.y });
    });
  });

  shuffle(allTrapCandidates);
  const terrorSlots = allTrapCandidates.slice(0, diff.terrorCount);
  const trapSlots   = allTrapCandidates.slice(diff.terrorCount, diff.terrorCount + diff.trapCount);

  terrorSlots.forEach((spot, i) => {
    const id  = 'terror_' + i;
    const cel = document.createElement('div');
    cel.className = 'cookie-item trap-cookie';
    cel.id = id;
    cel.textContent = '🍪';
    cel.style.left = spot.x + 'px';
    cel.style.top  = spot.y + 'px';
    cel.style.animationDelay = (Math.random() * 2) + 's';
    cel.addEventListener('click', e => collectCookie(e, id));
    document.getElementById(ROOMS[spot.roomId].el).appendChild(cel);
  });

  trapSlots.forEach((spot, i) => {
    const id  = 'trap_' + i;
    const cel = document.createElement('div');
    cel.className = 'cookie-item trap-cookie';
    cel.id = id;
    cel.textContent = '🍪';
    cel.style.left = spot.x + 'px';
    cel.style.top  = spot.y + 'px';
    cel.style.animationDelay = (Math.random() * 2) + 's';
    cel.addEventListener('click', e => collectCookie(e, id));
    document.getElementById(ROOMS[spot.roomId].el).appendChild(cel);
  });
}

// ═══════════════════════════════════════════════════════════
//  COLLECT COOKIE
// ═══════════════════════════════════════════════════════════

function collectCookie(e, id) {
  if (state.collected.has(id)) return;
  state.collected.add(id);

  const isTrap   = id.startsWith('trap_');
  const isTerror = id.startsWith('terror_');
  const el = document.getElementById(id);
  el.classList.add('collecting');
  setTimeout(() => el.classList.add('gone'), 450);

  if (isTerror) {
    // ── Terror cookie: instant game over ──
    spawnEffect(e.clientX, e.clientY, ['💀','💀','💀','😱','⚡']);
    setTimeout(() => {
      document.getElementById('gameover-msg').innerHTML = '你踩到了<span style="color:#ff4444">恐怖餅乾</span>，直接被吃掉了！💀';
      gameOver();
    }, 300);
    return;
  }

  if (isTrap) {
    // ── Trap collected! ──
    spawnEffect(e.clientX, e.clientY, ['☠️','💀','⚠️','🤢','😵']);
    startTrapTimer();
    return;
  }

  // ── Real cookie ──
  state.cookiesFound++;
  spawnEffect(e.clientX, e.clientY, ['⭐','✨','💫','🌟','🎉']);

  if (state.trapActive) {
    stopTrapTimer(true); // saved!
  }

  updateHUD();
  document.getElementById('bowl-count').textContent = state.cookiesFound;
  if (state.cookiesFound >= 10) setTimeout(showWin, 600);
}

function spawnEffect(cx, cy, pool) {
  for (let i = 0; i < 4; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = pick(pool);
    el.style.left = (cx + (Math.random() - 0.5) * 70) + 'px';
    el.style.top  = (cy + (Math.random() - 0.5) * 50) + 'px';
    el.style.animationDelay = (i * 0.09) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
}

// ═══════════════════════════════════════════════════════════
//  TRAP TIMER
// ═══════════════════════════════════════════════════════════

const TRAP_SECONDS = 30;

function startTrapTimer() {
  // Already running? Cut remaining time in half instead of resetting
  if (state.trapTimer) {
    state.trapTimeLeft = Math.max(1, Math.floor(state.trapTimeLeft / 2));
    updateTrapUI();
    return;
  }

  state.trapActive   = true;
  state.trapTimeLeft = TRAP_SECONDS;

  const panel = document.getElementById('trap-panel');
  panel.classList.remove('saved', 'urgent');
  panel.classList.add('show');
  updateTrapUI();

  state.trapTimer = setInterval(() => {
    state.trapTimeLeft--;
    updateTrapUI();

    if (state.trapTimeLeft <= 5) {
      panel.classList.add('urgent');
    }
    if (state.trapTimeLeft <= 0) {
      stopTrapTimer(false);
      gameOver();
    }
  }, 1000);
}

function stopTrapTimer(saved) {
  clearInterval(state.trapTimer);
  state.trapTimer  = null;
  state.trapActive = false;

  const panel = document.getElementById('trap-panel');
  if (saved) {
    panel.classList.remove('urgent');
    panel.classList.add('saved');
    setTimeout(() => panel.classList.remove('show', 'saved'), 1600);
  } else {
    panel.classList.remove('show', 'urgent', 'saved');
  }
}

function updateTrapUI() {
  document.getElementById('trap-countdown').textContent = state.trapTimeLeft;
  const pct = state.trapTimeLeft / TRAP_SECONDS * 100;
  const bar = document.getElementById('trap-bar');
  bar.style.width = pct + '%';
  bar.style.background = state.trapTimeLeft <= 5 ? '#ff2200'
                       : state.trapTimeLeft <= 10 ? '#ff8c00'
                       : '#44ff88';
}

function gameOver() {
  document.getElementById('gameover-screen').classList.add('show');
}

// ═══════════════════════════════════════════════════════════
//  ROOM NAVIGATION
// ═══════════════════════════════════════════════════════════

function goToRoom(roomId) {
  if (roomId === state.currentRoom) return;
  const overlay = document.getElementById('transition-overlay');
  overlay.classList.add('fade-in');
  setTimeout(() => {
    document.getElementById(ROOMS[state.currentRoom].el).classList.remove('active');
    document.getElementById(ROOMS[roomId].el).classList.add('active');
    state.currentRoom = roomId;
    updateHUD();
    setTimeout(() => overlay.classList.remove('fade-in'), 40);
  }, 280);
}

// ═══════════════════════════════════════════════════════════
//  HUD
// ═══════════════════════════════════════════════════════════

function updateHUD() {
  document.getElementById('room-display').textContent = '📍 ' + ROOMS[state.currentRoom].name;
  document.getElementById('cookie-counter').textContent = `🍪 ${state.cookiesFound} / 10`;
}

// ═══════════════════════════════════════════════════════════
//  HINT
// ═══════════════════════════════════════════════════════════

function showHint() {
  const room    = ROOMS[state.currentRoom];
  const left    = room.cookies.filter(c => !state.collected.has(c.id)).length;
  const passages = state.activePassages[state.currentRoom] || [];
  const exits   = passages.map(p => `${p.e} ${p.label} → ${ROOMS[p.to].name}`).join('\n');
  let msg = `${room.name}\n────────────────────\n`;
  msg += `🍪 這個房間還剩 ${left} 個餅乾\n\n`;
  msg += exits ? `🚪 秘密通道：\n${exits}\n\n` : `🚪 這個房間沒有出口！\n\n`;
  msg += `💡 移到發光的物件上就能找到秘密通道！`;
  alert(msg);
}

// ═══════════════════════════════════════════════════════════
//  WIN
// ═══════════════════════════════════════════════════════════

function showWin() {
  document.getElementById('win-screen').classList.add('show');
  launchConfetti();
}

function launchConfetti() {
  const colors = ['#ffd700','#ff6b6b','#4ecdc4','#45b7d1','#96ceb4','#ff9f43','#a29bfe','#fd79a8'];
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left   = Math.random() * 100 + 'vw';
      el.style.top    = '-14px';
      el.style.width  = (Math.random() * 10 + 6) + 'px';
      el.style.height = (Math.random() * 10 + 6) + 'px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDuration = (Math.random() * 2.5 + 2) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }, i * 45);
  }
}

// ═══════════════════════════════════════════════════════════
//  START GAME (from difficulty screen)
// ═══════════════════════════════════════════════════════════

function startGame(diff) {
  state.difficulty = diff;
  document.getElementById('difficulty-screen').classList.remove('show');
  _doStartGame();
}

function _doStartGame() {
  if (state.trapTimer) clearInterval(state.trapTimer);
  state.trapTimer    = null;
  state.trapActive   = false;
  state.trapTimeLeft = 0;
  const panel = document.getElementById('trap-panel');
  panel.classList.remove('show', 'saved', 'urgent');

  state.currentRoom = 'forest';
  state.cookiesFound = 0;
  state.collected.clear();

  document.querySelectorAll('.room').forEach(el => el.classList.remove('active'));
  document.getElementById('room-forest').classList.add('active');
  document.getElementById('win-screen').classList.remove('show');
  document.getElementById('gameover-screen').classList.remove('show');
  document.getElementById('bowl-count').textContent = '0';
  document.getElementById('gameover-msg').innerHTML =
    '你被陷阱餅乾困住太久了！<br>下次要小心那些<span style="color:#ff8888">奇怪的餅乾</span>喔！';

  buildWorld();
  updateHUD();
}

// ═══════════════════════════════════════════════════════════
//  RESTART — return to difficulty selection
// ═══════════════════════════════════════════════════════════

function restartGame() {
  document.getElementById('win-screen').classList.remove('show');
  document.getElementById('gameover-screen').classList.remove('show');
  document.getElementById('difficulty-screen').classList.add('show');
}

// ═══════════════════════════════════════════════════════════
//  PLAYER CHARACTER (follows mouse)
// ═══════════════════════════════════════════════════════════

(function () {
  const player    = document.getElementById('player');
  const flipEl    = document.getElementById('player-flip');
  const container = document.getElementById('game-container');

  let curX = 380, curY = 220, tgtX = 380, tgtY = 220, prevX = 380, facing = 1;

  player.style.left = curX + 'px';
  player.style.top  = curY + 'px';
  flipEl.style.transform = 'scaleX(1)';

  container.addEventListener('mousemove', e => {
    const r = container.getBoundingClientRect();
    tgtX = e.clientX - r.left - 34;
    tgtY = e.clientY - r.top  - 78;
  });
  container.addEventListener('mouseleave', () => player.classList.remove('walking'));

  function tick() {
    curX += (tgtX - curX) * 0.13;
    curY += (tgtY - curY) * 0.13;
    const dx = curX - prevX;
    const moving = Math.abs(tgtX - curX) > 0.7 || Math.abs(tgtY - curY) > 0.7;
    if      (dx >  0.25) facing =  1;
    else if (dx < -0.25) facing = -1;
    player.style.left = curX + 'px';
    player.style.top  = curY + 'px';
    flipEl.style.transform = `scaleX(${facing})`;
    player.classList.toggle('walking', moving);
    prevX = curX;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// ── Start: show difficulty selection ──
document.getElementById('difficulty-screen').classList.add('show');
updateHUD();
