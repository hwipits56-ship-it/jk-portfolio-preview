// 홈 화면 앱으로 설치되게 하는 최소 서비스 워커 (캐시는 하지 않음 — 늘 최신 미리보기)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
