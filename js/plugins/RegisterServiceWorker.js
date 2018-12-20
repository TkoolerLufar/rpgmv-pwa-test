/*:
 * @plugindesc Not yet written
 * @author TkoolerLufar
 *
 * @help Not yet written
 *
 * @param ServiceWorkerScript
 * @desc The Service Worker script's name.
 * Put it at the same directory of index.html.
 * @default service_worker.js
 *
 */
/*:ja
 * @plugindesc まだ書いてないよ
 * @author ルファー
 *
 * @help まだ書いてないよ
 *
 * @param ServiceWorkerScript
 * @desc Service Worker スクリプトのファイル名。
 * index.html と同じ場所に置いてください。
 * @default service_worker.js
 *
 */

 if (
     "serviceWorker" in navigator && (
         location.protocol === 'https:' ||
         location.protocol === 'http:' && (
             /^127(?:\.\d+){3}$/.test(location.hostname) ||
             location.hostname === '[::1]' ||
             location.hostname === 'localhost'
         )
     )
    ) {
     navigator.serviceWorker.register(
        PluginManager.parameters('RegisterServiceWorker')['ServiceWorkerScript']
     )
     .then(function(registration) {
        //  console.log('ServiceWorker registration successful.');
     })
     .catch(function(e) {
         console.error('ServiceWorker registration failed: ' + e.message);
     });
 }