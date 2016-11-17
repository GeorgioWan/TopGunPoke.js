> # 目前狀態 (2016/11/17)

> 運行狀況：良好 :heavy_check_mark:

> 目前版本：**v1.2.6**

> 釋出日期：**2016/11/17**

> 【版本更新消息】 更新 api、修正消失時間顯示錯誤 bug。

---

# TopGunPoke - 大家找寶貝 Chrome 版通知器 :loudspeaker:

泡地圖、等捷報？

有這些工具還是不夠嗎？

一強還有一強強，一屌還有一屌屌！

一起點開 Chrome/Firefox 坐等 **高素質** 寶可夢吧！ *... 終於可以專心做事了*:laughing::laughing:

## 安裝步驟 Install

### Chrome 愛用者

1. 開 Chrome 安裝 [**cjs**](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija)
2. 打開 [大家找寶貝](https://pkget.com/)
3. 點擊 chrome 右上角 **cjs** 圖示，將 **enable cjs for this host** 打勾
4. 貼上 [**TopGunPoke.js**](https://github.com/GeorgioWan/TopGunPoke.js/blob/master/TopGunPoke.js) 的程式碼，點擊 Save 後會刷新頁面 (刷新頁面後即可看到左下角新增的 plugin，如下圖)

### Firefox 愛用者

1. 開 Firefox 安裝 [**JS Injector**](https://addons.mozilla.org/zh-TW/firefox/addon/js-injector/)
2. 打開 [大家找寶貝](https://pkget.com/)
3. 點擊 firefox 右上角藍色 **js** 圖示
4. 新增一筆資料，於 URL filter 填入 **https://pkget.com**
5. 於 Javascript code 貼上 [**TopGunPoke.js**](https://github.com/GeorgioWan/TopGunPoke.js/blob/master/TopGunPoke.js) 的程式碼，點擊 **打勾** 後手動刷新頁面即可 (刷新頁面後即可看到左下角新增的 plugin，如下圖)

![TopGunFP.js](http://i.imgur.com/3vdIOyU.png)

## 如何使用 How to use

* 於 **IV 輸入框** 輸入想追蹤的寶可夢 IV 值 (範圍 0 - 100，建議 85 以上，以免通知過多)
* 輸入完值後，按下 **執行鈕**(三角形) 即開始追蹤與通知
* :new: 透過 **追蹤選擇器** 可選擇例外通知的寶可夢喔！(此設定無論多少IV都會通知，方便追寶或增糖，**建議勾選稀有怪**)

## 說明 Introduce

### 追蹤與篩選範圍

　同 大家找寶貝，**畫面顯示範圍** 即為 **追蹤與篩選範圍**；範圍內僅會顯示符合條件的寶可夢，方便追擊！
 
### :new: 關於追蹤選擇器

　**TGP** 知道大家已經是 **精益求精** 的訓練大師，所以在大家找寶貝這一次的復活，也添加了新功能 - :sparkles: **追蹤選擇器** :sparkles:
 
　你可以在搜尋框中查找你要找的寶可夢(支援中英，安心服用)，如下圖，搜尋 **「火」** 字：
 
　![追蹤選擇器](http://i.imgur.com/WkFYxg3.png)
 
　直接勾選你想要追蹤的寶可夢，如下圖：
 
　![追蹤選擇器](http://i.imgur.com/upCnx3l.png)
 
> **Tips**: 此追蹤器會忽視IV作通知，故建議選擇 **稀有** 或 **想增糖** 的寶可夢！

### 關於通知內容
 
　**TopGunPoke** 的通知內容資訊很清晰，以下圖為例：
 
![來自大家找寶貝](http://i.imgur.com/BLplz70.png)

* 將顯示 **來自哪個雷達** 的通知
* **寶可夢名稱** (中英)
* **IV % 數** 與 **IV 細項數值 (攻擊Atk/防禦def/體質sta)**
* **招式名稱** (中英)，若為 **最佳攻擊招式** 則會在後顯示 ★★★ (僅供參考)
* 距通知後 **消失時間** (僅供參考)

> **Tips**: TGP 除了為你作**顯示篩選**的動作，還提供你更有趣的服務；現在，你只要 **點擊通知框**，TGP 隨即幫你移動至該寶可夢位置！

## 友好宣告

　TopGunPoke.js 只是出於 **懶** + **樂趣** + **工程師的浪漫** 所以寫了這個小工具
 
　若造成 **大家找寶貝** 的困擾與不便，即會關閉此 repo！
 
　**PEACE & ROCK** :metal:

## 關於更新

　不定期 **更新**、**改善**、**修BUG**，歡迎 star & watch repo。
 
## 問題回報或建議

　非常歡迎與期待各種聲音的出現！如果有任何想表達的，都可以 [在這](https://github.com/GeorgioWan/TopGunPoke.js/issues/3) 留下你的訊息 :grin:

## 歷史事件

> ## 11/07 更新消息

> 隨著 [**大家找寶貝**](https://pkget.com/) 的復活，**TopGunPoke** 又可以一起開心追寶啦！

> 這次還更新了新功能喔！快來一起追逐 **超稀有**、**超高IV** 的寶可夢吧 :tada::tada::tada:

> ## 11/01 ~~目前狀態~~

> 目前此 pugin 因支援的雷達陣亡，故一起GG惹，這邊就推薦一下目前好用雷達：
  
> **網頁**請用 [FastPokeMap](https://fastpokemap.se/beta/)，**手機** 請用 [PokeWhere](http://pokewhere.co/?utm_source=fb&utm_medium=apost-tw)

> ## 10/28 更新消息

> 距離雷達失效已近一個月，目前低調使用 [findpkm](https://findpkm.com/)，而本 plugin 目前也只針對 **稀有度為5** 的寶可夢作通知。

> ## 10/08 重大消息

> 由於昨夜凌晨官方 **全方面封鎖** 雷達地圖，以致各大地圖目前皆已失效

> 所以此 plugin 也跟著唇寒齒亡，待地圖修復，方會立即更新並支援！

## License

Copyright © 2016 Georgio Wan & Andi Pratama - [MIT License](https://github.com/GeorgioWan/TopGun56.js/blob/master/LICENSE)
