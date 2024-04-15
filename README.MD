<br/>
<p align="center">
  <h3 align="center">stART: Theater Booking Website</h3>

  <p align="center">
    이화여대 연극 동아리 '총연극회' <br>졸업 기수 공연 '맨 끝줄 소년' 전용 예매 사이트 <br>
Online Booking Website for 'Ewha Awaken Play'<br>Exclusive ticket reservation site for graduation performance <br>‘The Boy in the Last Row’ 
    <br/>
    <br/>
  </p>
</p>

<img width="1440" alt="Screenshot 2024-04-15 at 6 11 25 PM" src="https://github.com/010Booking/LastCode/assets/144606981/00e5c35b-becd-4dbc-ae1c-a8ddcda4c0f2">


## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)


## About The Project

대부분의 학생 공연은 온라인 예매 접수로 '구글 폼'을 사용한다.
구글 폼은 훌륭한 대안이지만, 설문 조사를 목적으로 만들어졌기에
티켓 예매용으로는 다소 불편하다.

예를 들어:
- 예매하고 싶은 회차를 선택하는 동시에 다른 회차는 '0매' 를 일일이 선택해야 하는 불편함
- 환불을 따로 접수해야 하는 불편함 
- 내 예매 내역을 따로 관리하지 못하는 불편함 

그래서 자체 웹 팀이 결성되었다.

웹팀은 위에 앞선 모든 기능에 더해, 프로그램북 기능과 연극의 내용을 기반으로 한 자체 챗봇 기능을 추가한 웹을 제작했다.

Most student performances use ‘Google Form’ for online ticket reservations.
Google Forms are a great alternative, but they are designed for survey purposes.
It is somewhat inconvenient for ticket reservations.

for example:
- The inconvenience of having to select the episode you want to reserve tickets for while simultaneously selecting ‘0 tickets’ for other episodes.
- Inconvenience of having to file for refund separately
- Inconvenience of not being able to manage my reservation details separately

So our own web team was formed.

The web team created a web that, in addition to all of the preceding functions, added a program book function and its own chatbot function based on the content of the play.


## Built With



* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## Getting Started

웹사이트는 [이쪽](https://start-ba2c0.web.app) 을 통해 접속 가능하다.

로컬 환경에서 '맨 끝줄 소년' 기반 챗봇을 실행하는 법 

### Prerequisites

* npm
* [Google chrome](https://www.google.com/chrome/)

```sh
npm install npm@latest -g
```

Goo

### Installation

1. Get a free API Key at [https://openai.com/blog/openai-api)

2. Clone the repo

```sh
git clone https://github.com/010Booking/LastCode.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API on your local shell

```
API_KEY=your_api_key_here node chatbot.js

```

5. Enter below line on your local shell
```
npm run chatbot
```

6. 로컬 환경에서 챗봇을 실행시킬 수 있다.


