/* 最小 service worker：仅用于让网页可"安装到桌面"并支持 setAppBadge 角标。
   不做任何缓存（fetch 直接放行），因此不会造成页面版本过期/看不到更新。 */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
