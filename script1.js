const sendButton = document.querySelector('button');
const inputField = document.querySelector('input');
const chatBox = document.querySelector('.chat-box');

sendButton.addEventListener('click', () => {
    const message = inputField.value;
    if (message.trim()) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
