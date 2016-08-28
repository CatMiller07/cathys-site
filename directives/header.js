app.directive('headerDirective', function(){
  return {
    restrict: 'E',
    scope: {
      'menuItems' : '='
    },
    link: function(scope, element, attrs){
      scope.toggleMenu = function(){
        event.preventDefault();
        console.log(element[0].children[1]);
        $('#overlay').toggleClass('hidden');
        $('.site-menu').toggleClass('hidden');
      };

    },
    templateUrl: '../templates/header.html'
  };
});
