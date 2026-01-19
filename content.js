// Medium Unlocker - Adds a button to open articles on Freedium

function addFreediumButton() {
  // Prevent adding button multiple times
  if (document.getElementById('freedium-button')) {
    return;
  }

  // Create the button
  const button = document.createElement('button');
  button.id = 'freedium-button';
  button.textContent = '🔓 Read on Freedium';

  // Handle click - redirect to Freedium
  button.addEventListener('click', function() {
    const currentUrl = window.location.href;
    const freediumUrl = 'https://freedium-mirror.cfd/' + currentUrl;
    window.open(freediumUrl, '_blank');
  });

  // Add button to page
  document.body.appendChild(button);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFreediumButton);
} else {
  addFreediumButton();
}

// Also handle SPA navigation
let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    addFreediumButton();
  }
}).observe(document.body, { subtree: true, childList: true });