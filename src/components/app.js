angular.module('video-player')
.component('app', {
  // TODO
  controller: function (VideoLibrary, youTube) {
    this.videos = VideoLibrary.videos;
    youTube.search();
  },

  templateUrl: 'src/templates/app.html'
})
.service('VideoLibrary', function () {
  this.currentVideo = {value: exampleVideoData[0]};
  this.videos = {value: exampleVideoData};

    // this.setCurrentVideo(index) {
    //   this.currentVideo = this.videos[index];
    // }
});
