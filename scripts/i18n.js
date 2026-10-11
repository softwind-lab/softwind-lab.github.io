// 多语言页：默认英文；浏览器首选语言是中文时显示中文，是日语时显示日语；手动选过的，以选的为准。
// 页面里用 lang="en" / lang="zh-Hans" / lang="ja" 标出各语言的内容，样式按 <html lang> 隐藏其余的。
// 必须在 <head> 里同步加载，赶在页面渲染之前定下语言，否则会先闪一下英文。
(function () {
  var STORAGE_KEY = "softwindlab-lang";
  // 语言 → <title> 上存这种语言标题的属性；英文标题就写在 <title> 标签里
  var TITLE_ATTRS = { en: "data-en", "zh-Hans": "data-zh", ja: "data-ja" };
  var root = document.documentElement;

  function detect() {
    var saved;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (TITLE_ATTRS.hasOwnProperty(saved)) return saved;
    var nav = navigator.language || "";
    if (/^zh(-|$)/i.test(nav)) return "zh-Hans";
    if (/^ja(-|$)/i.test(nav)) return "ja";
    return "en";
  }

  function apply(lang) {
    root.lang = lang;

    var title = document.querySelector("title");
    if (title) {
      if (!title.hasAttribute("data-en")) {
        title.setAttribute("data-en", title.textContent);
      }
      var text = title.getAttribute(TITLE_ATTRS[lang]);
      if (text) document.title = text;
    }

    // 语言下拉框默认带 hidden：没有 JS 时它不起作用，就不显示
    var selects = document.querySelectorAll("[data-lang-select]");
    for (var i = 0; i < selects.length; i++) {
      selects[i].value = lang;
      selects[i].hidden = false;
    }
  }

  apply(detect());

  document.addEventListener("DOMContentLoaded", function () {
    // 下拉框在 body 里，这时才拿得到
    apply(root.lang);

    document.addEventListener("change", function (e) {
      if (!e.target.hasAttribute || !e.target.hasAttribute("data-lang-select")) return;
      var next = e.target.value;
      if (!TITLE_ATTRS.hasOwnProperty(next)) return;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {}
      apply(next);
    });
  });
})();
