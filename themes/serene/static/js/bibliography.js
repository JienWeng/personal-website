/**
 * Bibliography Citation Handler
 * Converts bibliography citations to IEEE numbered format [1], [2], etc.
 */

document.addEventListener('DOMContentLoaded', function() {
  const citationLinks = document.querySelectorAll('a.citation-link');
  const bibliographySection = document.querySelector('.bibliography-section');
  
  if (!bibliographySection || citationLinks.length === 0) {
    return;
  }
  
  // Build a map of citation keys to their IEEE number
  const citationMap = new Map();
  const entries = bibliographySection.querySelectorAll('.bibliography-entry');
  
  entries.forEach((entry, index) => {
    const id = entry.getAttribute('id');
    if (id && id.startsWith('ref-')) {
      const key = id.substring(4);
      citationMap.set(key, index + 1);
    }
  });
  
  // Update citation link text to show IEEE numbers instead of keys
  citationLinks.forEach((link) => {
    const key = link.getAttribute('data-key');
    if (key && citationMap.has(key)) {
      const number = citationMap.get(key);
      link.textContent = number;
    }
  });
});
