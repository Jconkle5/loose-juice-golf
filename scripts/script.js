$(document).ready(function() {

// Card Function
  $(function () {
    $.each(games, function (index, data) {
      // $("body").append(index + data);
  
      $("#center").append(
        '<div class="card"> <div class="card-header">' +
          data.name +
          '</div><div class="card-body">' +
          '<a id="hyper" href="' +
          data.url +
          '">' +
          data.gameName +
          "</a></div></div>"
      );
    });
  });
  
  // Card Info
  const games = [
    {
      name: "lane30schmidt",
      gameName: "Echo",
      url: "https://lane30schmidt.github.io/echo-376/"
    },
    {
      name: "bcoan2",
      gameName: "Echo",
      url: "https://bcoan2.github.io/cuddly-telegram-echo/"
    },
    {
      name: "kaibrysouthern",
      gameName: "Echo",
      url: "https://github.com/kaibrysouthern/special-palm-tree-echo"
    },
    {
      name: "westonhumphries",
      gameName: "Echo",
      url: "https://github.com/westonhumphries/miniature-octo-barnacle-echo"
    },
    {
      name: "jacksonthompson1",
      gameName: "Charlie",
      url: "jacksonthompson1.github.io/jt-lab-charlie/"
    },
    {
      name: "ConnorLBrown",
      gameName: "Charlie",
      url: "https://github.com/ConnorLBrown/bingbong-charlie"
    },
    {
      name: "mithrandiryeet",
      gameName: "Charlie",
      url: "https://mithrandiryeet.github.io/charlie_spaghett_1/"
    },
    {
      name: "VikAsNeHrA1",
      gameName: "Charlie",
      url: "https://vikasnehra1.github.io/CharlieLab/"
    },
    {
      name: "amannawaria12",
      gameName: "Echo",
      url: "https://github.com/amannawaria12/Echo_lab"
    },
    {
      name: "gagethekidd",
      gameName: "Echo",
      url: "https://github.com/gagethekidd/eery-eel-echo"
    },
    {
      name: "phenicieaaron",
      gameName: "Echo",
      url: "https://github.com/phenicieaaron/upgraded-tribble-echo"
    },
    {
      name: "anhnguyen148",
      gameName: "Echo",
      url: "https://github.com/anhnguyen148/echolab"
    },    
    {
      name: "StokeyBear",
      gameName: "Delta",
      url: "https://stokeybear.github.io/DeltaLab/"
    },    
    {
      name: "Jconkle5",
      gameName: "Charlie",
      url: "https://github.com/Jconkle5/loose-juice-charlie"
    },    
    {
      name: "Catharsis11867",
      gameName: "Echo",
      url: "https://github.com/Catharsis11867/RMarcumEchoLab376"
    },
    {
      name: "JAGEX",
      gameName:"Runescape",
      url: "https://play.runescape.com/"
    }
  ];

  });