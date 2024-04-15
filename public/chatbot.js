
// 채팅 메시지를 표시할 DOM
const chatMessages = document.querySelector('#chat-messages');
// 사용자 입력 필드
const userInput = document.querySelector('#user-input input');
// 전송 버튼
const sendButton = document.querySelector('#user-input button');
// 발급받은 OpenAI API 키를 변수로 저장


const apiKey = process.env.OPENAI_API_KEY;


// OpenAI API 엔드포인트 주소를 변수로 저장
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
function addMessage(sender, message) {
    // 새로운 div 생성
    const messageElement = document.createElement('div');
    // 생성된 요소에 클래스 추가
    messageElement.className = 'message';
     // 채팅 메시지 목록에 새로운 메시지 추가
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.prepend(messageElement);
}
// ChatGPT API 요청
async function fetchAIResponse(prompt) {
    // API 요청에 사용할 옵션을 정의
    const requestOptions = {
        method: 'POST',
        // API 요청의 헤더를 설정
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "ft:gpt-3.5-turbo-0613:personal::8oY9NAlX",  // 사용할 AI 모델
            messages: [{
                role: "user", // 메시지 역할을 user로 설정
                content: prompt // 사용자가 입력한 메시지
            }, ],
            temperature: 0.9, // 모델의 출력 다양성
            max_tokens: 50, // 응답받을 메시지 최대 토큰(단어) 수 설정
            top_p: 1, // 토큰 샘플링 확률을 설정
            frequency_penalty: 0.5, // 일반적으로 나오지 않는 단어를 억제하는 정도
            presence_penalty: 0.5, // 동일한 단어나 구문이 반복되는 것을 억제하는 정도
            //stop: ["끝"], // 생성된 텍스트에서 종료 구문을 설정
        }),
    };
    // API 요청후 응답 처리
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('관리자에게 문의하십시오:', error);
        return '관리자에게 문의하십시오';
    }
}
// 전송 버튼 클릭 이벤트 처리
// sendButton.addEventListener('click', async () => {
//     // 사용자가 입력한 메시지
//     const message = userInput.value.trim();
//     // 메시지가 비어있으면 리턴
//     if (message.length === 0) return;
//     // 사용자 메시지 화면에 추가
//     addMessage('  ', message);
//     userInput.value = '';
//     //ChatGPT API 요청후 답변을 화면에 추가
//     const aiResponse = await fetchAIResponse(message);
//     addMessage('  ', aiResponse);

    


// });
// // 사용자 입력 필드에서 Enter 키 이벤트를 처리
// userInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         sendButton.click();
//     }
// });


let isFetching = false;

async function sendMessage(message) {
    if (isFetching) {
        // 이전 요청이 아직 완료되지 않았으면 무시
        return;
    }

    try {
        isFetching = true;

        // 사용자 메시지 화면에 추가
        addMessage('  ', message);
        userInput.value = '';

        // ChatGPT API 요청
        const aiResponse = await fetchAIResponse(message);

        // API 응답 받은 후에 메시지 추가
        addMessage('  ', aiResponse);
    } catch (error) {
        // 에러 처리 - API 요청이 실패한 경우
        console.error('관리자에게 문의하십시오.', error);
        // 실패한 경우에 대한 추가적인 처리를 수행할 수 있습니다.
    } finally {
        isFetching = false;
    }
}

// 전송 버튼 클릭 이벤트 처리
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message.length > 0) {
        sendMessage(message);
    }
});

// 사용자 입력 필드에서 Enter 키 이벤트를 처리
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Enter 키 기본 동작 방지
        sendButton.click();
    }
});

