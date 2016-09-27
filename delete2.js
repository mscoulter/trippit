
// var app = angular.module('reddit', ['ngAnimate']);
//
// app.controller('RedditController', function($scope) {
//
//   $scope.newComment = {};
//   $scope.newPost = {};
//   $scope.view = {};
//   $scope.view.searchText = "";
//   $scope.view.newPostVisible = false;
//   $scope.view.sortableFields = ['votes', 'date', 'title'];
//   $scope.view.currentSort = $scope.view.sortableFields[0];
//   $scope.view.orderVal = '-votes';
//   $scope.view.posts = [
//     {
//       title: "Monkey costumes are totally in this season",
//       author: "Linus Lane",
//       image: "https://scontent-lga3-1.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/11809944_1676694042554573_495250395_n.jpg",
//       description: "Hey, hey, we're the Monkees, and people say we monkey around. But we're too busy singing to put anybody down. We're just tryin' to be friendly, come and watch us sing and play. We're the young gneration, and we've got something to say.",
//       date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
//       votes: 10,
//       comments: [
//         {
//           author: "Matt",
//           text: "Cool costume."
//         }
//       ],
//       commentsVisible: false,
//       newCommentVisible: false
//     }
//   ];
//
//   $scope.changeVotes = function(post, changeVal) {
//     post.votes += changeVal;
//   };
//
//   $scope.upvoteClass = function(post) {
//     if (post.votes > 0) {
//       return "positive";
//     } else if (post.votes < 0) {
//       return "negative";
//     } else {
//       return "";
//     }
//   };
//
//   $scope.toggleCommentVisibility = function(post) {
//     post.commentsVisible = !post.commentsVisible;
//   };
//
//   $scope.toggleNewCommentVisibility = function(post) {
//     $scope.view.posts.forEach(function(otherPost) {
//       if (otherPost !== post) {
//         otherPost.newCommentVisible = false;
//       } else {
//         otherPost.newCommentVisible = !otherPost.newCommentVisible;
//       }
//     });
//     $scope.newComment = {};
//   };
//
//   $scope.toggleNewPostVisibility = function() {
//     $scope.view.newPostVisible = !$scope.view.newPostVisible;
//   };
//
//   $scope.addComment = function(post, comment) {
//     if (comment.author && comment.text) {
//       post.comments.push(comment);
//       post.newCommentVisible = false;
//       $scope.newComment = {};
//     }
//   };
//
//   $scope.addPost = function(post) {
//     post.date = moment().calendar();
//     post.votes = 0;
//     post.comments = [];
//     post.commentsVisible = false;
//     post.newCommentVisible = false;
//     $scope.view.posts.push(post);
//     $scope.view.newPostVisible = false;
//     $scope.newPost = {};
//     $scope.postForm.$setUntouched();
//   };
//
//   $scope.checkForError = function(field) {
//     return field.$invalid && field.$touched;
//   };
//
//   $scope.setOrderVal = function(newVal) {
//     $scope.view.currentSort = newVal;
//     $scope.view.orderVal = newVal === "title" ? newVal : '-' + newVal;
//   };
//
// });
