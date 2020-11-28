# reaction-flower-viewer

<img width="1440" alt="スクリーンショット 2020-11-28 7 08 17（2）" src="https://user-images.githubusercontent.com/56382189/100487763-a70fb780-314d-11eb-9250-844993e929c3.png">

reaction flowerのviewerです。接続している数、お花のキャラクターが並び、笑顔の人の数だけお花が大きくなります。Zoomで講演や授業している際に、聞いている人の反応を知る助けとなります。

```json
{"dataNum":0,"happyCount":0}
```
この形のjsonが返ってくるapiを作成したので、それの活用例です。

## アクセス
https://shusukeo.github.io/reaction-flower-viewer/

## 参考文献

* 上部固定ヘッダをつくる https://qiita.com/7note/items/6bcadabe1667919bc26c
* aタグのダサい下線を消す方法 https://techacademy.jp/magazine/21239
* imageMode(CENTER)でp5jsの物体を中心座標で管理できる https://p5js.org/reference/#/p5/imageMode
* JSONパース https://techacademy.jp/magazine/27722
* ajaxでDOM更新 https://www.sejuku.net/blog/25316