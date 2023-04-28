const chatArea = document.getElementById('chat-area');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatCountBtn = document.createElement('button');

chatCountBtn.textContent = '채팅갯수보기';
chatCountBtn.addEventListener('click', () => {
  // 변경된 부분: 채팅창에 올라온 내용만 카운트
  const chatCount = chatArea.querySelectorAll('.message').length;
  const chatCountText = `채팅 갯수: ${chatCount}`;
  const chatCountElem = document.createElement('div');
  chatCountElem.textContent = chatCountText;
  chatCountElem.style.fontWeight = 'bold';
  chatCountElem.style.fontSize = '20px';
  chatCountElem.style.backgroundColor = 'purple'; // 변경된 부분: 보라색으로 변경
  chatArea.appendChild(chatCountElem);
  
  // 변경된 부분: 10초 후에 자동으로 삭제
  setTimeout(() => {
    chatArea.removeChild(chatCountElem);
  }, 10000);
});
document.getElementById('chat-header').appendChild(chatCountBtn);

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = chatInput.value.trim();
  if (input === '') {
    return;
  }
  displayMessage(input);
  chatInput.value = '';
});

function displayMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.textContent = message;

  switch (message) {
    case '~이미지1':
      messageDiv.appendChild(createImage('https://via.placeholder.com/150'));
      break;
    case '~이미지2':
      messageDiv.appendChild(createImage('https://via.placeholder.com/150x150'));
      break;
    case '~이미지3':
      messageDiv.appendChild(createImage('https://via.placeholder.com/200x150'));
      break;
    case '~이미지4':
      messageDiv.appendChild(createImage('https://via.placeholder.com/300x200'));
      break;
    case '~이미지5':
      messageDiv.appendChild(createImage('https://via.placeholder.com/200x300'));
      break;
    case '~이미지6':
      messageDiv.appendChild(createImage('https://via.placeholder.com/250x250'));
      break;
    case '~이미지7':
      messageDiv.appendChild(createImage('https://via.placeholder.com/200x200'));
      break;
    case '~이미지8':
      messageDiv.appendChild(createImage('https://via.placeholder.com/150x250'));
      break;
    case '~이미지9':
      messageDiv.appendChild(createImage('https://via.placeholder.com/250x150'));
      break;
    case '~이미지10':
      messageDiv.appendChild(createImage('https://via.placeholder.com/200'));
      break;
  }

  chatArea.appendChild(messageDiv);
  chatArea.scrollTop = chatArea.scrollHeight;

  function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

  // 현재 시간 정보 가져오기
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // 시간 정보 숫자로 변환하고 문자열로 조합
  const timeString = `${hours}:${minutes}:${seconds}`;

  // 시간 정보를 새로운 div 요소에 추가
  const timeDiv = document.createElement('div');
  timeDiv.classList.add('time');
  timeDiv.textContent = timeString;
  messageDiv.appendChild(timeDiv);

  
  chatArea.appendChild(messageDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
}