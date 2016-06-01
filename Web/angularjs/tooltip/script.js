var app = angular.module('app1', ['ui.bootstrap']);

app.config(['$tooltipProvider', function($tooltipProvider){
  $tooltipProvider.setTriggers({
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur',
    'never': 'mouseleave' // <- This ensures the tooltip will go away on mouseleave
  });
}]);

app.controller('ctrl1', function($scope) {
  
});
