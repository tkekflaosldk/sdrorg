<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>패턴보기 - 네임드 다리다리통계</title>
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="apple-mobile-web-app-title" content="엔트리"/>
<meta name="generator" content="ntry.com"/>
<meta name="author" content="ntry.com"/>
<meta name="keywords" content="엔트리,스포츠"/>
<meta name="description" content="스포츠 커뮤니티 엔트리"/>
<meta name="robots" content="ALL,INDEX,FOLLOW"/>
<meta name="format-detection" content="telephone=no"/>
<link rel="shortcut icon" type="image/x-icon" href="/public/img/favicon.ico"/>
<link rel="apple-touch-icon-precomposed" href="/public/img/apple_home_icon.png?v=20170109214029"/>
<link rel="stylesheet" type="text/css" href="/public/css/reset.css"/>
<link rel="stylesheet" type="text/css" href="/public/css/common.css?v=20170109214029"/>
<link rel="stylesheet" type="text/css" href="/public/css/stats/common_stats.css?v=20170109214029"/>
<link rel="stylesheet" type="text/css" href="/public/css/stats/ladder_stats.css?v=20170109214029"/>
<script type="text/javascript">
        var site_is_member = '';
        var site_is_admin_auth = '';
        var message_push_server = 'noti.ntry.com:8080';
        var MPQ = [];
        var ssid = 'ufm78tpjas5ffn69td9rfaumt5';
        var mbid = '';
        var cloudcast_game_key = 'power_ladder';
        
    </script>
<script type="text/javascript" src="/public/js/jquery-1.11.3.min.js"></script>
</head>
<body>
<div id="analysis" class="pop_pattern_view">
<h1>2017년 01월 08일 패턴보기</h1>
<div class="pattern_graph">
<ul id="pattern_tab" class="main_tab">
<li><a class="selected" href="javascript:void(0);" rel="odd_even">홀짝패턴</a></li>
 
<li><a href="javascript:void(0);" rel="start_point">시작방향패턴</a></li>
<li><a href="javascript:void(0);" rel="line_count">사다리갯수패턴</a></li>
<li><a href="javascript:void(0);" rel="start_line">출줄패턴</a></li>
</ul>
<div id="pattern_graph">
<div class="pattern_wrap" id="pattern-wrap" rel-date="2017-01-08">
<div class="view" id="pattern">
<ul class="info"></ul>
<div class="box_area">
<div id="pattern-box" class="inner"></div>
</div>
</div>
</div>
</div>
</div>
</div>
 
<script id="pattern-template" type="text/template">
    [% _.each(data, function (row) { %]
    <dl>
        <dt>[%=(row.value_alias) ? row.value_alias : row.value %]</dt>
        [% _.each(row.rounds, function (round) { %]
        <dd><span class="[%=isNaN(row.value) ? row.value : '_' + row.value %]" title="[%=row.value%]">[%=round%]</span></dd>
        [% }); %]
        <dd class="length">[%=row.count%]</dd>
        <dd class="times">[%=row.seq%]</dd>
    </dl>
    [% }); %]
</script>
<script type="text/javascript">
(function () {
    var $patternTab = $('#pattern_tab'),
        date = $('#pattern-wrap').attr('rel-date'),
        pattern;
    var changePattern = function (type) {
        var patternConfig = {
            patternType: type,
            getType: 'date',
            getData: date,
            templateId: 'pattern-template',
            parentWrapperId: 'pattern',
            wrapperId: 'pattern-box'
        };
        pattern = new DariPattern(patternConfig);
        pattern.select();
        resizePopUp();
    };
    $(document).ready(function () {
        if (date === undefined || date === null) {
            alert('요청한 날짜가 올바르지 않습니다.');
            self.close();
        }
        changePattern('odd_even');
        $patternTab.find('a').on('click', function () {
            var patternType = $(this).attr('rel');
            changePattern(patternType);
        });
    });
}());
</script>
<div id="tooltip"><span class="title_area"><em class="title"></em></span><em class="arrow"></em></div>
<audio id="talk_alarm_sound" src="/talk/public/resources/talk_alarm.mp3?v=20170109214029"></audio>
<script type="text/javascript" src="/public/js/score/clock.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/score/dist.js?v=20170109214029"></script>
<script type="text/javascript">

    (function clock_update() {
        game_clock.update();
        setTimeout(clock_update, 100);
    }());

    (function(){
        game_clock.sync_clock();
    })();

    (function dist_update() {
        game_dist.set_dist();
        setTimeout(dist_update, 3000);
    }());

</script>
<script type="text/javascript">
    var betting_close_seconds = [];
    betting_close_seconds['power_ladder'] = 15;
    betting_close_seconds['power'] = 15;
    betting_close_seconds['racing'] = 15;
    betting_close_seconds['dari'] = 15;
    betting_close_seconds['ladder'] = 90;
</script>
<script type="text/javascript" src="/public/js/common.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/stats/api_caller.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/stats/common.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/stats/dari/dari_common.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/underscore-min.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/ejs/ejs_production.js?v=20170109214029"></script>
<script type="text/javascript" src="/public/js/stats/dari/pattern.js?v=20170109214029"></script>
</body>
</html>
