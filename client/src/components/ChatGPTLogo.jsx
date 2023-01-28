import * as React from "react"

const ChatGPTLogo = () => (
    // <svg 
    //     width="200"
    //     height="200"
    //     viewBox="0 0 41 41"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     stroke-width="1.5"
    //     class="h-6 w-6">
    //     <path 
    //         d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor">
    //     </path>
    // </svg>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="826.000000pt" height="826.000000pt" viewBox="0 0 826.000000 826.000000"
    preserveAspectRatio="xMidYMid meet">
   
   <g transform="translate(0.000000,826.000000) scale(0.100000,-0.100000)"
   fill="currentColor" stroke="none">
   <path d="M4104 7590 c-149 -10 -312 -34 -464 -66 -119 -25 -309 -79 -319 -90
   -3 -4 3 -4 14 0 11 3 91 15 179 26 819 105 1640 -87 2316 -540 235 -158 552
   -447 714 -650 180 -227 334 -479 437 -715 34 -77 64 -143 68 -147 3 -4 71 2
   151 12 80 11 154 19 165 19 27 -1 -275 -79 -515 -134 -295 -67 -2916 -638
   -3399 -741 -168 -35 -306 -65 -307 -67 -3 -3 32 -146 54 -222 59 -207 -42
   -360 -278 -421 -74 -20 -210 -23 -405 -10 -207 14 -358 -23 -580 -139 -400
   -210 -789 -318 -1150 -319 -132 0 -334 19 -322 30 2 3 55 0 118 -6 377 -36
   914 105 1339 350 214 123 450 169 723 140 210 -22 393 34 472 143 27 38 30 49
   30 117 0 41 -9 107 -19 145 -47 181 -45 175 -72 175 -38 0 -86 24 -117 59 -15
   17 -37 31 -50 31 -27 0 -133 -44 -342 -142 -190 -89 -308 -137 -436 -175 -86
   -26 -107 -28 -249 -28 -141 1 -167 4 -285 33 -306 77 -525 82 -777 18 -314
   -80 -586 -290 -728 -563 -37 -71 -47 -131 -31 -189 17 -64 50 -104 146 -177
   190 -143 315 -180 610 -181 311 -2 496 47 929 244 199 90 236 96 330 52 197
   -92 327 -372 329 -707 0 -66 -5 -147 -12 -180 -37 -184 -121 -352 -243 -489
   l-44 -49 -112 71 c-132 84 -300 208 -427 314 -114 96 -333 321 -405 415 -30
   40 -56 71 -58 69 -2 -2 17 -55 41 -118 153 -389 370 -729 664 -1038 359 -378
   891 -717 1298 -828 452 -123 870 -156 1325 -106 981 109 1883 654 2439 1474
   191 281 316 532 421 850 103 310 152 578 171 935 7 116 16 216 22 223 13 17
   32 15 53 -5 15 -15 16 -34 10 -183 -16 -379 -78 -712 -192 -1040 -372 -1072
   -1250 -1907 -2335 -2220 -165 -47 -392 -94 -554 -114 l-120 -15 115 4 c322 14
   741 110 1071 246 735 301 1330 828 1718 1522 219 390 357 815 418 1282 24 190
   24 623 -1 809 l-17 130 32 25 c38 29 68 93 69 142 0 22 -12 60 -28 91 -21 39
   -27 63 -24 90 2 20 -1 52 -8 72 -13 42 -77 101 -135 127 -29 13 -47 29 -55 49
   -7 17 -11 32 -9 34 8 7 251 58 255 53 3 -3 -7 -44 -22 -91 -14 -48 -25 -88
   -23 -91 4 -3 394 262 453 308 l30 23 -165 28 c-90 16 -222 39 -292 51 l-128
   23 18 -22 c9 -11 40 -45 67 -73 27 -29 48 -55 45 -58 -6 -5 -271 -67 -274 -63
   0 2 -21 50 -45 108 -263 628 -740 1184 -1330 1552 -185 115 -226 128 -63 19
   475 -316 899 -803 1164 -1338 69 -137 79 -164 69 -182 -6 -12 -21 -21 -35 -21
   -21 0 -33 18 -94 143 -169 345 -371 629 -644 905 -382 386 -820 663 -1327 837
   -176 60 -382 112 -495 124 -138 15 -396 20 -531 11z m2875 -2414 c-65 -98
   -125 -151 -217 -193 -105 -49 -224 -70 -452 -82 -296 -16 -547 -78 -805 -200
   l-107 -51 47 -33 c26 -18 60 -48 74 -67 27 -35 23 -34 -44 12 -100 67 -288 97
   -487 78 -161 -15 -276 -46 -429 -114 -69 -31 -132 -56 -141 -56 -33 0 -22 -15
   63 -86 49 -41 89 -76 89 -79 0 -3 -39 21 -86 52 -108 70 -238 135 -328 164
   -64 20 -75 21 -155 10 -47 -6 -232 -32 -409 -57 -178 -25 -328 -44 -334 -42
   -5 2 201 47 459 101 257 54 558 118 668 142 1614 351 2425 528 2540 554 44 10
   85 19 92 20 6 0 -11 -32 -38 -73z m476 -542 c-16 -14 -68 -44 -115 -67 l-85
   -42 0 -295 c0 -232 -4 -321 -18 -415 -80 -535 -274 -1018 -575 -1435 -271
   -374 -612 -681 -1010 -907 -113 -65 -333 -171 -387 -186 -17 -5 -33 17 -115
   170 -309 574 -1221 2186 -1522 2691 -11 17 -18 32 -15 32 3 0 168 -261 368
   -579 200 -319 365 -578 366 -577 2 1 -27 103 -63 227 -56 193 -64 232 -60 282
   10 133 114 197 317 197 163 0 400 46 611 119 383 133 597 279 732 501 l28 45
   -7 -40 c-3 -22 -22 -73 -41 -114 -19 -41 -33 -75 -32 -77 7 -6 354 88 443 121
   55 21 192 81 305 135 255 122 309 139 475 150 133 10 258 33 355 69 73 26 81
   25 45 -5z m-6185 -437 l65 -13 -160 -7 c-249 -10 -426 -49 -602 -132 -116 -55
   -170 -91 -262 -179 -80 -76 -81 -74 -16 19 121 172 331 290 580 325 77 11 310
   3 395 -13z m2145 -488 c-247 -15 -405 -36 -648 -86 -119 -24 -128 -28 -124
   -47 3 -12 21 -77 41 -146 39 -133 96 -402 117 -560 21 -150 18 -513 -5 -633
   -10 -54 -16 -100 -15 -102 2 -2 168 -48 369 -103 201 -55 418 -115 482 -133
   l118 -32 312 153 c172 84 315 154 317 156 3 3 -10 85 -29 184 -18 100 -31 183
   -28 185 3 3 75 -323 82 -370 1 -8 -45 -33 -373 -204 l-274 -142 -511 137
   c-281 75 -514 138 -517 140 -3 2 2 34 12 71 73 287 43 722 -81 1208 -27 105
   -52 199 -55 211 -6 19 1 23 97 43 248 53 474 78 698 78 l145 0 -130 -8z m440
   -169 c4 -6 -6 -10 -24 -10 -57 0 -65 -76 -10 -87 16 -3 26 -9 23 -14 -17 -28
   -84 18 -84 58 0 44 75 86 95 53z m-861 -26 c25 -9 19 -22 -7 -17 -27 5 -57
   -19 -57 -46 0 -19 24 -44 50 -54 9 -3 6 -6 -9 -6 -57 -2 -85 81 -39 113 24 17
   38 19 62 10z m589 -504 c132 -33 337 -119 392 -165 25 -21 17 -18 -125 45 -63
   27 -171 69 -240 91 -168 55 -179 67 -27 29z m-267 -51 c147 -32 313 -92 479
   -174 197 -97 227 -121 50 -41 -174 79 -345 144 -500 191 -177 53 -182 57 -29
   24z m1001 -391 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-191
   -180 c4 -6 -2 -8 -14 -4 -27 9 -58 -7 -65 -33 -6 -25 17 -58 46 -64 16 -3 13
   -5 -10 -6 -65 -2 -84 86 -24 115 24 12 57 8 67 -8z m579 -258 c92 -151 249
   -405 348 -564 139 -224 176 -290 166 -297 -44 -28 -498 -159 -552 -159 -11 0
   -45 92 -117 313 -56 171 -105 315 -109 319 -4 4 -144 -50 -312 -120 -167 -71
   -317 -132 -332 -136 l-27 -6 -1 -133 -1 -132 -33 133 c-18 74 -35 135 -37 136
   -1 1 -173 56 -380 121 -208 65 -376 120 -374 122 2 2 173 -44 381 -102 208
   -58 397 -105 419 -105 32 0 113 34 356 147 l315 147 138 4 c98 2 137 7 137 16
   0 6 -36 136 -80 289 -76 263 -85 296 -76 286 2 -2 79 -128 171 -279z m-1630
   206 c18 -13 18 -14 -8 -9 -35 7 -57 -12 -57 -49 0 -23 6 -32 33 -43 l32 -14
   -27 -1 c-33 0 -68 31 -68 60 0 23 42 70 63 70 7 0 22 -6 32 -14z"/>
   <path d="M3451 7318 c-1 -27 -5 -38 -16 -38 -22 0 -228 -50 -243 -58 -6 -5
   -22 -57 -33 -118 -12 -60 -25 -113 -29 -117 -4 -5 -11 41 -15 102 -4 61 -9
   111 -11 111 -2 0 -61 -21 -131 -46 -149 -54 -323 -132 -339 -151 -7 -8 -15
   -31 -19 -51 -3 -20 -11 -55 -17 -77 l-11 -40 -16 68 -16 68 -95 -62 c-52 -34
   -125 -85 -162 -115 l-67 -54 20 -57 c29 -85 24 -93 -26 -38 l-44 50 -56 -60
   c-235 -255 -349 -593 -316 -939 6 -60 13 -111 15 -114 3 -2 74 19 158 47 l154
   51 22 98 c78 338 334 589 671 658 110 22 295 15 395 -15 38 -11 72 -19 74 -16
   2 2 1 47 -3 99 l-7 94 -42 11 c-215 54 -475 26 -671 -72 -90 -45 -141 -82
   -234 -171 -91 -87 -95 -85 -19 11 121 153 311 273 523 329 90 24 116 27 260
   25 88 -1 177 -2 198 -4 l38 -2 45 110 c25 61 48 112 50 115 6 5 -5 -591 -11
   -659 -3 -33 -17 -60 -60 -118 -243 -323 -606 -656 -1002 -922 -51 -34 -93 -65
   -93 -69 0 -4 11 -55 24 -113 13 -57 27 -137 31 -177 4 -40 10 -72 14 -72 3 0
   47 7 96 14 50 8 91 12 93 11 2 -2 -8 -45 -22 -96 -14 -51 -24 -94 -22 -96 2
   -2 28 18 57 44 92 82 97 84 65 28 -70 -122 -203 -274 -289 -330 -71 -46 1 -17
   229 93 342 165 355 168 434 97 34 -30 60 -45 78 -45 15 0 40 -7 56 -15 28 -15
   39 -13 238 47 227 68 211 58 192 124 -5 21 -2 22 70 26 62 3 80 7 98 26 20 19
   21 26 11 59 -5 21 -13 45 -17 54 -6 15 13 16 211 11 l218 -4 -31 33 c-97 106
   -187 300 -244 527 -9 34 -15 42 -34 42 l-24 0 20 -92 c11 -50 34 -133 52 -185
   18 -51 31 -93 30 -93 -11 0 -61 120 -99 234 -43 127 -45 131 -75 134 -21 2
   -30 -1 -30 -11 0 -26 31 -169 52 -240 10 -38 17 -71 15 -73 -6 -7 -60 143 -87
   243 -21 76 -25 81 -52 85 -16 3 -31 1 -34 -3 -2 -5 7 -66 22 -136 14 -70 28
   -139 30 -153 4 -28 -81 228 -91 274 -5 23 -10 27 -30 23 l-25 -4 0 211 c0 116
   -2 283 -5 371 -3 88 -10 408 -16 710 -7 303 -15 559 -20 570 -6 16 -8 12 -8
   -17z m-31 -1227 l0 -98 -62 -54 c-64 -54 -63 -46 1 25 50 54 8 29 -49 -28 -69
   -72 -69 -54 1 27 65 74 54 67 -70 -48 -62 -56 -54 -42 33 60 l60 70 -89 -85
   c-97 -92 -95 -87 11 35 38 44 89 106 114 138 25 31 46 57 47 57 2 0 3 -44 3
   -99z m0 -125 c0 -7 -16 -26 -35 -40 -43 -33 -44 -27 -4 19 34 39 39 41 39 21z
   m0 -49 c0 -2 -10 -12 -22 -23 l-23 -19 19 23 c18 21 26 27 26 19z m-27 -234
   c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m-453 -85 c-92 -88
   -285 -242 -413 -332 l-96 -67 6 -63 c7 -82 -3 -149 -27 -178 l-20 -23 15 37
   c19 46 19 118 2 186 l-14 52 241 179 c133 99 268 202 301 230 88 74 91 61 5
   -21z m470 0 l-1 -43 -32 37 c-28 32 -39 38 -82 41 -34 2 -24 4 33 5 l82 2 0
   -42z m-7 -158 c-4 -5 -41 -27 -81 -50 -70 -39 -84 -43 -330 -86 -141 -24 -260
   -44 -263 -44 -4 0 -17 -27 -29 -60 -13 -34 -24 -59 -27 -57 -2 2 7 33 19 68
   l23 63 60 13 c33 6 149 32 258 57 192 43 200 46 285 100 l87 56 3 -26 c2 -15
   0 -30 -5 -34z m176 -260 c0 -3 -13 20 -30 50 -17 30 -28 48 -26 40 2 -8 7 -26
   11 -40 6 -21 4 -20 -13 8 -17 25 -21 48 -20 105 l0 72 40 -115 c21 -63 39
   -117 38 -120z m-170 156 c0 -61 -16 -69 -51 -25 -16 19 -19 20 -14 5 7 -19 6
   -19 -13 -2 -11 10 -18 23 -15 27 5 9 74 48 86 49 4 0 7 -24 7 -54z m111 -127
   c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z
   m-156 -121 c3 -13 8 -49 11 -80 6 -56 6 -58 -18 -58 -22 0 -25 5 -31 53 -10
   90 -8 107 14 107 12 0 21 -8 24 -22z m-100 -20 c3 -13 7 -44 10 -70 5 -45 4
   -48 -18 -48 -20 0 -24 6 -30 46 -10 79 -8 94 14 94 12 0 21 -8 24 -22z m-100
   -10 c3 -13 7 -42 9 -65 5 -39 3 -43 -18 -43 -17 0 -24 7 -29 31 -10 50 -7 87
   7 92 22 9 27 7 31 -15z m-368 -66 c-20 -39 -39 -73 -44 -76 -13 -8 -282 -48
   -294 -44 -6 2 53 19 132 37 l142 34 46 63 c26 35 48 62 50 60 2 -2 -13 -36
   -32 -74z m274 10 c5 -48 4 -52 -16 -52 -23 0 -34 23 -34 71 0 30 8 41 30 37
   10 -2 17 -19 20 -56z m-102 -9 c3 -37 0 -43 -16 -43 -23 0 -32 18 -32 62 0 25
   3 29 23 26 18 -2 23 -10 25 -45z m-106 -13 c0 -22 1 -45 2 -52 1 -7 -14 -15
   -32 -19 -18 -4 -32 -4 -30 0 2 4 12 30 22 59 11 29 24 52 28 52 4 0 9 -18 10
   -40z m1174 -88 c-23 -1 -68 1 -101 6 l-60 8 68 9 c68 7 69 8 64 34 -3 14 -9
   35 -13 46 -4 11 13 -7 38 -40 l44 -60 -40 -3z"/>
   <path d="M3376 5307 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
   <path d="M3543 7302 l-33 -3 0 -76 c0 -42 2 -74 5 -72 6 7 66 152 63 153 -2 1
   -18 0 -35 -2z"/>
   <path d="M3553 6446 c-30 -44 -43 -73 -43 -97 l0 -34 26 40 c15 22 30 44 34
   48 4 5 13 -49 19 -120 7 -70 19 -175 27 -233 13 -97 13 -106 -3 -117 -9 -7
   -21 -13 -26 -13 -4 0 -5 6 -1 13 6 10 4 10 -7 0 -18 -18 -34 -16 -19 2 17 21
   0 18 -27 -4 -21 -18 -23 -28 -23 -125 l0 -106 71 0 72 0 -6 58 -5 57 14 -44
   c7 -25 15 -56 16 -70 3 -26 2 -26 -80 -29 -60 -2 -82 -6 -79 -15 2 -7 16 -12
   30 -11 15 0 63 1 108 2 73 2 80 4 74 20 -38 94 -87 379 -106 612 -6 74 -14
   156 -17 181 l-7 47 -42 -62z"/>
   <path d="M2800 6369 c-289 -75 -508 -296 -581 -589 -31 -121 -24 -310 15 -424
   15 -44 30 -86 35 -93 12 -23 271 161 501 356 213 181 456 438 583 616 l39 55
   -64 30 c-152 71 -367 91 -528 49z m57 -60 c44 -16 73 -49 73 -82 0 -46 -39
   -105 -82 -125 -39 -18 -49 -32 -23 -32 8 0 15 -4 15 -9 0 -12 -25 -21 -58 -21
   l-27 -1 25 -13 25 -14 -40 -8 c-33 -6 -36 -8 -20 -15 20 -8 20 -8 0 -9 -11 -1
   -28 -1 -39 0 -11 1 -15 -3 -12 -9 4 -6 15 -11 24 -11 11 0 13 -3 6 -10 -7 -7
   -25 -5 -55 5 l-44 15 30 -24 30 -25 -29 -1 c-25 0 -27 -2 -15 -17 13 -15 10
   -16 -36 -10 -45 7 -47 6 -30 -8 17 -12 18 -14 3 -15 -9 0 -29 5 -44 10 -24 9
   -25 9 -14 -5 15 -19 -1 -21 -33 -4 -22 12 -22 12 -3 -10 24 -26 11 -27 -32 -1
   -31 19 -32 19 -23 1 6 -10 24 -30 40 -44 30 -25 30 -25 7 -31 -33 -8 -89 11
   -117 40 -34 37 -34 129 1 198 52 103 199 234 309 277 52 20 145 24 188 8z"/>
   <path d="M1656 3265 c-21 -51 -41 -72 -51 -55 -9 15 -25 2 -19 -15 4 -10 -9
   -15 -55 -21 -34 -3 -61 -11 -61 -15 0 -5 33 -9 74 -9 72 0 104 -11 70 -24 -9
   -3 -39 -6 -67 -6 -40 0 -48 -3 -39 -12 7 -7 41 -12 79 -13 44 0 68 -4 70 -12
   4 -10 -12 -13 -57 -13 -45 0 -60 -3 -57 -12 3 -9 24 -12 70 -10 l66 2 112
   -167 c62 -92 114 -175 117 -185 2 -11 -6 -22 -25 -32 -44 -22 -131 -93 -143
   -116 -9 -17 2 -44 71 -171 l83 -152 83 -53 c45 -30 86 -54 91 -54 15 0 70 64
   116 137 84 130 129 273 142 449 8 98 16 93 -121 69 -43 -8 -81 -12 -83 -10 -6
   5 10 262 17 273 3 5 30 21 59 36 28 14 52 33 52 41 0 12 -10 10 -50 -10 -27
   -14 -54 -25 -61 -25 -24 0 -1 24 50 51 59 31 78 46 69 55 -3 3 -29 -6 -57 -20
   -59 -30 -61 -31 -61 -11 0 8 27 28 60 45 33 17 60 35 60 40 0 14 -5 13 -60
   -15 -58 -29 -60 -30 -60 -10 0 8 -4 15 -10 15 -5 0 -10 -4 -10 -10 0 -17 -20
   -11 -65 20 -49 34 -55 36 -55 16 0 -7 25 -29 55 -47 35 -21 55 -40 55 -52 0
   -20 -2 -19 -67 25 -33 22 -43 25 -43 14 0 -9 25 -32 55 -52 30 -20 55 -43 55
   -50 0 -20 -6 -18 -57 17 -30 21 -48 28 -55 21 -7 -7 8 -22 47 -48 l57 -38 -7
   -140 c-4 -84 -12 -146 -19 -152 -6 -6 -25 -16 -43 -22 l-32 -11 -15 62 -14 62
   49 45 c45 41 62 70 41 70 -4 0 -26 -18 -47 -40 -21 -22 -43 -40 -47 -40 -20 0
   -4 30 42 75 62 61 55 79 -11 24 -40 -33 -49 -37 -49 -22 0 10 20 36 45 56 25
   21 45 45 45 52 0 24 -13 18 -55 -25 -32 -33 -41 -37 -48 -25 -10 19 -27 19
   -27 0 0 -19 -5 -19 -64 1 -46 16 -64 15 -52 -4 3 -5 32 -17 66 -27 34 -10 60
   -24 60 -32 0 -16 -4 -16 -64 2 -27 8 -52 12 -55 9 -10 -10 29 -32 80 -45 41
   -11 68 -33 56 -45 -2 -2 -31 5 -65 17 -55 18 -66 27 -100 77 -66 98 -66 95
   -37 151 14 28 25 57 25 66 0 29 -17 15 -40 -35 -13 -27 -27 -50 -31 -50 -20 0
   -16 22 11 74 20 37 28 62 22 71 -6 11 -15 1 -35 -40 -26 -53 -47 -71 -47 -40
   0 8 12 39 27 70 18 37 24 58 17 65 -7 7 -16 -5 -28 -35z m254 -413 c31 -15 36
   -24 46 -77 7 -33 9 -64 4 -69 -6 -6 -73 81 -114 152 -11 18 23 15 64 -6z m45
   -400 c20 -107 35 -198 33 -204 -2 -5 -21 33 -42 86 -41 100 -56 119 -36 46 6
   -23 10 -44 7 -46 -2 -2 -23 36 -46 86 -24 49 -44 90 -46 90 -1 0 4 -26 11 -57
   7 -31 12 -59 10 -61 -7 -6 -96 125 -96 140 0 31 144 138 162 120 3 -4 23 -94
   43 -200z"/>
   </g>
   </svg>
)

export default ChatGPTLogo;