
  
function readAloud() {
// テキストを取得
const text = document.getElementById("text").value;
if ('speechSynthesis' in window) {
  // 発言を設定
  const uttr = new SpeechSynthesisUtterance()
  uttr.text = text
  // 発言を再生
  window.speechSynthesis.speak(uttr)
} 
}
$('#videoPlay').click(function(){
const text = document.getElementById("text").value;
const arigato = "ありがとう"
console.log(text);
if(text.indexOf(arigato) > -1) {
  setTimeout(function(){
   var v = document.getElementById('video');
   v.play();
 },3000);
  } 
});



    //1.Save クリックイベント
    $('#save').on("click", function () {
      var a = document.getElementById('audio');
   a.play();
    const key = new Date();
    const text_val = $('#text').val();

    // ローカルストレージにセット（登録）します🤗
    localStorage.setItem(key, text_val);

       var yy = key.getFullYear();
      // 月(月のデータは「０～１１」が格納されてるので１を足してます)
      var mm = key.getMonth() + 1;
      // 日付
      var dd = key.getDate().toString().padStart(2, '0');
      // 時間
      var h = key.getHours().toString().padStart(2, '0');
      // 分数
      var m = key.getMinutes().toString().padStart(2, '0');
      var day = ( yy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m );
       console.log( yy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m );
       //$('#day'+ key).html(yy + "年" + mm + "月" + dd + "日" + " " + h + ":" + m );
    

    // 埋め込み用のhtmlのタグと変数を紐づけるテクニック
    // ES6で登場したテンプレートリテラルというテクニックを使っています🤗
    const html = `
      <li>
        <p>${day}</p>
        <p>${text_val}</p>
      </li>
    `;

    // html=画面に表示します🤗
    $('#list').append(html)

    // 入力をしやすくするために、空欄にする🤗
    $('#text').val("");

    // この下は消さない
  });

  //2.clear クリックイベント
  $('#clear').on('click', function () {
    //保存されているローカルストレージを全削除する🤗
    localStorage.clear();

    // 画面に表示されているliタグを削除=抹消
    $('#list').empty();

    // この下消さない
  });

  //3.ページ読み込み：保存データ取得表示
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // htmlのタグと変数の埋め込み
    const html = `
      <li>
        <p>${day}</p>
        <p>${value}</p>
      </li>
    `;

    // 画面に表示する
    $('#list').append(html);
  }


