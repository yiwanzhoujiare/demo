angular.module("flApp",[])
    .controller("flCtrl",function($scope){
        var menu=[
            {menu:"ˮ���߲�"},
            {menu:"���ݵ���"},
            {menu:"������ʳ"},
            {menu:"����ʳƷ"},
            {menu:"��ˮ����"},
            {menu:"���͵�ζ"},
            {menu:"����ջ�"},
            {menu:"�Ҿ���Ʒ"},
            {menu:"�ʻ�����"},
            {menu:"ҽҩ����"},
            {menu:"���ŷ���"}
        ];
        var content=
            [
                {
                    title1:"ˮ��",
                    title2:"�߲�",
                    content1:[
                        {src : "img/5667d32fN5f8f1011.jpg",name:"ƻ��"},
                        {src : "img/5667d356Nf777f623.jpg",name:"����"},
                        {src : "img/5667ccd2N0450c91b.jpg",name:"����"},
                        {src : "img/5667d3d3N2b7b06d7.jpg",name:"⨺���"},
                        {src : "img/5667d406N267fecc2.jpg",name:"«����"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"����ˮ��"}
                    ],
                    content2:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ]
                },
                {
                    title1:"ţ������",
                    title2:"ˮ������",
                    title3:"����Ʒ",
                    content1:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ],
                    content2:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content3:[
                        {src : "img/milk1.jpg",name:"��ţ��"},
                        {src : "img/milk2.jpg",name:"����"},
                        {src : "img/milk3.jpg",name:"������"},
                        {src : "img/milk4.jpg",name:"��ζ��"},
                        {src : "img/milk5.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"������ʳ",
                    title2:"������ʳ",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"��ˮ",
                    title2:"����",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"��������",
                    title2:"���ν���",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"�沿����",
                    title2:"���廤��",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"����",
                    title2:"ֽƷʪ��",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"�ʻ�",
                    title2:"����",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"ţ������",
                    title2:"ˮ������",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"����ҩƷ",
                    title2:"Ӫ������",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
                    ]
                },
                {
                    title1:"��������",
                    title2:"�ҵ���ϴ",
                    content1:[
                        {src : "img/5667e647N78c4e992.jpg",name:"�߲�"},
                        {src : "img/5667e647N78c4e992.jpg",name:"Ҷ����"},
                        {src : "img/5667e647N78c4e992.jpg",name:"�Ϲ���"},
                        {src : "img/5667e647N78c4e992.jpg",name:"������"},
                        {src : "img/5667e647N78c4e992.jpg",name:"��ζ��"},
                        {src : "img/56849dc6N99ea3ed0.jpg",name:"�����߲�"}
                    ],
                    content2:[
                        {src : "img/pd1.jpg",name:"����"},
                        {src : "img/pd2.jpg",name:"ţ��"},
                        {src : "img/pd3.jpg",name:"����"},
                        {src : "img/pd4.jpg",name:"����"},
                        {src : "img/pd5.jpg",name:"��ʳ"},
                        {src : "img/pd1.jpg",name:"��������"}
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