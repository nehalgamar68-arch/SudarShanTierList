// 1. Saare Icons Ek Jageh Store Karo
const ITEM_SVGS = {
    crystal: `<svg viewBox="0 0 24 24" width="22"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#ec4899"/></svg>`,
    sword: `<svg viewBox="0 0 24 24" width="22"><path d="M6 18l-2 2 1 1 2-2 11-11-1-1L6 18z" fill="#38bdf8"/></svg>`,
    uhc: `<svg viewBox="0 0 24 24" width="22"><circle cx="12" cy="13" r="8" fill="#f59e0b"/></svg>`
};

// 2. Render Karte Waqt Direct Use Karo
let badgeHTML = `
    <div class="badge">
        ${ITEM_SVGS.crystal}
        <small class="ht">HT1</small>
    </div>
`;
