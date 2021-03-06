﻿// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要針對在 Ripple 或 Android 裝置/模擬器上載入的頁面，偵錯程式碼: 請啟動您的應用程式，設定中斷點，
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // 處理 Cordova 暫停與繼續事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        $('#loading').fadeIn('fast');

        $('#player').load(function () {
            $('#loading').fadeOut('fast');
        });

        // 取得 iframe 中的元素
        //$('#play').click(function () {
        //    $('#loading').fadeIn('fast');
        //    $('#player').attr('src', "http://hichannel.hinet.net/radio/index.do?id=1479");
        //});

        //$('#play').click(function () {
        //    $('#player').attr('src', "http://hichannel.hinet.net/radio/index.do?id=1479");
        //});

        $('#btnPlay').click(function () {
            $('#btnPlay').hide();
            $('#btnPause').show();

            $('#status_pause').hide();
            $('#status_play').show();

            $('#loading').fadeIn('fast');
            $('#player').attr('src', "http://hichannel.hinet.net/radio/index.do?id=1479");
        });

        $('#btnPause').click(function () {
            $('#btnPause').hide();
            $('#btnPlay').show();

            $('#status_play').hide();
            $('#status_pause').show();

            $('#player').attr('src', "http://ad.ckb.tw/ad/index.php?x=3");
        });

        $('#ad_up').click(function () {
            //$('#web').attr('src', "http://ad.ckb.tw/ad/index.php?x=3");
            //$('.webWrapper').css('display', 'block');
            $('.webWrapper').toggle();
        });

        $('#fb').click(function () {
            var iabRef = window.open('https://www.facebook.com/ckb936', '_blank');
        });
    };

    function onPause() {
        // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
    };

    function onResume() {
        // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
    };
} )();