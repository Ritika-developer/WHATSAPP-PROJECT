function sendMessage() {
  const input = document.getElementById('messageInput');
  const chatBody = document.getElementById('chatBody');
  const text = input.value.trim();

  if (text !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `
      ${text}
      <div class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    chatBody.appendChild(messageDiv);
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// Send on Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
