(function(global){'use strict';var root=global,api={},apiUrl='/stats/api.php';function _request(_data_,_method_,_type_,callback,context){if(_method_===undefined){_method_='POST';}
if(_type_===undefined){_type_='json';}
$.ajax({url:apiUrl,method:_method_,dataType:_type_,data:_data_,success:function(res){if(typeof callback==='function'){if(context!==undefined){callback(res,context);}else{callback(res);}}}})}
api.ladder={};api.ladder=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'ladder',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getEachMinMax=function(getValue,callback){var sendData;if(!getValue){return null;}
sendData={type:'ladder',c:'analysis',m:'get_analysis',analysis_type:'each_max',analysis_data:getValue};_request(sendData,'POST','json',callback);};var getPattern=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'ladder',c:'pattern',m:'get_pattern',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getPatternStat=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'ladder',c:'pattern',m:'get_pattern_stat',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return null;}
sendData={type:'ladder',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};var getResultCountGroup=function(date,round,callback){var sendData,group='round';if(!date){return null;}
sendData={type:'ladder',c:'round',m:'get_result_count_group',group_by:group,date_range:date,round_range:round};_request(sendData,'POST','json',callback);};var getResultStreamGroup=function(date,round,group,mode,callback){var sendData;if(group===undefined||group===null){group='reg_date';}
if(round===undefined||round===null){round='1,288';}
if(mode===undefined||mode===null){mode='odd_even';}
if(!date){return null;}
sendData={type:'ladder',c:'round',m:'get_result_stream_group',date_range:date,round_range:round,group_by:group,mode:mode};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getPattern:getPattern,getPatternStat:getPatternStat,getRoundData:getRoundData,getEachMinMax:getEachMinMax,getResultCountGroup:getResultCountGroup,getResultStreamGroup:getResultStreamGroup};}());api.dari={};api.dari=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'dari',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getEachMinMax=function(getValue,callback){var sendData;if(!getValue){return null;}
sendData={type:'dari',c:'analysis',m:'get_analysis',analysis_type:'each_max',analysis_data:getValue};_request(sendData,'POST','json',callback);};var getPattern=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'dari',c:'pattern',m:'get_pattern',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getPatternStat=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'dari',c:'pattern',m:'get_pattern_stat',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return null;}
sendData={type:'dari',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};var getResultCountGroup=function(date,round,callback){var sendData,group='round';if(!date){return null;}
sendData={type:'dari',c:'round',m:'get_result_count_group',group_by:group,date_range:date,round_range:round};_request(sendData,'POST','json',callback);};var getResultStreamGroup=function(date,round,group,mode,callback){var sendData;if(group===undefined||group===null){group='reg_date';}
if(round===undefined||round===null){round='1,480';}
if(mode===undefined||mode===null){mode='odd_even';}
if(!date){return null;}
sendData={type:'dari',c:'round',m:'get_result_stream_group',date_range:date,round_range:round,group_by:group,mode:mode};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getPattern:getPattern,getPatternStat:getPatternStat,getRoundData:getRoundData,getEachMinMax:getEachMinMax,getResultCountGroup:getResultCountGroup,getResultStreamGroup:getResultStreamGroup};}());api.powerLadder={};api.powerLadder=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'power_ladder',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getEachMinMax=function(getValue,callback){var sendData;if(!getValue){return null;}
sendData={type:'power_ladder',c:'analysis',m:'get_analysis',analysis_type:'each_max',analysis_data:getValue};_request(sendData,'POST','json',callback);};var getPattern=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'power_ladder',c:'pattern',m:'get_pattern',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getPatternStat=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'power_ladder',c:'pattern',m:'get_pattern_stat',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return null;}
sendData={type:'power_ladder',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};var getResultCountGroup=function(date,round,callback){var sendData,group='date_round';if(!date){return null;}
sendData={type:'power_ladder',c:'round',m:'get_result_count_group',group_by:group,date_range:date,round_range:round};_request(sendData,'POST','json',callback);};var getResultStreamGroup=function(date,round,group,mode,callback){var sendData;if(group===undefined||group===null){group='reg_date';}
if(round===undefined||round===null){round='1,480';}
if(mode===undefined||mode===null){mode='odd_even';}
if(!date){return null;}
sendData={type:'power_ladder',c:'round',m:'get_result_stream_group',date_range:date,round_range:round,group_by:group,mode:mode};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getPattern:getPattern,getPatternStat:getPatternStat,getRoundData:getRoundData,getEachMinMax:getEachMinMax,getResultCountGroup:getResultCountGroup,getResultStreamGroup:getResultStreamGroup};}());api.racing={};api.racing=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'racing',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return false;}
sendData={type:'racing',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getRoundData:getRoundData};}());api.powerball={};api.powerball=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'powerball',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getEachMinMax=function(getValue,callback){var sendData;if(!getValue){return null;}
sendData={type:'powerball',c:'analysis',m:'get_analysis',analysis_type:'each_max',analysis_data:getValue};_request(sendData,'POST','json',callback);};var getPattern=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'powerball',c:'pattern',m:'get_pattern',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getPatternStat=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='odd_even';}
if(!getType||!getValue){return null;}
data={type:'powerball',c:'pattern',m:'get_pattern_stat',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return null;}
sendData={type:'powerball',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};var getResultCountGroup=function(date,round,callback){var sendData,group='date_round';if(!date){return null;}
sendData={type:'powerball',c:'round',m:'get_result_count_group',group_by:group,date_range:date,round_range:round};_request(sendData,'POST','json',callback);};var getResultStreamGroup=function(date,round,group,mode,callback){var sendData;if(group===undefined||group===null){group='reg_date';}
if(round===undefined||round===null){round='1,288';}
if(mode===undefined||mode===null){mode='date_round';}
if(!date){return null;}
sendData={type:'powerball',c:'round',m:'get_result_stream_group',date_range:date,round_range:round,group_by:group,mode:mode};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getPattern:getPattern,getPatternStat:getPatternStat,getRoundData:getRoundData,getEachMinMax:getEachMinMax,getResultCountGroup:getResultCountGroup,getResultStreamGroup:getResultStreamGroup};}());api.speedkino={};api.speedkino=(function(){var getAnalysis=function(type,data,callback){var sendData;if(!type||!data){return null;}
sendData={type:'speedkino',c:'analysis',m:'get_analysis',analysis_type:type,analysis_data:data};_request(sendData,'POST','json',callback);};var getEachMinMax=function(getValue,callback){var sendData;if(!getValue){return null;}
sendData={type:'speedkino',c:'analysis',m:'get_analysis',analysis_type:'each_max',analysis_data:getValue};_request(sendData,'POST','json',callback);};var getPattern=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='min_odd_even';}
if(!getType||!getValue){return null;}
data={type:'speedkino',c:'pattern',m:'get_pattern',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getPatternStat=function(patternType,getType,getValue,callback,context){var data;if(patternType===undefined||patternType===null){patternType='min_odd_even';}
if(!getType||!getValue){return null;}
data={type:'speedkino',c:'pattern',m:'get_pattern_stat',pattern_type:patternType,get_type:getType,get_value:getValue};_request(data,'POST','json',callback,context);};var getRoundData=function(type,value,callback){var sendData;if(type===undefined||type===null){type='round';}
if(!type||!value){return null;}
sendData={type:'speedkino',c:'round',m:'get_round_data',get_type:type,get_value:value};_request(sendData,'POST','json',callback);};var getResultCountGroup=function(date,round,callback){var sendData,group='date_round';if(!date){return null;}
sendData={type:'speedkino',c:'round',m:'get_result_count_group',group_by:group,date_range:date,round_range:round};_request(sendData,'POST','json',callback);};var getResultStreamGroup=function(date,round,group,mode,callback){var sendData;if(group===undefined||group===null){group='reg_date';}
if(round===undefined||round===null){round='1,288';}
if(mode===undefined||mode===null){mode='date_round';}
if(!date){return null;}
sendData={type:'speedkino',c:'round',m:'get_result_stream_group',date_range:date,round_range:round,group_by:group,mode:mode};_request(sendData,'POST','json',callback);};return{getAnalysis:getAnalysis,getPattern:getPattern,getPatternStat:getPatternStat,getRoundData:getRoundData,getEachMinMax:getEachMinMax,getResultCountGroup:getResultCountGroup,getResultStreamGroup:getResultStreamGroup};}());root.statsAPI=api;}(window));