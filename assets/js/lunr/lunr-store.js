var store = [{
        "title": "調整 Google Meet 音量",
        "excerpt":"因為 Macbook 上預設沒有辦法單獨調整一個網頁的音量，所以想同時掛著 Google Meet，又一邊看 Youtube 的話，兩邊音量會互相打架。記錄一下怎麼調整 Google Meet 的音量:      打開 Console。   複製下方 script，調整 volume 到自己想要的比例。   貼到 Console。   1 2 3 4 5 6 volume = 0.5  audios = document.getElementsByTagName('audio') for (a of audios) {     a.volume = volume }  ","categories": [],
        "tags": ["google meet","tips"],
        "url": "/google-meet/",
        "teaser": null
      },{
        "title": "How to Find PyTorch that supports your GPU",
        "excerpt":"If PyTorch shows the following messages, then it means your PyTorch doesn’t compile with a CUDA version compatible with your GPU. 1 2 3 UserWarning: GeForce RTX 3090 with CUDA capability sm_86 is not compatible with the current PyTorch installation. The current PyTorch install supports CUDA capabilities ... RuntimeError: CUDA...","categories": ["reinforcement-learning"],
        "tags": ["pytorch","cuda"],
        "url": "/reinforcement-learning/find-pytorch-that-supports-your-gpu/",
        "teaser": null
      },{
        "title": "AIS3 2022 Pre-exam Writeup",
        "excerpt":"從 226 名、49 名，一直到今年的第 2 名，著實感受到自己的進步，雖然也有一部分是因為跟我差不多時期的人可能都去出題了，所以競爭沒有往年激烈。不過還是很高興可以看見從上大學到現在有一點一點地在進步，期許畢業前可以在 EOF 上也有更好的 solo 成績。 不得不說 AIS3 pre-exam 每年都有用心在出題目，相較 CTFTime 上常有些不明所以的 CTF，pre-exam 打起來都是很開心的。 Rank Team: Ice1187 Ranking: 2nd Writeup Repo: Ice1187/AIS3-2022-Pre-exam-Writeup Reverse Time Management 每次 print flag 的一個字元要等 30000 多秒。 從 objdump 找到要 patch 的 instruction 在 0x122b。 用 vim 打開 chal，然後輸入指令 :%!xxd 將 binary...","categories": [],
        "tags": ["ais3","ctf","writeup"],
        "url": "/ais3-2022-pre-exam-writeup/",
        "teaser": null
      },]
