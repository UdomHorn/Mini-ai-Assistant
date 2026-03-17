// Basic script placeholder
document.addEventListener('DOMContentLoaded', () => {
  console.log('Mini AI Assistant loaded');

  const promptInput = document.getElementById('prompt-input');
  const submitBtn = document.getElementById('submit-btn');
  const clearBtn = document.getElementById('clear-btn');
  const toggleBtn = document.getElementById('dark-mode-toggle');
  const chatMessages = document.getElementById('chat-messages');

  // Load dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Dark mode toggle
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  function addMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}`;
    if (type === 'ai') {
      if (typeof marked !== 'undefined') {
        msgDiv.innerHTML = marked.parse(text);
      } else {
        msgDiv.textContent = text;
      }
      // Add copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.textContent = 'Copy';
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(text);
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = 'Copy', 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
      msgDiv.appendChild(copyBtn);
    } else {
      msgDiv.textContent = text;
    }
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Apply syntax highlighting
    if (typeof hljs !== 'undefined') {
      hljs.highlightAll();
    }
  }

  async function submitPrompt() {
    const prompt = promptInput.value.trim();
    if (!prompt) return; // Reject empty prompts

    addMessage(prompt, 'user'); // Add user message immediately

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai loading';
    loadingDiv.textContent = 'AI is thinking...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Remove loading
      chatMessages.removeChild(loadingDiv);
      addMessage(data.response, 'ai'); // Add AI response
    } catch (error) {
      console.error('Error sending prompt:', error);
      // Remove loading
      chatMessages.removeChild(loadingDiv);
      addMessage('Error: Failed to get response', 'ai'); // Show error
    }

    promptInput.value = ''; // Clear input
  }

  // Detect Enter key press
  promptInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent newline
      submitPrompt();
    }
  });

  // Click event for submit button
  submitBtn.addEventListener('click', submitPrompt);

  // Clear chat button
  clearBtn.addEventListener('click', () => {
    chatMessages.innerHTML = '';
  });
});