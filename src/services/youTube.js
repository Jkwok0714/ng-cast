angular.module('video-player')
.service('youTube', function($http, VideoLibrary){
  // TODO
  this.search = function (query = 'cats') {
    console.log('search initiated');
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      responseType: 'json',
      params: {
        key: YOUTUBE_API_KEY,
        maxResults: 5,
        part: 'snippet',
        q: query,
        type: 'video',
        videoEmbeddable: true
      }
    }).then(function successCallback(response){
      VideoLibrary.videos.value = response.data.items;
      VideoLibrary.currentVideo.value = response.data.items[0];
    }, function errorCallback(response){
      console.log(response);
    });
  };
});
