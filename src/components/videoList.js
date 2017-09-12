angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  controller: function(VideoLibrary, youTube) {
    this.onClick = function (index) {
      VideoLibrary.currentVideo.value = VideoLibrary.videos.value.slice(index, index+1)[0];
      // console.log(index);
      // console.log(VideoLibrary.currentVideo.value);
      // console.log(VideoLibrary.videos.value[index]);
    };
  },
  templateUrl: 'src/templates/videoList.html'

});
