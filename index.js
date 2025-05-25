document.addEventListener("DOMContentLoaded", function () {
  const caveContentBox = document.getElementById("cave-content");
  const caveIds = $(".cave").map(function () {
    return this.id;
  }).get();
  const mapIcons = $(".map-icon").map(function () { return this.id; }).get();

  console.log(caveIds);

  /* get the cave description */
  $(".cave").on("click", function () {
    const id = $(this).attr("id");
    $.get(`caves-content/${id}.html`)
      .done(function (html) {
        changeContentWithHTML(html);
      })
      .fail(function () {
        changeContentWithHTML("<p>Content not available.</p>");
      });
  });

  /* get the symbol stone text */
  $(".stone-icon").on("click", function () {
    const id = $(this).attr("id");
    $.get(`stone-recordings/${id}.html`)
      .done(function (html) {
        changeContentWithHTML(html);
      })
      .fail(function () {
        changeContentWithHTML("<p>Recording not available.</p>");
      });
  });

  /* get the monster text */
  $(".monst-icon").on("click", function () {
    const id = $(this).attr("id");
    $.get(`monster-info/${id}.html`)
      .done(function (html) {
        changeContentWithHTML(html);
      })
      .fail(function () {
        changeContentWithHTML("<p>Monster info not available.</p>");
      });
  });

  /* get item text */
  $(".other-icon").on("click", function () {
    const id = $(this).attr("id");
    $.get(`items-info/${id}.html`)
      .done(function (html) {
        changeContentWithHTML(html);
      })
      .fail(function () {
        changeContentWithHTML("<p>Item info not available.</p>");
      });
  });
  
  /* change the cave description */
  function changeContentWithHTML(htmlContent) {
    caveContentBox.innerHTML = `
      ${htmlContent}
    `;
  }

  /* highlight monster caves */
  $('#icons-btn').on('click', function() {
    caveIds.forEach(id => {
      $('#' + id).removeClass('monster-cave potion-cave other-cave stone-cave bird-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  $('#monster-btn').on('click', function() {
    const monsterCaves = ['p3s', 'c3w', 'p9ml'];
    const monsterIcons = $(".monst-icon").map(function () { return this.id; }).get();

    monsterCaves.forEach(id => {
      $('#' + id).addClass('monster-cave');
    });

    caveIds.forEach(id => {
      $('#' + id).removeClass('potion-cave other-cave stone-cave bird-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).addClass('hidden');
    });

    monsterIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  /* highlight potion caves */
  $('#potion-btn').on('click', function() {
    const potionCaves = ['c3w', 'c8m', 'c9mr'];
    const potionIcons = $(".potion-icon").map(function () { return this.id; }).get();

    potionCaves.forEach(id => {
      $('#' + id).addClass('potion-cave');
    });

    caveIds.forEach(id => {
      $('#' + id).removeClass('monster-cave other-cave stone-cave bird-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).addClass('hidden');
    });

    potionIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  /* highlight xp/item caves */
  $('#other-btn').on('click', function() {
    const otherCaves = ['p8cr', 'c3w', 'c75m'];
    const otherIcons = $(".other-icon").map(function () { return this.id; }).get();

    otherCaves.forEach(id => {
      $('#' + id).addClass('other-cave');
    });

    caveIds.forEach(id => {
      $('#' + id).removeClass('monster-cave potion-cave stone-cave bird-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).addClass('hidden');
    });

    otherIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  /* highlight symbol stone caves */
  $('#stones-btn').on('click', function() {
    const stoneCaves = ['p1', 'p5s', 'p9m', 'p8m', 'c12t', 'cc9ebb', 'c11b', 'ec11sf', 'p12e', 'c13e'];
    const stoneIcons = $(".stone-icon").map(function () { return this.id; }).get();

    stoneCaves.forEach(id => {
      $('#' + id).addClass('stone-cave');
    });

    caveIds.forEach(id => {
      $('#' + id).removeClass('monster-cave potion-cave other-cave bird-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).addClass('hidden');
    });

    stoneIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  /* highlight birds caves */
  $('#bird-btn').on('click', function() {
    const birdCaves = ['c2ws', 'sc4ms', 'p5s', 'p6m', 'p65m', 'c7m', 'p75m', 'p7m', 'p9ml', 'p8t', 'mc10t', 'p11t', 'p7c', 'p8cl', 'c10b', 'p10b', 'p10em', 'ec11sf', 'p12f', 'c13f', 'p12e'];
    const birdIcons = $(".sparrow-icon").map(function () { return this.id; }).get();
    
    birdCaves.forEach(id => {
      $('#' + id).addClass('bird-cave');
    });

    caveIds.forEach(id => {
      $('#' + id).removeClass('monster-cave potion-cave other-cave stone-cave');
    });

    mapIcons.forEach(id => {
      $('#' + id).addClass('hidden');
    });

    birdIcons.forEach(id => {
      $('#' + id).removeClass('hidden');
    });
  });

  /* icon tooltips */
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });


});
