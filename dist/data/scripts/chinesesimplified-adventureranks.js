!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("GenshinDbData",[],n):"object"==typeof exports?exports.GenshinDbData=n():(e.GenshinDbData=e.GenshinDbData||{},e.GenshinDbData["chinesesimplified-adventureranks"]=n())}("undefined"!=typeof self?self:this,(function(){return e={410:(e,n,s)=>{e.exports=s(574)("H4sIAAAAAAAAA+1cW08cRxb+L/XcD9PXGZwnK8pKkfamrKV9yOZhZGazKDagAXuziiLhGEOws9jGGF8AEWOvr2tsxw6LjYE/Q3dP/4vt0+dUdfVtepqmYSBEkcfuruqu/upU1fmqzne+Y4PN8SY79R379B9Dw62x1l+Gzo+eG/r7UGsQLjYHL7aGxy+0W+3m8DdjcEWFP4ab51vslP93hbW+HWWn9LqpsAvD50bOfjPYGjvbHhodHxoZ9kv4Bdqtfzbb/sO+/Op7hWlSbY3XNmu1/NqimnPzmXNtxr91duTC8Dg7pdZqUH/8X6Nw9w+nz3z2xeenf8++V0QN95dtb37TnX/amXnlruyEVfWu1ZxfLzm/Pu9MXHHvT7qb173nP4U1zZSa8H269H06/z5L6wGdo/F9hvR9Bv++eqHvs2dX3JW30qtyPm5+yf+/c/WNd2XH23jQvYmHgokpYWJyTBpmxTa9uOFdmt59f839eFeq1y+YWBImFsdkoGpM+t5U6hIsdQ6LWutl9iyBiz015917Zq+t26+33e2tNHM5/cWZz393+tMzh4RLQ8KlIXDRKl4XQlwevbM3HvchLgMSLgMCF/2gcPGnF3809SEuak32QmoCGaPilbbz6vbu1pKz8Mz+5VkaLH/97PSf//THwwIl4poJ30w1y4Fi9mwu3vRNZ/lVaXPpPluLtxVBRnY7VeF3qlahBamg49KZnLI/vnF+vtmZ/KH0Cl0BJrKrqgpfVa2XW4xyrWVfHZcKYJE9XFW4uGojCxb7ybwzc3d3Y9Z5t+1deui+3XQ3VzpPHnrzl/YJsX43JNn/VYUDrNXKrVL5hjQ34c499QelN7fprs7ab272IziyI6wKT1jLJMz2o/u7Hz50Ls07Sx9+g7YkO8iq8JC1cjsEWr7H8/EHe3ELJqXF6/24fsn+sSocZK3cxkI+LP1uLbJ7rAr/WCu3hPVgLVtzu+8fgLXsA5naf1g02TnWhHOsNbKsZXdjwb39k/tyxv3wxLl+w/73dGf6rer/4xNn4rk788xf3LzHC97qlFzkE2d2pnNjy/7Pgn31DV762zA21y/m3V3f3bjq3bshnqeZftWe/Kp6Dl3fgwPR54asyZ67Fu6qlqMzWu5q4Eyu2D++8KG0p37u1ZBLQem9nI9AaewZSjXtywIsI1vMwtfXi21S7gHL21f8hRuw3Ll8bLCUOYImOIJRzrXLx9KbuGFfmYEhLs8LFWA5fdmZ3HFnF92b95yFl+7MdM8TyvRze+mps7ztt7CXmgGaMrXQBLUwym3n5KN5UBOms/7Inp7wludgH6AQms7SROfykvvuhXNvvWc0ZdqhCdphmOUW/0K0I97W7ns66Zhq3YftrQn7+j176rU7O1MMU3v5vjuz6m1O9lgzwFRmK5pgK0Ym+e0JUz1/474Lpt3x6fsZVCY0miA0plrqKCQfUXtx0Vl474957+Gs397O2mt7Z6rc4O/eEQcKqkyHNEGHTKPUdl6e23mwNtplZcp5W5eVKa1mAKhMpDRBpMxyPlMPVvrysf3whd/19urTAjvHe7HPbotTTs0ui1MWoLpMwXRBwaxaIQqm7zMF0zMp2OFP2XtfBnNqdlkGM3tPpmO6oGNWOUfN6H04uNtb7n/nqxwOmdN1o3sLHz3pXHvjLU6mTNdWFpoyIdMFIbOsQmjGZ2u1Vyy920sZvs9RxDISXxQGGA1UbJn7RyH6B0qZjelhLJNaytctMMh33z92X24fF8OU2Zgu2FjdqBhNeRmyl+9UScUOEk2Zh+mCh9XrpRzcnqdM5866N7dyKJap5qzmXcAcyAJTpmC6oGCNWikKZh4hClYFqDIF0wUFa+ilGEM+qP0w3quAUyZguiBgjXIHfD3AedjregVYGjL3MsLYsJqZNeBTyZe5z+TL6Pn8K2+ePqZjwJBZlxGGr5WMXys2p1RJYrPBTPMDegMztR8CNGXWZYQhb1o5j+y3iqbMu4wwWE4vtuW4Bydi7Y699si7te7eWjsch6wKNGXqZYQxdoZRisYeheWuCjRl6mUI6qWaejm2oPW+H358xrlMvAxBvFSrar+2f8iCltPQbrBmqsZkCmaEwpe6VvFihNMnDPid2UOZPitBU+ZeRiiXaWgHsxgtr9pX/nd80JSplxGKbAbKqY8K2GYBiU3fo2nK5MsMYw+tYkt74cXosBf2SrCUCZEpCJHWaByIZTp31jtrDw7HMnNCLLuhmbYbG6ApEyIzjAssqTI8Ak5nJWjKhMgUhEjXi53qnaCJaMqEyBSECMA8QbM4mhFBfihI0rVMRpTcAdzPrT+r1vPWX14yhGPZXzLpMkONlNkolzDgCJi/vne3QcsK4jRlsmWGGqqGWez48AROhFNmW6ZgW77fkKmnOYGzC5wy3TIF3dKNmnoCZ3E4LZlvWcC39s6x9rT2HOCZ0/7j5/+nsKHhwda3BRJgwevON0cpF1aQA8unFkE2K98pDrI++e5ckB3JZJgRyGKYBcefmYO0L/6UEqQ58cdCkNYD0llgGgs1eCQ8E3IWYK4CUOqjQh/E6ShKB9E1iq1BYYzKYhDPomgW9KKoEwWJJEojQRWIakBQm6HKTAsaDu8ApQ8qfEClguoUUFigsgJ0AagHgHh2jGOHIGwMvoboYYwahrBXDHeFEEoMnYTwPwz70wN44B0Qe4UxVxA3hPFCEPOCsS4QsIGBGhBlgNEFcECOB+NwvIvHunBgiAeFcNiFh1xwUIMHNEbQCfAO2CDHjXHY3sVtXdiRxJ1I2E3DXTTYCcIdINjFwN0L4ODIvYE/Im8E7oOcB/x29NdNk/ua4M2gFwMLMS7AsIbg2gHTH057MHLhD98CwaLGTuzpxJ72yZ6a54aaY4FF+f842xxvfT3SHkILo2Xz1JfCPBRhCoowAEV0u0Kdjd2siM5VRJcqoiMV6jTsOIW6i/pHoV6hblAIfEJbERgrAk9FoKgERs9RUwRWisBFEWgoNDAUGhBfKdGkPfjl/tW4vDcKiVYAlxp9tEENTTQgJZkPf5uWVzeeXAcqqpEb0YcWan0t2q3Uj/Bw9A3ggeITg7GJA8+iFuOwMdHCFbRXK0A3svDzx2BrLN6G+OszraohTCs0Ky3FtqwUA6tlWZmZZWq1LFszswwO7Ul2j+CLdfGJhmjrAH99iFmxlyRznsCrzKDP5BwWcBV7Us5VAFfRImXht39VUyNDgjwvvBGzjr7tgIgAG5quwdWIlBiu6sGXJuVVeC+wNrDfpIoqWiBFTwQFDDRVKJCUDUULpChooEBo+w20eOjEpPyFF6UCSZVLrEDq+TKUqfM+8/sCCsYkWVBkIHKDxCn+DR0noqTfjff60UjishBoqRa5QWH5cMOIdxNE28ENk7feiD6UAqehSABmPCGlfwPaaMWfG9wIPx+Hsxz5A/f18CodaMPVulQWD2bhaiNSFg4Y4epAeJUOd/yrZnQ1oRSR/o169DqmSPSvNyLXw8f7T/fdjdH2yGirPU7uhmCdIV+PpdBLZtlITX2XzDGXqhwVnDZGPGPcNTV1VCwHUCzJSyxVRpKkxvI/xFIYpOo5U6WaqULFVA1iqgQvVSmXKoLLCjlJijKTurRUrp2UXCW1LsnY1aTqIJnGNRZrFAuKiwV5xKIUYsfssbPNZGrUZFLQuK3zfYPzza9b2TmyKdk15YSm1MmULZgS5FJCWMp/Suk+eXZLntCRpy/kKft4jjqeeY0nGePZs3i6KJ4fiScE4mlmeIoUnt6DJ6bgKRV4GgAuXud6ay4T5upWrpPkCj+uTuPSKi4K4nIWrsTg4gEe9c4jtnkEMI9d5VGXPF6QR7rxKC0eVsQDYngoBw9C4Afo/OiXH1ry4zZ+UMQPIPjOOd/y5XuVfJMt6POx8eY451UX2hdb+NcL7XP4l4ut9liw45ZhFLARp+GPjj8G/pj4Y+FPHX8a+DOAPwGnZ8ToGfF5RmyeEZdnxOQZ8XhGLJ4Rh2fE4Bnxd0bsnRF3Z8TcGfF2RqydEWdnxNgZ8XVGbJ0RV2fE1BnxdEYsnRFHZ8TQGfFzRuycETdnxMwZ8XJGrJwRJ2fEyBnxcUZsnBEXZ8TEGfFwRiycEQdnxMAZ8W9G7JsR92bEvBnxbkasmxHnZsS4GfFt5lvF/wHkzIQMQl8AAA==")},574:e=>{"use strict";e.exports=function(e){for(var n="undefined"!=typeof window&&"function"==typeof window.atob?window.atob(e):Buffer.from(e,"base64").toString("binary"),s=new Uint8Array(n.length),t=0;t<n.length;++t)s[t]=n.charCodeAt(t);return s.buffer}},504:function(e,n,s){let t=s(410);const f="undefined"!=typeof self?self:this;f&&f.GenshinDb&&f.GenshinDb.addData&&t&&f.GenshinDb.addData(t,!0),e.exports=function(e,n,s=!0){return e&&e.addData&&t&&(e.addData(t,n),s&&(t=void 0)),t}}},n={},function s(t){if(n[t])return n[t].exports;var f=n[t]={exports:{}};return e[t].call(f.exports,f,f.exports,s),f.exports}(504);var e,n}));