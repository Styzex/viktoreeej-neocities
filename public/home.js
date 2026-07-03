function btn_link(page, title) {
  document.getElementById("page").src = page;

  const iframe = document.getElementById("head_bar");
  const iframeDoc = iframe.contentWindow.document;
  iframeDoc.getElementById("title").textContent = title;
}
