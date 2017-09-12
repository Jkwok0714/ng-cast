angular.module('video-player')
.component('app', {
  // TODO
  controller: function (VideoLibrary) {
    this.videos = VideoLibrary.videos;
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
