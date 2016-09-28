var app = angular.module('trippit', []);

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
        author: "Immanuel Kant",
        image: "https://c2.staticflickr.com/6/5506/9542059968_b2452748a4_b.jpg",
        description: "Super fun and scary. Be sure to go with an alpine trad climber who knows what he's doing.",
        date: moment().subtract(6, 'days').subtract(19, 'hours').calendar(),
        votes: 2,
        comments: [],
        showComments: false,
        showNewComment: false
      }, {
        title: "Little John's Cabin to Harvard Peak",
        author: "David Hume",
        image: "https://nickritenour.files.wordpress.com/2015/05/dsc_3228.jpg?w=676&h=453",
        description: "Long hike in to Little John's, short but steep hike up to the summit of Harvard. Pine Creek is loaded with small trout!",
        date: moment().subtract(1, 'days').subtract(9, 'hours').calendar(),
        votes: -2,
        comments: [],
        showComments: false,
        showNewComment: false
      }, {
        title: "Blue Lakes to Sneffels Peak",
        author: "John Locke",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSApwv-M_Dd1mwziUkKhrqTycT1mC5v95pUNwBWbgp3IGKEBo5s",
        description: "The most beautiful trip I've done in Colorado. Short hike to the lower lake, then a steep approach to the Sneffels summit. Take your time on the West Ridge, some of the rock is loose, and the exposure can get serious.",
        date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
        votes: 12,
        comments: [],
        showComments: false,
        showNewComment: false
      }, {
        title: "Capitol Lake to Capitol Peak",
        author: "Adam Smith",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTh06tjge-IhdZGA6jLL3z6wU5gz6XeSh7VlF05sQs1Zc7Bi6KkWQ",
        description: "You're looking at a couple long days. The hike to Capitol Lake is not too difficult, but it's longer. From Capitol Lake expect to go sloooooow. Lot's of loose rocks and steep slopes. Gotta love the Knife Edge!",
        date: moment().subtract(600, 'days').subtract(13, 'hours').calendar(),
        votes: 4,
        comments: [],
        showComments: false,
        showNewComment: false
      }, {
        title: "Conundrum Hotsprings",
        author: "Jean-Jacques Rousseau",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosU7nUE6sttU6uxOikr6vEXcL_DLdkX6C15lnmJe7IyxWk7vOEQ",
        description: "Hike up a gorgeous valley about 8 miles to find a bunch of great campsites. At the very top of the valley are a series of hotsprings, the largest/hottest of which is pretty much a party all summer long. Bring whiskey, and don't be afraid to get naked!",
        date: moment().subtract(100, 'days').subtract(9, 'hours').calendar(),
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
