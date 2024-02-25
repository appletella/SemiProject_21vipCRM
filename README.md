# SemiProject_21vipCRM
> CRM을 바탕으로 한 고객관리 및 바우처 생성 프로그램<br>개발 기간 : 2023.11~12
> <br>개발 인원 : 4명
<br>

## :books: 기술 스택
### 프론트엔드
  <img src="https://img.shields.io/badge/thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white">  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

### 백엔드  
- Java 11
- SpringBoot
- Spring Data JPA
- Querydsl
- Spring Security
- Oracle
- AWS(Light sail)
- Apache Tomcat

## 내가 맡은 역할
- 프론트: 메인페이지, 로그인, 회원가입, ID/PW찾기, 사원관리(관리자)
- 백엔드: DB설계, Spring Security를 이용한 페이지 접근 권한, 로그인 설정, 회원가입 api(+아이디 중복 검사), ID/PW 찾기 api(비밀번호는 임시 비밀번호를 이메일로 발송), QueryDSL을 이용한 동적쿼리로 사원 관리 api, 검색된 사원 리스트를 엑셀로 내보내기
- 그 외: 깃허브 관리, AWS LightSail을 통한 서버 배포

## 유스케이스
![image](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/91bb450c-b851-432c-9f29-91283f31e8bc)
![image](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/31131080-2b26-4cf5-89c9-066fd58e760c)
![image](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/26621d15-c657-4d15-b352-023570f07a0c)
![image](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/bde45901-d8ee-4633-b64f-c51f4d1d196f)



## :speaker: 프로젝트 주요 기능 

### 계정 관련
- 회원가입, 로그인, 로그아웃
- 아이디 찾기
- 임시 비밀번호 발급(이메일 발송)
### 사원 관리
- 사원조회(필터링 검색) 
- 필터링 결과에 따른 엑셀로 내보내기
- 사원 정보 CRUD
### 고객 관리 
- 고객 CRUD
- 바우처 발급
- 특이사항 메모 기능
- 문자메시지 발송
### 바우처 관리 
- 랜덤 기능 통한 일련번호 생성
- 바우처 CRUD
- 조건에 따른 검색 기능
### 예약관리
- 고객 예약정보 CRUD
- 예약정보 문자메시지 전송
### 일정 관리 
- 캘린더를 통한 일정 CRUD
### 마이페이지
- 개인정보 수정
- 개인 일정 CRUD


## 화면
- 회원가입

![ezgif-6-baee3ca32a](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/b3d547b5-351b-429c-9e06-c0805820d0ed)

- 사원관리

![스크린샷 2024-02-23 151605](https://github.com/appletella/SemiProject_21vipCRM/assets/147576555/a2338af7-d370-4d9c-b289-ae61fd63e072)
