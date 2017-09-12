angular.module('video-player')
.component('search', {
  // TODO
  controller: function (youTube) {
    this.delayedSearch = _.throttle(youTube.search,2000);
    this.liveSearch = function() {
      this.delayedSearch(this.searchInput);
    };
    this.searchInput = '';
    this.search = function () {
      console.log('success');
      youTube.search(this.searchInput);
      this.searchInput = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
