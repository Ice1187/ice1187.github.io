---
title: "工控安全 Part2: 建立對 OT 環境的基本概念 - 普渡模型"
date: 2023-09-19
categories:
  - security
tags:
  - ics
# Optional additional settings:
# excerpt: "Brief description of the post"
# toc: true # enable if the content has multiple sections
# toc_sticky: true # enable if the content has multiple sections
# classes: wide # enable if some image are wide
header:
  teaser: /assets/images/purdue-model.png
#   image: /assets/images/blogging-idea.png
#   caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

普渡模型 (Purdue Reference Model) 是描述 OT 網路環境的框架，其將 OT 網路環境定義成三個區段：Enterprise Zone、ICS-DMZ、Control Zone，而區段中又分成 Level 5 到 Level 1 五層。

{% include figure popup=true
   image_path="/assets/images/purdue-model.png"
   alt="purdue model"
   caption="Purdue Model, src: [https://www.researchgate.net/figure/Purdue-Enterprise-Reference-Architecture_fig1_336152125](https://www.researchgate.net/figure/Purdue-Enterprise-Reference-Architecture_fig1_336152125)"
%}

## Enterprise Zone

企業端的網路環境，與一般 IT 相似。

### Level 5

企業的網路環境，與一般 IT 的主要差別在於會需要從 ICS 環境取得資訊以進行決策。

### Level 4

企業網路環境的 server 部分，主要工作包含：各實體單位之間的通訊，以及負責 Level 5 與 ICS 網路環境之間的資訊傳輸。

## ICS-DMZ

企業端網路與 ICS 端網路銜接的中繼點，包含讓企業網路存取 ICS 網路的各種服務，常見如：網頁、terminal、備份服務等。此處是最容易被攻擊的區域，但也是監控與規範最嚴格的地方。

## Control Zone

ICS 端的網路環境。

### Level 3

整個 ICS 環境的總監控與控制中心。主要包含 SCADA、DCS 或其他 control access，負責管理 ICS 環境、告警處理，以及與 Enterprise Zone 的資訊傳輸。

### Level 2

單一 ICS 環境的本地管理與監控中心，如：單一廠區、單一生產線的管理中心。

### Level 1

單一機器上的電子裝置，如：PLC 上的互動面板、告警系統等。

### Level 0

除了上述之外，Level 0 代表工業生產機器本身，而其中又包含 Safety Layer。Safety Layer 是機器上的最終安全保護裝置，避免因為任何問題導致廠區發生實際危險，如：加壓裝置上的壓力上限與自動洩壓裝置、核電廠的自動冷卻機制等。

將普渡模型整合在一起，可以得到 ICS 環境運作機制的 high-level view 如下：

{% include figure popup=true
   image_path="/assets/images/basic-operation-of-ot-system.png"
   alt="Basic Operation of a OT system"
   caption="Basic Operation of a OT system, src: [NIST SP 800–82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/ipd)"
%}

## 後記

作為學習和回顧知識所寫的筆記，以及要寫給別人閱讀的文章，兩者在形式、順序和用詞等方面還是有蠻大差異，不太適合直接複製貼上。需要多加思考如何如何達成平衡。
