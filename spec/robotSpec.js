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
        it('Test robot initial startposition', function() {
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            expect($scope.x).toEqual(0);
            expect($scope.y).toEqual(0);
            });

        it('Test robot new startposition', function(){
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            $scope.startX = 4;
            $scope.startY = 3;
            $scope.handleStartPosition();
            expect($scope.x).toEqual(4);
            expect($scope.y).toEqual(3);
         });

        it('Test robot input', function(){
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            $scope.x = 1;
            $scope.y = 2;
            $scope.inputText = "HGHGGHGHG";
            $scope.handleInput();
            expect($scope.output).toEqual("1 3 N");
        });
    });
});