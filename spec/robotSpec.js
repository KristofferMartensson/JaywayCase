describe('RobotController', function() {
    beforeEach(module('robotApp'));

    var $controller, $rootScope;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        $controller = _$controller_;
        $rootScope = _$rootScope_;
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

        it('Test quadratic failure', function(){
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            $scope.x = 1;
            $scope.y = 2;
            $scope.height = 5;
            $scope.width = 5
            $scope.inputText = "HGGGGGGGG";
            $scope.handleInput();
            expect($scope.output).toEqual("I hit the wall.");
        });

        it('Test circular failure', function(){
            var $scope = $rootScope.$new()
            var controller = $controller('RobotController', {$scope: $scope});
            $scope.x = 0;
            $scope.y = 0;
            $scope.radius = 5;
            $scope.inputText = "GGGGGG";
            $scope.handleInput();
            expect($scope.output).toEqual("I hit the wall.");
        });
    });
});