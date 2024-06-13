html2canvas(document.querySelector("#capture"), {
  // allowTaint: true,
  // taintTest: false,
  useCORS: true,
}).then(function (canvas) {
  var imgageData = canvas.toDataURL("image/jpg");
  var newData = imgageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
  jQuery("a").attr("download", "_상세.jpg").attr("href", newData);
});