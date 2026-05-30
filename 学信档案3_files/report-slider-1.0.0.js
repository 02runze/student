/**
*date:2016.11.08
*author:wly
*在线验证报告列表多条相似数据收缩展开
*/
/*申请中的报告*/
function showOthers(obj,type){
    var status = $(obj).attr('data-on'),$cur_tr=$(obj).parent().parent();
    if(status=="on"){
        $(obj).attr('title','查看更多');
        $(obj).attr('data-on','off');
        $cur_tr.removeClass('yqnopay_bg');
         $(obj).children().html('&#xe60a;');
        if( type == 3){
           $cur_tr.nextAll(".ywnopay_info").hide();
        }
        if( type ==  4){
            $cur_tr.nextAll(".zwnopay_info").hide();
        }
    }else{
        $(obj).attr('title','收起');
        $(obj).attr('data-on','on');
        $cur_tr.addClass('yqnopay_bg');
        $(obj).children().html('&#xe614;');
        if( type == 3){
           $cur_tr.nextAll(".ywnopay_info").show();
        }
        if( type ==  4){
            $cur_tr.nextAll(".zwnopay_info").show();
        }
    }
}
/*已申请的报告*/
function showYqinfo(obj,type,id){
    // 隐藏可延期时间tip，以免展开式，tip位置不对
    $('.yzbg_tip').poshytip('hide');
    $('.yzbg_tip_en').poshytip('hide');

    var status = $(obj).attr('data-on'),$cur_tr=$(obj).parent().parent();
    if(status=="on"){
        $(obj).attr('title','查看更多');
        $(obj).attr('data-on','off');
        $cur_tr.removeClass('yqnopay_bg');
        $(obj).children().html('&#xe60a;');
         if(type=="1"){
            $(".yqzw.info_"+id).hide();
        }else{
            $(".yqyw.info_"+id).hide();
        }
    }else{
        $(obj).attr('title','收起');
        $(obj).attr('data-on','on');
        $cur_tr.addClass('yqnopay_bg');
        $(obj).children().html('&#xe614;');
        if(type=="1"){
            $(".yqzw.info_"+id).show();
        }else{
            $(".yqyw.info_"+id).show();
        }
        
    }
   
}
/*倒计时回退*/
function returnBack(id,sec,url){
    $("#"+id).html(sec);
    if ( --sec > 0 ) {
        setTimeout("returnBack('"+id+"',"+sec+",'"+url+"')",1000);
    } else {
        location.href=url;
    }
}