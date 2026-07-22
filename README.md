<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUDARSHAN MCTIERS - Official Competitive Tierlist</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --bg-color: #000000;
            --card-bg: #0d0d0d;
            --card-border: #1f1f1f;
            --accent-gold: #ffaa00;
            --ht-color: #ff4757;
            --lt-color: #2ed573;
            --text-main: #ffffff;
            --text-muted: #a0a0a0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
        }

        /* Top Header Navigation */
        header {
            background: #050505;
            border-bottom: 1px solid var(--card-border);
            padding: 15px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-title {
            font-size: 1.5rem;
            font-weight: 900;
            letter-spacing: 2px;
            background: linear-gradient(135deg, #fff 0%, #ffaa00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .btn-add {
            background: linear-gradient(135deg, #ffaa00, #e67e22);
            color: #000;
            font-weight: 700;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }

        .btn-add:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(255, 170, 0, 0.4);
        }

        /* Search & Gamemode Bar */
        .controls-section {
            max-width: 1300px;
            width: 100%;
            margin: 25px auto 10px auto;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .search-bar-wrap {
            position: relative;
            width: 100%;
        }

        .search-bar-wrap i {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            font-size: 1.1rem;
        }

        .search-input {
            width: 100%;
            background: #080808;
            border: 1px solid var(--card-border);
            padding: 14px 20px 14px 50px;
            border-radius: 8px;
            color: #fff;
            font-size: 1rem;
            transition: border 0.2s;
        }

        .search-input:focus {
            outline: none;
            border-color: #ffaa00;
        }

        /* Gamemode Selector Tabs with Custom Icons */
        .gamemode-tabs {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 8px;
            scrollbar-width: thin;
        }

        .gm-tab {
            background: #090909;
            border: 1px solid var(--card-border);
            padding: 12px 22px;
            border-radius: 8px;
            color: var(--text-muted);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 0.95rem;
            white-space: nowrap;
            transition: all 0.2s;
        }

        .gm-tab.active, .gm-tab:hover {
            background: #141414;
            color: #fff;
            border-color: #ffaa00;
        }

        .gm-icon {
            width: 22px;
            height: 22px;
            object-fit: contain;
        }

        /* Main Tier Matrix Container */
        .main-container {
            max-width: 1300px;
            width: 100%;
            margin: 10px auto 40px auto;
            padding: 0 20px;
            flex: 1;
        }

        .tier-group {
            margin-bottom: 25px;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 10px;
            overflow: hidden;
        }

        .tier-header {
            padding: 12px 20px;
            font-weight: 800;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            letter-spacing: 1px;
            border-bottom: 1px solid #181818;
        }

        /* Tier specific header badges */
        .th-ht1 { background: rgba(255, 71, 87, 0.15); color: #ff4757; border-left: 5px solid #ff4757; }
        .th-lt1 { background: rgba(46, 213, 115, 0.15); color: #2ed573; border-left: 5px solid #2ed573; }
        .th-ht2 { background: rgba(255, 107, 129, 0.15); color: #ff6b81; border-left: 5px solid #ff6b81; }
        .th-lt2 { background: rgba(112, 161, 255, 0.15); color: #70a1ff; border-left: 5px solid #70a1ff; }
        .th-ht3 { background: rgba(255, 165, 2, 0.15); color: #ffa502; border-left: 5px solid #ffa502; }
        .th-lt3 { background: rgba(30, 144, 255, 0.15); color: #1e90ff; border-left: 5px solid #1e90ff; }
        .th-ht4 { background: rgba(238, 90, 36, 0.15); color: #ee5a24; border-left: 5px solid #ee5a24; }
        .th-lt4 { background: rgba(0, 148, 50, 0.15); color: #009432; border-left: 5px solid #009432; }
        .th-ht5 { background: rgba(153, 128, 250, 0.15); color: #9980fa; border-left: 5px solid #9980fa; }
        .th-lt5 { background: rgba(181, 52, 113, 0.15); color: #b53471; border-left: 5px solid #b53471; }

        .player-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
            padding: 15px;
        }

        /* Player Card */
        .player-card {
            background: #050505;
            border: 1px solid #1c1c1c;
            border-radius: 8px;
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }

        .player-card:hover {
            border-color: #ffaa00;
            transform: translateY(-3px);
            background: #111111;
        }

        .player-avatar {
            width: 42px;
            height: 42px;
            border-radius: 6px;
            background: #1a1a1a;
            image-rendering: pixelated;
        }

        .player-info {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .player-name {
            font-weight: 700;
            font-size: 0.95rem;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .player-region {
            font-size: 0.75rem;
            color: #888;
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 2px;
        }

        .flag-tag {
            background: #222;
            padding: 2px 6px;
            border-radius: 4px;
            color: #ffaa00;
            font-weight: 600;
        }

        /* Modals */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
            backdrop-filter: blur(5px);
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-content {
            background: #0b0b0b;
            border: 1px solid #282828;
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            padding: 25px;
            position: relative;
            box-shadow: 0 10px 40px rgba(0,0,0,0.9);
        }

        .close-modal {
            position: absolute;
            right: 20px;
            top: 20px;
            color: #888;
            font-size: 1.2rem;
            cursor: pointer;
        }

        .close-modal:hover { color: #fff; }

        /* Form styling */
        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            font-size: 0.85rem;
            color: #aaa;
            margin-bottom: 6px;
            font-weight: 600;
        }

        .form-control {
            width: 100%;
            background: #141414;
            border: 1px solid #282828;
            padding: 10px 14px;
            border-radius: 6px;
            color: #fff;
            font-size: 0.95rem;
        }

        .form-control:focus {
            outline: none;
            border-color: #ffaa00;
        }

        .form-row {
            display: flex;
            gap: 15px;
        }

        /* Stats Modal Styling */
        .stats-header {
            display: flex;
            align-items: center;
            gap: 18px;
            border-bottom: 1px solid #222;
            padding-bottom: 18px;
            margin-bottom: 20px;
        }

        .stats-avatar {
            width: 64px;
            height: 64px;
            border-radius: 8px;
            background: #1e1e1e;
        }

        .stats-tiers-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 15px;
        }

        .stat-item {
            background: #121212;
            border: 1px solid #1a1a1a;
            padding: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .stat-gm {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: #ccc;
        }

        .stat-badge {
            font-weight: 800;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
        }

        footer {
            text-align: center;
            padding: 25px;
            color: #555;
            font-size: 0.85rem;
            border-top: 1px solid #111;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <div class="logo-container">
            <i class="fa-solid fa-trophy" style="color: #ffaa00; font-size: 1.5rem;"></i>
            <span class="logo-title">SUDARSHAN MCTIERS</span>
        </div>
        <div class="nav-actions">
            <button class="btn-add" onclick="openAddModal()"><i class="fa-solid fa-user-plus"></i> Add Player</button>
        </div>
    </header>

    <!-- Search & Filters -->
    <div class="controls-section">
        <div class="search-bar-wrap">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="searchInput" class="search-input" placeholder="Search player IGN or Region (e.g. catboymuce, AS, EU)..." onkeyup="renderTiers()">
        </div>

        <div class="gamemode-tabs">
            <div class="gm-tab active" onclick="switchGamemode('sword', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#38bdf8"><path d="M495.9 16.1c-12.5-12.5-32.8-12.5-45.3 0L282.7 184c-3.1 3.1-5.5 6.8-7 10.9l-30.8 84.8-84.8 30.8c-4.1 1.5-7.8 3.9-10.9 7L16.1 449.9c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l133.4-133.4c3.1-3.1 6.8-5.5 10.9-7l84.8-30.8 30.8-84.8c1.5-4.1 3.9-7.8 7-10.9L495.9 61.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                Sword
            </div>
            <div class="gm-tab" onclick="switchGamemode('axe', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#38bdf8"><path d="M128 32c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V32zm-32 160c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V192z"/></svg>
                Axe & Bow
            </div>
            <div class="gm-tab" onclick="switchGamemode('crystal', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#c084fc"><path d="M256 0L496 140V372L256 512L16 372V140L256 0Z"/></svg>
                Crystal PvP
            </div>
            <div class="gm-tab" onclick="switchGamemode('pot', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#f43f5e"><path d="M256 32c-17.7 0-32 14.3-32 32v32h64V64c0-17.7-14.3-32-32-32zm-80 96c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H176z"/></svg>
                PotPvP / Speed
            </div>
            <div class="gm-tab" onclick="switchGamemode('lifesteal', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#ef4444"><path d="M47.6 140.4C12 180.7 12 244.4 47.6 284.7L256 493.1l208.4-208.4c35.6-40.3 35.6-104 0-144.3-35.6-40.3-93.3-40.3-128.9 0L256 219.8l-79.5-79.4c-35.6-40.3-93.3-40.3-128.9 0z"/></svg>
                Lifesteal
            </div>
            <div class="gm-tab" onclick="switchGamemode('netherite', this)">
                <svg class="gm-icon" viewBox="0 0 512 512" fill="#a855f7"><path d="M256 32L32 128v128c0 120 90 220 224 256 134-36 224-136 224-256V128L256 32z"/></svg>
                Netherite OP
            </div>
        </div>
    </div>

    <!-- Tier Tables Output -->
    <div class="main-container" id="tierListContainer">
        <!-- Dynamic Tiers HT1 -> LT5 will load here -->
    </div>

    <!-- Modal: Add New Player -->
    <div class="modal-overlay" id="addModal">
        <div class="modal-content">
            <i class="fa-solid fa-xmark close-modal" onclick="closeAddModal()"></i>
            <h2 style="margin-bottom: 15px; color: #ffaa00;"><i class="fa-solid fa-user-plus"></i> Register Player</h2>
            
            <div class="form-group">
                <label>Minecraft IGN (In-Game Name)</label>
                <input type="text" id="addIgn" class="form-control" placeholder="e.g. catboymuce">
            </div>

            <div class="form-row">
                <div class="form-group" style="flex: 1;">
                    <label>Region</label>
                    <select id="addRegion" class="form-control">
                        <option value="AS">AS (Asia)</option>
                        <option value="EU">EU (Europe)</option>
                        <option value="NA">NA (North America)</option>
                    </select>
                </div>
                <div class="form-group" style="flex: 1;">
                    <label>Gamemode</label>
                    <select id="addGamemode" class="form-control">
                        <option value="sword">Sword</option>
                        <option value="axe">Axe & Bow</option>
                        <option value="crystal">Crystal PvP</option>
                        <option value="pot">PotPvP / Speed</option>
                        <option value="lifesteal">Lifesteal</option>
                        <option value="netherite">Netherite OP</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label>Tier Tier Rank</label>
                <select id="addTier" class="form-control">
                    <option value="HT1">HT1 (High Tier 1)</option>
                    <option value="LT1">LT1 (Low Tier 1)</option>
                    <option value="HT2">HT2 (High Tier 2)</option>
                    <option value="LT2">LT2 (Low Tier 2)</option>
                    <option value="HT3">HT3 (High Tier 3)</option>
                    <option value="LT3">LT3 (Low Tier 3)</option>
                    <option value="HT4">HT4 (High Tier 4)</option>
                    <option value="LT4">LT4 (Low Tier 4)</option>
                    <option value="HT5">HT5 (High Tier 5)</option>
                    <option value="LT5">LT5 (Low Tier 5)</option>
                </select>
            </div>

            <button class="btn-add" style="width: 100%; justify-content: center; margin-top: 10px;" onclick="savePlayer()">Add To TierList</button>
        </div>
    </div>

    <!-- Modal: View Player Stats -->
    <div class="modal-overlay" id="statsModal">
        <div class="modal-content">
            <i class="fa-solid fa-xmark close-modal" onclick="closeStatsModal()"></i>
            <div class="stats-header">
                <img id="modalAvatar" src="" class="stats-avatar" alt="skin">
                <div>
                    <h2 id="modalIgn" style="color: #fff;">-</h2>
                    <span id="modalRegion" class="flag-tag">-</span>
                </div>
            </div>

            <h4 style="color: #888; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Overall Tier Rankings</h4>
            
            <div class="stats-tiers-grid" id="modalTiersGrid">
                <!-- Dynamically filled stats -->
            </div>
        </div>
    </div>

    <footer>
        © 2026 Sudarshan MCTiers Network — Official Competitive Leaderboard Platform
    </footer>

    <script>
        // Initial Dataset for Players
        let playersData = [
            { ign: "catboymuce", region: "AS", tiers: { sword: "HT1", crystal: "HT2", pot: "LT1", axe: "HT2", lifesteal: "HT1", netherite: "HT1" } },
            { ign: "Sudarshan_Goat", region: "AS", tiers: { sword: "HT1", crystal: "HT1", pot: "HT1", axe: "LT1", lifesteal: "HT1", netherite: "HT2" } },
            { ign: "DarkKnight_PvP", region: "EU", tiers: { sword: "LT1", crystal: "HT3", pot: "LT2", axe: "HT1", lifesteal: "LT1", netherite: "LT1" } },
            { ign: "Viper_Asian", region: "AS", tiers: { sword: "HT2", crystal: "LT1", pot: "HT2", axe: "LT2", lifesteal: "HT2", netherite: "HT3" } },
            { ign: "AxeGod_99", region: "NA", tiers: { sword: "LT3", crystal: "LT4", pot: "LT3", axe: "HT1", lifesteal: "LT2", netherite: "LT3" } },
            { ign: "CrystalPro", region: "AS", tiers: { sword: "LT2", crystal: "HT1", pot: "HT3", axe: "LT3", lifesteal: "LT1", netherite: "HT2" } },
            { ign: "NoobSlayer_IN", region: "AS", tiers: { sword: "HT4", crystal: "LT5", pot: "LT4", axe: "HT5", lifesteal: "LT3", netherite: "LT4" } }
        ];

        let currentGamemode = 'sword';
        const allTiers = ["HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5"];

        function switchGamemode(gm, element) {
            currentGamemode = gm;
            document.querySelectorAll('.gm-tab').forEach(tab => tab.classList.remove('active'));
            element.classList.add('active');
            renderTiers();
        }

        function renderTiers() {
            const container = document.getElementById('tierListContainer');
            const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
            container.innerHTML = '';

            allTiers.forEach(tier => {
                // Filter players in this tier & search query
                const matchingPlayers = playersData.filter(p => {
                    const matchesTier = p.tiers[currentGamemode] === tier;
                    const matchesSearch = p.ign.toLowerCase().includes(searchQuery) || p.region.toLowerCase().includes(searchQuery);
                    return matchesTier && matchesSearch;
                });

                if (matchingPlayers.length > 0) {
                    const tierGroup = document.createElement('div');
                    tierGroup.className = 'tier-group';

                    const tierHeader = document.createElement('div');
                    tierHeader.className = `tier-header th-${tier.toLowerCase()}`;
                    tierHeader.innerHTML = `<span>${tier}</span> <span style="font-size:0.8rem; opacity:0.8;">${matchingPlayers.length} Players</span>`;

                    const playerGrid = document.createElement('div');
                    playerGrid.className = 'player-grid';

                    matchingPlayers.forEach(player => {
                        const card = document.createElement('div');
                        card.className = 'player-card';
                        card.onclick = () => openStatsModal(player.ign);

                        card.innerHTML = `
                            <img src="https://mc-heads.net/avatar/${player.ign}/42" class="player-avatar" alt="${player.ign}" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/42'">
                            <div class="player-info">
                                <span class="player-name">${player.ign}</span>
                                <span class="player-region"><span class="flag-tag">${player.region}</span> Verified</span>
                            </div>
                        `;
                        playerGrid.appendChild(card);
                    });

                    tierGroup.appendChild(tierHeader);
                    tierGroup.appendChild(playerGrid);
                    container.appendChild(tierGroup);
                }
            });

            if (container.innerHTML === '') {
                container.innerHTML = `<div style="text-align:center; padding:50px; color:#666;">No players found matching current filters.</div>`;
            }
        }

        /* Modal Handlers */
        function openAddModal() {
            document.getElementById('addModal').classList.add('active');
        }

        function closeAddModal() {
            document.getElementById('addModal').classList.remove('active');
        }

        function savePlayer() {
            const ign = document.getElementById('addIgn').value.trim();
            const region = document.getElementById('addRegion').value;
            const gamemode = document.getElementById('addGamemode').value;
            const tier = document.getElementById('addTier').value;

            if (!ign) {
                alert("Please enter a valid Minecraft IGN!");
                return;
            }

            let existing = playersData.find(p => p.ign.toLowerCase() === ign.toLowerCase());

            if (existing) {
                existing.tiers[gamemode] = tier;
                existing.region = region;
            } else {
                let newPlayer = {
                    ign: ign,
                    region: region,
                    tiers: { sword: "Unranked", axe: "Unranked", crystal: "Unranked", pot: "Unranked", lifesteal: "Unranked", netherite: "Unranked" }
                };
                newPlayer.tiers[gamemode] = tier;
                playersData.push(newPlayer);
            }

            closeAddModal();
            document.getElementById('addIgn').value = '';
            renderTiers();
        }

        function openStatsModal(ign) {
            const player = playersData.find(p => p.ign === ign);
            if (!player) return;

            document.getElementById('modalIgn').innerText = player.ign;
            document.getElementById('modalRegion').innerText = player.region + " Region";
            document.getElementById('modalAvatar').src = `https://mc-heads.net/avatar/${player.ign}/64`;

            const grid = document.getElementById('modalTiersGrid');
            grid.innerHTML = '';

            const gmList = [
                { id: 'sword', name: 'Sword PvP' },
                { id: 'axe', name: 'Axe & Bow' },
                { id: 'crystal', name: 'Crystal PvP' },
                { id: 'pot', name: 'PotPvP / Speed' },
                { id: 'lifesteal', name: 'Lifesteal' },
                { id: 'netherite', name: 'Netherite OP' }
            ];

            gmList.forEach(gm => {
                const rank = player.tiers[gm.id] || 'Unranked';
                const badgeClass = rank !== 'Unranked' ? `th-${rank.toLowerCase()}` : '';
                grid.innerHTML += `
                    <div class="stat-item">
                        <span class="stat-gm">${gm.name}</span>
                        <span class="stat-badge ${badgeClass}" style="background:#222;">${rank}</span>
                    </div>
                `;
            });

            document.getElementById('statsModal').classList.add('active');
        }

        function closeStatsModal() {
            document.getElementById('statsModal').classList.remove('active');
        }

        // Initialize Tierlist
        window.onload = () => {
            renderTiers();
        };
    </script>
</body>
</html>
