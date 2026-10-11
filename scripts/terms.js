// 用户条款页（Coves、Habits 共用）：按浏览器语言显示对应区块，点语言按钮切换。
// 支持中 / 英 / 日 / 韩，其它语言显示中文。放在 <body> 末尾加载。
(function () {
  var SUPPORTED = ["zh", "en", "ja", "ko"];

  function show(id) {
    var blocks = document.querySelectorAll(".modern");
    for (var i = 0; i < blocks.length; i++) {
      var on = blocks[i].id === id;
      blocks[i].classList.toggle("show", on);
      if (on) document.documentElement.lang = blocks[i].getAttribute("lang");
    }
    var links = document.querySelectorAll(".lang a");
    for (var j = 0; j < links.length; j++) {
      links[j].classList.toggle("active", links[j].getAttribute("href") === "#" + id);
    }
  }

  // 只看主语言：en-US、zh-TW、ja-JP 都按 en / zh / ja 处理
  var primary = (navigator.language || "zh").toLowerCase().split("-")[0];
  show(SUPPORTED.indexOf(primary) >= 0 ? primary : "zh");

  // 点击语言锚点：不跳转，直接切换显示
  var links = document.querySelectorAll(".lang a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      show(this.getAttribute("href").slice(1));
    });
  }
})();
