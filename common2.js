var UI_FOOTER_HEIGHT=$('#footer').height()+ 5;$(function(){var ie_version=function(){var result=false;var agent=navigator.userAgent;if(agent.indexOf('MSIE')!=-1){var trident=navigator.userAgent.match(/Trident\/(\d.\d)/i);if(trident==null)result=7;else if(trident[1]=='4.0')result=8;else if(trident[1]=='5.0')result=9;}
return result;};if(ie_version()!==false&&ie_version()<10){$("[rel='placeholder']").find('label').show();$(document).on('keyup','input[type=text], input[type=password], textarea',function(){var tx_length=$(this).val().length;if(tx_length>0){$('label[for='+$(this).attr('id')+']').hide();}else{var $o=$(this);if(!$.trim($o.val()))$('label[for='+$o.attr('id')+']').show();else $('label[for='+$o.attr('id')+']').hide();}});}
$("dl[rel='placeholder']").find('input').focus(function(){$(this).parent('dd').addClass('focus');}).blur(function(){$("dl[rel='placeholder']").find('dd').removeClass('focus');});$(document).on({mouseenter:function(){var $tooltip=$('#tooltip');var $arrow=$tooltip.find('.arrow');var title=$(this).attr('title');var tooltip_height=38;$tooltip.show().find('.title').text(title);var target_width=$(this).outerWidth();var tooltip_width=$tooltip.find('.title_area').outerWidth();var tooltip_pos=parseInt((target_width- tooltip_width)/ 2);
var arrow_pos=target_width/2;var $std;if(window.location==window.parent.location){$std=$('body');}else{$std=$('#content');}
var std_body_width=$std.width();var std_body_start=$std.offset().left;var std_body_end=$std.offset().left+ std_body_width;var $offset_top=parseInt($(this).offset().top);var $offset_left=parseInt($(this).offset().left);var offset_tooltip_top=$offset_top- tooltip_height;var offset_tooltip_left=$offset_left+ tooltip_pos;var offset_arrow_top=$offset_top- 7;var offset_arrow_left=$offset_left+ arrow_pos;if(offset_tooltip_left<std_body_start){offset_tooltip_left=std_body_start;}
if(tooltip_width+ offset_tooltip_left>std_body_end){offset_tooltip_left=std_body_end- tooltip_width;}
$tooltip.find('.title_area').css({top:offset_tooltip_top,left:offset_tooltip_left});$arrow.css({top:offset_arrow_top,left:offset_arrow_left});},mouseleave:function(){$('#tooltip').hide();}},"[tooltip='tooltip']");});function window_resize(){var w=document.body.clientWidth- window.innerWidth;var h=document.body.clientHeight- window.innerHeight;if(window.outerHeight+ h<document.body.clientHeight||window.outerWidth+ w<document.body.clientWidth){window.resizeTo(document.body.clientWidth+ 20,document.body.clientHeight+ 100);return false;}
window.resizeBy(w,h);}
function open_popup(url,win_name,width,height){var popup_option='width='+width+', height='+height+', top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbars=no';var popup=window.open(url,win_name,popup_option);popup.focus();return popup;}
function openPopupWithOptions(url,name,options){var _options_,optionString='',str,popup;if(options===undefined||options===null){options={};}
_options_={width:(options.width)?options.width:100,height:(options.height)?options.height:100,top:(options.top)?options.top:100,left:(options.left)?options.left:100,fullscreen:(options.fullscreen)?options.fullscreen:'no',menubar:(options.menubar)?options.menubar:'no',status:(options.status)?options.status:'no',toolbar:(options.toolbar)?options.toolbar:'no',titlebar:(options.titlebar)?options.titlebar:'no',location:(options.location)?options.location:'no',scrollbars:(options.scrollbars)?options.scrollbars:'no',resizable:(options.resizable)?options.scrollbars:'no'};for(var key in _options_){str=key+'='+ _options_[key];optionString+=str+',';}
popup=window.open(url,name,optionString.substr(0,optionString.length- 1));popup.focus();return popup;}
function close_popup(reload){if(reload){window.opener.location.reload();}
window.close();}
function popup(url,name){window.open(url,name,'scrollbars=yes,width=383,height=700,top=10,left=20');}
function memo_popup(type,id){var url='/memo/'+type+'.popup.php';if(id!=undefined)url+='?id='+id;open_popup(url,'memo_'+type,'380','500');}
function memo_view_popup(type,no){var url='/memo/view_'+type+'.popup.php';if(no!=undefined)url+='?no='+no;open_popup(url,'memo_'+type,'380','500');}
function add_good_friend_popup(id){var url='/account/friend/good_add.popup.php';if(id!=undefined)url+='?id='+id;open_popup(url,'friend_add','383','455');}
function set_answering_popup(){var url="/account/friend/auto_answer.popup.php";open_popup(url,"friend_add","383","659");}
function add_bad_friend_popup(nick){var url='/account/friend/bad_add.popup.php';if(nick!=undefined)url+='?nick='+nick;open_popup(url,'blacklist_add','383','455');}
function add_penalty_popup(id){var url='/account/penalty/penalty.popup.php';if(id!=undefined)url+='?id='+id;open_popup(url,'penalty_add','383','455');}
function common_popup(o){var url=$(o).attr("href");var name=$(o).attr("popup-name");open_popup(url,name,'383','455');}
function request_ntalk(targetUserId,targetUserName){var url,talkFrame;if(!targetUserId||!targetUserName){return false;}
talkFrame=parent.document.getElementById('ntalkFrame')||document.getElementById('ntalkFrame');if(!talkFrame){alert('정상적인 접근이 아닙니다.');return false;}
url='/talk/talk.php?it=mb_id&iv='+ targetUserId;talkFrame.src=url;toggleChatTab('ntalk');if(typeof parent.close_all_user_service_tab==='function'){parent.close_all_user_service_tab();}
return true;}
function redirect_my_post(mb_id,connect_mode){if(connect_mode==='first'){alert('새창모드에서는 이용하실 수 없습니다.');return false;}
var targetFrame=window.top.contentFrame;if(typeof targetFrame!='object'){targetFrame=window.top;}
targetFrame.location.href='/user/home.php?mb_id='+ mb_id;return true;}
function redirect_fam_by_id(fam_id,connect_mode){if(connect_mode==='first'){alert('새창모드에서는 이용하실 수 없습니다.');return false;}
var targetFrame=window.top.contentFrame;if(typeof targetFrame!=='object'){targetFrame=window.top;}
targetFrame.location.href='/family/home.php?family_id='+ fam_id;return true;}
function redirect_my_fam(mb_id,connect_mode){if(connect_mode==='first'){alert('새창모드에서는 이용하실 수 없습니다.');return false;}
var targetFrame=window.top.contentFrame;if(typeof targetFrame!='object'){targetFrame=window.top;}
targetFrame.location.href='/family/conv.php?mb_id='+ mb_id;return true;}
function is_valid_email(email){var pattern=/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@(?:\w+\.)+\w+$/;return pattern.test(email);}
function isValidOnlyDate(date){var pattern=/[\d]{4}-[\d]{2}-[\d]{2}/;return pattern.test(date);}
var isCtrl=false;function enter_number(e){var key,keychar;if(window.event){key=window.event.keyCode;}else if(e){key=e.which;}else{return true;}
keychar=String.fromCharCode(key);if((key===null)||(key===0)||(key===8)||(key===9)||(key===13)||(key===27)||(key===46)||(key===37)||(key===39)||(key===35)||(key===36)||(key===86)||(key>=96&&key<=105)){return true;}else if((('0123456789').indexOf(keychar)>-1)){return true;}else{if(e.which===17){isCtrl=true;}
if(e.which===65&&isCtrl===true){return true;}else{return false;}}}
function number_comma(data){var number='',cutlen=3,comma=',',i,len,mod,k;data=Number(data);data=String(data);len=data.length;mod=(len%cutlen);k=cutlen- mod;for(i=0;i<data.length;i++){number=number+ data.charAt(i);if(i<data.length- 1){k++;if((k%cutlen)==0){number=number+ comma;k=0;}}}
if(!number)number=0;return number;}
function number_remove_comma(data){var number='';var comma=',';var i;for(i=0;i<data.length;i++)
{if(data.charAt(i)!=comma)
number+=data.charAt(i);}
return number;}
function stringPad(str,pad){var s=''+ str;if(pad===undefined||pad===null){pad='00';}
return pad.substring(0,pad.length- s.length)+ s;}
String.prototype.string=function(len){var s='',i=0;while(i++<len){s+=this;}
return s;};String.prototype.zf=function(len){return'0'.string(len- this.length)+ this;};Number.prototype.zf=function(len){return this.toString().zf(len);};Date.prototype.format=function(f){var weekName,d=this;if(!this.valueOf()){return' ';}
weekName=['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi,function($1){switch($1){case'yyyy':return d.getFullYear();case'yy':return(d.getFullYear()%1000).zf(2);case'MM':return(d.getMonth()+ 1).zf(2);case'dd':return d.getDate().zf(2);case'E':return weekName[d.getDay()];case'HH':return d.getHours().zf(2);case'hh':return((h=d.getHours()%12)?h:12).zf(2);case'mm':return d.getMinutes().zf(2);case'ss':return d.getSeconds().zf(2);case'a/p':return d.getHours()<12?'오전':'오후';default:return $1;}});};function getCalcDate(dateString,operator,value){var date;if(operator!=='-'&&operator!=='+'){return null;}
if(value===''||isNaN(value)===true){return null;}
if(dateString===''||dateString===null){return null;}
date=new Date(dateString);if(operator==='-'){date.setDate(date.getDate()- value);}else if(operator==='+'){date.setDate(date.getDate()+ value);}
return date.format('yyyy-MM-dd');}
function nl2br(str){return str.replace(/\n/g,'<br/>');}
function count_up_notice(){count_up_private_noti();}
function count_up_private_noti(){var $notice_count=$("#notify_cnt",top.document);var cnt=Number($notice_count.html())||0;$notice_count.html(cnt+ 1).parent().show();}
function count_up_family_noti(){var $noti_count=$("#family_unread_count .count",top.document);var cnt=Number($noti_count.html())||0;$noti_count.html(cnt+ 1).parent().show();}
function count_up_follower_noti(){var $noti_count=$("#follower_unread_count .count",top.document);var old_count=$noti_count.html();if(old_count=='99+')
return;var cnt=Number(old_count)||0;cnt=cnt+ 1;if(cnt>99)
cnt='99+';$noti_count.html(cnt).parent().show();}
function read_noti_common(o){$(o).parents('li').removeClass('new');}
function read_nofity(obj,no,type,key){$(obj).parents('li').removeClass('new');action_notify(type,key);}
function action_notify(type,key){var url='';switch(type){case'REMOVE_NCHAT':case'RECV_MEMO':memo_view_popup('recv',key);break;case'RECV_ITEM':url='/account/item/myitem_list.php';break;case'RECV_ITEM_COUNT':url='/account/item/myitem_list.php';break;case'ARTICLE_COMMENT':case'ARTICLE_COMMENT_REPLY':url='/bbs/board.php?article_no='+ key;break;case'GUESTBOOK_COMMENT':url='/user/home.php?mb_id='+ mbid;break;case'ARTICLE':case'ARTICLE_RECOMMEND':url='/bbs/board.php?article_no='+ key;break;case'PICK_RESULT':url='/tipster/user.php?'+ key;break;case'MISSION_COMPLETE':url='/tipster/mission.php?game='+ key;break;case'RECV_GIFT_POINT':url='/account/point/point_history.php';break;case'RECV_GIFT_STAR':url='/account/star/star_recv_history.php';break;}
if(url!=null&&url!=''){if(default_link_target=='_self'){location.href=url;}else{window.frames[default_link_target].location.href=url;}}}
function close_all_user_service_tab(){$('#user_service_tab').find('a').removeClass('on');$('#service_layer').hide().empty();$('#tooltip').hide();}
function user_service_tab(obj,type){var $obj=$(obj);var $service_layer=$('#service_layer');var ajax_url='';if($obj.hasClass('on')){$obj.removeClass('on');$service_layer.hide().empty();return false;}
$service_layer.html("<img src='/public/img/layout/loading.gif' class='img_loading' alt='loading' />");if($obj.hasClass('btn')==false){$('#user_service_tab').find('a').removeClass('on');$obj.addClass("on");$service_layer.show();}
switch(type){case"follower":ajax_url='/ajax/follower_layer.php';$("#follower_unread_count").hide().find('.count').html('');ga('send','event','user_service_tab','click',$obj.attr("title"));break;case"family":ajax_url='/ajax/family_layer.php';$("#family_unread_count").hide().find('.count').html('');ga('send','event','user_service_tab','click',$obj.attr("title"));break;case"notify":ajax_url='/ajax/notify_layer.php';$("#notify_count").hide().find('#notify_cnt').html('');ga('send','event','user_service_tab','click',$obj.attr("title"));break;case"read_notify":ajax_url='/ajax/notify_layer.php';break;case"del_notify":ajax_url='/ajax/notify_layer.php';break;case"del_read_notify":ajax_url='/ajax/notify_layer.php';break;default:return;}
$.ajax({type:'post',url:ajax_url,data:({type:type,target:default_link_target}),success:function(data){$('#service_layer').html(data);}});}
function dataNotFoundHandlerForTable(boxElementId,message){var $table,$td,colspan;if(boxElementId===null||boxElementId===undefined){return false;}
$table=$('#'+ boxElementId);if($table.length===0){return false;}
colspan=$table.find('th').length;$td=$('<td></td>');if(colspan>0){$td.attr('colspan',colspan).css('padding','30px 10px');}
if(message){$td.html(message);}
$table.find('tbody').append($('<tr></tr>').append($td));return true;}
function dataNotFoundHandlerForDiv(boxElementId,message){var $div;if(boxElementId===null||boxElementId===undefined){return false;}
$div=$('#'+ boxElementId);if($div.length===0){return false;}
$div.removeClass().empty();$div.css({padding:'30px','text-align':'center'});$div.html(message);return true;}
function parent_resizeFrame(){if(typeof parent.resizeFrame=="function"){parent.resizeFrame();}}
var bindCheckBoxAndRadioUIEvent=function(parent){var $bindElement=null;if(parent===undefined||parent===null){$bindElement=$("input[type=checkbox], input[type=radio]");}else{$bindElement=$(parent).find('input[type=checkbox], input[type=radio]');}
$bindElement.on('change',function(){var $this=$(this);var type=$this.attr('type'),radio_name;if(type=='radio'){radio_name=$this.attr('name');$this.closest("form").find('input[name="'+ radio_name+'"]').siblings().removeClass('checked');}
$this.next('label').toggleClass('checked',$this.prop('checked'));});};$(function(){bindCheckBoxAndRadioUIEvent();});function ajax_friend(update_code,mb_id,callback){var params={};params.update_code=update_code;params.mb_id=mb_id;$.post("/account/friend/friend.ajax.php",params,function(res){callback(res);},"json").fail(function(obj,status,error){alert("작업이 실패하였습니다.");});}
var toggleChatTab=function(tab){var $document,$chatWrapper,$tabElements;if(parent.document.getElementById('chat_wrapper')){$document=$(parent.document);}else{$document=$(document);}
$tabElements=$document.find('#lnk_chat_tab, #lnk_ntalk_tab, #lnk_ntalk_random_tab');$tabElements.removeClass('selected');$chatWrapper=$document.find('#chat_wrapper');$chatWrapper.find('iframe').hide();$chatWrapper.find('#'+ tab+'Frame').show();$document.find('#lnk_'+ tab+'_tab').addClass('selected');};var isChatPopup=function(){return document.getElementById('chat_wrapper')===null;};var updatePublicChatUserCount=function(count){var $chatFrame,$talkFrame,userCount=number_comma(count);if(isChatPopup()===false){$chatFrame=$('#chatFrame');$talkFrame=$('#ntalkFrame');if($chatFrame.length>0){$chatFrame.contents().find('#user_count').text(userCount);}
if($talkFrame.length>0){$talkFrame.contents().find('#chat_user_count').text(userCount);}}else{$('#user_count').text(userCount);}};var isCountEffect=true;var updateNTalkUnReadMessageCount=function(count){var $ce;if(isChatPopup()===false){$ce=$('#talk_msg_count');if($ce.length>0){if(count>0){$ce.show().text(count);if(isCountEffect===true){$ce.animate({opacity:0},100,function(){$(this).animate({opacity:1},100);});if($ce.is(':visible')){document.getElementById("talk_alarm_sound").play();}
isCountEffect=false;}}else{$ce.hide();}}}};var getCurrentTab=function(){var chatTab,$selected;if(opener){return false;}
chatTab=parent.document.getElementById('chat_tab')||document.getElementById('chat_tab');if(!chatTab){return false;}
$selected=$(chatTab).find('.selected');return $selected.attr('rel');};var notifyNewTalkMessageAtFrameTop=function(channelId,memberId,level,nick,extendStyle,message){var $talkFrame,$contentFrame,$notis,$notiWrap,$innerDiv,$memberDiv,$profileSpan,$profileImg,$levelImg,$nickAc,$channelAc,$closeBtn,profileSrc,levelSrc,onErrorProfileSrc='/public/img/profile/default_95x95.png';$talkFrame=parent.document.getElementById('ntalkFrame')||document.getElementById('ntalkFrame');$contentFrame=parent.document.getElementById('contentFrame')||document.getElementById('contentFrame');if(opener){return false;}
if(!$talkFrame||!$contentFrame){return false;}
if(!channelId||!level||!nick||!message){return false;}
$notis=$('.talk_notis');$notiWrap=$('<div></div>').addClass('talk_notify');$innerDiv=$('<div></div>').addClass('inner').addClass('_user_info_');$memberDiv=$('<div></div>').addClass('member');$profileSpan=$('<span></span>').addClass('profile_image');$memberDiv.append($profileSpan);$innerDiv.append($memberDiv);profileSrc='/data/profile/'+ memberId.substr(0,2)+'/'+ memberId+'.png';$profileImg=$('<img/>').attr('width',82).attr('height',82).attr('src',profileSrc).error(function(){$(this).attr('src',onErrorProfileSrc);});$profileSpan.append($profileImg);if(extendStyle==='best'){levelSrc='/public/img/level/42x42/best.png';}else{levelSrc='/public/img/level/42x42/'+ level+'.png';}
$levelImg=$('<img/>').addClass('level').attr('src',levelSrc);$memberDiv.append($levelImg);$nickAc=$('<a></a>').addClass('unick').text(nick);if(extendStyle){$nickAc.addClass(extendStyle);}
if(memberId){$nickAc.attr('href','/user/home.php?mb_id='+ memberId).attr('target','contentFrame').click(function(){ga('send','event','talk_notify','click','닉네임 클릭');});}
$memberDiv.append($nickAc);$channelAc=$('<a></a>').addClass('msg').text(message).attr('href','/talk/talk.php?it=channel_id&iv='+ channelId).attr('target','ntalkFrame').click(function(){toggleChatTab('ntalk');close_all_user_service_tab();ga('send','event','talk_notify','click','메시지 클릭');});$memberDiv.append($channelAc);function close(){$notiWrap.animate({top:'-142'},300,function(){this.remove();});}
$closeBtn=$('<a></a>').addClass('btn_close').attr('href','javascript:;').click(function(){close();ga('send','event','talk_notify','click','닫기 클릭');});$innerDiv.append($closeBtn);$notiWrap.append($innerDiv);$notis.append($notiWrap);$notiWrap.append($innerDiv);$notiWrap.animate({top:'0'},300,function(){var notiChildren=$notis.children('.talk_notify');if(notiChildren.length>=2){notiChildren.first().remove();}
setTimeout(function(){close();},5000);});ga('send','event','talk_notify','view','알림 애니메이션');};function notifyNewTalkMessage(){var url='/talk/api.php?cmd=get_last_un_read_message&skip_version_check=true',response;$.get(url,function(res){if(res&&res.hasOwnProperty('code')&&res.code===200){response=res.data;parent.notifyNewTalkMessageAtFrameTop(response.channelId,response.memberId,response.level,response.nick,response.extendStyle,response.message);}});}
function popup_create_family(){var url='/family/popup/create.popup.php';return open_popup(url,'create_fam','383','606');}
function dc(mb_id){var url;if(!mb_id){return false;}
url='/chat/api.php?cmd=ac&member_id='+ mb_id;$.get(url,function(res){if(res.code!==200){alert('처리에 실패했습니다.');}});}
function cc(mb_id){var node=document.getElementById('chat_log'),url='/ajax/chat_capture.php';if(node){domtoimage.toPng(node,{}).then(function(png){if(png){$.post(url,{mb_id:mb_id,image:png},function(res){},'text');}});}}
function ajax_subscribe(params,callback){$.post("/tipster/ajax/user.subscribe.ajax.php",params,function(res){callback(res);},"json").fail(function(obj,status,error){});}
$(function(){$(document).on("click","[subscribe='subscribe']",function(){var $o=$(this);var params={no:$o.attr('rel_no'),pick_type:$o.attr('pick_type')};ajax_subscribe(params,function(res){var $tr=$o.parent('.pick_cell').parent();$tr.find(".main_pick_cell").html(res.html.main);$tr.find(".sub_pick_cell").html(res.html.sub);$("#tooltip").hide();});});});function banner_stick(target){var $target=$('div[rel="'+target+'"]');if(cookie.get(target)!="off"){$target.show();}
$target.click(function(){cookie.set(target,"off",null);$target.animate({"height":"0"},200,function(){$(this).hide();});});}