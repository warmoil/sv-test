# 실행 방법

### 1. 프로젝트 루트 폴더에 터미널 키기

### 2. node 모듈 다운
    npm install

### 3. 프로젝트 실행
    npm run dev 


### 포트 변경하고 싶으면
    package.json 에서
    "dev": "vite dev --port 3000" <<< 원하는 포트로 변경 기본 3000

### svelte-kit build 방법
    npm build 

### 도커 빌드 방법
     docker build -f front-toki.dockerfile -t front-toki:lastest  .   

### 도커 실행
     docker run -p 3000:3000 -d front-toki:lastest 


### buildx 사용법 + 도커 허브
    docker buildx build --push \
    --platform linux/arm64/v8,linux/amd64 \
    --tag warmoil/front-toki:latest -f front-toki.dockerfile .
    // 계정이름/레파지토리:테그이름 -f 빌드할 도커 파일 도커 파일이름이 dockerfile일경우 -f 생략가능 