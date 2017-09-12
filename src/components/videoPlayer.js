angular.module('video-player')
.component('videoPlayer', {

  controller: function(VideoLibrary, $sce) {
    this.video = VideoLibrary.currentVideo;

    // this.videoUrl =

    this.getVideoUrl = function() {
      return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + this.video.value.id.videoId);
    };

  },


  templateUrl: 'src/templates/videoPlayer.html'
});
