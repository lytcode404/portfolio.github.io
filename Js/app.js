const navigation = document.querySelector(".navigation");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
  rootMargin: "-200px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// addd class onclick()

$(document).on("click", ".project-filter li", function () {
  $(this)
    .addClass("project-filter-active")
    .siblings()
    .removeClass("project-filter-active");
});

$(document).on("click", ".about-filter li", function () {
  $(this)
    .addClass("about-filter-active")
    .siblings()
    .removeClass("about-filter-active");
});

// for project > work-filter

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".project-box").show("1000");
    } else {
      $(".project-box")
        .not("." + value)
        .hide("1000");
      $(".project-box")
        .filter("." + value)
        .show("1000");
    }
  });
});

// for about > about-filter

$(document).ready(function () {
  $(".about-list").click(function () {
    const value1 = $(this).attr("data-filter");

    $(".about-box").not(".main-skills").hide("1000");
    $(".about-box").filter(".main-skills").show("1000");

    $(".about-box")
      .not("." + value1)
      .hide("1000");
    $(".about-box")
      .filter("." + value1)
      .show("1000");
  });
});

// about filter

const tabs = document.querySelectorAll(
  ".about-container [data-tab-target]");

const tabContents = document.querySelectorAll(".about-container [data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tabs.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    
    target.classList.add("active");
  });
});
