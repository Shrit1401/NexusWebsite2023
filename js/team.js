const teamBtn = document.querySelector(".titles .team");
const alumins = document.querySelector(".titles .alumni");
const teamSearch = document.querySelector(".teamSearch");
const aluminiSearch = document.querySelector(".aluminiSearch");

const aluminiPage = document.querySelector(".aluminiPage");
const teamPage = document.querySelector(".co-founders");

teamSearch.addEventListener("keyup", function () {
  var input, filter, ul, li, a, i, txtValue;
  input = teamSearch;
  filter = input.value.toUpperCase();
  ul = document.querySelector(".co-founders ul");
  li = ul.querySelectorAll(".founder");

  for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".info .inter .name");
    b = li[i].querySelector(".info .inter .role");
    txtValue = a.textContent || a.innerText || b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("close");
    } else {
      li[i].classList.add("close");
    }
  }
});

aluminiSearch.addEventListener("keyup", function () {
  var input, filter, ul, li, a, i, txtValue;
  input = teamSearch;
  filter = input.value.toUpperCase();
  ul = document.querySelector(".aluminiPage ul");
  li = ul.querySelectorAll(".alumini");

  for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".info .inter .name");
    b = li[i].querySelector(".info .inter .role");
    txtValue = a.textContent || a.innerText || b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("close");
    } else {
      li[i].classList.add("close");
    }
  }
});
