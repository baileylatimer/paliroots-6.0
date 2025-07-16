// Collection Page click JS
$(document).ready(function () {
  // $(".coll-variant-option").click(function(){
  //   var pro_id = $(this).attr('data-pro-id');
  //   var var_id = $(this).attr('data-id');

  //   $('.input-'+ pro_id).val(var_id);
  //   $('.variant-have-btn-'+ pro_id).trigger('click');
  // });
  // Function to fetch cart quantity
  function fetchCartQuantity() {
    return $.getJSON("/cart.js").then(function (cart) {
      return cart; // Total number of items in the cart
      console.log('cart => ' + cart)
    });
  }
  // fetchCartQuantity();
  // Log cart quantity on each body click
  $("body").on("click", function () {
    fetchCartQuantity().then(function (cart_items) {
      console.log('cart_items:', cart_items);
      var cartTotalcents =  cart_items.total_price;
      console.log('cartTotalcents => ' + cartTotalcents);
      $('body').attr('data-cart', cartTotalcents);
      $("#cart-icon-bubble_menu-drawer .cart-count-bubble span").text(
        cart_items.item_count
      );
    });
  });
  $(".owl-carousel").owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    autoplay: false,
    items: 1,
  });
  $("#cart-icon-bubble_menu-drawer").on("click", function () {
    $("#cart-icon-bubble")
      .get(0)
      .dispatchEvent(new Event("click", { bubbles: true }));
  });

  //adding class according to window scroll start
  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    let st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // Scrolling down
      $("body").addClass("scroll-down").removeClass("scroll-up");
    } else {
      // Scrolling up
      $("body").addClass("scroll-up").removeClass("scroll-down");
    }

    lastScrollTop = st;
  });
  //adding class according to window scroll start

  //size chart js start
  $(".size-tab-title").each(function () {
    $(this).on("click", function () {
      $(".size-tab-title").removeClass("active-size");
      $(this).addClass("active-size");
      var tabsize = $(this).attr("data-tab");
      console.log("tabsize => " + tabsize);
      $(".size-tab_content_wrap .size-tab-content").each(function () {
        var tabsizecontent = $(this).attr("data-tab");
        if (tabsize == tabsizecontent) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });

  //size chart js end
});

//on click custom quick add

function varclick(elem) {
  var pro_id = $(elem).attr("data-pro-id");
  var var_id = $(elem).attr("data-id");

  $(".input-" + pro_id).val(var_id);
  $(".variant-have-btn-" + pro_id).trigger("click");
}

$(document).ready(function () {
  // Check if the .scrolling-announcement-bar div exists
  if ($(".scrolling-announcement-bar, .country-regionselect-bar").length) {
    // Add 'scrolling_baradded' class to the body
    $("body").addClass("scrolling_baradded");
  }

  //footer custom selector js start
  //selector country region start
  $("#cust_selector_cuntry").on("change", function () {
    var selectedValue = $(this).find(":selected").attr("data-select"); // Get selected option's data-select
    console.log("Selected Value =>", selectedValue);

    var matchedLink = $("#FooterCountryList li a").filter(function () {
      return $(this).attr("data-select") === selectedValue;
    });

    if (matchedLink.length) {
      console.log("Matching link found:", matchedLink.text());
      matchedLink[0].click(); // Simulate a physical mouse click
    } else {
      console.log("No matching link found.");
    }
  });
  //selector country region end

  //selector language start

  $("#cust_selector_language").on("change", function () {
    var selectedlang = $(this).find(":selected").attr("data-value"); // Get selected option's data-select
    console.log("Selected language =>", selectedlang);

    var matchedlang = $("#FooterLanguageList li a").filter(function () {
      return $(this).attr("data-value") === selectedlang;
    });

    if (matchedlang.length) {
      console.log("Matching link found:", matchedlang.text());
      matchedlang[0].click(); // Simulate a physical mouse click
    } else {
      console.log("No matching link found.");
    }
  });
  //selector language end

  //footer custom selector js end

  //header add greadiant js start
  // function checkScroll() {
  //   var sectionHeader = $(".section-header");
  //   var firstSection = $(".content-for-layout .shopify-section:first");

  //   if (sectionHeader.length && firstSection.length) {
  //     var sectionEnd = firstSection.offset().top + firstSection.outerHeight();
  //     var scrollPosition = $(window).scrollTop() + sectionHeader.outerHeight();

  //     if (scrollPosition >= sectionEnd) {
  //       $("body").addClass("gradient_header_apply");
  //       sectionHeader.find("header").addClass("gradient__apply");
  //     } else {
  //       $("body").removeClass("gradient_header_apply");
  //       sectionHeader.find("header").removeClass("gradient__apply");
  //     }
  //   }
  // }
function checkScroll() {
  var sectionHeader = $(".section-header");
  var firstSection = $(".content-for-layout .shopify-section:first");

  if (!sectionHeader.length) return;

  var scrollPosition = $(window).scrollTop() + sectionHeader.outerHeight();

  if ($("body").hasClass("template-index") && firstSection.length) {
    var sectionEnd = firstSection.offset().top + firstSection.outerHeight();

    if (scrollPosition >= sectionEnd) {
      $("body").addClass("gradient_header_apply");
      sectionHeader.find("header").addClass("gradient__apply");
    } else {
      $("body").removeClass("gradient_header_apply");
      sectionHeader.find("header").removeClass("gradient__apply");
    }
  } else {
    if ($(window).scrollTop() > 10) {
      $("body").addClass("gradient_header_apply");
      sectionHeader.find("header").addClass("gradient__apply");
    } else {
      $("body").removeClass("gradient_header_apply");
      sectionHeader.find("header").removeClass("gradient__apply");
    }
  }
}

  $(window).on("scroll resize", checkScroll);
  checkScroll(); // Run on page load in case the position is already past the section
  //header add greadiant js end
});

//window load js start
$(window).on("load", function () {
  setTimeout(function () {
    $('div[data-rebuy-id="205384"] .rebuy-product-block').each(function () {
      // if ($(this).find('.rebuy-product-options').length > 0) {
      //   $(this).find('.rebuy-product-actions').hide();
      //   $(this).find('.rebuy-product-actions').css('visibility', 'hidden');
      // }

      var selectopt = $(this).find(".rebuy-product-options select");
      selectopt.on("change", function () {
        var selectedValue = $(this).val();
        //console.log('Selected value:', selectedValue);
      });

      var sizeswatch = $(this).find(
        ".rebuy-size-swatches .rebuy-size-swatch input"
      );
      sizeswatch.each(function () {
        $(this).on("click change", function () {
          var selectedsize = $(this).val();
          console.log("Selected size:", selectedsize);

          var self = $(this); // Capture this before timeout
          setTimeout(function () {
            self
              .closest(".rebuy-product-block")
              .find(".rebuy-product-actions button")
              .trigger("click");
          }, 200);
        });
      });
    });
  }, 2500);
});

//window load js end
