angular.module('video-player')
.component('search', {
  // TODO
  controller: function (youTube, VideoLibrary) {
    this.delayedSearch = _.throttle(youTube.search,2000);
    this.liveSearch = function() {
      this.delayedSearch(this.searchInput);
    };
    this.searchInput = '';
    this.search = function () {
      console.log('success');
      youTube.search(this.searchInput);
      VideoLibrary.searchState.query = this.searchInput;
      this.searchInput = '';
    };

    this.changePages = function(direction) {
      var tokenInput;
      if (direction === 'Left') {
        tokenInput = VideoLibrary.searchState.prevToken;
      } else {
        tokenInput = VideoLibrary.searchState.nextToken;
      }

      youTube.search(VideoLibrary.searchState.query, tokenInput);
    };
  },
  templateUrl: 'src/templates/search.html'
});
