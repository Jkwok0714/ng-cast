angular.module('video-player')
.service('youTube', function($http, VideoLibrary){
  this.search = function (query = 'cats', pageTokenInput) {
    console.log('search initiated');
    var urlParams = {
      key: YOUTUBE_API_KEY,
      maxResults: 5,
      part: 'snippet',
      q: query,
      type: 'video',
      videoEmbeddable: true
    };
    if (pageTokenInput !== undefined) {
      urlParams.pageToken = pageTokenInput;
    }

    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      responseType: 'json',
      params: urlParams
    }).then(function successCallback(response){
      console.log(response);
      VideoLibrary.videos.value = response.data.items;
      VideoLibrary.currentVideo.value = response.data.items[0];
      VideoLibrary.searchState.nextToken = response.data.nextPageToken;
      VideoLibrary.searchState.prevToken = response.data.prevPageToken;

    }, function errorCallback(response){
      console.log(response);
    });
  };
});
