---
categories:
  - random
tags:
  - google meet
  - tips
toc: false
toc_sticky: false
title: 調整 Google Meet 音量
---

因為 Macbook 上預設沒有辦法單獨調整一個網頁的音量，所以想同時掛著 Google Meet，又一邊看 Youtube 的話，兩邊音量會互相打架。記錄一下怎麼調整 Google Meet 的音量:

1. 打開 Console。
2. 複製下方 script，調整 `volume` 到自己想要的比例。
3. 貼到 Console。

```javascript
volume = 0.5;

audios = document.getElementsByTagName("audio");
for (a of audios) {
  a.volume = volume;
}
```

