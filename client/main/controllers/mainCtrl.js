angular.module("starter")
    .controller('MainCtrl', function($scope,$state,$stateParams,$ionicModal,$meteor) {

      $scope.posts = $meteor.collection(Posts);


      $scope.post = function (newPost) {
          newPost.like=0;
          newPost.comments=[];
          $scope.posts.push(newPost);
          $scope.newPost={};
          $scope.closePost();

      };

        $scope.likePost= function(index){
            console.log( $scope.posts[index]);
            $scope.posts[index].like += 1;


        };

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('client/main/views/newpost.ng.html', {
        scope: $scope
      }).then(function(modal) {
         $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closePost = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.openPost = function() {
        $scope.modal.show();
      };

    });

