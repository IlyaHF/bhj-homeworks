const chatWiget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const date = new Date().getHours() + ':' + new Date().getMinutes();

const botMeseges = [
  'Добрый день!',
  'Вы не купили не одного товара, что б так с нами разговаривать!',
  'Что ты такое?',
  'Кто тут?',
  'Добрый день!',
  'Где ваша совесть?',
  'У вас все в порядке?',
  'Не пишите нам больше',
  'Добрый день! До свидания'
];

chatWiget.addEventListener('click', showChat);
chatWidgetInput.addEventListener("change", sendMessage);

function showChat() {
  chatWiget.classList.add('chat-widget_active');
}

function sendMessage(event) {
  chatWidgetMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${date}</div>
      <div class="message__text">${event.target.value}</div>
    </div>
  `;

  event.target.value = '';
  botAnswers(botMeseges);
}

function botAnswers (answer) {
  const random = Math.floor(Math.random() * (answer.length))
  return chatWidgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${date}</div>
      <div class="message__text">${answer[random]}</div>
    </div>
  `;
}