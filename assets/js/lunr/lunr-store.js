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
      },{
        "title": "Install pwntools in Docker Container on MacBook with Apple Silicon",
        "excerpt":"最近在準備 CTF 新手教學課程，在 setup CTF 環境的時候發現在 MacBook Air M2 的 Docker 上裝 pwntools 會一直報錯。花了一點時間找出怎麼解決，因此記錄一下。 Error Message: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34...","categories": [],
        "tags": ["pwntools","ctf","tool"],
        "url": "/install-pwntools-in-docker-container-on-apple-silicon/",
        "teaser": null
      },{
        "title": "Setup Glibc Debug Symbols on Arch Linux",
        "excerpt":"最近修交大程安遇到 heap 題，記錄一下怎麼在 Arch Linux 上取得 glibc debug symbols，方便用 pwndbg 的 heap, bins 等指令。 在 ~/.gdbinit 中加入 set debuginfod enabled ask。可以設定 on/off/ask， ask 的好處在於打開 gdb 時，它會跳出 Debuginfod has been disabled. 的提示訊息，手動輸入 set debuginfod enabled on 之後才會載入 debug symbols。 1 2 3 ice1187@ice1187-arch heapmath$ cat ~/.gdbinit source /usr/share/pwndbg/gdbinit.py set debuginfod enabled...","categories": [],
        "tags": ["ctf","heap","debug-symbol","pwndbg","tool"],
        "url": "/setup-glibc-debug-symbols-on-arch-linux/",
        "teaser": null
      },{
        "title": "AIS3 EOF 2023 Qual / EDU-CTF Final Writeup",
        "excerpt":"撞課撞了三年，大四上才終於有機會修交大程安，而程安期末剛好就是打 EOF 初賽。今年初賽 reverse 破台，算是有達到 pre-exam 後立下的期待，但決賽剛好撞到 SECCON，所以沒辦法打 QQ。   Rank      Team: Gagawulala   Ranking: 15th      Writeup   https://hackmd.io/@Ice1187/ais3-eof-2023-writeup  ","categories": [],
        "tags": ["ais3","ctf","writeup","eof"],
        "url": "/ais3-eof-2023-qual-edu-ctf-final-writeup/",
        "teaser": null
      },{
        "title": "How to Debug DOS Executable (COM) file",
        "excerpt":"最近解 CTF 遇到一題 COM file 執行檔的題目，花了一些時間找到如何 debug COM file。雖然題目沒解出來，但還是記錄一下。 Introduction COM file 是一種執行檔格式，副檔名為 .COM。COM file 的檔案結構十分單純，沒有 header 或其他儲存 metadata 的區段，只有 code 和 data。因為沒有儲存 metadata，其沒辦法做 relocation，且只能將整個 binary load 進 memory，因此其最大 size 限制為 65280 (0xff00) bytes……。 這些 reference 裡都寫過了，可以自行參考 reference。 How to Debug DOS Executable (COM) file 根據資料，Windows 32-bit 好像就可以跑 .COM file，但我手邊沒有機器，而且用其他工具跑起來感覺比較有趣，因此就嘗試用基於...","categories": [],
        "tags": ["COM","ctf"],
        "url": "/dos-executable-com-file-format/",
        "teaser": null
      },]
