$(document).ready(function() {


  $(function () {
    $.each(games, function (index, data) {
      // $("body").append(index + data);
  
      $(".center").append(
        '<div class="card"> <div class="card-header">' +
          data.name +
          '</div><div class="card-body">' +
          '<a href="' +
          data.url +
          '">' +
          data.gameName +
          "</a></div></div>"
      );
    });
  });
  
  const games = [
    {
      name: "lane30schmidt",
      gameName: "whole lotta wow1",
      url: "https://lane30schmidt.github.io/echo-376/"
    },
    {
      name: "bcoan2",
      gameName: "whole lotta wow2",
      url: "https://github.com/bcoan2/cuddly-telegram-echo"
    },
    {
      name: "kaibrysouthern",
      gameName: "whole lotta wow3",
      url: "https://github.com/kaibrysouthern/special-palm-tree-echo"
    },
    {
      name: "westonhumphries",
      gameName: "whole lotta wow4",
      url: "https://github.com/westonhumphries/miniature-octo-barnacle-echo"
    },
    {
      name: "jacksonthompson1",
      gameName: "whole lotta wow5",
      url: "jacksonthompson1.github.io/jt-lab-charlie/"
    },
    {
      name: "ConnorLBrown",
      gameName: "whole lotta wow4",
      url: "https://github.com/ConnorLBrown/bingbong-charlie"
    },
    {
      name: "mithrandiryeet",
      gameName: "whole lotta wow4",
      url: "https://mithrandiryeet.github.io/charlie_spaghett_1/"
    },
    {
      name: "VikAsNeHrA1",
      gameName: "whole lotta wow4",
      url: "https://vikasnehra1.github.io/CharlieLab/"
    },
    {
      name: "amannawaria12",
      gameName: "whole lotta wow4",
      url: "https://github.com/amannawaria12/Echo_lab"
    },
    {
      name: "gagethekidd",
      gameName: "whole lotta wow4",
      url: "https://github.com/gagethekidd/eery-eel-echo"
    },
    {
      name: "phenicieaaron",
      gameName: "whole lotta wow4",
      url: "https://github.com/phenicieaaron/upgraded-tribble-echo"
    },
    {
      name: "anhnguyen148",
      gameName: "whole lotta wow4",
      url: "https://github.com/anhnguyen148/echolab"
    },    
    {
      name: "StokeyBear",
      gameName: "whole lotta wow4",
      url: "https://stokeybear.github.io/DeltaLab/"
    },    
    {
      name: "Jconkle5",
      gameName: "whole lotta wow4",
      url: "https://github.com/Jconkle5/loose-juice-charlie"
    },    
    {
      name: "Catharsis11867",
      gameName: "whole lotta wow4",
      url: "https://github.com/Catharsis11867/RMarcumEchoLab376"
    }
  ];

  });