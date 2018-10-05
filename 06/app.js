console.log('app')

var appkey = '1d7af4bb8d7d08a663343e54c11d7cbd';
var query = '제주대학교';
var url = 'https://dapi.kakao.com/v2/search/web?query=제주대학교';

var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK 1d7af4bb8d7d08a663343e54c11d7cbd");
var options = {headers : myHeaders};


fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })