var app = angular.module('reddit-clone', []);

app.controller('FirstController', function($scope){
  $scope.view = {};
  $scope.view.seeform = false;
  $scope.view.searchAll = "";
  $scope.view.sortby = ['votes', 'date', 'title'];
  $scope.view.order = '-votes';
  $scope.view.currentSort = $scope.view.sortby[0];
  $scope.addPost = function(){
    $scope.view.seeform = true;
  }
  $scope.view.posts =[
      {
        title: "Glissading for the win!",
        author: "Michael Coulter",
        image: "http://www.hikingintherockies.com/fourteeners/snowcap/snowmass_capitol_017.jpg",
        description: "Give yourself 2 nights to truly enjoy this trip!",
        date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
        votes: 4,
        comments: [
          {
            author: "Suzanne",
            text: "Don't forget to bring your snowpants too!"
          }
        ],
        showComments: false,
        showNewComment: false
      }, {
        title: "Crestones Traverse",
        author: "Michael Coulter",
        image: "https://www.rmfi.org/sites/default/files/styles/media_gallery_large/public/IMG_1720.jpg?itok=f7QCV0tX",
        description: "Big time exposure with no ropes",
        date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
        votes: 6,
        comments: [
          {
            author: "Corey",
            text: "Is there any way to rope up on the final pitch?"
          }, {
            author: "Jannette",
            text: "Where do I find the entry to the traverse from Crestone Peak?"
          }
        ],
        showComments: false,
        showNewComment: false
      }, {
        title: "Lone Eagle Peak",
        author: "Michael Coulter",
        image: "https://c2.staticflickr.com/6/5506/9542059968_b2452748a4_b.jpg",
        description: "Super fun and scary. Be sure to go with an alpine trad climber who knows what he's doing.",
        date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
        votes: -2,
        comments: [],
        showComments: false,
        showNewComment: false
      },
    ];
  $scope.addData = function(newpost) {
    newpost.date = moment().calendar();
    newpost.votes = 0;
    newpost.comments = [];
    newpost.showComments = false;
    newpost.showNewComment = false;
    $scope.view.posts.push(newpost);
    $scope.view.seeform = false;
    $scope.newData = {};
    $scope.formName.$setUntouched();
  };
  $scope.vote = function(post, change){
    post.votes+=change
  }
  $scope.ratingColor = function(post){
    if (post.votes>0) {
      return "good"
    }
    else if (post.votes<0) {
      return "bad"
    }else{
      return "neutral"
    }
  }
  $scope.toggleComments = function(post){
    post.showComments = !post.showComments
  }

  $scope.toggleNewComment = function(post){
    post.showNewComment = !post.showNewComment
  }

  $scope.searchAll = function(post){
    post.showNewComment = !post.showNewComment
  }

  $scope.sortPosts = function(selected) {
    $scope.view.currentSort = selected;
    $scope.view.order = selected === "title" ? selected : '-' + selected;
  };

  $scope.addComment = function(post, comment) {
    if (comment.author && comment.text) {
      post.comments.push(comment);
      post.showNewComment = false;
      $scope.newComment = {};
    }
  };


})
