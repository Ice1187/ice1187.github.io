---
categories:
  - CTF
tags:
  - COM
  - ctf
toc: true
toc_sticky: true
title: How to Debug DOS Executable (COM) file
header:
  teaser: /assets/images/dosbox-x-mount.png
---

最近解 CTF 遇到一題 COM file 執行檔的題目，花了一些時間找到如何 debug COM file。雖然題目沒解出來，但還是記錄一下。

## Introduction

COM file 是一種執行檔格式，副檔名為 `.COM`。COM file 的檔案結構十分單純，沒有 header 或其他儲存 metadata 的區段，只有 code 和 data。因為沒有儲存 metadata，其沒辦法做 relocation，且只能將整個 binary load 進 memory，因此其最大 size 限制為 65280 (0xff00) bytes......。

這些 reference 裡都寫過了，可以自行參考 reference。

## How to Debug DOS Executable (COM) file

根據資料，Windows 32-bit 好像就可以跑 `.COM` file，但我手邊沒有機器，而且用其他工具跑起來感覺比較有趣，因此就嘗試用基於 DOSBox 的 [DOSBox-X](https://github.com/joncampbell123/dosbox-x) 來 debug。

1. 選好 working directory，把 [DOSBox-X](https://github.com/joncampbell123/dosbox-x) 跑起來。
2. 為了讓 DOSBox-X 讀到要 debug 的檔案，因此需要把存有要 debug 檔案的 directory mount 進去。此處我把本地的 `polyglot/` mount 到 DOSBox-X 裡的 `C:`，然後輸入 `C:` ，把 working directory 切換到 `C:`。關於此部份更多細節可以參考 [DOSBox Manual](https://www.dosbox.com/DOSBoxManual.html)。

   ```
   Z:> mount C: C:\Users\poc\Desktop\polyglot
   Z:> C:
   C:>
   ```

   ![dosbox x mount](/assets/images/dosbox-x-mount.png)

3. 輸入 `debugbox <target_com_file> <args>` 便會開啟 DOSBox-X debugger，開始 debug 該 COM file。

   ```
   C:> debugbox POLYGLOT.COM
   ```

   ![dosbox x debugger](/assets/images/dosbox-x-debugger.png)

4. 剩下就是一般 debug 操作，一些常用指令如下，更多指令可以參考 [dosbox-x/README.debugger](https://github.com/joncampbell123/dosbox-x/blob/master/README.debugger)：

   | Command             | Description                            |
   | ------------------- | -------------------------------------- |
   | `f5`                | Run                                    |
   | `f10`               | Step over                              |
   | `f11`               | Step into                              |
   | `bp <seg>:<offset>` | Set breakpoint at seg\:offset          |
   | `bplist`            | List breakpoints                       |
   | `tab` / `shift-tab` | Switch between code/data/register view |
   | `up` / `down`       | Scroll in the current view             |
   | `dv <addr>`         | Set data view to show addr address     |
   | `sr <reg> <val>`    | Set register value                     |

   ![dosbox x debug](/assets/images/dosbox-x-debug.png)

## Reference

- [Wiki -- COM file](https://en.wikipedia.org/wiki/COM_file)
- [Stackoverflow -- What are the details of .com file format?](https://stackoverflow.com/questions/70448795/what-are-the-details-of-com-file-format)
- [Program Startup & Exit](http://www.techhelpmanual.com/829-program_startup___exit.html)
- [Wiki -- DOS API](https://zh.wikipedia.org/zh-tw/DOS_API)
- [Imgur -- COM101 a DOS executable walkthrough](https://imgur.com/cuyliWz)
- [GitHub -- joncampbell123/dosbox-x](https://github.com/joncampbell123/dosbox-x)
