angular.module("pageApp", [])
	.directive("ngPage", function() {
		return {
			restrict: "EA",
			replace: true,
			template: "<nav>" +
				"<ul class=\"pagination\">" +
				"<li ng-class=\"{0:'hidden'}[page.prev]\">" +
				"<a href=\"#\" aria-label=\"Previous\" ng-click=\"changePage(page.prev)\">" +
				"<span aria-hidden=\"true\">&laquo;</span>" +
				"</a>" +
				"</li>" +
				"<li ng-repeat=\"i in pages track by $index\" ng-class=\"{true:'active'}[$index+1 == page.now]\">" +
				"<a ng-click=\"changePage($index+1)\">{{$index + 1}}</a>" +
				"</li>" +
				"<li ng-class=\"{0:'hidden'}[page.next]\" ng-click=\"changePage(page.next)\">" +
				"<a href=\"#\" aria-label=\"Next\">" +
				"<span aria-hidden=\"true\">&raquo;</span>" +
				"</a>" +
				"</li>" +
				"</ul>" +
				"</nav>",
			controller: function($scope, $http, $attrs) {
				//通过page对象 记录页码的情况
				$scope.page = {
					now: 1,
					size: 5,
					next: 2,
					prev: 0,
					all: 0,
					list: []
				};
				$http.get($attrs.countUrl)
					.success(function(d) {
						var pages = Math.ceil(d / 5);
						$scope.page.all = pages; //6
						$scope.pages = new Array(pages);
					});
				changePage($scope.page.now);
				$scope.changePage = changePage;
				/**
				 * 	改变当前页面显示的数据
				 * 
				 * @param {Object} pageNumber
				 * @param {Object} size
				 */
				function changePage(pageNumber, size) {
					size = size || 5;
					$http.get($attrs.listUrl + "?p=" + pageNumber + "&s=" + size)
						.success(function(d) {
							console.log(d);
							$scope.page.list = d;
							//更新页码
							updatePage(pageNumber);
						});
				}
				/**
				 * 	更新 page 对象
				 */
				function updatePage(pageNumber) {
					$scope.page.now = pageNumber;
					//判断下一页是否超出总页数
					$scope.page.next = pageNumber + 1;
					//当下一页的值超出总页数时, 使下一页的值变为0
					if ($scope.page.next > $scope.page.all) {
						$scope.page.next = 0;
					}
					$scope.page.prev = pageNumber - 1;
				}
			}
		}
	});