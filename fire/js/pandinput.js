angular.module("directiveDemo1", [])
	.directive("demo3", function() {
		return {
			restrict: "A",
			replace: true,
			template: "<div><p>{{age}}</p></div>",
			scope: {
				//age 对应到 template 中的 age
				// age : "=外部传入参数时使用的属性名"
				age: "=aaaaa"
			}
		};
	})