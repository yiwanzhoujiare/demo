//�ֲ�1��swiper
$(function(){
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable :true,
        autoplay : 1000,   // �Զ��л� ��1����
        nextButton:'.swiper-button-next',
        loop : true , // һֱѭ��
        lazyLoading : true //��Ϊtrue����ͼƬ�ӳټ��أ�ʹpreloadImages��Ч��
    });
});
//�ֲ�2��jQuery
var myCount = 0;
var timer=0 ;
var myIndex=0;
var m=0;
$(function () {
    myCount = $(".myImg a").length; //���a��ǩ���ȣ�
    $(".myImg a:not(:first-child)").fadeOut();  //���в��ǵ�һ��ͼƬ�Ķ����أ�
    $(".myLi li").on("click", function () {
        myIndex=$(".myLi li").index(this);  //0,1,2
            if (myIndex < myCount) {
                if (!$(this).hasClass("li1")) {  //���ǵ�һ�ŵ�
                    $(".myImg a").filter(":visible").fadeOut(0).parent().children().eq(myIndex).fadeIn(500);
                }
            }
        $(this).addClass("li1");
        $(this).siblings().removeClass("li1");//siblings:ƥ��Ԫ�ؼ�����ÿ��Ԫ�ص��ֵ�Ԫ��,
    });
    autoPlay();
    //    ����������ֹͣ���뿪��������
    $(".jQLunbo").hover(function () { //hover:�������¼������󶨵�ƥ��Ԫ���ϣ��ֱ����ָ�������뿪Ԫ��ʱ��ִ��
        clearInterval(timer);
    }, function () {
       autoPlay();
    });
//    �Զ��ֲ�������
    function autoPlay() {
        timer = setInterval(function () {
            m = m >= myCount - 1 ? 0 : ++m;
            $(".myLi li").eq(m).trigger("click");//trigger: ���ݰ󶨵�ƥ��Ԫ�صĸ������¼�����ִ�����еĴ���������Ϊ��
        }, 2000)
    }
});




