(function(window,$,undefined){var dist={};dist.result={};dist.set_dist=function(game){$.ajax({type:"get",url:'/data/json/games/dist.json',dataType:"json",cache:false,success:function(res){dist.result=res;}});};window.game_dist=dist;}(window,jQuery));