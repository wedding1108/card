/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink(){
	var url = 'https://wedding1108.github.io/card/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}

// 신부 계좌번호 복사
function brideAccountNumber(){
	var bride_account = '00000000 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = bride_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신부 위보경의 계좌번호가 복사되었습니다.\n00000000 카카오뱅크")
}

// 신랑 계좌번호 복사
function groomAccountNumber(){
	var groom_account = '00000000 카카오뱅크';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = groom_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑 정진욱의 계좌번호가 복사되었습니다.\n00000000 카카오뱅크")
}

// 아버님 계좌번호 복사 
function groomsFatherAccountNumber(){
    var grooms_father_account = '00000000 국민은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.\n00000000 국민은행")
}


// // 카카오톡 공유하기
// function kakaoShare() {
//     Kakao.init('e7692cabcc174cf3fa8bc222974520ec');
//     // SDK 초기화 여부를 판단합니다.
//     Kakao.isInitialized();
//     console.log(Kakao.isInitialized());
//     Kakao.Share.sendDefault({
//         objectType: 'feed',
//         content: {
//         title: '진욱🤍보경 결혼합니다.',
//         description: '2025.11.08\n 정오 12시 메리포엠 웨딩홀',
//         imageUrl: 'https://github.com/jaeyun95/jaeyun95.github.io/blob/main/assets/img/main.jpg?raw=true',
//         link: {
//             mobileWebUrl: 'https://comgongnuna.github.io/#!',
//             webUrl: 'https://comgongnuna.github.io/#!',
//         },
//         },
//         buttons: [
//         {
//             title: '모바일 청첩장 보기',
//             link: {
//             mobileWebUrl: 'https://comgongnuna.github.io/#!',
//             webUrl: 'https://comgongnuna.github.io/#!',
//             },
//         },
//         ],
//         // 카카오톡 미설치 시 카카오톡 설치 경로이동
//         installTalk: true,
//     })
// }

// → SDK가 로드된 직후(한 번만) 초기화
Kakao.init('e7692cabcc174cf3fa8bc222974520ec');
console.log('Kakao initialized:', Kakao.isInitialized());

// 카카오톡 공유하기
function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '진욱❤️보경 결혼합니다.',
      description: '2025.11.08\n정오 12시 메리포엠 웨딩홀',
      imageUrl: 'https://wedding1108.github.io/card/assets/img/main.jpg',
	    //https://raw.githubusercontent.com/wedding1108/card/main/assets/img/main.jpg raw이미지
      link: { //https://wedding1108.github.io/card/  https://comgongnuna.github.io/#!
        mobileWebUrl: 'https://wedding1108.github.io/card/',
        webUrl:        'https://wedding1108.github.io/card/'
      }
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: 'https://wedding1108.github.io/card/',
          webUrl:        'https://wedding1108.github.io/card/'
        }
      }
    ],
    installTalk: true
  });
}

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}
