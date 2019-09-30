describe('RobotController', function() {
    beforeEach(module('robotApp'));

    var $controller, $rootScope;
    //var robot;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        //robot = _$robot_;
    }));

    describe('robot', function() {
        it('Tests robot initial startposition', function() {
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            expect($scope.x).toEqual(0);
            expect($scope.y).toEqual(0);
            });
        // it('Test robot new startposition', function(){
        //     var $scope = $rootScope.$new()
        //     var controller = $controller('RobotController', {$scope: $scope});

        // });
        // it('Test robot new startposition', function(){
        //     var $scope = $rootScope.$new()
        //     var controller = $controller('RobotController', {$scope: $scope});
        // });
        // it('Test robot new startposition', function(){
        //     var $scope = $rootScope.$new()
        //     var controller = $controller('RobotController', {$scope: $scope});
        // });
    });
});