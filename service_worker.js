/**
 * キャッシュ名。
 */
var CACHE_NAME = 'rpgmv_minimum_cache';

/**
 * 最低限キャッシュすべきファイル。
 * このスクリプトファイルからの相対パス
 */
var urlsToCache = [
    'index.html',
    'icon/icon.png',
    'fonts/mplus-1m-regular.ttf',
    'fonts/gamefont.css',
    'css/like_rpg_windows.css'
];

self.addEventListener('install',
    /**
     * @function インストール時の処理
     */
    function(event) {
        event.waitUntil(
            caches.open(CACHE_NAME).then(function(cache) {
                return cache.addAll(urlsToCache);
            })
            .catch(function(e) {
                console.error(e.toString());
            })
        );
    }
);

self.addEventListener('fetch',
    /**
     * @function アセット読み込み時の処理
     * 
     * @param {*} event 
     */
    function(event) {
        event.respondWith(
            // キャッシュ検索
            caches.match(event.request)
                .then(function(response) {
                    if (response) {
                        return response;
                    }
                    else {
                        return fetch(event.request);
                    }
                })
                .catch(function(e) {
                    console.error(e.toString());
                })
        );
    });
