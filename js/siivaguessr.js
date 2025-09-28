const QuestionMode = {
    NORMAL: 1,
    REVERSE: 2,
    SICKO: 3
};
const dailies = {
    "Buvvzwuw": {
        "hash": "xklvdp2ZQtk",
        "mode": 1
    },
    "zuBuAwuw": {
        "hash": "uaCQix3Xdok",
        "mode": 1
    },
    "xuwvzwuw": {
        "hash": "6dwWNMbt9s6",
        "mode": 1
    },
    "xwvvzwuw": {
        "hash": "462SY0Hez8Q",
        "mode": 1
    },
    "xuuvzwuw": {
        "hash": "xqbMg5dXbLo",
        "mode": 2
    },
    "uwuvzwuw": {
        "hash": "t8GNKkI6Lfs",
        "mode": 1
    },
    "yuxuAwuw": {
        "hash": "IIsdEMGYC0C",
        "mode": 1
    },
    "xvCuAwuw": {
        "hash": "TezNge1b7CI",
        "mode": 1
    },
    "AwyuAwuw": {
        "hash": "gApMdPZD4CI",
        "mode": 1
    },
    "vuuvzwuw": {
        "hash": "Y5-oM2RBtUQ",
        "mode": 1
    },
    "Duvvzwuw": {
        "hash": "wPUQT2pLIj2",
        "mode": 1
    },
    "xvzuAwuw": {
        "hash": "kwScAzWTunU",
        "mode": 1
    },
    "uvyuAwuw": {
        "hash": "wbtGZJ-0SAs",
        "mode": 1
    },
    "vwyuAwuw": {
        "hash": "uWQ9-UMThwI",
        "mode": 2
    },
    "wuxuAwuw": {
        "hash": "V36S7z3VfE_",
        "mode": 2
    },
    "zvvvzwuw": {
        "hash": "b_tpyZpWb0k",
        "mode": 1
    },
    "yvzuAwuw": {
        "hash": "nYGyiNSHDF_",
        "mode": 1
    },
    "DvBuAwuw": {
        "hash": "3wtAQH8JU1c",
        "mode": 1
    },
    "BuDuAwuw": {
        "hash": "o44QkYVO7hk",
        "mode": 1
    },
    "Dwvvzwuw": {
        "hash": "ACiQJFawERM",
        "mode": 1
    },
    "zwAuAwuw": {
        "hash": "4sbnz2RJ4Vk",
        "mode": 1
    },
    "vwxuAwuw": {
        "hash": "ESbb5Mk9zFI",
        "mode": 1
    },
    "AwvuAwuw": {
        "hash": "cNBS6Lzgu5c",
        "mode": 1
    },
    "uvxuAwuw": {
        "hash": "RbDxbYk8ZD2",
        "mode": 1
    },
    "vvCuAwuw": {
        "hash": "VdpThHA_STs",
        "mode": 1
    },
    "vvxuAwuw": {
        "hash": "bj3rswT8rZy",
        "mode": 1
    },
    "zuuvzwuw": {
        "hash": "iSIjb0kPCS2",
        "mode": 1
    },
    "DuzuAwuw": {
        "hash": "BJOJrBwOSzU",
        "mode": 1
    },
    "CvCuAwuw": {
        "hash": "zBj_drk-BXc",
        "mode": 1
    },
    "xuBuAwuw": {
        "hash": "v4dGCB1Z9bk",
        "mode": 1
    },
    "vuxuAwuw": {
        "hash": "9N8wljuUOWI",
        "mode": 1
    },
    "Cuwvzwuw": {
        "hash": "l5e1cZ6CHQ2",
        "mode": 2
    },
    "wvxuAwuw": {
        "hash": "8Y3eVp1HTGo",
        "mode": 1
    },
    "xvuvzwuw": {
        "hash": "XfqyqJMR17s",
        "mode": 2
    },
    "Dvuvzwuw": {
        "hash": "l9niiAvIak6",
        "mode": 1
    },
    "Auvvzwuw": {
        "hash": "7iAVonwF196",
        "mode": 1
    },
    "yuvuAwuw": {
        "hash": "AlkyEk0iquy",
        "mode": 1
    },
    "Cvwvzwuw": {
        "hash": "CIQqfGrqzmg",
        "mode": 1
    },
    "zuAuAwuw": {
        "hash": "XJTre1sPaMY",
        "mode": 1
    },
    "yuAuAwuw": {
        "hash": "Z8l4JB6fJKy",
        "mode": 2
    },
    "yvwvzwuw": {
        "hash": "RVPsUU41zuu",
        "mode": 1
    },
    "wuvuAwuw": {
        "hash": "2G1Z7wWpqmc",
        "mode": 1
    },
    "yuyuAwuw": {
        "hash": "3_l62O-RKdk",
        "mode": 1
    },
    "zwvuAwuw": {
        "hash": "bRq0AfjlzAk",
        "mode": 2
    },
    "xwzuAwuw": {
        "hash": "Mab7-Dwzcg6",
        "mode": 1
    },
    "Bwuvzwuw": {
        "hash": "FL9z08ixieM",
        "mode": 1
    },
    "xvwvzwuw": {
        "hash": "ZqqGPi1E7OM",
        "mode": 1
    },
    "yuuvzwuw": {
        "hash": "CCcLbLpyvi_",
        "mode": 1
    },
    "uvvuAwuw": {
        "hash": "eDow-rzKFX2",
        "mode": 1
    },
    "vxwvzwuw": {
        "hash": "SccDWGZCUEI",
        "mode": 1
    },
    "DvvuAwuw": {
        "hash": "nGZZPEt6l0c",
        "mode": 1
    },
    "zwBuAwuw": {
        "hash": "BoK9gWkGR4I",
        "mode": 1
    },
    "AvyuAwuw": {
        "hash": "htMcUcVZWMs",
        "mode": 1
    },
    "xwwuAwuw": {
        "hash": "jtfiruC24Mk",
        "mode": 1
    },
    "Cwvvzwuw": {
        "hash": "faFuMb7YN-I",
        "mode": 1
    },
    "yvvvzwuw": {
        "hash": "wiy7MWoQPXu",
        "mode": 1
    },
    "AwwuAwuw": {
        "hash": "GYi6HWJL97C",
        "mode": 1
    },
    "CwwuAwuw": {
        "hash": "z2nPDc5Pt32",
        "mode": 1
    },
    "uvAuAwuw": {
        "hash": "qlS8pyVkvo_",
        "mode": 1
    },
    "BuxuAwuw": {
        "hash": "ESNtcSsk_u6",
        "mode": 1
    },
    "wvCuAwuw": {
        "hash": "ZthVKDkeQGQ",
        "mode": 1
    },
    "AvxuAwuw": {
        "hash": "uDAy0pnIoOy",
        "mode": 1
    },
    "xuDuAwuw": {
        "hash": "ezMcscjCWRM",
        "mode": 1
    },
    "vxCuAwuw": {
        "hash": "sfAd7cY8BFI",
        "mode": 1
    },
    "ywxuAwuw": {
        "hash": "nWWK8okY6j6",
        "mode": 1
    },
    "zuvvzwuw": {
        "hash": "lsn8u4ScFl2",
        "mode": 2
    },
    "xvvuAwuw": {
        "hash": "tY6z29vOF4U",
        "mode": 1
    },
    "wuAuAwuw": {
        "hash": "V5isnj2vTQy",
        "mode": 1
    },
    "uvwvzwuw": {
        "hash": "TU3grApUgS_",
        "mode": 1
    },
    "vvvuAwuw": {
        "hash": "k5ouTOjGP6u",
        "mode": 1
    },
    "Auwvzwuw": {
        "hash": "qOyec7qLQ_s",
        "mode": 1
    },
    "vxuvzwuw": {
        "hash": "hX77COEG3ns",
        "mode": 1
    },
    "vwzuAwuw": {
        "hash": "wVLZ5a4on_c",
        "mode": 1
    },
    "zvvuAwuw": {
        "hash": "XQWbtM3oZE_",
        "mode": 1
    },
    "DvAuAwuw": {
        "hash": "GS-G25M8odo",
        "mode": 1
    },
    "wuwvzwuw": {
        "hash": "FZu1OBrOJNc",
        "mode": 2
    },
    "Cuuvzwuw": {
        "hash": "eoyLeuimoaQ",
        "mode": 1
    },
    "zuyuAwuw": {
        "hash": "6AWWZ8YxAq_",
        "mode": 1
    },
    "wwAuAwuw": {
        "hash": "V3kOlDdS6b2",
        "mode": 2
    },
    "AwCuAwuw": {
        "hash": "-HSCEQtULFg",
        "mode": 1
    },
    "uwAuAwuw": {
        "hash": "h1mPbKymwUI",
        "mode": 1
    },
    "ywyuAwuw": {
        "hash": "K-MHGdw6zNk",
        "mode": 2
    },
    "zwvvzwuw": {
        "hash": "02yiAtxsaL6",
        "mode": 1
    },
    "uwwvzwuw": {
        "hash": "8JfczVqut4g",
        "mode": 1
    },
    "uxvvzwuw": {
        "hash": "pVL50hgs90C",
        "mode": 1
    },
    "xwuvzwuw": {
        "hash": "BZ6wnN1vnwU",
        "mode": 1
    },
    "wvwvzwuw": {
        "hash": "u0LMsi1s6bM",
        "mode": 1
    },
    "vvuvzwuw": {
        "hash": "0FXGZ10C1Sk",
        "mode": 1
    },
    "yvvuAwuw": {
        "hash": "L26jCotKAyC",
        "mode": 1
    },
    "Auuvzwuw": {
        "hash": "JWTO07O14no",
        "mode": 1
    },
    "BvxuAwuw": {
        "hash": "iUrqFZgooMU",
        "mode": 1
    },
    "vuDuAwuw": {
        "hash": "vawCNJtncZc",
        "mode": 1
    },
    "CwCuAwuw": {
        "hash": "CVHU_QwThz_",
        "mode": 1
    },
    "AwBuAwuw": {
        "hash": "fxm5J68_y1y",
        "mode": 1
    },
    "zvAuAwuw": {
        "hash": "QjS_gNZrX9o",
        "mode": 1
    },
    "BvCuAwuw": {
        "hash": "30y-32bKTcU",
        "mode": 1
    },
    "vuvuAwuw": {
        "hash": "r7l6BLIHMRU",
        "mode": 1
    },
    "uvBuAwuw": {
        "hash": "O8486kR2Rjk",
        "mode": 1
    },
    "yuwvzwuw": {
        "hash": "o5txevgqfQ_",
        "mode": 1
    },
    "xwyuAwuw": {
        "hash": "ifFvAsvEl5u",
        "mode": 1
    },
    "xvAuAwuw": {
        "hash": "HrseN05XhSI",
        "mode": 1
    },
    "Cwwvzwuw": {
        "hash": "15I7UULhb8I",
        "mode": 1
    },
    "AwxuAwuw": {
        "hash": "RZxneWCkJ1U",
        "mode": 1
    },
    "Bwwvzwuw": {
        "hash": "WTzgtqcR-zI",
        "mode": 1
    },
    "vuBuAwuw": {
        "hash": "XxBvfP0-4vy",
        "mode": 2
    },
    "vuvvzwuw": {
        "hash": "_3H7Is5gJy_",
        "mode": 1
    },
    "uxvuAwuw": {
        "hash": "4FaRokS0D5g",
        "mode": 1
    },
    "BuyuAwuw": {
        "hash": "iUI9aMlMYeg",
        "mode": 1
    },
    "CuDuAwuw": {
        "hash": "9J01bs2Nt3k",
        "mode": 1
    },
    "uxwvzwuw": {
        "hash": "JBuXTnhXgsc",
        "mode": 1
    },
    "DwyuAwuw": {
        "hash": "HUr5YUYiKP2",
        "mode": 1
    },
    "AvCuAwuw": {
        "hash": "72Uovw0d7UQ",
        "mode": 1
    },
    "DwBuAwuw": {
        "hash": "2YuPJZSVI5s",
        "mode": 1
    },
    "wvyuAwuw": {
        "hash": "j_wd_iBvCoc",
        "mode": 1
    },
    "CuCuAwuw": {
        "hash": "hqEJiWoG4qk",
        "mode": 1
    },
    "wvDuAwuw": {
        "hash": "Md9uKekZqh_",
        "mode": 1
    },
    "wwwuAwuw": {
        "hash": "kJWfpdHHz4g",
        "mode": 1
    },
    "BvzuAwuw": {
        "hash": "E-QmZPWD-MQ",
        "mode": 2
    },
    "AvBuAwuw": {
        "hash": "WkfAB2x6EHs",
        "mode": 2
    },
    "CuyuAwuw": {
        "hash": "nkjGH8ve95C",
        "mode": 1
    },
    "CvAuAwuw": {
        "hash": "oqQvotgvV-u",
        "mode": 1
    },
    "vvBuAwuw": {
        "hash": "_FbD9v3zsiQ",
        "mode": 1
    },
    "ywzuAwuw": {
        "hash": "zZYNNog-_bc",
        "mode": 1
    },
    "Avwvzwuw": {
        "hash": "MMCLWqd6m1y",
        "mode": 1
    },
    "BvwuAwuw": {
        "hash": "xcPMcFgYvV2",
        "mode": 1
    },
    "uwvuAwuw": {
        "hash": "wKdq-CXJxUk",
        "mode": 2
    },
    "zwCuAwuw": {
        "hash": "go9PFNmMRzQ",
        "mode": 2
    },
    "wuvvzwuw": {
        "hash": "dzqnR5nc_eI",
        "mode": 2
    },
    "wwDuzwuw": {
        "hash": "woCpTUSpMiu",
        "mode": 1
    },
    "xuvvzwuw": {
        "hash": "_CugYg0JzZo",
        "mode": 1
    },
    "DwDuzwuw": {
        "hash": "iYPwCW3B0xC",
        "mode": 1
    },
    "BvvuAwuw": {
        "hash": "EFT1hbe9faU",
        "mode": 1
    },
    "DwCuAwuw": {
        "hash": "ulm2n7VmWis",
        "mode": 1
    },
    "ywuvzwuw": {
        "hash": "vx13_cry1N_",
        "mode": 1
    },
    "yvDuzwuw": {
        "hash": "3sdYtdNo35k",
        "mode": 1
    },
    "yuwuAwuw": {
        "hash": "p5rAvY6-X-C",
        "mode": 2
    },
    "Cvvvzwuw": {
        "hash": "QNX56Ywwxgc",
        "mode": 1
    },
    "BwyuAwuw": {
        "hash": "k6lvw99Sf7Y",
        "mode": 1
    },
    "zwwvzwuw": {
        "hash": "sz3hBaaPetI",
        "mode": 1
    },
    "vxvuAwuw": {
        "hash": "9S1ffrG3Vog",
        "mode": 1
    },
    "yvxuAwuw": {
        "hash": "Z6nJH9I7uHI",
        "mode": 1
    },
    "wvAuAwuw": {
        "hash": "tY6z29vOF4U",
        "mode": 1
    },
    "uvzuAwuw": {
        "hash": "g7HcIz40U2Y",
        "mode": 1
    },
    "CvDuzwuw": {
        "hash": "Qke4tiAyhZs",
        "mode": 1
    },
    "AuBuAwuw": {
        "hash": "1t_Txoij7Wy",
        "mode": 1
    },
    "xvvvzwuw": {
        "hash": "kA8_F3ABk96",
        "mode": 2
    },
    "DuBuAwuw": {
        "hash": "gGdJh6XHtio",
        "mode": 1
    },
    "zwxuAwuw": {
        "hash": "FZU6bLzfVl2",
        "mode": 2
    },
    "DuwuAwuw": {
        "hash": "S_Ui0CvE8XY",
        "mode": 1
    },
    "wvzuAwuw": {
        "hash": "Sguf8qRj6fC",
        "mode": 1
    },
    "zvBuAwuw": {
        "hash": "xVzCZv0NuXy",
        "mode": 1
    },
    "yuDuAwuw": {
        "hash": "b0lqgbK9Ye2",
        "mode": 1
    },
    "yuCuAwuw": {
        "hash": "_jRrPaGeZpM",
        "mode": 1
    },
    "vxBuAwuw": {
        "hash": "r5rVII3T_Sy",
        "mode": 1
    },
    "uvvvzwuw": {
        "hash": "ica6C3iaEEy",
        "mode": 1
    },
    "vvwvzwuw": {
        "hash": "q_O3ZLvvlLg",
        "mode": 1
    },
    "zwyuAwuw": {
        "hash": "Kgsnm_mcY0C",
        "mode": 1
    },
    "vvyuAwuw": {
        "hash": "OSDGMal136o",
        "mode": 1
    },
    "vuyuAwuw": {
        "hash": "_N_6G5sgJ2g",
        "mode": 1
    },
    "CwzuAwuw": {
        "hash": "r0KitdriqSI",
        "mode": 1
    },
    "zwDuzwuw": {
        "hash": "inpsh2N-S9g",
        "mode": 1
    },
    "vvwuAwuw": {
        "hash": "WTBG6iJOfFU",
        "mode": 1
    },
    "vwCuAwuw": {
        "hash": "geO-EQr-MJo",
        "mode": 1
    },
    "DwzuAwuw": {
        "hash": "h7l2KxUv1QY",
        "mode": 1
    },
    "uxDuzwuw": {
        "hash": "h2zgLUXikkY",
        "mode": 1
    },
    "BwvuAwuw": {
        "hash": "8R_idYB-u5s",
        "mode": 1
    },
    "AuxuAwuw": {
        "hash": "iifiGjM-abc",
        "mode": 1
    },
    "zvyuAwuw": {
        "hash": "IfuRmsZwqNk",
        "mode": 1
    },
    "zvxuAwuw": {
        "hash": "K4ONBB5ioCk",
        "mode": 1
    },
    "DuDuAwuw": {
        "hash": "uzkwlyXUKl6",
        "mode": 1
    },
    "vvDuAwuw": {
        "hash": "JjntVXT0G7C",
        "mode": 1
    },
    "Bvwvzwuw": {
        "hash": "OBuyiLg9wJU",
        "mode": 1
    },
    "wwxuAwuw": {
        "hash": "qTQV5rAV982",
        "mode": 1
    },
    "xwBuAwuw": {
        "hash": "oB2kddxu3qC",
        "mode": 1
    },
    "Awwvzwuw": {
        "hash": "HIVe-Ggs2cI",
        "mode": 1
    },
    "BwxuAwuw": {
        "hash": "e8pTuLDRQyU",
        "mode": 1
    },
    "wvvvzwuw": {
        "hash": "_onZw6aZ4Pc",
        "mode": 1
    },
    "xwAuAwuw": {
        "hash": "LOpA94fJ_R_",
        "mode": 1
    },
    "zwzuAwuw": {
        "hash": "BjY3z84rNx6",
        "mode": 1
    },
    "AwDuzwuw": {
        "hash": "3JpoT1L8n6U",
        "mode": 1
    },
    "xuxuAwuw": {
        "hash": "Tk4iRd_vWeQ",
        "mode": 1
    },
    "DwxuAwuw": {
        "hash": "xAQouLMqp0y",
        "mode": 1
    },
    "DvyuAwuw": {
        "hash": "gQ4y0Akq70s",
        "mode": 1
    },
    "Avvvzwuw": {
        "hash": "V-rbQEsTDxM",
        "mode": 1
    },
    "vuAuAwuw": {
        "hash": "A1kBv1UiHFk",
        "mode": 2
    },
    "wvuvzwuw": {
        "hash": "rkwk4-XW4CM",
        "mode": 1
    },
    "AuDuAwuw": {
        "hash": "ROV6Tll2SEs",
        "mode": 1
    },
    "wuyuAwuw": {
        "hash": "OZRr-MGzcH6",
        "mode": 1
    },
    "Buuvzwuw": {
        "hash": "aT9GIQFkElQ",
        "mode": 1
    },
    "Duuvzwuw": {
        "hash": "SPhhgDAGUu2",
        "mode": 1
    },
    "DuyuAwuw": {
        "hash": "bLy4LUqTdus",
        "mode": 1
    },
    "xvwuAwuw": {
        "hash": "ejMy2zpQD3o",
        "mode": 1
    },
    "xuCuAwuw": {
        "hash": "J5Ivm0cWi52",
        "mode": 1
    },
    "zuwuAwuw": {
        "hash": "cA-xhrxKcqk",
        "mode": 1
    },
    "AvDuzwuw": {
        "hash": "g9wnFAJiSbo",
        "mode": 1
    },
    "wvvuAwuw": {
        "hash": "_U1FNPQF4yo",
        "mode": 1
    },
    "CwBuAwuw": {
        "hash": "zSaSyd2jUNs",
        "mode": 1
    },
    "xuwuAwuw": {
        "hash": "hVRdvIOpV9y",
        "mode": 1
    },
    "zuwvzwuw": {
        "hash": "PCKVgxLB0HC",
        "mode": 1
    },
    "BwCuAwuw": {
        "hash": "VNzq6K6NHsy",
        "mode": 1
    },
    "wuBuAwuw": {
        "hash": "WWk0WWIfEFo",
        "mode": 1
    },
    "vxxuAwuw": {
        "hash": "JPvqwNd4CFc",
        "mode": 1
    },
    "xuvuAwuw": {
        "hash": "N8klCBhn1_o",
        "mode": 1
    },
    "uwzuAwuw": {
        "hash": "Fu61XLWMLeo",
        "mode": 1
    },
    "uxxuAwuw": {
        "hash": "JIxb88ziw2c",
        "mode": 1
    },
    "wwBuAwuw": {
        "hash": "ImCbGRjh2pM",
        "mode": 1
    },
    "zuvuAwuw": {
        "hash": "ZokDR8kHSbQ",
        "mode": 2
    },
    "yvyuAwuw": {
        "hash": "6uyezop7j7u",
        "mode": 1
    },
    "uwCuAwuw": {
        "hash": "P3I4ZmPEAi6",
        "mode": 1
    },
    "ywvuAwuw": {
        "hash": "IYTtjrzbF4C",
        "mode": 1
    },
    "xwCuAwuw": {
        "hash": "4ZgdJpVA2h_",
        "mode": 1
    },
    "BvyuAwuw": {
        "hash": "TbCFUqeRdOs",
        "mode": 1
    },
    "uwBuAwuw": {
        "hash": "KxmAP764C3s",
        "mode": 1
    },
    "uvwuAwuw": {
        "hash": "u2qa_A8uSLM",
        "mode": 1
    },
    "Dvwvzwuw": {
        "hash": "C_3R7YrK_f2",
        "mode": 1
    },
    "wwuvzwuw": {
        "hash": "Dif2vVQdsqs",
        "mode": 1
    },
    "AuvuAwuw": {
        "hash": "eFaqLYxovmu",
        "mode": 1
    },
    "DvzuAwuw": {
        "hash": "E-7R8IBTvF_",
        "mode": 1
    },
    "uxBuAwuw": {
        "hash": "DaPRxENh6FI",
        "mode": 1
    },
    "yvwuAwuw": {
        "hash": "gj-FTOeNrRY",
        "mode": 1
    },
    "uwvvzwuw": {
        "hash": "yt6pg2__l2U",
        "mode": 1
    },
    "zwwuAwuw": {
        "hash": "EXCfsiRuLq2",
        "mode": 1
    },
    "wwvuAwuw": {
        "hash": "Fku1WcMjYtM",
        "mode": 1
    },
    "Cwuvzwuw": {
        "hash": "fd-94TrX6ZM",
        "mode": 1
    },
    "AvAuAwuw": {
        "hash": "YcoQxkF9zV2",
        "mode": 1
    },
    "BuzuAwuw": {
        "hash": "tBeRJd7fGks",
        "mode": 1
    },
    "Cvuvzwuw": {
        "hash": "r9uC9Myd3-g",
        "mode": 1
    },
    "ywBuAwuw": {
        "hash": "OSKYfhF1vF6",
        "mode": 1
    },
    "xvyuAwuw": {
        "hash": "QXepTx1ewdu",
        "mode": 1
    },
    "vuwvzwuw": {
        "hash": "wURbnWiJ53c",
        "mode": 1
    },
    "CvyuAwuw": {
        "hash": "MLgzCKj7snM",
        "mode": 1
    },
    "vwwuAwuw": {
        "hash": "OlcF5CZHN2Y",
        "mode": 1
    },
    "Dvvvzwuw": {
        "hash": "oK3YLWI6P4o",
        "mode": 1
    },
    "ywvvzwuw": {
        "hash": "Xajff83qKfI",
        "mode": 1
    },
    "AuzuAwuw": {
        "hash": "3e7U92ZGfKo",
        "mode": 1
    },
    "BvDuzwuw": {
        "hash": "ox6WiFFHbkg",
        "mode": 1
    },
    "AuwuAwuw": {
        "hash": "MI7BSHxdju6",
        "mode": 1
    },
    "BwzuAwuw": {
        "hash": "K46Nj-85it2",
        "mode": 1
    },
    "Dwwvzwuw": {
        "hash": "yoH32o_zoaQ",
        "mode": 1
    },
    "Duwvzwuw": {
        "hash": "I1UO566hhty",
        "mode": 2
    },
    "xwxuAwuw": {
        "hash": "06ZMYMxJssu",
        "mode": 1
    },
    "BuCuAwuw": {
        "hash": "fK7UFnUw71Q",
        "mode": 1
    },
    "xwDuzwuw": {
        "hash": "ny6RAPkrGEy",
        "mode": 1
    },
    "yvDuAwuw": {
        "hash": "pPnPvF7vLoc",
        "mode": 1
    },
    "wvBuAwuw": {
        "hash": "I48QozdphSI",
        "mode": 1
    },
    "CvwuAwuw": {
        "hash": "lt8p7G6d4XY",
        "mode": 1
    },
    "wuCuAwuw": {
        "hash": "bnJtAY6ux8C",
        "mode": 1
    },
    "zuCuAwuw": {
        "hash": "8Pjr530KLTk",
        "mode": 1
    },
    "Avuvzwuw": {
        "hash": "EZDhkL_g8du",
        "mode": 1
    },
    "vwvvzwuw": {
        "hash": "b8R-cXwYYFg",
        "mode": 1
    },
    "zuzuAwuw": {
        "hash": "D62TB5Ruv9y",
        "mode": 1
    },
    "zuxuAwuw": {
        "hash": "iDxTYvd-y86",
        "mode": 1
    },
    "zvwuAwuw": {
        "hash": "wwjRyIv49x2",
        "mode": 2
    },
    "wwCuAwuw": {
        "hash": "IAB6U2sNi5s",
        "mode": 1
    },
    "vxzuAwuw": {
        "hash": "b7OWub18vMc",
        "mode": 1
    },
    "vvvvzwuw": {
        "hash": "1PUtXUFYHV_",
        "mode": 1
    },
    "CvxuAwuw": {
        "hash": "snp178aRLVU",
        "mode": 1
    },
    "uxCuAwuw": {
        "hash": "Z57Yj9H3Kag",
        "mode": 2
    },
    "uxuvzwuw": {
        "hash": "cg79XqQuViU",
        "mode": 1
    },
    "vuwuAwuw": {
        "hash": "a7WKdG1t7Ds",
        "mode": 1
    },
    "vwwvzwuw": {
        "hash": "raXQaZQaAuQ",
        "mode": 1
    },
    "BwBuAwuw": {
        "hash": "PGIRjxpF1l6",
        "mode": 1
    },
    "DuxuAwuw": {
        "hash": "cy7JPp_dJRQ",
        "mode": 2
    },
    "vwuvzwuw": {
        "hash": "8mTt7sMxyIc",
        "mode": 1
    },
    "yvBuAwuw": {
        "hash": "vFWW46IzrjU",
        "mode": 1
    },
    "xvDuAwuw": {
        "hash": "i4zSJpBDJ22",
        "mode": 1
    },
    "wvwuAwuw": {
        "hash": "bCp7HMW3HRY",
        "mode": 1
    },
    "xwwvzwuw": {
        "hash": "YFpQ4EK6dc2",
        "mode": 1
    },
    "yvAuAwuw": {
        "hash": "18eO_q0KKd6",
        "mode": 1
    },
    "BvAuAwuw": {
        "hash": "qj_41SoWVL_",
        "mode": 2
    },
    "uxyuAwuw": {
        "hash": "FJOvGBPpcTg",
        "mode": 1
    },
    "wwvvzwuw": {
        "hash": "kgzzlIs1owU",
        "mode": 1
    },
    "zwuvzwuw": {
        "hash": "JIWAcfDPYNc",
        "mode": 1
    },
    "DvDuzwuw": {
        "hash": "BHLGbqgGi1Q",
        "mode": 2
    },
    "Awvvzwuw": {
        "hash": "wwjRyIv49x2",
        "mode": 1
    },
    "uxAuAwuw": {
        "hash": "R6GJl_23D-M",
        "mode": 1
    },
    "AwzuAwuw": {
        "hash": "RxAbpX5q7e6",
        "mode": 1
    },
    "zvwvzwuw": {
        "hash": "fjq69huYues",
        "mode": 1
    },
    "CvvuAwuw": {
        "hash": "snp178aRLVU",
        "mode": 1
    },
    "xvBuAwuw": {
        "hash": "9J65488uMP_",
        "mode": 2
    },
    "uwyuAwuw": {
        "hash": "-LFJ4RPmSAQ",
        "mode": 1
    },
    "DvxuAwuw": {
        "hash": "wokzEnmBlGc",
        "mode": 1
    },
    "BuBuAwuw": {
        "hash": "matp6ZsrLkM",
        "mode": 2
    },
    "CuvuAwuw": {
        "hash": "ZM1kBHxpAjk",
        "mode": 1
    },
    "BuAuAwuw": {
        "hash": "w-67xcBk7ek",
        "mode": 2
    },
    "Cuvvzwuw": {
        "hash": "1GGWJvv44eM",
        "mode": 1
    },
    "AuAuAwuw": {
        "hash": "cJZOQP9JEwu",
        "mode": 1
    },
    "wwyuAwuw": {
        "hash": "RWrfuJBuCJu",
        "mode": 1
    },
    "CwxuAwuw": {
        "hash": "Kz7RUqqm-bY",
        "mode": 1
    },
    "ywDuzwuw": {
        "hash": "BM6hMaWUFcM",
        "mode": 1
    },
    "zuDuAwuw": {
        "hash": "6c1dZ1crB9o",
        "mode": 1
    },
    "vvzuAwuw": {
        "hash": "s16mi8iu_dg",
        "mode": 1
    },
    "DvwuAwuw": {
        "hash": "2sOKQAnq7bk",
        "mode": 1
    },
    "xuAuAwuw": {
        "hash": "jDTi0TH-_Xg",
        "mode": 1
    },
    "wwwvzwuw": {
        "hash": "uoqorNzIj-Q",
        "mode": 1
    },
    "uxzuAwuw": {
        "hash": "6NIEDFrjFEo",
        "mode": 1
    },
    "Bvuvzwuw": {
        "hash": "wSJJ0iY4tOo",
        "mode": 1
    },
    "xwvuAwuw": {
        "hash": "c7VGEMQ8bhy",
        "mode": 1
    },
    "yuBuAwuw": {
        "hash": "RBfavziAfws",
        "mode": 1
    },
    "Awuvzwuw": {
        "hash": "yTfPTB2YbYQ",
        "mode": 1
    },
    "vwAuAwuw": {
        "hash": "m7yrDEiuBMy",
        "mode": 1
    },
    "wuwuAwuw": {
        "hash": "JtKzE-gfEnk",
        "mode": 1
    },
    "CwvuAwuw": {
        "hash": "YMZaXcRtJrU",
        "mode": 1
    },
    "CuzuAwuw": {
        "hash": "OkWAmWnZzPk",
        "mode": 1
    },
    "zvDuzwuw": {
        "hash": "54cZ1hbvin_",
        "mode": 1
    },
    "Bwvvzwuw": {
        "hash": "wftx7wUgMao",
        "mode": 1
    },
    "yvuvzwuw": {
        "hash": "UuDtMMeJjA6",
        "mode": 1
    },
    "BvBuAwuw": {
        "hash": "3gGG6Kr8-3Y",
        "mode": 1
    },
    "Bvvvzwuw": {
        "hash": "K1l8LWDjlpo",
        "mode": 1
    },
    "xvxuAwuw": {
        "hash": "F6rnBXXKC3k",
        "mode": 1
    },
    "CuAuAwuw": {
        "hash": "axgKN7wWyis",
        "mode": 1
    },
    "wuzuAwuw": {
        "hash": "fCVas8-dX-o",
        "mode": 1
    },
    "AvzuAwuw": {
        "hash": "DMzBRI_obAI",
        "mode": 1
    },
    "CvzuAwuw": {
        "hash": "GyCwF_b0pHs",
        "mode": 1
    },
    "Buwvzwuw": {
        "hash": "_H3bgs5tnHu",
        "mode": 1
    },
    "CuxuAwuw": {
        "hash": "zw1sE8JLBLo",
        "mode": 1
    },
    "ywCuAwuw": {
        "hash": "zXuXHTN5NJo",
        "mode": 1
    },
    "AuCuAwuw": {
        "hash": "RNF5kl_J9kY",
        "mode": 1
    },
    "DuCuAwuw": {
        "hash": "NVC997Ch_4Q",
        "mode": 1
    },
    "Dwuvzwuw": {
        "hash": "Eojw3k3Oin6",
        "mode": 2
    },
    "BuwuAwuw": {
        "hash": "kCW5yKURvVo",
        "mode": 1
    },
    "BwDuzwuw": {
        "hash": "XRB7xn0UOb6",
        "mode": 1
    },
    "CuwuAwuw": {
        "hash": "PEAMcV1mAmI",
        "mode": 1
    },
    "BwwuAwuw": {
        "hash": "adJYUIqRC9_",
        "mode": 2
    },
    "uvuvzwuw": {
        "hash": "RFYsAClo6Qk",
        "mode": 1
    },
    "uwDuzwuw": {
        "hash": "o3P_GAM9ZGs",
        "mode": 1
    },
    "CuBuAwuw": {
        "hash": "cuHYlfEngGy",
        "mode": 1
    },
    "wuuvzwuw": {
        "hash": "5FhPTm-CU-Y",
        "mode": 1
    },
    "BuvuAwuw": {
        "hash": "t3THuuX_lYk",
        "mode": 1
    },
    "CvBuAwuw": {
        "hash": "Mgixd0QXxLo",
        "mode": 1
    },
    "vuzuAwuw": {
        "hash": "9qsX86Vcjso",
        "mode": 1
    },
    "AwAuAwuw": {
        "hash": "GsfS26kiz7s",
        "mode": 1
    },
    "wwzuAwuw": {
        "hash": "cmcXn2QUNlo",
        "mode": 1
    },
    "AuyuAwuw": {
        "hash": "9xAdagKGo6y",
        "mode": 1
    },
    "ywwvzwuw": {
        "hash": "Zw8NQOImwOY",
        "mode": 1
    },
    "DvCuAwuw": {
        "hash": "bJ8z7A8N8zc",
        "mode": 1
    },
    "AvvuAwuw": {
        "hash": "aKUW8_cHwE6",
        "mode": 1
    },
    "ywwuAwuw": {
        "hash": "p8AmqcaGD-c",
        "mode": 2
    },
    "DuAuAwuw": {
        "hash": "Kk6q5PtPp3s",
        "mode": 2
    },
    "vuCuAwuw": {
        "hash": "mZIF9SsqEIo",
        "mode": 1
    },
    "yuvvzwuw": {
        "hash": "ytBF9cI_i8o",
        "mode": 1
    },
    "yuzuAwuw": {
        "hash": "Qek_qVhCtQo",
        "mode": 1
    },
    "vvAuAwuw": {
        "hash": "Q-pZUHPFjOC",
        "mode": 2
    },
    "yvCuAwuw": {
        "hash": "yqR0kMAMlFU",
        "mode": 2
    },
    "AvwuAwuw": {
        "hash": "SReWZ7sDo2s",
        "mode": 1
    },
    "uvCuAwuw": {
        "hash": "A8Kdprx19Ly",
        "mode": 1
    },
    "uwxuAwuw": {
        "hash": "1ffpCeNvPVy",
        "mode": 1
    },
    "CwDuzwuw": {
        "hash": "gDoKV0MeamY",
        "mode": 1
    },
    "vwvuAwuw": {
        "hash": "OYsek16dmQM",
        "mode": 1
    },
    "xuzuAwuw": {
        "hash": "F72eT_kGOZM",
        "mode": 1
    },
    "vwDuzwuw": {
        "hash": "MHpBMgV6Pl2",
        "mode": 1
    },
    "wuDuAwuw": {
        "hash": "mwDiUUCNuPc",
        "mode": 1
    },
    "CwAuAwuw": {
        "hash": "tWjd2CeevOo",
        "mode": 1
    },
    "zvuvzwuw": {
        "hash": "0z8oTsBgV5o",
        "mode": 1
    },
    "DuvuAwuw": {
        "hash": "4oyUlF3CMpQ",
        "mode": 1
    },
    "vwBuAwuw": {
        "hash": "B74-YNk0H2Q",
        "mode": 1
    },
    "BwAuAwuw": {
        "hash": "KI1KRjU3JG_",
        "mode": 1
    },
    "zvzuAwuw": {
        "hash": "HUr5YUYiKP2",
        "mode": 1
    },
    "xuyuAwuw": {
        "hash": "7ZxNsyIavCQ",
        "mode": 1
    },
    "zvCuAwuw": {
        "hash": "5WwZSuicGVC",
        "mode": 1
    },
    "CwyuAwuw": {
        "hash": "MlqQbrl5KUQ",
        "mode": 1
    },
    "uwwuAwuw": {
        "hash": "Axa8kG88xnQ",
        "mode": 1
    },
    "ywAuAwuw": {
        "hash": "3gJCt7Bwl02",
        "mode": 1
    },
    "DwvuAwuw": {
        "hash": "zECc2kc7BNQ",
        "mode": 1
    },
    "DwAuAwuw": {
        "hash": "WKsg58YI_4s",
        "mode": 1
    },
    "uvDuAwuw": {
        "hash": "3ZFtjdisL5s",
        "mode": 1
    }
}

const ak = '6c5Gm465STOJdHcIUrP6NHIiJMtmNbdXSoW-Xbu';

const hide = function (val) {
    if (Array.isArray(val)) {
        for (const elem of val) {
            hide(elem);
        }
    } else if (val instanceof HTMLElement) {
        val.setAttribute('hidden', '');
        val.setAttribute('aria-hidden', 'true');
    } else {
        document.getElementById(val).setAttribute('hidden', '');
        document.getElementById(val).setAttribute('aria-hidden', 'true');
    }
};
const show = function (val) {
    if (Array.isArray(val)) {
        for (const elem of val) {
            show(elem);
        }
    } else if (val instanceof HTMLElement) {
        val.removeAttribute('hidden');
        val.removeAttribute('aria-hidden');
    } else {
        document.getElementById(val).removeAttribute('hidden');
        document.getElementById(val).removeAttribute('aria-hidden');
    }
};

/**
 * Converts a JS date to a consistent string format, for looking up dailies.
 * @param {Date} date date to convert
 * @returns a string of the date as YYYYMMDD
 */
const dateToString = function (date) {
    return date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0');
};

/**
 * Hashes a single character in a longer string.
 * 
 * @param {string} char input character
 * @param {number} s a salt value based on the overall string being hashed, used to prevent
 * substrings from being identifiable. in our case, the sum of the character codes of the input string.
 * @returns the hashed character
 */
const hashChar = function (char, s) {
    if (char === ' ') {
        return '';
    }
    let code = (((char.charCodeAt(0) * 17) + s) % 62) + 48;
    // Keep chars in valid ASCII range for HTML classes. 0-9, A-z only.
    if (code > 57) {
        code += 7;
    }
    if (code > 90) {
        code += 6;
    }
    return String.fromCharCode(code);
}
const invalidClassRegex = /[0-9+/=]/;
const filler = "zaq1xsw2cde3vfr4bgt5nhy6mju7ki8lo9p0";
/**
 * Simple, non-secure string hash function to obscure song titles. Hashed song titles are used as HTML classes
 * for multi-joke rips, allowing quick retrieval of multiple joke instances without exposing the answers.
 * 
 * @param {string} str string to hash
 * @param {boolean} fixLength fix output length to 20, to further obscure input
 * @returns a hashed version of the string
 */
const simpleHash = function (str, fixLength = true) {
    let s = str.length;
    for (let i = 0; i < str.length; i++) {
        s += str.charCodeAt(i);
    }
    let hash = hashChar(str[0], s);
    if (invalidClassRegex.test(hash)) {
        hash = 'a';
    }
    for (let i = 1; i < str.length; i++) {
        hash += hashChar(str[i], s);
        if (fixLength && hash.length === 20) {
            return hash;
        }
    }
    if (fixLength) {
        for (let i = str.length; hash.length < 20; i++) {
            if (i >= filler.length) {
                i = 0;
            }
            hash += hashChar(filler[i], s);
        }
    }
    return hash;
}

const ytHashChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-".split('');
/** Map of YT hash chars to numbers. */
const abet = {};
/** Inverse map of abet. */
const teba = {};
for (let i = 0; i < ytHashChars.length; i++) {
    abet[ytHashChars[i]] = i;
    teba[i] = ytHashChars[i];
}

/**
 * Ciphers (or de-ciphers) a string using a simple circular cipher.
 * Only works for strings consisting of valid YouTube video hash characters, [-_0-9a-Z].
 * 
 * @param {string} str string to cipher
 * @returns the ciphered string
 */
const simpleCircleCipher = function (str) {
    let res = '';
    for (const char of str) {
        res += teba[(abet[char] + 32) % 64];
    }
    return res;
};

const aliases = [
    ["Can You Feel (Abstract Map, SMW Central VLDC 9) - Torchkas",
        "Abstract Map - Mario's Mystery Meat"],

    ["Title Theme & Ending - The Flintstones: The Rescue of Dino & Hoppy",
        "Title Theme & Ending - 7 GRAND DAD"],

    ["Game Over - Uwol: Quest for Money",
        "Game Over - Felix the Cat"],

    ["The Prelude - Final Fantasy (Series)",
        "The Prelude - Final Fantasy",
        "The Prelude - Final Fantasy X",
        "The Prelude - Final Fantasy II",
        "The Prelude - Final Fantasy VII",
        "The Prelude - Final Fantasy VI",
        "The Prelude - Final Fantasy V",
        "Conversation With Culex - Super Mario RPG"],

    ["Kirby Dance - Kirby (Series)",
        "Kirby Dance - Kirby's Adventure",
        "Kirby Dance - Kirby Super Star",
        "Kirby Dance - Kirby: Squeak Squad",
        "Kirby Dance - Kirby & The Amazing Mirror",
        "Kirby Dance - Kirby: Nightmare in Dream Land",
        "Kirby Dance - Kirby 64: The Crystal Shards",
        "Kirby Dance - Kirby: Canvas Curse",
        "Kirby Dance - Kirby's Dream Land"],

    ["Victory Fanfare - Final Fantasy (Series)",
        "Victory Fanfare - Final Fantasy",
        "Victory Fanfare - Final Fantasy VII",
        "Victory Fanfare - Final Fantasy X",
        "Victory - Final Fantasy III"],

    ["Invincible (Star) - Super Mario (Series)",
        "Invincible - Super Mario Bros.",
        "Invincible - Super Mario Bros. 3",
        "Invincible - Super Mario Bros. 2",
        "Invincible - Super Mario Bros. 2 (Super Mario All-Stars)",
        "Starman - Super Smash Bros.",
        "Invincibility/Starman - New Super Mario Bros."],

    ["Route 209 - Pokemon Diamond & Pearl",
        "Route 209 (Day) - Pokemon Diamond & Pearl",
        "Route 209 (Night) - Pokemon Diamond & Pearl"],

    ["Bad Apple!! - Touhou 4: Lotus Land Story",
        "Bad Apple!! feat.nomico - Alstroemeria Records"],

    ["Proto Man Whistle - Mega Man (Series)",
        "Proto Man's Whistle - Mega Man 9",
        "Proto Man's Whistle - Mega Man 3",
        "Proto Man's Whistle - Mega Man 7"],

    ["Misirlou - Dick Dale",
        "Pump It - The Black Eyed Peas"],

    ["Mysterious Flying Object - MOTHER 3",
        "Suspicious Flying Object - MOTHER 3"],

    ["Strong One - MOTHER 3",
        "Strong One (Masked Man) - MOTHER 3"],

    ["MOTHER 3 Love Theme - MOTHER 3",
        "Love Theme (Reprise) - MOTHER 3"],

    ["Chaos Emerald Jingle - Sonic the Hedgehog (Series)",
        "Chaos Emerald Jingle - Sonic the Hedgehog",
        "Chaos Emerald - Sonic the Hedgehog 2"],

    ["Invincible - Kirby's Dream Land 3",
        "Invincible Lollipop - Kirby's Dream Land"],

    ["Zelda's Theme - The Legend of Zelda: Majora's Mask",
        "Zelda's Lullaby - The Legend of Zelda: Ocarina of Time"],

    ["Vampire Killer - Castlevania",
        "Deja Vu (Vampire Killer) - Castlevania III: Dracula's Curse"],

    ["Main Theme - Barkley, Shut Up and Jam: Gaiden",
        "Hybrid song 2:20 (Funky stars) - Quazar of Sanxion"],

    ["Radio: Lucky Channel/Game Corner - Pokemon Gold & Silver",
        "Goldenrod Game Corner - Pokemon HeartGold & SoulSilver"],

    ["Eight Melodies - EarthBound",
        "Smiles and Tears - EarthBound"],

    ["Think (About It) - Lyn Collins",
        "It Takes Two - Rob Base & DJ E-Z Rock"],

    ["Sticker of Puyo Puyo - Puyo Puyo",
        "Exercise Mode - Dr. Robotnik's Mean Bean Machine"],

    ["Sins of the Father - Donna Burke (Metal Gear Solid V: The Phantom Pain)",
        "Big Chungus | Official Main Theme - Endigo"],

    ["Billie Jean - Michael Jackson's Moonwalker",
        "Billie Jean - Michael Jackson"],

    ["Beat It - Michael Jackson's Moonwalker",
        "Beat It - Michael Jackson"]
];
const aliasMap = new Map();
const aliasedAnswers = new Map();

const songSet = new Set();
for (const hash in db) {
    if (db[hash].exclude !== 'title') {
        songSet.add(db[hash].title);
    }
    if (Array.isArray(db[hash].joke)) {
        for (const entry of db[hash].joke) {
            songSet.add(entry.joke);
        }
    } else {
        songSet.add(db[hash].joke);
    }
}
for (let i = 0; i < aliases.length; i++) {
    const aliasSet = aliases[i];
    const aliasHash = simpleHash('alias_set_' + i);
    for (const alias of aliasSet) {
        aliasMap.set(alias, aliasHash);
        songSet.add(alias);
    }
}
const songs = Array.from(songSet).sort();

const hashAnswer = function (answerString, loading = false) {
    if (aliasMap.has(answerString)) {
        if (loading) {
            aliasedAnswers.set(aliasMap.get(answerString), answerString);
        }
        return aliasMap.get(answerString);
    }
    return simpleHash(answerString);
}

/**
 * Converts a timestamp string into the number of seconds it represents.
 *
 * @param {string} timestamp timestamp string in the format hh:mm:ss
 * @returns the number of seconds from 00:00:00 to the timestamp
 */
const timestampToSeconds = function (timestamp) {
    const parts = timestamp.indexOf('-') !== -1 ? timestamp.substring(0, timestamp.indexOf('-')).trim().split(':') : timestamp.trim().split(':');
    if (parts.length === 3) {
        return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    } else {
        return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
}

/**
 * Changes the current view.
 * @param {string} id HTML ID of the view to switch to
 */
const showView = function (id) {
    hide([curView, 'shareResultsContainer']);
    show(id);
    curView = id;
    if (backNavViews.includes(curView)) {
        show(backBtn);
    } else {
        hide(backBtn);
    }
    if (id !== 'startView') {
        document.getElementById('logo').className = 'img-small';
    }
}

const beforeUnloadHandler = (event) => { event.preventDefault(); };

const firstDateUTCAdjusted = new Date('2025-09-14T00:00:00');
firstDateUTCAdjusted.setMinutes(firstDateUTCAdjusted.getMinutes() - firstDateUTCAdjusted.getTimezoneOffset())
const nowDate = new Date();
nowDate.setMinutes(nowDate.getMinutes() - nowDate.getTimezoneOffset())
const todaysDailyNumber = 1 + Math.floor((nowDate - firstDateUTCAdjusted) / 86400000);

const SAVED_QUIZZES_KEY = 'savedQuizzes';
const LAST_DAILY_WIN_KEY = 'lDailyWin';
const LAST_DAILY_KEY = 'lDaily';
const DAILY_RESULTS_KEY = 'dailyResults';
const DAILY_RESULT_GUESS_DELIMITER = '__';
const LONG_TITLE_THRESHOLD = 84;
const todaysDailyDateString = dateToString(new Date());
const daily = dailies[simpleCircleCipher(todaysDailyDateString).split('').reverse().join('')];
const backNavViews = ['customQuizView', 'createCustomQuizView', 'helpView', 'quizIntroView', 'quizEndView', 'dailyArchiveView'];
const backBtn = document.getElementById('backBtn');
const vidPlayer = document.getElementById('vidPlayer');
const playbackControls = document.getElementById('playbackControls');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const seekBar = document.getElementById('seekBar');
const curTimeCode = document.getElementById('curTimeCode');
const durationTimeCode = document.getElementById('durationTimeCode');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const statusMsgElem = document.getElementById('statusMsg');
const customQuizHelpTextElem = document.getElementById('customQuizHelpText');
const guessInput = document.getElementById('guessInput');
const autofillOptionsElem = document.getElementById('autofill-options');
const multiJokeContainer = document.getElementById('multiJokeContainer');
const multiCorrect = document.getElementById('multiCorrect');
const dailyResults = localStorage.getItem(DAILY_RESULTS_KEY) ? JSON.parse(localStorage.getItem(DAILY_RESULTS_KEY)) : {};
const highlightRanges = new Map();
let questionTime = 0;
let questionTimerInterval = -1;
let curView = 'loadingView';
let strikes = 0;
let activeQuestion = undefined;
let activeQuestionTotalAnswers = 0;
let answerSet = new Set();
let guesses = new Set();
let activeQuiz = [];
let activeQuizQuestionIndex = -1;
let hasUnsavedChanges = false;
let loadedDailyDateString = '';

if (!localStorage.getItem(LAST_DAILY_WIN_KEY) && localStorage.getItem(LAST_DAILY_KEY)) {
    /**
     * Returning players who played before the archive and grace rule update will not have a
     * lastDailyWin entry. Set it to their current LastDaily to ensure no one loses their streak.
     */
    localStorage.setItem(LAST_DAILY_WIN_KEY, localStorage.getItem(LAST_DAILY_KEY));
}

/**
 * Loads a question and cues the corresponding video. When the video is cued,
 * it fires a statechange event, handled by {@link onVideoStateChange}.
 * 
 * @param {string} videoHash the YT hash of the video to load and the hash of the joke object in the database
 * @param {QuestionMode} mode the question mode to use
 */
const loadQuestion = function (videoHash, mode) {
    showView('loadingView');
    strikes = 0;
    questionTime = 0;
    hide(['strike1', 'strike2', 'strike3', 'ripCredits', 'giveUpConfirm', 'shareResultsContainer', 'quizResultsBtn', 'nextQuestionBtn', 'giveUpContainer', 'giveUpBtn', 'quizQuestionNumber', vidPlayer, multiCorrect]);
    show(['giveUpBtn', guessInput]);
    activeQuestion = db[videoHash];
    if (activeQuizQuestionIndex > -1) {
        const quizQuestionNumberElem = document.getElementById('quizQuestionNumber');
        quizQuestionNumberElem.innerText = `Question ${activeQuizQuestionIndex + 1} of ${activeQuiz.length}`;
        show(quizQuestionNumberElem);
    }
    aliasedAnswers.clear();
    highlightRanges.clear();
    answerSet.clear();
    guesses.clear();
    const sourceTrackHash = hashAnswer(activeQuestion.title, true);
    const sourceTrackAnswerElem = document.getElementById('stAns');
    if (activeQuestion.exclude !== 'title') {
        sourceTrackAnswerElem.innerText = '____________';
        sourceTrackAnswerElem.className = 'free-text-answer ' + sourceTrackHash;
    } else if (mode === QuestionMode.REVERSE || mode === QuestionMode.SICKO) {
        mode = QuestionMode.NORMAL;
    }
    const jokeAnwserElem = document.getElementById('jAns');
    jokeAnwserElem.innerText = '____________';
    switch (mode) {
        case QuestionMode.NORMAL:
            show(vidPlayer);
            sourceTrackAnswerElem.innerText = activeQuestion.title;
            updateText(statusMsgElem, 'Guess the joke!');
            break;
        case QuestionMode.REVERSE:
            jokeAnwserElem.innerText = activeQuestion.joke;
            answerSet.add(sourceTrackHash);
            updateText(statusMsgElem, 'Guess the source track!');
            break;
        case QuestionMode.SICKO:
            if (activeQuestion.exclude !== 'title') {
                answerSet.add(sourceTrackHash);
                updateText(statusMsgElem, 'Guess the joke, or the source track!');
            }
            break;
    }
    if (Array.isArray(activeQuestion.joke)) {
        populateMultiJokeTable(activeQuestion.joke, mode === QuestionMode.REVERSE);
        hide([jokeAnwserElem, 'singleJokeDisplay']);
        show('multiJokeDisplay');
    } else {
        if (mode !== QuestionMode.REVERSE) {
            const jokeAnswerHash = hashAnswer(activeQuestion.joke, true);
            answerSet.add(jokeAnswerHash);
            jokeAnwserElem.className = 'free-text-answer ' + jokeAnswerHash;
        } else {
            jokeAnwserElem.className = 'free-text-answer';
        }
        hide('multiJokeDisplay');
        show([jokeAnwserElem, 'singleJokeDisplay']);
    }
    if (activeQuestion.artist === 'Unknown Ripper') {
        show('creditUnknown');
        hide('credit');
    } else {
        document.getElementById('ripArtist').innerText = activeQuestion.artist;
        show('credit');
        hide('creditUnknown');
    }
    document.getElementById('shareResultsBtn').dataset.sickoMode = mode === QuestionMode.SICKO;
    activeQuestionTotalAnswers = answerSet.size;
    document.getElementById('wikiLink').href = '/';
    ytPlayer.cueVideoById(videoHash);
};

/**
 * Populates the HTML for a multi-joke question.
 * 
 * @param {Array} jokesArray array of joke definitions.
 * @param {boolean} isReverseMode although ill-advised, reverse mode can be set for a multi-joke question. if true, all answers in the table will automatically be revealed. Bad idea!
 */
const populateMultiJokeTable = function (jokesArray, isReverseMode = false) {
    multiJokeContainer.innerText = '';
    const entry = document.createElement('div');
    entry.classList.add('multi-joke-entry');
    const jokeTime = document.createElement('div');
    jokeTime.classList.add('multi-joke-timestamp');
    const jokeAnswer = document.createElement('div');
    jokeAnswer.classList.add('multi-joke-joke');
    entry.appendChild(jokeTime);
    entry.appendChild(jokeAnswer);
    let curQuestionMultijokeEntries = [];
    // Split joke definitions with multiple timestamps separated by commas.
    for (const joke of jokesArray) {
        const instanceTimestamps = joke.time.split(',');
        for (const time of instanceTimestamps) {
            curQuestionMultijokeEntries.push({ 'time': time.trim(), 'joke': joke.joke });
        }
        if (!isReverseMode) {
            answerSet.add(hashAnswer(joke.joke, true));
        }
    }
    curQuestionMultijokeEntries = curQuestionMultijokeEntries.sort((a, b) => timestampToSeconds(a.time) - timestampToSeconds(b.time));
    for (const jokeEntry of curQuestionMultijokeEntries) {
        const entryElem = entry.cloneNode(entry);
        entryElem.children[0].innerText = jokeEntry.time;
        const seconds = timestampToSeconds(jokeEntry.time);;
        let id = 'jokeAt' + seconds;
        let num = 0;
        // Avoid duplicate IDs if two jokes share the same timestamp
        while (document.getElementById(id)) {
            num++;
            id = `jokeAt${seconds}-${num}`;
        }
        entryElem.children[0].id = id;
        entryElem.children[0].dataset.seconds = seconds;
        if (jokeEntry.time.indexOf('-') !== -1) {
            const startEndTime = jokeEntry.time.split('-');
            const startHighlightAt = timestampToSeconds(startEndTime[0]);
            const endHighlightAt = timestampToSeconds(startEndTime[1]);
            entryElem.children[0].dataset.startHighlightAt = startHighlightAt;
            entryElem.children[0].dataset.endHighlightAt = endHighlightAt;
            for (let i = startHighlightAt; i <= endHighlightAt; i++) {
                if (!highlightRanges.get(i)) {
                    highlightRanges.set(i, []);
                }
                highlightRanges.get(i).push(entryElem.children[0]);
            }
        }
        if (isReverseMode) {
            entryElem.children[1].innerText = jokeEntry.joke;
        } else {
            entryElem.children[1].classList.add(hashAnswer(jokeEntry.joke, true));
        }
        multiJokeContainer.appendChild(entryElem);
    }
    multiJokeContainer.querySelectorAll('.multi-joke-timestamp').forEach((e) => {
        if (e.dataset.seconds) {
            e.addEventListener('click', function () {
                ytPlayer.seekTo(parseInt(this.dataset.seconds));
                seekBar.value = this.dataset.seconds;
                updateTimeCode();
            });
        }
    });
};

document.getElementById('dailyBtn').addEventListener('click', function () {
    this.blur();
    loadedDailyDateString = todaysDailyDateString;
    let sickoMode = document.getElementById('dailySickoSwitch').checked;
    if (dailyResults[loadedDailyDateString] && !dailyResults[loadedDailyDateString].sickoMode) {
        sickoMode = false;
    }
    activeQuizQuestionIndex = -1;
    loadQuestion(simpleCircleCipher(daily.hash), sickoMode ? QuestionMode.SICKO : daily.mode);
});
document.getElementById('customQuizBtn').addEventListener('click', function () {
    this.blur();
    showView('customQuizView');
});
document.getElementById('helpBtn').addEventListener('click', function () {
    this.blur();
    show('modalWrapper');
});
backBtn.addEventListener('click', function () {
    if (!hasUnsavedChanges || confirm('Your custom quiz has unsaved changes. Continue?')) {
        this.blur();
        setHasUnsavedChanges(false);
        if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
            ytPlayer.pauseVideo();
        }
        if (loadedDailyDateString && loadedDailyDateString !== todaysDailyDateString) {
            showView('dailyArchiveView');
        } else {
            showView('startView');
        }
        loadedDailyDateString = '';
    }
});

/**
 * Checks the specified string against the current question's answers.
 *
 * @param {string} guess the title being guessed
 * @param {boolean} replaying flag indicating if this guess is a part of a saved daily result reconstruction by virtually replaying the saved list of guesses
 */
const submitGuess = function (guess, replaying = false) {
    if (!songSet.has(guess)) {
        return;
    }
    hide(autofillOptionsElem);
    clearActiveAutofillOption();
    guessInput.value = '';
    if (guesses.has(guess)) {
        updateText(statusMsgElem, 'Already guessed!', 2000);
        return;
    }
    guesses.add(guess);
    const hash = hashAnswer(guess);
    if (answerSet.has(hash)) {
        let replaceText = guess;
        if (aliasedAnswers.has(hash) && guess !== aliasedAnswers.get(hash)) {
            updateText(statusMsgElem, "Close enough!", 2000);
            replaceText = aliasedAnswers.get(hash);
        }
        markCorrect(hash, replaceText);
        if (!replaying && answerSet.size === 0) {
            endQuestion();
        }
    } else {
        strikes++;
        show('strike' + strikes);
        if (!replaying) {
            if (strikes === 1) {
                show('giveUpContainer');
            } else if (strikes === 3) {
                endQuestion(true);
            }
            guessInput.classList.add('incorrect');
            setTimeout(() => {
                guessInput.classList.add('fade');
                guessInput.classList.remove('incorrect');
                setTimeout(() => {
                    guessInput.classList.remove('fade');
                }, 1100);
            }, 500);
        }
    }
}

const markCorrect = function (hash, replaceText) {
    answerSet.delete(hash);
    document.querySelectorAll('.' + hash).forEach((e) => {
        if (e.id === 'stAns') {
            show(vidPlayer);
        }
        e.classList.add('correct');
        if (replaceText.length > LONG_TITLE_THRESHOLD && !e.classList.contains('free-text-answer')) {
            e.classList.add('long-song-title');
        }
        e.innerText = replaceText;
        setTimeout(() => {
            e.classList.add('fade');
            e.classList.remove('correct');
            setTimeout(() => {
                e.classList.remove('fade');
            }, 1100);
        }, 250);
    });
}

/**
 * Ends the current question. If the player has three strikes or gave up, missed answers will be revealed.
 * @param {boolean} lost player gave up or got three strikes
 * @param {boolean} reloadingCompletedDaily if the player is reloading an already-finished daily question
 */
const endQuestion = function (lost = false, reloadingCompletedDaily = false) {
    hide(guessInput);
    hide('giveUpContainer');
    clearInterval(questionTimerInterval);
    const isMultiJoke = Array.isArray(activeQuestion.joke);
    const gotCount = activeQuestionTotalAnswers - answerSet.size;
    let percentCorrect = Math.floor((gotCount / activeQuestionTotalAnswers) * 100);

    // Display status message
    if (isMultiJoke) {
        multiCorrect.innerText = `You got ${percentCorrect}%${(percentCorrect > 50 ? '!' : '')}`;
        updateText(statusMsgElem, `(${gotCount} out of ${activeQuestionTotalAnswers})`);
        hide(['strike1', 'strike2', 'strike3']);
        if (!reloadingCompletedDaily && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (percentCorrect > 60) {
                confettea.burst({ origin: { x: 0.3, y: 0.3 } });
            }
            if (percentCorrect > 85) {
                setTimeout(() => {
                    confettea.burst({ x: 0.7, y: 0.3 });
                }, 1000);
            }
            if (percentCorrect === 100) {
                setTimeout(() => {
                    confettea.burst({ x: 0.5, y: 0.3 });
                }, 2000);
            }
        }
        show(multiCorrect);
    } else {
        if (lost) {
            updateText(statusMsgElem, 'Better luck next time.');
        } else {
            updateText(statusMsgElem, 'You got it!');
            hide(['strike1', 'strike2', 'strike3']);
            if (!reloadingCompletedDaily && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
                confettea.burst();
            }
        }
    }
    if (activeQuizQuestionIndex > -1) {
        activeQuiz[activeQuizQuestionIndex].result = `${activeQuestionTotalAnswers - answerSet.size}/${activeQuestionTotalAnswers}`;
    }

    // Reveal any missed answers
    if (lost || reloadingCompletedDaily) {
        const tHash = hashAnswer(activeQuestion.title);
        if (answerSet.has(tHash)) {
            document.querySelectorAll('.' + tHash).forEach((e) => {
                e.classList.add('missed');
                e.innerText = activeQuestion.title;
            });
        }
        if (isMultiJoke) {
            for (const entry of activeQuestion.joke) {
                const jHash = hashAnswer(entry.joke);
                if (answerSet.has(jHash)) {
                    document.querySelectorAll('.' + jHash).forEach((e) => {
                        e.classList.add('missed');
                        if (entry.joke.length > LONG_TITLE_THRESHOLD && !e.classList.contains('free-text-answer')) {
                            e.classList.add('long-song-title');
                        }
                        e.innerText = entry.joke;
                    });
                    answerSet.delete(jHash);
                }
            }
        } else {
            const jHash = hashAnswer(activeQuestion.joke);
            if (answerSet.has(jHash)) {
                document.querySelectorAll('.' + jHash).forEach((e) => {
                    e.classList.add('missed');
                    e.innerText = activeQuestion.joke;
                });
            }
        }
    }

    if (document.getElementById('giveUpContainer').dataset.timeout) {
        clearTimeout(document.getElementById('giveUpContainer').dataset.timeout);
        delete document.getElementById('giveUpContainer').dataset.timeout;
    }
    document.getElementById('wikiLink').href = activeQuestion.wiki;
    show([vidPlayer, 'ripCredits']);

    if (loadedDailyDateString) {
        show(backBtn);
        const shareBtn = document.getElementById('shareResultsBtn');
        const playingTodaysDaily = loadedDailyDateString === todaysDailyDateString;
        const w_streak_key = 'winStreak';
        if (playingTodaysDaily && !reloadingCompletedDaily) {
            // Update win streak
            if (!lost) {
                if (!localStorage.getItem(w_streak_key)
                    || !localStorage.getItem(LAST_DAILY_KEY)
                    || parseInt(localStorage.getItem(LAST_DAILY_WIN_KEY)) < todaysDailyNumber - 2) {
                    localStorage.setItem(w_streak_key, '1');
                } else {
                    localStorage.setItem(w_streak_key, parseInt(localStorage.getItem(w_streak_key)) + 1);
                }
                localStorage.setItem(LAST_DAILY_WIN_KEY, todaysDailyNumber);
            } else if (localStorage.getItem(LAST_DAILY_KEY)
                && parseInt(localStorage.getItem(LAST_DAILY_WIN_KEY)) < todaysDailyNumber - 2) {
                localStorage.removeItem(w_streak_key);
            }
            localStorage.setItem(LAST_DAILY_KEY, todaysDailyNumber);
        }
        const winStreak = localStorage.getItem(w_streak_key) ? parseInt(localStorage.getItem(w_streak_key)) : 0;
        if (!reloadingCompletedDaily) {
            // Save the result of this daily.
            let resultIcon = '';
            if (strikes === 3) {
                resultIcon = '❌';
            } else if (lost) {
                resultIcon = '🏳️';
            } else {
                resultIcon = '✅';
            }
            const resultObj = {};
            resultObj.guesses = Array.from(guesses).join(DAILY_RESULT_GUESS_DELIMITER);
            resultObj.time = questionTime;
            resultObj.singleResultIcon = resultIcon;
            resultObj.sickoMode = shareBtn.dataset.sickoMode === 'true';
            resultObj.isMultiJoke = isMultiJoke;
            resultObj.multiResult = `${gotCount}/${activeQuestionTotalAnswers}`;
            resultObj.percentCorrect = `${percentCorrect}`;
            dailyResults[loadedDailyDateString] = resultObj;
            localStorage.setItem(DAILY_RESULTS_KEY, JSON.stringify(dailyResults));
            addOrUpdateDailyArchiveEntry(loadedDailyDateString);
        }

        let statLine = '';
        if (isMultiJoke) {
            let statIcon = getStatIcon(percentCorrect)
            statLine = `${statIcon}${gotCount}/${activeQuestionTotalAnswers}${statIcon}`;
        } else {
            if (!lost) {
                statLine = `✅ Got the answer in ⏱️ ${durationToTimeCode(questionTime)}!`;
                if (questionTime === 0) {
                    if (shareBtn.dataset.sickoMode === 'true') {
                        statLine += ' (0 seconds in Sicko Mode! Wow, that\'s really fast! I definitely didn\'t cheat. Don\'t make fun of me for sharing this without reading it first. 🙂)';
                    } else {
                        statLine += ' (Probably recognized this rip on sight. Try Sicko Mode for a real challenge!)'
                    }
                }
            } else {
                if (shareBtn.dataset.sickoMode === 'true' && gotCount > 0) {
                    statLine = `${gotCount}/${activeQuestionTotalAnswers}`;
                } else if (strikes === 3) {
                    statLine = `❌ Struck out!`
                } else {
                    statLine = `🏳 in ⏱️ ${durationToTimeCode(questionTime)}`
                }
            }
        }

        shareBtn.dataset.shareData =
            `SiIvaGuessr #${todaysDailyNumber}:${shareBtn.dataset.sickoMode === 'true' ? '\n 👺 Sicko Mode 👺' : ''}
${statLine}${!lost && playingTodaysDaily && winStreak > 1 ? '\nOn a win streak of ' + winStreak + '!' : ''}
https://siivaguessr.meme`;
        show('shareResultsContainer');
    } else {
        activeQuizQuestionIndex++;
        if (activeQuizQuestionIndex === activeQuiz.length) {
            show('quizResultsBtn');
        } else {
            show('nextQuestionBtn');
        }
    }
}

const getStatIcon = function (percentCorrect) {
    if (percentCorrect === 100) {
        return ' 🌟 ';
    } else if (percentCorrect > 60) {
        return ' ✅ ';
    } else if (percentCorrect > 25) {
        return ' 🆗 ';
    }
    return '❌';
}

const getStrikeString = function () {
    switch (strikes) {
        case 0: return '✅✅✅';
        case 1: return '❌✅✅';
        case 2: return '❌❌✅';
        case 3: return '❌❌❌';
        default: return '';
    }
}

document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    loadQuestion(simpleCircleCipher(activeQuiz[activeQuizQuestionIndex].id), parseInt(activeQuiz[activeQuizQuestionIndex].mode));
});

document.getElementById('quizResultsBtn').addEventListener('click', function () {
    this.blur();
    if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
        ytPlayer.pauseVideo();
    }
    let totalGot = 0;
    let totalAnswers = 0;
    const quizResultsTbody = document.getElementById('quizResultsTableBody');
    quizResultsTbody.innerText = '';
    let quizStr = '';
    let questionIcons = '';
    for (let i = 0; i < activeQuiz.length; i++) {
        const question = activeQuiz[i];
        const tr = document.getElementById('resultsTableRowTemplate').cloneNode(true);
        tr.id = '';
        const questionDbEntry = db[simpleCircleCipher(question.id)];
        tr.children[0].innerText = i + 1;
        tr.children[1].innerText = questionDbEntry.title;
        tr.children[2].innerText = Array.isArray(questionDbEntry.joke) ? `Multi (${questionDbEntry.joke.length} answers)` : questionDbEntry.joke;
        tr.children[3].innerText = question.result;
        const resultParts = question.result.split('/');
        const gotCount = parseInt(resultParts[0]);
        const answersCount = parseInt(resultParts[1]);
        totalGot += gotCount;
        totalAnswers += answersCount;
        const percentCorrect = Math.floor((gotCount / answersCount) * 100);
        if (percentCorrect === 100) {
            questionIcons += '🌟';
        } else if (percentCorrect > 60) {
            questionIcons += '✅';
        } else if (percentCorrect > 30) {
            questionIcons += '🆗';
        } else {
            questionIcons += '❌';
        }
        quizResultsTbody.appendChild(tr);
        quizStr += question.id;
        quizStr += question.mode;
    }
    document.getElementById('finalScore').innerText = `${totalGot}/${totalAnswers}`;
    document.getElementById('shareResultsBtn').dataset.shareData =
        `SiIvaGuessr Custom Quiz - ${totalGot}/${totalAnswers}
${questionIcons}
https://siivaguessr.meme/?quiz=${quizStr}`;
    showView('quizEndView');
    show('shareResultsContainer');
    removeEventListener('beforeunload', beforeUnloadHandler);
});

/**
 * Updates the specified element with the specified string.
 * @param {string} elem reference to the text element to update
 * @param {string} msg the message to display 
 * @param {string} timeoutMs timeout in ms after which the previous message will be displayed
 */
const updateText = function (elem, msg, timeoutMs = 0) {
    if (!elem.dataset.resetTimeoutId) {
        elem.dataset.prevStatus = elem.innerText;
    } else {
        // Status msg changed while waiting to reset previous temp status.
        clearTimeout(elem.dataset.resetTimeoutId);
        elem.dataset.resetTimeoutId = '';
    }
    elem.innerText = msg;
    if (timeoutMs) {
        elem.dataset.resetTimeoutId = setTimeout(() => {
            elem.innerText = elem.dataset.prevStatus;
        }, timeoutMs);
    } else {
        elem.dataset.prevStatus = elem.innerText;
    }
}

let filteredSongs = songs;
let lastGuessInputLength = 0;
let activeAutofillOption = -1;

const clearActiveAutofillOption = function () {
    if (activeAutofillOption > -1) {
        document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
        activeAutofillOption = -1;
    }
}

const updateAutocomplete = function () {
    // Refresh list of songs if the user is deleting characters.
    if (this.value.length < lastGuessInputLength) {
        filteredSongs = songs;
    }
    lastGuessInputLength = this.value.length;
    // Only update if at least two characters.
    if (this.value.length < 2) {
        hide(autofillOptionsElem);
        clearActiveAutofillOption();
        return;
    }

    // Use regexes for each word, delimted by spaces. As a bonus, this means
    // the guess box technically supports regex for free.
    let regexes = [];
    let wordBoundRegexes = [];
    this.value.split(' ').filter((w) => w.trim().length > 0).forEach((w) => {
        try {
            regexes.push(new RegExp(w.trim(), 'i'));
            wordBoundRegexes.push(new RegExp('\\b' + w.trim() + '\\b', 'i'));
        } catch (error) {
            // Some bad character sequence. Skip this word.
        }
    });
    if (!regexes.length) {
        return;
    }
    // Filter the full list of songs.
    filteredSongs = filteredSongs.filter((s) => regexes.every((reg) => reg.test(s)));
    filteredSongs.sort((a, b) => {
        const aStarts = a.toLowerCase().startsWith(this.value.toLowerCase());
        const bStarts = b.toLowerCase().startsWith(this.value.toLowerCase());
        if (aStarts && !bStarts) {
            return -1;
        } else if (bStarts && !aStarts) {
            return 1;
        }
        return 0;
    });
    filteredSongs.sort((a, b) => {
        const allExactWordsA = wordBoundRegexes.every((reg) => reg.test(a));
        const allExactWordsB = wordBoundRegexes.every((reg) => reg.test(b));
        if (allExactWordsA && !allExactWordsB) {
            return -1;
        } else if (allExactWordsB && !allExactWordsA) {
            return 1;
        }
        return 0;
    });
    let lastVisibleMatchIndex = -1;
    // Only display the first 10 matches, for performance and to make brute-forcing harder.
    for (let i = 0; i < 10 && i < filteredSongs.length; i++) {
        const optionElem = document.getElementById('autofill-' + i);
        const optionTitle = optionElem.querySelector('.option-title');
        const optionSource = optionElem.querySelector('.option-source');
        const lastDividerIndex = filteredSongs[i].lastIndexOf(' - ');
        if (lastDividerIndex === -1) {
            optionTitle.innerText = filteredSongs[i];
            optionSource.innerText = '';
        } else {
            optionTitle.innerText = filteredSongs[i].substring(0, lastDividerIndex);
            optionSource.innerText = filteredSongs[i].substring(lastDividerIndex + 3);
        }
        optionElem.dataset.guessVal = filteredSongs[i];
        show(optionElem);
        lastVisibleMatchIndex++;
    }
    if (lastVisibleMatchIndex === -1) {
        hide(autofillOptionsElem);
        clearActiveAutofillOption();
        return;
    }
    for (let i = lastVisibleMatchIndex + 1; i < 10; i++) {
        hide('autofill-' + i);
    }
    activeAutofillOption = 0;
    document.getElementById('autofill-0').classList.add('active');
    show(autofillOptionsElem);
}

guessInput.addEventListener('click', updateAutocomplete);
guessInput.addEventListener('input', updateAutocomplete);
guessInput.addEventListener('blur', function () {
    hide(autofillOptionsElem);
    clearActiveAutofillOption();
});

// Keyboard controls for autofill
guessInput.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (autofillOptionsElem.querySelector('.autofill-option:hover')) {
                return;
            }
            if (activeAutofillOption > -1) {
                document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
                activeAutofillOption--;
                if (activeAutofillOption === -1) {
                    activeAutofillOption = Math.min(filteredSongs.length, 9);
                }
            } else {
                activeAutofillOption = Math.min(filteredSongs.length, 9)
            }
            document.getElementById('autofill-' + activeAutofillOption).classList.add('active');
            break;
        case 'ArrowDown':
            if (autofillOptionsElem.querySelector('.autofill-option:hover')) {
                return;
            }
            if (activeAutofillOption > -1) {
                document.getElementById('autofill-' + activeAutofillOption).classList.remove('active');
                activeAutofillOption++;
                const maxVal = Math.min(9, filteredSongs.length);
                if (activeAutofillOption > maxVal) {
                    activeAutofillOption = 0;
                }
            } else {
                activeAutofillOption = 0;
            }
            document.getElementById('autofill-' + activeAutofillOption).classList.add('active');
            break;
        case 'Enter':
            if (activeAutofillOption > -1) {
                submitGuess(document.getElementById('autofill-' + activeAutofillOption).dataset.guessVal);
            } else {
                const hoverElem = document.querySelector('.autofill-option:hover');
                if (hoverElem) {
                    submitGuess(hoverElem.dataset.guessVal);
                }
            }
            break;
        default:
            break;
    }
});

autofillOptionsElem.addEventListener('mousemove', function () {
    if (activeAutofillOption > -1) {
        clearActiveAutofillOption();
    }
});

autofillOptionsElem.querySelectorAll('.autofill-option').forEach((e) => {
    e.addEventListener('mousedown', function (e) {
        if (e.button === 0) {
            submitGuess(this.dataset.guessVal);
        }
    });
});

const swapIcon = function (btnElement) {
    btnElement.childNodes.forEach((e) => {
        if (!(e instanceof HTMLElement)) {
            return;
        }
        if (e.getAttribute('hidden') !== null) {
            show(e);
        } else {
            hide(e);
        }
    })
}

playPauseBtn.addEventListener('click', function () {
    if (ytPlayer) {
        if (ytPlayer.getPlayerState() === 1 || ytPlayer.getPlayerState() === 3) {
            ytPlayer.pauseVideo();
        } else {
            ytPlayer.playVideo();
        }
    }
});

const updateVolume = function () {
    if (volumeSlider.value === '0') {
        hide('volumeIcon');
        show('mutedIcon');
    } else {
        show('volumeIcon');
        hide('mutedIcon');
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    localStorage.setItem('lastVolume', volumeSlider.value);
}

volumeSlider.addEventListener('input', function () {
    this.dataset.lastVal = this.value;
    updateVolume();
});
volumeSlider.addEventListener('wheel', function (wheelEvent) {
    wheelEvent.preventDefault();
    if (wheelEvent.deltaY < 0) {
        this.value = parseInt(this.value) + 5;
    } else if (wheelEvent.deltaY > 0) {
        this.value = parseInt(this.value) - 5;
    }
    this.dataset.lastVal = this.value;
    updateVolume();
});

const durationToTimeCode = function (duration) {
    let hours = 0;
    let minutes = Math.floor(duration / 60);
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }
    const seconds = Math.floor((duration % 60)).toString().padStart(2, '0');

    if (hours) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds}`;
    } else {
        return `${minutes}:${seconds}`;
    }
}

let timeCodeUpdateInterval;
/**
 * Handles state changes in the embedded YouTube player.
 * @param {Event} event the state change event. The data property indicates the new state of the player.
 * 1 is playing, 0 is paused, -1 is "unstarted", for newly cued videos.
 */
function onVideoStateChange(event) {
    if (event.data === 1) {
        timeCodeUpdateInterval = setInterval(() => {
            seekBar.value = Math.floor(ytPlayer.getCurrentTime());
            updateTimeCode();
        }, 250);
        hide(playIcon);
        show(pauseIcon);
        // Ten seconds after first play, show Give Up button.
        if (document.getElementById('giveUpContainer').hasAttribute('hidden')
            && !document.getElementById('giveUpContainer').dataset.timeout) {
            document.getElementById('giveUpContainer').dataset.timeout = setTimeout(() => {
                if (document.getElementById('ripCredits').hasAttribute('hidden')) {
                    show('giveUpContainer');
                }
            }, 10000);
            questionTimerInterval = setInterval(() => {
                questionTime++;
            }, 1000);
        }
    } else {
        clearInterval(timeCodeUpdateInterval);
        show(playIcon);
        hide(pauseIcon);
    }
    if (event.data === -1) {
        seekBar.value = '0';
        seekBar.max = ytPlayer.getDuration();
        durationTimeCode.innerText = durationToTimeCode(ytPlayer.getDuration());
        updateTimeCode();
        show(playbackControls);
        showView('ripView');
        if (loadedDailyDateString && dailyResults[loadedDailyDateString]) {
            if (parseInt(localStorage.getItem('lDaily')) === todaysDailyNumber) {
                updateText(statusMsgElem, 'Come back tomorrow for a new question!');
            }
            const dailyResult = dailyResults[loadedDailyDateString];
            const dailyResultGuesses = dailyResult.guesses.split(DAILY_RESULT_GUESS_DELIMITER);
            for (const guess of dailyResultGuesses) {
                submitGuess(guess, true);
            }
            questionTime = dailyResult.time;
            endQuestion(strikes === 3 || answerSet.size > 0, true);
        }
    }
}

/**
 * On multi-joke rips, highlights and scrolls to the timecode of the current joke.
 * @param {number} seconds the number of seconds elapsed in the current song
 */
const updateMultiJokeHighlight = function (seconds) {
    let checkSeconds = seconds;
    let nextHighlight = document.getElementById('jokeAt' + checkSeconds);
    while (checkSeconds >= 0 && !nextHighlight) {
        checkSeconds--;
        nextHighlight = document.getElementById('jokeAt' + checkSeconds);
    }
    multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => {
        if (e.dataset.endHighlightAt
            && (seconds >= parseInt(e.dataset.endHighlightAt)
                || seconds < parseInt(e.dataset.startHighlightAt))) {
            e.classList.remove('highlight');
        }
    });
    if (nextHighlight && !nextHighlight.classList.contains('highlight')) {
        multiJokeContainer.querySelectorAll('.multi-joke-timestamp.highlight').forEach((e) => {
            if (!e.dataset.endHighlightAt) {
                e.classList.remove('highlight');
            }
        });
        nextHighlight.classList.add('highlight');
        let suffix = 1;
        while (document.getElementById(`jokeAt${seconds}-${suffix}`)) {
            document.getElementById(`jokeAt${seconds}-${suffix}`).classList.add('highlight');
            suffix++;
        }
        const dispElem = document.getElementById('multiJokeDisplay');
        dispElem.scrollTo({ top: nextHighlight.offsetTop - (dispElem.offsetHeight / 2), behavior: 'smooth' });
    }
    if (highlightRanges.get(seconds)) {
        for (const elem of highlightRanges.get(seconds)) {
            elem.classList.add('highlight');
        }
    }
}

function onVideoPlayerReady() {
    if (localStorage.getItem('lastVolume')) {
        volumeSlider.value = localStorage.getItem('lastVolume');
    }
    ytPlayer.setVolume(parseInt(volumeSlider.value));
    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        loadQuiz(params.get('quiz'));
    } else {
        // Populate the dailies archive.
        let curDate = new Date('2025-09-14T00:00:00');
        let number = 1;
        while (dateToString(curDate) !== todaysDailyDateString) {
            addOrUpdateDailyArchiveEntry(dateToString(curDate), number);
            curDate.setDate(curDate.getDate() + 1);
            number++;
        }
        document.querySelectorAll('.past-daily-btn').forEach((e) => {
            e.addEventListener('click', function () {
                loadedDailyDateString = this.dataset.dailyDateString;
                activeQuizQuestionIndex = -1;
                const dailyToLoad = dailies[simpleCircleCipher(loadedDailyDateString).split('').reverse().join('')];
                const sickoMode = document.getElementById('dailyArchiveSickoSwitch').checked
                    || (dailyResults[loadedDailyDateString] && dailyResults[loadedDailyDateString].sickoMode);
                loadQuestion(simpleCircleCipher(dailyToLoad.hash), sickoMode ? QuestionMode.SICKO : dailyToLoad.mode);
            });
        });
        showView('startView');
    }
}

let ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('vidPlayer', {
        events: {
            'onReady': onVideoPlayerReady,
            'onStateChange': onVideoStateChange
        }
    });
}
const apiScriptTag = document.createElement('script');
apiScriptTag.src = 'https://www.youtube.com/iframe_api';
document.body.insertAdjacentElement('beforeend', apiScriptTag);

muteBtn.addEventListener('click', function () {
    swapIcon(muteBtn);
    if (volumeSlider.value !== '0') {
        volumeSlider.value = '0';
    } else if (volumeSlider.dataset.lastVal) {
        volumeSlider.value = volumeSlider.dataset.lastVal;
    }
    updateVolume();
});

// Seekbar logic - Pause the video (if playing) while seeking to avoid noise. Keep track of the
// player state to unpause automatically after seeking.
let preSeekState;
let seeking = false;
seekBar.addEventListener('mousedown', function () {
    seeking = true;
    preSeekState = ytPlayer.getPlayerState();
    ytPlayer.pauseVideo();
});

seekBar.addEventListener('input', function () {
    updateTimeCode();
    ytPlayer.seekTo(parseInt(this.value));
});

seekBar.addEventListener('mouseup', function () {
    if (seeking) {
        seeking = false;
        if ((preSeekState === 1 || preSeekState === 3)
            && parseInt(seekBar.value) < parseInt(seekBar.max)) {
            ytPlayer.playVideo();
        }
    }
});

document.getElementById('lightModeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('lightMode', true);
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.removeItem('lightMode');
    }
});

if (localStorage.getItem('lightMode') !== null) {
    document.getElementById('lightModeSwitch').checked = true;
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
}

document.getElementById('dailySickoSwitch').addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('dailySicko', this.checked);
        document.getElementById('dailyArchiveSickoSwitch').checked = true;
    } else {
        localStorage.removeItem('dailySicko');
        document.getElementById('dailyArchiveSickoSwitch').checked = false;
    }
});

if (localStorage.getItem('dailySicko') !== null) {
    document.getElementById('dailySickoSwitch').checked = true;
    document.getElementById('dailyArchiveSickoSwitch').checked = true;
}

document.getElementById('dailyArchiveBtn').addEventListener('click', function () {
    this.blur();
    showView('dailyArchiveView');
});

const addOrUpdateDailyArchiveEntry = function (dateString, dailyNumber = -1) {
    let dailyArchiveRow;
    const existingBtn = document.getElementById('dailyArchive' + dateString);
    if (existingBtn) {
        dailyArchiveRow = existingBtn;
    } else {
        dailyArchiveRow = document.getElementById('dailyArchiveRowTemplate').cloneNode(true);
        dailyArchiveRow.removeAttribute('hidden');
        dailyArchiveRow.id = 'dailyArchive' + dateString;
        dailyArchiveRow.querySelector('.past-daily-btn').dataset.dailyDateString = dateString;
        dailyArchiveRow.querySelector('.daily-number').innerText = `#${dailyNumber}:`;
        dailyArchiveRow.querySelector('.daily-date').innerText = `${dateString.substring(0, 4)}/${dateString.substring(4, 6)}/${dateString.substring(6)}`;
        document.getElementById('dailyList').insertAdjacentElement('afterbegin', dailyArchiveRow);
    }
    if (dailyResults[dateString]) {
        const resultObj = dailyResults[dateString];
        let resultString = '';
        if (resultObj.isMultiJoke) {
            resultString += `${getStatIcon(parseInt(resultObj.percentCorrect))} ${resultObj.multiResult}`;
        } else {
            resultString += `${resultObj.singleResultIcon} in ⏱️ ${durationToTimeCode(resultObj.time)}`;
        }
        resultString += resultObj.sickoMode ? ' 👺' : '';
        dailyArchiveRow.querySelector('.daily-result').innerText = resultString;
    } else {
        dailyArchiveRow.querySelector('.daily-result').innerText = `❔`
    }
}

document.getElementById('giveUpBtn').addEventListener('click', function () {
    hide('giveUpBtn');
    show('giveUpConfirm');
});

document.getElementById('giveUpCancelBtn').addEventListener('click', function () {
    this.blur();
    hide('giveUpConfirm');
    show('giveUpBtn');
});

document.getElementById('giveUpConfirmBtn').addEventListener('click', function () {
    this.blur();
    endQuestion(true, false);
});

document.getElementById('shareResultsBtn').addEventListener('click', async function () {
    await navigator.clipboard.writeText(this.dataset.shareData);
    hide('shareResultsBtn');
    show('shareResultsMsg');
    setTimeout(() => {
        show('shareResultsBtn');
        hide('shareResultsMsg');
    }, 5000);
});

document.getElementById('quizCodeInput').addEventListener('input', function () {
    if (/^([-_A-z0-9]{11}[1-3])+$/.test(this.value)) {
        document.getElementById('loadQuizFromCodeBtn').removeAttribute('disabled');
    } else {
        document.getElementById('loadQuizFromCodeBtn').setAttribute('disabled', '');
    }
});

document.getElementById('loadQuizFromCodeBtn').addEventListener('click', function () {
    this.blur();
    loadQuiz(document.getElementById('quizCodeInput').value);
});

document.getElementById('startCustomQuizBtn').addEventListener('click', function () {
    this.blur();
    activeQuizQuestionIndex = 0;
    loadQuestion(simpleCircleCipher(activeQuiz[activeQuizQuestionIndex].id), parseInt(activeQuiz[activeQuizQuestionIndex].mode));
    addEventListener('beforeunload', beforeUnloadHandler);
});

const loadQuiz = function (quizStr) {
    activeQuiz = [];
    for (let i = 0; i < quizStr.length; i += 12) {
        if (!db[simpleCircleCipher(quizStr.substring(i, i + 11))]) {
            show('badQuizErrMsg');
            setTimeout(() => {
                hide('badQuizErrMsg');
            }, 5000);
            return;
        }
        activeQuiz.push({
            "id": quizStr.substring(i, i + 11),
            "mode": quizStr[i + 11]
        });
    }
    document.getElementById('quizIntroMsg').innerText = `Loaded custom quiz with ${activeQuiz.length} questions. Ready to begin.`;
    showView('quizIntroView');
}

document.getElementById('createCustomQuizBtn').addEventListener('click', function () {
    updateSavedQuizList();
    newCustomQuiz();
    this.blur();
    showView('createCustomQuizView');
});

const updateSavedQuizList = function () {
    const savedQuizList = localStorage.getItem(SAVED_QUIZZES_KEY);
    const savedQuizSelect = document.getElementById('savedQuizSelect');
    savedQuizSelect.innerText = '';
    if (savedQuizList && savedQuizList.length) {
        for (const quiz of savedQuizList.split(';')) {
            const quizName = quiz.split(':')[0];
            const option = document.createElement('option');
            option.value = quizName;
            option.innerText = quizName;
            savedQuizSelect.appendChild(option);
        }
        show('manageQuizzesPanel');
    } else {
        hide('manageQuizzesPanel');
    }
}

const newCustomQuiz = function () {
    document.getElementById('questionTableBody').innerText = '';
    hide(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel', 'shareQuizContainer']);
    updateText(customQuizHelpTextElem, 'Enter a video link and click Add to add your first question.');
}

const vidIdRegex = /^[A-Za-z0-9_-]{10}[AEIMQUYcgkosw048]$/;
const playlistRegex = /^PL[A-Za-z0-9_-]{10}[A-Za-z0-9_-]{22}$/;
document.getElementById('addQuestionBtn').addEventListener('click', function () {
    const addQInput = document.getElementById('addQuestionInput');
    const url = addQInput.value;
    addQInput.value = '';
    if (!url || !url.trim()) {
        return;
    }
    const vidPrefix = 'watch?v=';
    const plPrefix = 'playlist?list=';
    const plPrefixIndex = url.indexOf(plPrefix);
    const vidPrefixIndex = url.indexOf(vidPrefix);
    if (plPrefixIndex > -1) {
        const playlistCode = url.substring(plPrefixIndex + plPrefix.length, plPrefixIndex + plPrefix.length + 34);
        if (playlistRegex.test(playlistCode)) {
            updateText(customQuizHelpTextElem, 'Fetching playlist contents...');
            const xhr = new XMLHttpRequest();
            let url = `https://www.googleapis.com/youtube/v3/playlistItems?\
key=${simpleCircleCipher(ak)}\
&playlistId=${playlistCode}\
&part=${encodeURIComponent('snippet,contentDetails')}\
&maxResults=50\
&fields=${encodeURIComponent('items(id,snippet(title,position),contentDetails(videoId))')}`;
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    const respObj = JSON.parse(xhr.response);
                    const nonExistList = document.getElementById('nonExistSongsList');
                    nonExistList.innerText = '';
                    let added = 0;
                    for (const item of respObj.items) {
                        if (db[item.contentDetails.videoId]) {
                            addCustomQuizQuestion(item.contentDetails.videoId);
                            added++;
                        } else {
                            let li = document.createElement('li');
                            li.innerText = item.snippet.title;
                            nonExistList.appendChild(li);
                        }
                    }
                    if (nonExistList.children.length > 0) {
                        show('playlistNonExistSongs');
                    }
                    updateText(customQuizHelpTextElem, 'When you\'re finished adding questions, name and save your quiz below.');
                    updateText(customQuizHelpTextElem, `Added ${added} songs from playlist.`, 5000);
                } else {
                    updateText(customQuizHelpTextElem, '');
                    updateText(customQuizHelpTextElem, 'Failed to load playlist. Make sure the playlist is public.', 5000);
                }
            });
            xhr.open('GET', url);
            xhr.send();
        } else {
            updateText(customQuizHelpTextElem, 'Invalid YouTube playlist URL.', 5000);
        }
    } else {
        let videoHash;
        if (vidPrefixIndex > -1) {
            videoHash = url.substring(vidPrefixIndex + vidPrefix.length, vidPrefixIndex + vidPrefix.length + 11);
        } else if (vidIdRegex.test(url)) {
            videoHash = url;
        } else {
            updateText(customQuizHelpTextElem, 'Invalid video link/code.', 5000);
            return;
        }

        if (db[videoHash]) {
            addCustomQuizQuestion(videoHash);
        } else {
            updateText(customQuizHelpTextElem, 'Rip is not in the database, or the link is not a valid rip or playlist.', 5000);
        }
    }
});

const moveEntry = function (down, vidId, upBtn, downBtn, tbody) {
    const questionRow = document.getElementById(`question${vidId}`);
    if (down) {
        if (questionRow.nextElementSibling) {
            questionRow.nextElementSibling.querySelector('.move-down-btn').removeAttribute('disabled');
            tbody.insertBefore(questionRow.nextElementSibling, questionRow);
            upBtn.removeAttribute('disabled');
        }
    } else {
        if (questionRow.previousElementSibling) {
            questionRow.previousElementSibling.querySelector('.move-up-btn').removeAttribute('disabled');
            tbody.insertBefore(questionRow, questionRow.previousElementSibling);
            downBtn.removeAttribute('disabled');
        }
    }
    tbody.querySelector('tr:first-child .move-up-btn').setAttribute('disabled', '');
    tbody.querySelector('tr:last-child .move-down-btn').setAttribute('disabled', '');
    setHasUnsavedChanges(true);
}

const addCustomQuizQuestion = function (idToAdd, mode = '1') {
    if (document.getElementById(`question${idToAdd}`)) {
        // Duplicate question - ignore.
        return;
    }
    const jokeToAdd = db[idToAdd];
    const tbody = document.getElementById('questionTableBody');
    const tr = document.getElementById('questionTableRowTemplate').cloneNode(true);
    const isMultiJoke = Array.isArray(jokeToAdd.joke)
    tr.id = `question${idToAdd}`;
    tr.dataset.vidId = idToAdd;
    tr.classList.add('custom-quiz-question');
    const upBtn = tr.querySelector('.move-up-btn');
    const downBtn = tr.querySelector('.move-down-btn');
    upBtn.dataset.vidId = idToAdd;
    upBtn.addEventListener('click', () => {
        moveEntry(false, idToAdd, upBtn, downBtn, tbody);
    });
    downBtn.dataset.vidId = idToAdd;
    downBtn.addEventListener('click', () => {
        moveEntry(true, idToAdd, upBtn, downBtn, tbody);
    });
    downBtn.setAttribute('disabled', '');
    if (tbody.children.length === 0) {
        upBtn.setAttribute('disabled', '');
        show(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel']);
        updateText(customQuizHelpTextElem, 'When you\'re finished adding questions, name and save your quiz below.');
    } else {
        tbody.children[tbody.children.length - 1].querySelector('.move-down-btn').removeAttribute('disabled');
    }
    const modeSelect = tr.querySelector('.mode-select');
    modeSelect.name = `modeSelect${idToAdd}`;
    modeSelect.value = mode;
    if (jokeToAdd.exclude === 'title') {
        modeSelect.disabled = 'true';
    }
    modeSelect.addEventListener('change', function () {
        if (this.value === '2' && isMultiJoke) {
            show(tr.querySelector('.tooltip-container'));
        } else {
            hide(tr.querySelector('.tooltip-container'));
        }
    });
    tr.querySelector('.rip-title').innerText = jokeToAdd.title;
    tr.querySelector('.rip-joke').innerText = isMultiJoke ? `Multi (${jokeToAdd.joke.length} answers)` : jokeToAdd.joke;
    tr.querySelector('.remove-question-btn').dataset.vidId = idToAdd;
    tr.querySelector('.remove-question-btn').addEventListener('click', function () {
        document.getElementById(`question${this.dataset.vidId}`).remove();
        if (tbody.children.length === 0) {
            hide(['saveQuizPanel', 'customQuizTableContainer', 'shareQuizPanel', 'shareQuizContainer']);
            document.getElementById('customQuizNameInput').value = '';
            setHasUnsavedChanges(false);
        } else {
            tbody.querySelector('tr:first-child .move-up-btn').setAttribute('disabled', '');
            tbody.querySelector('tr:last-child .move-down-btn').setAttribute('disabled', '');
            setHasUnsavedChanges(true);
        }
    });
    tbody.appendChild(tr);
    if (isMultiJoke && mode === '2') {
        show(tr.querySelector('.tooltip-container'));
    }
    setHasUnsavedChanges(true);
};

const setHasUnsavedChanges = function (unsaved) {
    hasUnsavedChanges = unsaved;
    if (unsaved) {
        hide('shareQuizContainer');
        addEventListener('beforeunload', beforeUnloadHandler);
    } else {
        removeEventListener('beforeunload', beforeUnloadHandler);
    }
}

const serializeCurrentQuiz = function () {
    let res = '';
    document.getElementById('questionTableBody').querySelectorAll('tr').forEach((row) => {
        res += simpleCircleCipher(row.dataset.vidId);
        res += row.querySelector('.mode-select').value;
    })
    return res;
}

document.getElementById('saveQuizBtn').addEventListener('click', function () {
    const saveStatusElem = document.getElementById('saveStatusText');
    let name = document.getElementById('customQuizNameInput').value;
    name.replaceAll(/[:;]/g, '').trim();
    document.getElementById('customQuizNameInput').value = name;
    if (!name) {
        updateText(saveStatusElem, 'Please enter a valid name.', 5000);
        return;
    }
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY) ? localStorage.getItem(SAVED_QUIZZES_KEY).split(';') : [];
    const entry = `${name}:${serializeCurrentQuiz()}`;
    let updatedExisting = false;
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(name)) {
            quizList.splice(i, 1, entry);
            updatedExisting = true;
            updateText(saveStatusElem, `Updated existing quiz.`, 5000);
            break;
        }
    }
    if (!updatedExisting) {
        quizList.push(entry);
        updateText(saveStatusElem, `Quiz saved!`, 5000);
    }
    localStorage.setItem(SAVED_QUIZZES_KEY, quizList.join(';'));
    setHasUnsavedChanges(false);
    updateSavedQuizList();
});

document.getElementById('loadSavedQuizBtn').addEventListener('click', function () {
    if (hasUnsavedChanges && !confirm('The current quiz has unsaved changes. Continue loading?')) {
        return;
    }
    const nameToLoad = document.getElementById('savedQuizSelect').value;
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY).split(';');
    let quiz = undefined;
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(nameToLoad)) {
            quiz = quizList[i].split(':')[1];
            break;
        }
    }
    document.getElementById('questionTableBody').innerText = '';
    for (let i = 0; i < quiz.length; i += 12) {
        addCustomQuizQuestion(simpleCircleCipher(quiz.substring(i, i + 11)), quiz[i + 11]);
    }
    updateText(document.getElementById('manageStatusText'), `Loaded Quiz.`, 5000);
    setHasUnsavedChanges(false);
});

document.getElementById('deleteSavedQuizBtn').addEventListener('click', function () {
    const toDelete = document.getElementById('savedQuizSelect').value;
    const quizList = localStorage.getItem(SAVED_QUIZZES_KEY).split(';');
    for (let i = 0; i < quizList.length; i++) {
        if (quizList[i].startsWith(toDelete)) {
            quizList.splice(i, 1);
            updateText(document.getElementById('manageStatusText'), `Deleted Quiz.`, 5000);
            break;
        }
    }
    localStorage.setItem(SAVED_QUIZZES_KEY, quizList.join(';'));
    this.blur();
    updateSavedQuizList();
});

document.getElementById('shareSavedQuizBtn').addEventListener('click', function () {
    document.getElementById('shareSavedQuizCodeBtn').dataset.copyData = serializeCurrentQuiz();
    document.getElementById('shareSavedQuizLinkBtn').dataset.copyData = `https://siivaguessr.meme/?quiz=${serializeCurrentQuiz()}`;
    show('shareQuizContainer');
});

document.querySelectorAll('.share-quiz-btn').forEach((e) => {
    e.addEventListener('click', async function () {
        await navigator.clipboard.writeText(this.dataset.copyData);
        updateText(document.getElementById('shareStatusText'), 'Copied to clipboard!', 5000);
    })
})

document.querySelectorAll('.dismiss-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        this.blur();
        hide(this.dataset.target);
    });
})

// Basic email obfuscation. Apparently, surprisingly effective despite its simplicity.
const a = document.getElementById('enail');
a.setAttribute('href', a.getAttribute('href')
    .replace('vee', 'il@ve')
    .replace('e', '')
    .replace('-', '')
    .replace('-', ':ma')
    .replace('gie/', 'egie.me'));

const updateTimeCode = function () {
    curTimeCode.innerText = durationToTimeCode(parseInt(seekBar.value));
    updateMultiJokeHighlight(parseInt(seekBar.value));
}