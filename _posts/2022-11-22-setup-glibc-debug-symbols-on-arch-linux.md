---
categories:
  - CTF
tags:
  - ctf
  - heap
  - debug-symbol
  - pwndbg
  - tool
toc: false
toc_sticky: false
title: Setup Glibc Debug Symbols on Arch Linux
---

最近修交大程安遇到 heap 題，記錄一下怎麼在 Arch Linux 上取得 glibc debug symbols，方便用 `pwndbg` 的 `heap`, `bins` 等指令。

1. 在 `~/.gdbinit` 中加入 `set debuginfod enabled ask`。可以設定 `on/off/ask`， `ask` 的好處在於打開 gdb 時，它會跳出 `Debuginfod has been disabled.` 的提示訊息，手動輸入 `set debuginfod enabled on` 之後才會載入 debug symbols。

   ```bash
   ice1187@ice1187-arch heapmath$ cat ~/.gdbinit
   source /usr/share/pwndbg/gdbinit.py
   set debuginfod enabled ask
   ```

2. 設定 env variable `DEBUGINFOD_URLS="https://debuginfod.archlinux.org"`，我是放在 `~/.bashrc` 裡。

   ```bash
   ice1187@ice1187-arch heapmath$ cat ~/.bashrc
   ...
   export DEBUGINFOD_URLS="https://debuginfod.archlinux.org"
   ```

3. 用 `gdb` 載入 binary，輸入 `set debuginfod enabled on`，再把程式跑起來，應該就會看到 glibc debug symbols，並且可以使用 `heap`、`bins` 等指令了。
   ![glibc-read-symbol.png](/assets/images/glibc-read-symbol.png)

   ![pwndbg-bins.png](/assets/images/pwndbg-bins.png)

### Reference

- [nbulischeck/install-glibc-debug.sh - Gist](https://gist.github.com/nbulischeck/bda4397a59b77822703f98f6aeb2cb20?permalink_comment_id=4075383)
- [Debuginfod - ArchWiki](https://wiki.archlinux.org/title/Debuginfod)
- [Debuginfod service - Arch Linux](https://debuginfod.archlinux.org)
