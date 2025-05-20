// ==UserScript==
// @name         B站网页直播间显示充电表情包
// @namespace    https://github.com/qianqiuzy/bililive_upower
// @version      1.0.0
// @description  电脑网页端直播间可显示充电表情包
// @author       qianqiuzy,polarbears
// @match        https://live.bilibili.com/*
// @icon         http://i0.hdslb.com/bfs/live/a304ffa5aaa9a2650ac929f5617ee1b2e56dd0d7.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const OriginalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        const xhr = new OriginalXHR();
        const originalOpen = xhr.open;
        xhr.open = function(method, url, async, user, password) {
            if (url.includes('GetEmoticons') && /platform=pc/i.test(url)) {
                url = url.replace(/platform=pc/i, 'build=84400100&platform=ios');
            }
            return originalOpen.call(this, method, url, async, user, password);
        };
        return xhr;
    };
})();
