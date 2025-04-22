---
categories:
  - random
tags:
  - pwntools
  - ctf
  - tool
toc: false
toc_sticky: false
title: Install pwntools in Docker Container on MacBook with Apple Silicon
---

最近在準備 CTF 新手教學課程，在 setup CTF 環境的時候發現在 MacBook Air M2 的 Docker 上裝 [pwntools](https://github.com/Gallopsled/pwntools) 會一直報錯。花了一點時間找出怎麼解決，因此記錄一下。

Error Message:

```
Building wheels for collected packages: capstone, intervaltree, psutil, unicorn, colored-traceback
  Building wheel for capstone (setup.py) ... done
  Created wheel for capstone: filename=capstone-5.0.0rc2-py3-none-manylinux1_aarch64.whl size=2719523 sha256=82083546cb406cebfde81a7e2194b80c07f5eadab70d03ab070c0ee3a1e754d2
  Stored in directory: /root/.cache/pip/wheels/e0/81/2e/bea6f284461d033e82fe9865d9ae0c47cf248249a1aea5b24b
  Building wheel for intervaltree (setup.py) ... done
  Created wheel for intervaltree: filename=intervaltree-3.1.0-py2.py3-none-any.whl size=26119 sha256=d40c3a0a4c830fedb9e9acf18bd17aba863a1ad5b5a31cd362349d20f494a6e4
  Stored in directory: /root/.cache/pip/wheels/f1/52/97/0884d240db33fb0bbc0c2c9549ff13f6a81ec91bf0c1807615
  Building wheel for psutil (pyproject.toml) ... done
  Created wheel for psutil: filename=psutil-5.9.3-cp310-cp310-linux_aarch64.whl size=289971 sha256=1501d028409320cbed5b8d512f642b2fa1812db78a8c476a2cb4b6f4a4491166
  Stored in directory: /root/.cache/pip/wheels/d0/a0/7c/fda1eda4b3950c0453bf91840c5d453c7d24f579dff3400b5f
  Building wheel for unicorn (setup.py) ... error
  error: subprocess-exited-with-error

  × python setup.py bdist_wheel did not run successfully.
  │ exit code: 1
  ╰─> [4 lines of output]
      running bdist_wheel
      running build
      Building C extensions
      error: [Errno 2] No such file or directory: '/tmp/pip-install-orfvd6ty/unicorn_f715998fd3904e53ac7094415a90c86c/../../include/unicorn'
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
  ERROR: Failed building wheel for unicorn
  Running setup.py clean for unicorn
  Building wheel for colored-traceback (setup.py) ... done
  Created wheel for colored-traceback: filename=colored_traceback-0.3.0-py3-none-any.whl size=4622 sha256=91eb16162102145ea54b4cf44fc2f27b1df5cda9a58f252f2f0fd258df830deb
  Stored in directory: /root/.cache/pip/wheels/6a/f4/e1/1f521c5ac2d941d785386ebb04a5ca0e3511b65956bc12cf42
Successfully built capstone intervaltree psutil colored-traceback
Failed to build unicorn
Installing collected packages: unicorn, sortedcontainers, pyserial, pyelftools, urllib3, six, pysocks, pyparsing, pygments, pycparser, psutil, plumbum, MarkupSafe, intervaltree, idna, charset-normalizer, certifi, capstone, bcrypt, rpyc, ropgadget, requests, python-dateutil, pathlib2, packaging, mako, colored-traceback, cffi, pynacl, cryptography, paramiko, pwntools
  Running setup.py install for unicorn ... error
  error: subprocess-exited-with-error

  × Running setup.py install for unicorn did not run successfully.
  │ exit code: 1
  ╰─> [6 lines of output]
      running install
      /usr/lib/python3/dist-packages/setuptools/command/install.py:34: SetuptoolsDeprecationWarning: setup.py install is deprecated. Use build and pip and other standards-based tools.
        warnings.warn(
      running build
      Building C extensions
      error: [Errno 2] No such file or directory: '/tmp/pip-install-orfvd6ty/unicorn_f715998fd3904e53ac7094415a90c86c/../../include/unicorn'
      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
error: legacy-install-failure

× Encountered error while trying to install package.
╰─> unicorn

note: This is an issue with the package mentioned above, not pip.
hint: See above for output from the failure.
```

Solution:

```bash
# Follow pwntools installation instructions
apt-get update
apt-get install python3 python3-pip python3-dev git libssl-dev libffi-dev build-essential
python3 -m pip install --upgrade pip

# Fix : https://github.com/unicorn-engine/unicorn/issues/1707
apt-get install git cmake pkg-config
pip install "git+https://github.com/unicorn-engine/unicorn@e76b2db434382f59661471faae02b022a3ee5a30#subdirectory=bindings/python/"
python3 -m pip install --upgrade pwntools
```
