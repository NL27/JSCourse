// Define your API key
const API_KEY = '65c05ebce61d4218aba483626fabc732';

// List of reputable news sources (domains) with display names
const REPUTABLE_SOURCES = [
  { domain: 'nature.com', name: 'Nature.com' },
//   { domain: 'science.org', name: 'Science.org' },
//   { domain: 'pnas.org', name: 'PNAS.org' },
  { domain: 'technologyreview.com', name: 'MIT TechnologyReview.com' },
//   { domain: 'quantamagazine.org', name: 'QuantaMagazine.org' },
  { domain: 'phys.org', name: 'Phys.org' },
//   { domain: 'futurity.org', name: 'Futurity.org' },
  { domain: 'scientificamerican.com', name: 'ScientificAmerican' },
//   { domain: 'the-scientist.com', name: 'The-Scientist.com' },
  { domain: 'mit.edu', name: 'MIT.edu' }
];

// Store all articles for filtering
let allArticles = [];

// Function to get date range from inputs or return default (one week back)
// Enforces maximum one month back from today (same day, one month ago)
function getDateRangeFromInputs() {
  const dateFromInput = document.getElementById('date-from');
  const dateToInput = document.getElementById('date-to');
  
  const today = new Date();
  // Calculate one month back (same day, one month ago)
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const minDate = oneMonthAgo.toISOString().split('T')[0];
  const maxDate = today.toISOString().split('T')[0];
  
  let from, to;
  
  if (dateFromInput && dateFromInput.value) {
    from = dateFromInput.value;
    // Ensure from date is not more than one month back
    const fromDate = new Date(from);
    if (fromDate < oneMonthAgo) {
      from = minDate;
      if (dateFromInput) dateFromInput.value = minDate;
    }
  } else {
    // Default: one week back from today
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    from = oneWeekAgo.toISOString().split('T')[0];
  }
  
  if (dateToInput && dateToInput.value) {
    to = dateToInput.value;
    // Ensure to date is not in the future
    const toDate = new Date(to);
    if (toDate > today) {
      to = maxDate;
      if (dateToInput) dateToInput.value = maxDate;
    }
  } else {
    // Default: today
    to = maxDate;
  }
  
  // Ensure date range doesn't exceed one month
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const maxFromDate = new Date(toDate);
  maxFromDate.setMonth(maxFromDate.getMonth() - 1);
  
  if (fromDate < maxFromDate) {
    // If range exceeds one month, adjust the "from" date
    from = maxFromDate.toISOString().split('T')[0];
    if (dateFromInput) dateFromInput.value = from;
  }
  
  // Ensure from date is not before the one-month limit
  if (fromDate < oneMonthAgo) {
    from = minDate;
    if (dateFromInput) dateFromInput.value = minDate;
  }
  
  return { from, to };
}

// Main function to fetch all articles from reputable sources
async function fetchArticles() {
  // Get date range from inputs or use default
  const dateRange = getDateRangeFromInputs();
  
  const params = {
    domains: REPUTABLE_SOURCES.map(s => s.domain).join(','),
    from: dateRange.from,
    to: dateRange.to,
    language: 'en',
    sortBy: 'publishedAt',
    apiKey: API_KEY,
    pageSize: 100
  };
  
  const queryString = new URLSearchParams(params).toString();
  const url = `https://newsapi.org/v2/everything?${queryString}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message);
    }
    
    // Filter articles to ensure they're from reputable sources only
    const filteredArticles = data.articles.filter(article => {
      if (!article.url) return false;
      
      // Check if article is from reputable source
      const articleDomain = new URL(article.url).hostname.replace('www.', '');
      return REPUTABLE_SOURCES.some(source => articleDomain.includes(source.domain));
    });
    
    // Store all articles for filtering
    allArticles = filteredArticles;
    
    console.log(`Fetched ${data.articles.length} articles from reputable sources for ${dateRange.from} to ${dateRange.to}`);
    
    // Apply filters (source filtering only, date is already filtered by API)
    applyFilters();
    return filteredArticles;
  } catch (error) {
    console.error('Failed to fetch news:', error);
    console.error('Request URL:', url);
    displayError(error.message);
    return [];
  }
}

// Function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours === 0) {
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    }
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
}

// Function to truncate and clean description
function formatDescription(description, maxLength = 150) {
  if (!description) return '';
  
  // Remove HTML tags if present
  const text = description.replace(/<[^>]*>/g, '').trim();
  
  if (text.length <= maxLength) {
    return text;
  }
  
  // Truncate at the last complete word before maxLength
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

// Function to get article source domain
function getArticleSourceDomain(article) {
  if (!article.url) return '';
  return new URL(article.url).hostname.replace('www.', '');
}

// Function to apply filters based on selected sources and search query (date filtering is done by API)
function applyFilters() {
  const checkboxes = document.querySelectorAll('.source-filter input[type="checkbox"]');
  const selectedSources = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
  
  // Get search query
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput?.value.trim().toLowerCase() || '';
  
  // Filter by source
  let filteredArticles = selectedSources.length === 0 
    ? allArticles 
    : allArticles.filter(article => {
        const articleDomain = getArticleSourceDomain(article);
        return selectedSources.some(source => articleDomain.includes(source));
      });
  
  // Filter by search query (search in title and description)
  if (searchQuery) {
    filteredArticles = filteredArticles.filter(article => {
      const title = (article.title || '').toLowerCase();
      const description = (article.description || '').toLowerCase();
      const content = (article.content || '').toLowerCase();
      
      return title.includes(searchQuery) || 
             description.includes(searchQuery) || 
             content.includes(searchQuery);
    });
  }
  
  displayArticles(filteredArticles);
}

// Function to handle date change and fetch new articles
async function handleDateChange() {
  const loadingEl = document.getElementById('loading');
  const containerEl = document.getElementById('news-container');
  
  // Show loading state
  loadingEl.style.display = 'block';
  containerEl.innerHTML = '';
  
  try {
    await fetchArticles();
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    displayError(error.message);
  }
}

// Function to display articles
function displayArticles(articles) {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const containerEl = document.getElementById('news-container');
  
  loadingEl.style.display = 'none';
  errorEl.style.display = 'none';
  
  if (!articles || articles.length === 0) {
    containerEl.innerHTML = `
      <div class="empty-state">
        <h2>No articles found</h2>
        <p>No articles were found from the selected sources for this month.</p>
      </div>
    `;
    return;
  }
  
  containerEl.innerHTML = articles.map(article => `
    <div class="news-card">
      <h3 class="news-title">${article.title || 'No title available'}</h3>
      ${article.description ? `<p class="news-description">${formatDescription(article.description)}</p>` : ''}
      <div class="news-meta">
        <a href="${article.url || '#'}" target="_blank" rel="noopener noreferrer" class="news-source">
          ${article.source?.name || 'Unknown source'}
        </a>
        <span class="news-date">${article.publishedAt ? formatDate(article.publishedAt) : 'Date unavailable'}</span>
      </div>
    </div>
  `).join('');
}

// Function to display error
function displayError(message) {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const containerEl = document.getElementById('news-container');
  
  loadingEl.style.display = 'none';
  containerEl.innerHTML = '';
  errorEl.textContent = `Error: ${message}`;
  errorEl.style.display = 'block';
}

// Helper function to get month date range
function getMonthDateRange() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  // First day of current month
  const firstDay = new Date(year, month, 1);
  
  // Last day of current month
  const lastDay = new Date(year, month + 1, 0);
  
  return {
    from: firstDay.toISOString().split('T')[0],
    to: lastDay.toISOString().split('T')[0]
  };
}

// Initialize and fetch articles on page load
function initializeApp() {
  // Fetch articles on startup
  fetchArticles();
}

// Initialize filter checkboxes and date inputs
function initializeFilters() {
  const filterContainer = document.getElementById('source-filters');
  if (!filterContainer) return;
  
  // Initialize source checkboxes
  filterContainer.innerHTML = REPUTABLE_SOURCES.map((source, index) => `
    <label class="filter-checkbox">
      <input type="checkbox" value="${source.domain}" checked>
      <span>${source.name}</span>
    </label>
  `).join('');
  
  // Add event listeners to all checkboxes
  const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  // Initialize search input
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      // Show/hide clear button based on input
      if (clearSearchBtn) {
        clearSearchBtn.style.display = e.target.value.trim() ? 'flex' : 'none';
      }
      applyFilters();
    });
    
    // Also trigger on Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        applyFilters();
      }
    });
  }
  
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        applyFilters();
      }
    });
  }
  
  // Initialize date inputs with default (one week back to today)
  // Set max date limits (one month back max, today max)
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  
  const dateFromInput = document.getElementById('date-from');
  const dateToInput = document.getElementById('date-to');
  const clearDatesBtn = document.getElementById('clear-dates');
  
  if (dateFromInput) {
    dateFromInput.value = oneWeekAgo.toISOString().split('T')[0];
    dateFromInput.setAttribute('min', oneMonthAgo.toISOString().split('T')[0]);
    dateFromInput.setAttribute('max', today.toISOString().split('T')[0]);
    dateFromInput.addEventListener('change', () => {
      // Validate date range doesn't exceed one month
      const fromDate = new Date(dateFromInput.value);
      const toDate = dateToInput?.value ? new Date(dateToInput.value) : today;
      const maxToDate = new Date(fromDate);
      maxToDate.setMonth(maxToDate.getMonth() + 1);
      
      if (toDate > maxToDate) {
        // Adjust to date to be one month from from date
        const adjustedTo = maxToDate > today ? today : maxToDate;
        if (dateToInput) dateToInput.value = adjustedTo.toISOString().split('T')[0];
      }
      
      handleDateChange();
    });
  }
  
  if (dateToInput) {
    dateToInput.value = today.toISOString().split('T')[0];
    dateToInput.setAttribute('min', oneMonthAgo.toISOString().split('T')[0]);
    dateToInput.setAttribute('max', today.toISOString().split('T')[0]);
    dateToInput.addEventListener('change', () => {
      // Validate date range doesn't exceed one month
      const toDate = new Date(dateToInput.value);
      const fromDate = dateFromInput?.value ? new Date(dateFromInput.value) : oneWeekAgo;
      const minFromDate = new Date(toDate);
      minFromDate.setMonth(minFromDate.getMonth() - 1);
      
      if (fromDate < minFromDate) {
        // Adjust from date to be one month before to date
        const adjustedFrom = minFromDate < oneMonthAgo ? oneMonthAgo : minFromDate;
        if (dateFromInput) dateFromInput.value = adjustedFrom.toISOString().split('T')[0];
      }
      
      handleDateChange();
    });
  }
  
  if (clearDatesBtn) {
    clearDatesBtn.addEventListener('click', () => {
      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      if (dateFromInput) {
        dateFromInput.value = oneWeekAgo.toISOString().split('T')[0];
      }
      if (dateToInput) {
        dateToInput.value = today.toISOString().split('T')[0];
      }
      handleDateChange();
    });
  }
}

// Initialize filters and app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeApp();
  });
} else {
  initializeFilters();
  initializeApp();
}
