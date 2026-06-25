// Orderbook Simulation for HFT Market Making (Slide 8)
const asksContainer = document.getElementById('ob-asks');
const bidsContainer = document.getElementById('ob-bids');
const spreadRow = document.getElementById('ob-spread');

if (asksContainer && bidsContainer) {
  let basePrice = 98543.10;
  let spread = 0.50;

  function generateRow(type, priceOffset, size, maxTotal) {
    const row = document.createElement('div');
    row.className = `orderbook-row ${type}`;
    
    // Colorful, intense HFT styling
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.padding = '0.15rem 0';
    row.style.fontFamily = 'var(--font-mono)';
    row.style.fontSize = '0.9rem'; // Increased font size for L2
    row.style.position = 'relative';
    row.style.overflow = 'hidden';
    row.style.cursor = 'default';

    const price = (basePrice + priceOffset).toFixed(2);
    const total = (size * parseFloat(price)).toFixed(0);
    
    // Depth bar
    const depthPct = Math.min((total / maxTotal) * 100, 100);
    const depthBar = document.createElement('div');
    depthBar.style.position = 'absolute';
    depthBar.style.right = '0';
    depthBar.style.top = '0';
    depthBar.style.height = '100%';
    depthBar.style.width = `${depthPct}%`;
    depthBar.style.opacity = '0.15';
    depthBar.style.zIndex = '0';
    
    if (type === 'ask') {
      depthBar.style.background = '#ff4757'; // Intense Red
      row.style.color = '#ff6b81';
    } else {
      depthBar.style.background = '#2ed573'; // Intense Green
      row.style.color = '#7bed9f';
    }

    const pSpan = document.createElement('span');
    pSpan.style.zIndex = '1';
    pSpan.innerText = price;
    
    const sSpan = document.createElement('span');
    sSpan.style.zIndex = '1';
    sSpan.style.color = 'var(--text-primary)';
    sSpan.innerText = size.toFixed(4);

    const tSpan = document.createElement('span');
    tSpan.style.zIndex = '1';
    tSpan.style.color = 'var(--text-secondary)';
    tSpan.innerText = `$${parseInt(total).toLocaleString()}`;

    row.appendChild(depthBar);
    row.appendChild(pSpan);
    row.appendChild(sSpan);
    row.appendChild(tSpan);
    
    // Add hover effect
    row.addEventListener('mouseenter', () => {
        row.style.background = type === 'ask' ? 'rgba(255, 71, 87, 0.2)' : 'rgba(46, 213, 115, 0.2)';
    });
    row.addEventListener('mouseleave', () => {
        row.style.background = 'transparent';
    });

    return row;
  }

  function renderBook() {
    // Jitter base price slightly to simulate market movement
    basePrice += (Math.random() - 0.5) * 5;
    spread = (Math.random() * 2).toFixed(2);

    asksContainer.innerHTML = '';
    bidsContainer.innerHTML = '';

    const levels = 8; // Increased levels
    const maxTotal = 2500000;

    // Asks (Reverse order so highest price is at top)
    for (let i = levels; i > 0; i--) {
      const priceOffset = spread/2 + (i * 2.5) + (Math.random() * 0.5);
      const size = (Math.random() * 5) + (i * 1.5);
      asksContainer.appendChild(generateRow('ask', priceOffset, size, maxTotal));
    }

    // Spread Row update
    spreadRow.innerHTML = `${basePrice.toFixed(2)} <span style="font-size:0.75rem; color:var(--text-secondary); margin-left: 1rem;">Spread: ${spread}</span>`;

    // Bids
    for (let i = 1; i <= levels; i++) {
      const priceOffset = -(spread/2) - (i * 2.5) - (Math.random() * 0.5);
      const size = (Math.random() * 5) + (i * 1.5);
      bidsContainer.appendChild(generateRow('bid', priceOffset, size, maxTotal));
    }
  }

  // Very fast update rate (150ms) to simulate High-Frequency Trading
  setInterval(renderBook, 150);
  renderBook(); // Initial render
}
