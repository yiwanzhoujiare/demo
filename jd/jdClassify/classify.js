angular.module("flApp",[])
    .controller("flCtrl",function($scope){
        var menu=[
            {menu:"水果蔬菜"},
            {menu:"肉禽蛋奶"},
            {menu:"冷热速食"},
            {menu:"休闲食品"},
            {menu:"酒水饮料"},
            {menu:"粮油调味"},
            {menu:"清洁日化"},
            {menu:"家居用品"},
            {menu:"鲜花蛋糕"},
            {menu:"医药健康"},
            {menu:"上门服务"}
        ];
        var content=
            [
                {
                    title1:"水果",
                    title2:"蔬菜",
                    content1:[
                        {src : "img/5667d32fN5f8f1011.jpg",name:"苹果"},
                        {src : "img/5667d356Nf777f623.jpg",name:"梨子"},
                        {src : "img/5667ccd2N0450c91b.jpg",name:"西瓜"},
                        {src : "img/5667d3d3N2b7b06d7.jpg",name:"猕猴桃"},
                        {src : "img/5667d406N267fecc2.jpg",name:"芦柑橘"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多水果"}
                    ],
                    content2:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ]
                },
                {
                    title1:"牛羊猪禽",
                    title2:"水产海鲜",
                    title3:"奶制品",
                    content1:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ],
                    content2:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content3:[
                        {src : "img/milk1.jpg",name:"纯牛奶"},
                        {src : "img/milk2.jpg",name:"酸奶"},
                        {src : "img/milk3.jpg",name:"乳酸类"},
                        {src : "img/milk4.jpg",name:"加味奶"},
                        {src : "img/milk5.jpg",name:"进口酸奶"}
                    ]
                },
                {
                    title1:"低温速食",
                    title2:"常温速食",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"酒水",
                    title2:"饮料",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"米面杂粮",
                    title2:"油盐酱醋",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"面部护理",
                    title2:"身体护理",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"厨具",
                    title2:"纸品湿巾",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"鲜花",
                    title2:"蛋糕",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"牛羊猪禽",
                    title2:"水产海鲜",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"中西药品",
                    title2:"营养保健",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                },
                {
                    title1:"家政保洁",
                    title2:"家电清洗",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"蔬菜"},
                        {src : "img/5667e647N78c4e992.jpg",name:"叶菜类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"瓜果类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"菇菌类"},
                        {src : "img/5667e647N78c4e992.jpg",name:"调味类"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"更多蔬菜"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"鸡蛋"},
                        {src : "img/pd2.jpg",name:"牛肉"},
                        {src : "img/pd3.jpg",name:"猪肉"},
                        {src : "img/pd4.jpg",name:"羊肉"},
                        {src : "img/pd5.jpg",name:"熟食"},
                        {src : "img/pd1.jpg",name:"更多禽类"}
                    ]
                }
            ];
        $scope.menu=menu;
        $scope.content=content;
        console.log(content);
        $scope.myNum=0;
        $scope.showrightContent=function($index){
            $scope.myNum=this.$index;
        }
    });