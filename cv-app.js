function select(e) {
  $(".oficina").css({ display: "none" });
  $(".estado" + e.value).css({ display: "block" });
}

setTimeout(() => {
  $("#container-loader").fadeOut();
}, 2000);

function direction(e) {
  $("#direction").fadeIn();
  //reset
  document.getElementById("content-direction").innerHTML = ``;

  var name = e.value.split("NAME:")[1].split("URL:")[0];

  var url = e.value.split("URL:")[1].split("NAME:")[0];

  // create
  document.getElementById("content-direction").innerHTML = `<p>${name}</p>
    <a href="${url}" style="color:red; font-size:15px; margin-top:10px;"><strong>VER UBICACION</strong></a>`;
}

