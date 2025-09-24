$(document).ready(function () {
    $("#buttonRight").click(function (e) {
    $("#listBox1 > option:selected").appendTo("#listBox2");
    e.preventDefault();
  });

  $("#buttonRightAll").click(function (e) {
    $("#listBox1 > option").appendTo("#listBox2");
    e.preventDefault();
  });

  $("#buttonLeft").click(function (e) {
    $("#listBox2 > option:selected").appendTo("#listBox1");
    e.preventDefault();
  });

  $("#buttonLeftAll").click(function (e) {
    $("#listBox2 > option").appendTo("#listBox1");
    e.preventDefault();
  });
});
