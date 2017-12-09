
var searchBtn = document.querySelector(".search-btn");
var searchForm = document.querySelector(".hotel-search-form");

var checkIn = searchForm.querySelector("[name=check-in]");
var checkOut = searchForm.querySelector("[name=check-out]");
var adults = searchForm.querySelector("[name=adults]");
var kids = searchForm.querySelector("[name=kids]");

var adultsStorage = localStorage.getItem("adultsAmount");
var kidsStorage = localStorage.getItem("kidsAmount");


searchForm.classList.add("form-hidden");

searchBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (searchForm.classList.contains("form-hidden")) {
    searchForm.classList.remove("form-hidden");

    searchForm.classList.remove("bounce-out-right");
    searchForm.classList.add("bounce-in-left");

  } else {
    searchForm.classList.remove("fill-out-error");
    searchForm.classList.remove("bounce-in-left");
    searchForm.classList.add("bounce-out-right");

    function removeForm() {
      searchForm.classList.add("form-hidden");
    }
    setTimeout(removeForm, 700);
  };

  if (adultsStorage) {
      adults.value = adultsStorage;
  };

  if (kidsStorage) {
      kids.value = kidsStorage;
  };

});


searchForm.addEventListener("submit", function (evt) {
  if ((!checkIn.value || !checkOut.value)
  || (!adults.value && !kids.value)
  || (adults.value == 0 && kids.value == 0)
  || (adults.value == 0 && !kids.value)
  || (!adults.value && kids.value == 0)) {
    evt.preventDefault();

    searchForm.classList.remove("fill-out-error");
    searchForm.offsetWidth = searchForm.offsetWidth;

    searchForm.classList.add("fill-out-error");
  } else {
    localStorage.setItem("adultsAmount", adults.value);
    localStorage.setItem("kidsAmount", kids.value);
  }
});
