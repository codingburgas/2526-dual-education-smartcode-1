 const CITY_ZONES = [
        {
            id: 'solar',
            name: 'Соларен парк',
            tagline: 'Чиста слънчева енергия за целия квартал',
            category: 'energy',
            cssClass: 'zone-solar',
            iconColor: '#c8a84b',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#c8a84b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>`,
            description: 'Соларният парк е сърцето на енергийната система на умния град. Хиляди фотоволтаични панели преобразуват слънчевата светлина в чиста електроенергия.',
            facts: [
                '12 000 соларни панела с обща мощност 4.8 MW',
                'Покрива 35% от нуждите на квартала',
                'Намалява CO2 с 2 400 тона годишно',
                'Автоматично ориентиране по слънцето (tracking системи)'
            ]
        },
        {
            id: 'forest',
            name: 'Градска гора',
            tagline: 'Зелен белодроб на нашия град',
            category: 'nature',
            cssClass: 'zone-forest',
            iconColor: '#2d7a2d',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2d7a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 22v-3.27a3.29 3.29 0 0 0-.94-2.33l-6.06-6.06A3.29 3.29 0 0 1 9 8.06V6"/>
                <path d="M12 22V12"/><path d="M7 22v-3.27a3.29 3.29 0 0 1 .94-2.33l4.12-4.12"/>
                <path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
            </svg>`,
            description: 'Градската гора е изкуствено залесен парк с над 5 000 дървета. Служи като естествен филтър за въздуха и място за отдих.',
            facts: [
                '5 200 дървета от 18 местни вида',
                'Намалява градската температура с 3-5°C',
                'Поглъща 180 тона CO2 годишно',
                'Дом за 60+ вида птици и насекоми'
            ]
        },
        {
            id: 'water',
            name: 'Водна система',
            tagline: 'Умно управление на водните ресурси',
            category: 'infrastructure',
            cssClass: 'zone-water',
            iconColor: '#2a8c7a',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2a8c7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>`,
            description: 'Иновативна система за събиране, пречистване и рециклиране на дъждовна вода. Намалява потреблението с над 40%.',
            facts: [
                'Събира 2 млн. литра дъждовна вода годишно',
                'Тристепенна система за пречистване',
                'Намалява потреблението с 42%',
                'IoT сензори следят качеството в реално време'
            ]
        },
        {
            id: 'recycling',
            name: 'Рециклиращ хъб',
            tagline: 'Нулеви отпадъци за кръгова икономика',
            category: 'infrastructure',
            cssClass: 'zone-recycling',
            iconColor: '#7ab648',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#7ab648" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
            </svg>`,
            description: 'Модерен хъб за разделно събиране и преработка на отпадъци. Умни контейнери с IoT сензори оптимизират транспорта.',
            facts: [
                '78% от отпадъците се рециклират',
                'Умни контейнери с 12 категории',
                'Намалява депонирането с 3 400 тона/год.',
                'Биоразградимите отпадъци се превръщат в компост'
            ]
        },
        {
            id: 'transport',
            name: 'Еко-транспорт',
            tagline: 'Електрически и споделен транспорт',
            category: 'infrastructure',
            cssClass: 'zone-transport',
            iconColor: '#2a8c7a',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2a8c7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>`,
            description: 'Мрежа от електрически автобуси, споделени велосипеди и зарядни станции. Безвъглероден транспорт за всички граждани.',
            facts: [
                '45 електрически автобуса в мрежата',
                '800 станции за споделени велосипеди',
                '120 бързи зарядни точки за EV',
                'Намалява трафика с 28%'
            ]
        },
        {
            id: 'gardens',
            name: 'Вертикални градини',
            tagline: 'Земеделие в сърцето на града',
            category: 'nature',
            cssClass: 'zone-gardens',
            iconColor: '#2d7a2d',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2d7a2d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22V12m0 0c0-5.5-7-7-7-7s1.5 7 7 7zm0 0c0-5.5 7-7 7-7s-1.5 7-7 7z"/>
            </svg>`,
            description: 'Иновативни вертикални градини по фасадите на сградите. Произвеждат пресни зеленчуци и подобряват изолацията.',
            facts: [
                '64 сгради с вертикални градини',
                'Произвеждат 48 тона зеленчуци годишно',
                'Намаляват нуждата от отопление с 15%',
                'Хидропонни системи без почва и пестициди'
            ]
        }
    ];

    /** @type {Array} Статистически карти */
    const CITY_STATS = [
        {
            id: 'energy',
            label: 'Възобновяема енергия',
            value: 73,
            unit: '%',
            delta: '+8% спрямо миналата година',
            trend: 'up',
            barTarget: 73,
            iconColor: '#c8a84b',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#c8a84b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>`
        },
        {
            id: 'air',
            label: 'Чистота на въздуха',
            value: 91,
            unit: '/100',
            delta: 'Отличен индекс',
            trend: 'up',
            barTarget: 91,
            iconColor: '#2a8c7a',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#2a8c7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
            </svg>`
        },
        {
            id: 'recycling',
            label: 'Рециклиране',
            value: 78,
            unit: '%',
            delta: '+12% от 2024',
            trend: 'up',
            barTarget: 78,
            iconColor: '#7ab648',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#7ab648" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
            </svg>`
        },
        {
            id: 'co2',
            label: 'Намалени емисии',
            value: 34,
            unit: '%',
            delta: 'Цел: 50% до 2030',
            trend: 'up',
            barTarget: 34,
            iconColor: '#b85a2a',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#b85a2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
            </svg>`
        }
    ];

    /** @type {Array} Видео данни */
    const VIDEO_TOPICS = [
        {
            id: 'solar',
            label: 'Соларна енергия',
            videos: [
                {
                    id: 'inLeRqmVDYE',
                    title: 'Как работят соларните панели',
                    desc: 'Разбери принципа на фотоволтаичното преобразуване на енергия.',
                    duration: '8:32'
                },
                {
                    id: '3lMHDS49yMc',
                    title: 'Соларни системи за дома',
                    desc: 'Практическо ръководство за домашни соларни инсталации.',
                    duration: '11:15'
                }
            ]
        },
        {
            id: 'urban',
            label: 'Зелен град',
            videos: [
                {
                    id: 'XBmAvMQFMjA',
                    title: 'Умни градове на бъдещето',
                    desc: 'Как технологиите трансформират градската среда.',
                    duration: '14:08'
                },
                {
                    id: 'W3wHJUZE8wM',
                    title: 'Вертикалните градини',
                    desc: 'Земеделие в сърцето на метрополиса.',
                    duration: '7:45'
                }
            ]
        },
        {
            id: 'recycling',
            label: 'Рециклиране',
            videos: [
                {
                    id: 'OasbYWF4_S8',
                    title: 'Пластмасата и океаните',
                    desc: 'Влиянието на пластмасата и как да го намалим.',
                    duration: '9:20'
                },
                {
                    id: 'iFoMfHLa_8s',
                    title: 'Кръговата икономика',
                    desc: 'Принципите на нулевото производство на отпадъци.',
                    duration: '6:55'
                }
            ]
        }
    ];

    // ============================================================
    // STATE — Глобално състояние
    // ============================================================
    let exploredZones = new Set(); // Отключени зони
    let currentModalZone = null;   // Текуща отворена зона в modal
    let currentFilter = 'all';     // Текущ филтър в дневника
    let currentTopic = null;       // Текуща видео тема

    // ============================================================
    // UTILITY FUNCTIONS — Помощни функции
    // ============================================================

    /**
     * Показва toast нотификация
     * @param {string} title - Заглавие
     * @param {string} message - Съобщение
     */
    function showToast(title, message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<div class="toast-title">${title}</div>${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    /**
     * Анимира числова стойност от 0 до target
     * @param {HTMLElement} el - Целеви елемент
     * @param {number} target - Крайна стойност
     * @param {string} suffix - Суфикс (%, /100 и т.н.)
     * @param {number} duration - Продължителност в ms
     */
    function animateCounter(el, target, suffix, duration = 1600) {
        const start = performance.now();
        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    // ============================================================
    // MODULE 1: ECO-MODE (Тъмна тема + localStorage)
    // ============================================================

    /**
     * Прилага темата към документа
     * @param {string} theme - 'light' | 'dark'
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('eco-city-theme', theme);
    }

    /** Инициализира Eco-Mode от localStorage */
    function initEcoMode() {
        const saved = localStorage.getItem('eco-city-theme') || 'light';
        applyTheme(saved);

        const btn = document.getElementById('eco-toggle');
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            showToast(
                next === 'dark' ? 'Eco Mode ON' : 'Eco Mode OFF',
                next === 'dark'
                    ? 'Тъмната тема е активирана. По-малко светлина = по-малко енергия!'
                    : 'Върнахте се към светлата тема.'
            );
        });
    }

    // ============================================================
    // MODULE 2: HAMBURGER MENU
    // ============================================================

    /** Инициализира hamburger менюто */
    function initHamburger() {
        const nav = document.getElementById('nav');
        const hamburger = document.getElementById('hamburger');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
        });

        // Затваря при клик на линк
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => nav.classList.remove('active'));
        });
    }

    // ============================================================
    // MODULE 3: HERO BUTTON — Плавна навигация
    // ============================================================

    /** Инициализира бутона в Hero секцията */
    function initHeroButton() {
        document.getElementById('start-btn').addEventListener('click', () => {
            document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ============================================================
    // MODULE 4: BANNER PARTICLES — Декоративни частици
    // ============================================================

    /** Генерира анимирани частици в Hero секцията */
    function initParticles() {
        const container = document.getElementById('banner-particles');
        const count = 18;

        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.bottom = Math.random() * 40 + '%';
            p.style.animationDelay = Math.random() * 5 + 's';
            p.style.animationDuration = (3 + Math.random() * 4) + 's';
            p.style.width = p.style.height = (3 + Math.random() * 5) + 'px';
            p.style.opacity = '0';
            container.appendChild(p);
        }
    }

    // ============================================================
    // MODULE 5: CITY STATS — Динамично зареждане при load
    // ============================================================

    /** Генерира и анимира картите със статистики */
    function initCityStats() {
        const grid = document.getElementById('stats-grid');
        grid.innerHTML = '';

        CITY_STATS.forEach(stat => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = `
                <div class="stat-icon">${stat.icon}</div>
                <h3>${stat.label}</h3>
                <div class="stat-value">
                    <span class="stat-counter">0</span><span class="unit">${stat.unit}</span>
                </div>
                <div class="stat-bar-wrap">
                    <div class="stat-bar" data-target="${stat.barTarget}"></div>
                </div>
                <div class="stat-delta ${stat.trend}">${stat.trend === 'up' ? '+' : ''}${stat.delta}</div>
            `;
            grid.appendChild(card);
        });
    }

    /** Задейства анимациите на статистиките при scroll в зоната */
    function animateStats() {
        const cards = document.querySelectorAll('.stat-card');
        CITY_STATS.forEach((stat, i) => {
            const counter = cards[i]?.querySelector('.stat-counter');
            const bar = cards[i]?.querySelector('.stat-bar');
            if (counter) animateCounter(counter, stat.value, '', 1800);
            if (bar) {
                setTimeout(() => {
                    bar.style.width = stat.barTarget + '%';
                }, 200);
            }
        });
    }

    // ============================================================
    // MODULE 6: CITY MAP — Интерактивна мрежа от зони
    // ============================================================

    /** Генерира мрежата от зони */
    function renderMapGrid() {
        const grid = document.getElementById('map-grid');
        grid.innerHTML = '';

        CITY_ZONES.forEach(zone => {
            const div = document.createElement('div');
            div.className = `map-zone ${zone.cssClass}`;
            div.dataset.id = zone.id;
            if (exploredZones.has(zone.id)) div.classList.add('explored');

            div.innerHTML = `
                <div class="zone-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="zone-icon-wrap">${zone.icon}</div>
                <div class="zone-name">${zone.name}</div>
                <div class="zone-tagline">${zone.tagline}</div>
            `;

            div.addEventListener('click', () => openZoneModal(zone));
            grid.appendChild(div);
        });
    }

    // ============================================================
    // MODULE 7: MODAL — Изскачащ панел за зоните
    // ============================================================

    /**
     * Отваря modal за конкретна зона
     * @param {Object} zone - Данни за зоната
     */
    function openZoneModal(zone) {
        currentModalZone = zone;

        const iconEl = document.getElementById('modal-icon');
        iconEl.innerHTML = zone.icon;
        iconEl.style.background = zone.iconColor + '22';

        document.getElementById('modal-title').textContent = zone.name;
        document.getElementById('modal-desc').textContent = zone.description;

        const factsList = document.getElementById('modal-facts-list');
        factsList.innerHTML = zone.facts.map(f => `<li>${f}</li>`).join('');

        const exploreBtn = document.getElementById('modal-explore-btn');
        if (exploredZones.has(zone.id)) {
            exploreBtn.textContent = 'Вече добавена в дневника';
            exploreBtn.disabled = true;
        } else {
            exploreBtn.textContent = 'Добави в дневника';
            exploreBtn.disabled = false;
        }

        const backdrop = document.getElementById('modal-backdrop');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    /** Затваря modal */
    function closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
        currentModalZone = null;
    }

    /** Инициализира modal събитията */
    function initModal() {
        document.getElementById('modal-close').addEventListener('click', closeModal);
        document.getElementById('modal-backdrop').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        document.getElementById('modal-explore-btn').addEventListener('click', () => {
            if (!currentModalZone) return;
            exploreZone(currentModalZone);
            closeModal();
        });
    }

    /**
     * Добавя зона в дневника
     * @param {Object} zone - Зона за добавяне
     */
    function exploreZone(zone) {
        if (exploredZones.has(zone.id)) return;

        exploredZones.add(zone.id);
        saveProgress();
        renderMapGrid();
        updateDiary();
        updateProgressBar();

        showToast(
            'Зона открита!',
            `"${zone.name}" беше добавена в твоя Зелен дневник.`
        );

        // Ако всички зони са открити
        if (exploredZones.size === CITY_ZONES.length) {
            setTimeout(() => {
                showToast('Поздравления!', 'Открихте всички зони! Вие сте истински Еко-Изследовател!');
            }, 1500);
        }
    }

    // ============================================================
    // MODULE 8: PROGRESS — localStorage + дневник
    // ============================================================

    /** Запазва прогреса в localStorage */
    function saveProgress() {
        localStorage.setItem('eco-city-explored', JSON.stringify([...exploredZones]));
    }

    /** Зарежда прогреса от localStorage */
    function loadProgress() {
        const saved = localStorage.getItem('eco-city-explored');
        if (saved) {
            try {
                const arr = JSON.parse(saved);
                exploredZones = new Set(arr);
            } catch (e) {
                exploredZones = new Set();
            }
        }
    }

    /** Обновява прогрес бара */
    function updateProgressBar() {
        const total = CITY_ZONES.length;
        const found = exploredZones.size;
        const pct = (found / total) * 100;

        const bar = document.getElementById('diary-progress-bar');
        const text = document.getElementById('diary-progress-text');

        if (bar) bar.style.width = pct + '%';
        if (text) text.textContent = `${found} от ${total} зони открити`;
    }

    // ============================================================
    // MODULE 9: GREEN DIARY — Значки и филтри
    // ============================================================

    /** Рендира значките в дневника */
    function updateDiary() {
        const container = document.getElementById('diary-badges');
        if (!container) return;

        const filtered = currentFilter === 'all'
            ? CITY_ZONES
            : CITY_ZONES.filter(z => z.category === currentFilter);

        container.innerHTML = '';

        filtered.forEach(zone => {
            const unlocked = exploredZones.has(zone.id);
            const card = document.createElement('div');
            card.className = `badge-card${unlocked ? ' unlocked' : ''}`;
            card.dataset.cat = zone.category;

            card.innerHTML = `
                <div class="badge-icon" style="background:${zone.iconColor}22">${zone.icon}</div>
                <div>
                    <div class="badge-name">${zone.name}</div>
                    <div class="badge-status">${unlocked ? 'Открита!' : 'Не е открита'}</div>
                </div>
            `;

            container.appendChild(card);
        });
    }

    /** Инициализира бутоните за филтриране */
    function initDiaryFilters() {
        const filterContainer = document.getElementById('diary-filter');
        if (!filterContainer) return;

        filterContainer.addEventListener('click', (e) => {
            if (!e.target.classList.contains('filter-btn')) return;

            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            currentFilter = e.target.dataset.cat;
            updateDiary();
        });
    }

    // ============================================================
    // MODULE 10: VIDEO SECTION — Динамична смяна на видеа
    // ============================================================

    /** Рендира видео секцията */
    function initVideos() {
        currentTopic = VIDEO_TOPICS[0];
        renderVideoTabs();
        loadTopic(currentTopic);
    }

    /** Генерира табовете за видео темите */
    function renderVideoTabs() {
        const tabsEl = document.getElementById('video-tabs');
        tabsEl.innerHTML = '';

        VIDEO_TOPICS.forEach((topic, idx) => {
            const btn = document.createElement('button');
            btn.className = `video-tab${idx === 0 ? ' active' : ''}`;
            btn.textContent = topic.label;
            btn.dataset.id = topic.id;

            btn.addEventListener('click', () => {
                document.querySelectorAll('.video-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTopic = topic;
                loadTopic(topic);
            });

            tabsEl.appendChild(btn);
        });
    }

    /**
     * Зарежда конкретна видео тема
     * @param {Object} topic - Темата за зареждане
     */
    function loadTopic(topic) {
        if (!topic.videos.length) return;
        loadVideo(topic.videos[0], topic);
        renderPlaylist(topic);
    }

    /**
     * Зарежда конкретно видео в главния плейър
     * @param {Object} video - Видео обект
     * @param {Object} topic - Текущата тема
     */
    function loadVideo(video, topic) {
        const iframe = document.getElementById('main-video');
        const titleEl = document.getElementById('video-main-title');
        const descEl = document.getElementById('video-main-desc');

        iframe.src = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
        if (titleEl) titleEl.textContent = video.title;
        if (descEl) descEl.textContent = video.desc;

        // Обнови активен елемент в плейлистата
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.toggle('active', item.dataset.vid === video.id);
        });
    }

    /**
     * Рендира плейлистата за дадена тема
     * @param {Object} topic - Темата
     */
    function renderPlaylist(topic) {
        const playlistEl = document.getElementById('video-playlist');
        playlistEl.innerHTML = '';

        topic.videos.forEach((video, idx) => {
            const item = document.createElement('div');
            item.className = `playlist-item${idx === 0 ? ' active' : ''}`;
            item.dataset.vid = video.id;

            item.innerHTML = `
                <div class="playlist-thumb">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
                <div>
                    <div class="playlist-title">${video.title}</div>
                    <div class="playlist-dur">${video.duration}</div>
                </div>
            `;

            item.addEventListener('click', () => {
                loadVideo(video, topic);
                renderPlaylist(topic);
                idx === 0 || document.querySelectorAll('.playlist-item')[idx]?.classList.add('active');
            });

            playlistEl.appendChild(item);
        });
    }

    // ============================================================
    // INTERSECTION OBSERVER — Анимации при scroll
    // ============================================================

    /** Наблюдава секциите и задейства анимации при влизане в изгледа */
    function initScrollObserver() {
        let statsAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;

                    if (section.id === 'overview' && !statsAnimated) {
                        statsAnimated = true;
                        animateStats();
                    }

                    if (section.id === 'diary') {
                        updateProgressBar();
                    }
                }
            });
        }, { threshold: 0.2 });

        const sectionsToWatch = ['overview', 'map', 'diary', 'tips'];
        sectionsToWatch.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    }

    // ============================================================
    // INIT — Инициализация при зареждане
    // ============================================================

    window.addEventListener('load', () => {
        // Зарежда запазения прогрес от localStorage
        loadProgress();

        // Инициализира всички модули
        initEcoMode();
        initHamburger();
        initHeroButton();
        initParticles();
        initCityStats();
        renderMapGrid();
        initModal();
        updateDiary();
        updateProgressBar();
        initDiaryFilters();
        initVideos();
        initScrollObserver();
    });