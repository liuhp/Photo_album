var photo = {
    num:15,
    nowIndex:undefined,
    liwidth:($('ul').width() - 24)/ 4,
    radio: $(window).height()/$(window).width(),
    init: function(){
        this.creatDom();
        this.bindEvent();
        this.swipeEvent();
    },
    creatDom: function(){
        var str = '';
        for(var i = 0 ; i < this.num ; i++){
            str += '<li style = " height: ' + this.liwidth+ 'px"><img src = "./src/images/' + i + '.png" ></li>';
        }
        $(str).appendTo($('.photoList')).animate({opacity:1},500);
    },
    bindEvent: function(){
        var _this = this;
        $('ul').on('tap','li',function(){
            _this.nowIndex = $(this).index();
            _this.show(_this.nowIndex);
        });
        
    },
    show: function(index){
        var _this = this;
        $('.show').html("").show();
        var oimg = new Image();
        oimg.src = './src/images/' + index +'.png';
        oimg.onload = function(){
            var w = this.width,
                h = this.height;
            if(h/w>this.radio){
                $(this).appendTo($('.show')).css('height','100%').animate({opacity:1},500);
            }else{
                $(this).appendTo($('.show')).css('width','100%').animate({opacity:1},500);

            }
            
        };
    },
    swipeEvent: function(){
        var _this = this;
        $('.show')
                .on('tap',function(){
                    $(this).hide();
                })
                .on('swipeLeft',function(){
                    if(_this.nowIndex < _this.num-1){
                        _this.nowIndex++;
                        _this.show(_this.nowIndex);
                        console.log(_this.nowIndex);

                    }
                })
                .on('swipeRight',function(){
                    if(_this.nowIndex >0){
                         _this.nowIndex--;
                         _this.show(_this.nowIndex);
                         console.log(_this.nowIndex);
                    }
                })
    }
   
}
photo.init();





