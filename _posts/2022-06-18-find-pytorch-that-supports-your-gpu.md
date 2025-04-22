---
title: How to Find PyTorch that supports your GPU
classes: wide
categories:
  - random
tags:
  - pytorch
  - cuda
toc: false
toc_sticky: false
---

If PyTorch shows the following messages, then it means your PyTorch doesn't compile with a CUDA version compatible with your GPU.

    UserWarning: GeForce RTX 3090 with CUDA capability sm_86 is not compatible with the current PyTorch installation. The current PyTorch install supports CUDA capabilities ...

    RuntimeError: CUDA error: no kernel image is available for execution on the device.

To addrees the problem:

1. Go to [CUDA GPUs - Compute Capability](https://developer.nvidia.com/cuda-gpus).
2. Open the section the GPU might be in, e.g., `GeForce RTX 3090` is in "CUDA-Enabled GeForce and TITAN Products".
3. Find the "Compute Capability" of the GPU, e.g., `GeForce RTX 3090` has the value `8.6`.
4. Go to [CUDA Compatibility -- FAQ -> Which GPUs are supported by the driver?](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#faq__docs-internal-guid-d9200e15-7fff-2037-c3ce-62bfbccf325e), then find the driver version that supports the "Compute Capability" of the GPU, e.g., the lowest driver version supports `GeForce RTX 3090` is `450.36.06+`.
   ![GPU vs driver]({{ "/assets/images/gpu-driver.png" | relative_url }}){: width="800"}
5. Go to [CUDA Application Compatibility Support Matrix](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#use-the-right-compat-package__table-cuda-application-support-matrix) table on the same page, and find the CUDA toolkit version that supports the corresponding driver version, e.g., the lowest CUDA toolkit version for `GeForce RTX 3090`, driver `450.36.06+`, is `11.0`.
   ![CUDA Application Compatibility Support Matrix]({{ "/assets/images/cuda-compatibility-support-matrix.png" | relative_url }}){: width="800"}
6. After found out the Compute Capability and CUDA toolkit version for the GPU, go to [PyTorch Stable Wheel](https://download.pytorch.org/whl/torch_stable.html). Every wheel with `cuXXX` where `XXX` is at least as large as the needed CUDA toolkit version should be usable, e.g., the minimum PyTorch version that supports `GeForce RTX 3090` should be `torch-1.7.0`, since it's the first one to starts with `cu110`, which means CUDA toolkit `11.0`.
7. Finally, install the PyTorch with the CUDA toolkit version needed with:

```bash
pip install torch==<torch.version>+cu<XXX> -f https://download.pytorch.org/whl/torch_stable.html
```

For example, to install PyTorch `1.8.1` with CUDA toolkit `11.1`:

```bash
pip install torch==1.8.1+cu111 -f https://download.pytorch.org/whl/torch_stable.html
```

### 後記

把這篇文分享給 lab 的學長之後被狠狠打臉，原來 [PyTorch](https://pytorch.org/get-started/previous-versions/) 上就有標註每個 PyTorch 版本支援的 CUDA toolkit version...，我要去波蘭了 QQ
