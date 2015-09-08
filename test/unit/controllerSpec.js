'use strict';

/*jshint -W117 */
/*jshint globalstrict: true*/

describe('Application: Hello World', function() {
    beforeEach(module('HelloWorldApp'));

    describe("Test HelloWorldController", function() {
        var scope;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("HelloWorldController", {
                $scope: scope
            });
        }));

        it('should calculate the circle perimeter', function() {
            scope.number = 6;
            var result = scope.circlePerimeter();

            expect(result).toBeCloseTo(2 * Math.PI * 6);
        });

        it('should calculate the circle area', function() {
            scope.number = 6;
            var result = scope.circleArea();

            expect(result).toBeCloseTo(Math.PI * Math.pow(6, 2));
        });
    });
});
