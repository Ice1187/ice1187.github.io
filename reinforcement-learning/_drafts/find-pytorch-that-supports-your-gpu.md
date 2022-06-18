---
categories: []
tags:
- pytorch
- cuda
toc: true
toc_sticky: true
title: Find PyTorch that supports your GPU

---
If PyTorch shows the following messages, then it means PyTorch doesn't compile with a CUDA version compatible with the GPU.

    UserWarning: GeForce RTX 3090 with CUDA capability sm_86 is not compatible with the current PyTorch installation. The current PyTorch install supports CUDA capabilities ...
    
    RuntimeError: CUDA error: no kernel image is available for execution on the device.

To addrees the problem:

1. Go to [CUDA GPUs - Compute Capability](https://developer.nvidia.com/cuda-gpus).
2. Open the section your GPU might be in, e.g. `GeForce RTX 3090` is in "CUDA-Enabled GeForce and TITAN Products".
3. Find the "Compute Capability" of your GPU, e.g. `GeForce RTX 3090` has the value `8.6`.
4. Go to [CUDA Compatibility -- FAQ -> Which GPUs are supported by the driver?](https://docs.nvidia.com/deploy/cuda-compatibility/index.html#faq__docs-internal-guid-d9200e15-7fff-2037-c3ce-62bfbccf325e)
  ![image]({{ "" | relative_url }}){: width="800"}

6. The last value of `torch.cuda.get_arch_list()` should be at least as large as the Compute Capability of your GPU, e.g. PyTorch should support `sm_86` to run on `GeForce RTX 3090`.