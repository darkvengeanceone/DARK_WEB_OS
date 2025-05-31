// !  icon background color input select 

document.getElementById("icon-background-color").addEventListener("input", function () {
  const color = this.value;
  document.querySelectorAll(".icon").forEach(function (el) {
    el.style.backgroundColor = color;
  });
});



// ! icon color input select 

document.getElementById("icon-color").addEventListener("input", function () {
  const color = this.value;
  document.querySelectorAll(".icon").forEach(function (el) {
    el.style.color = color;
  });
});

// ! text gizleme 

document.getElementById("app-icon").addEventListener("click", function () {
    document.querySelectorAll(".app-icon span").forEach(function (el) {
        if (el.classList.contains("hidden")) {
            el.classList.remove("hidden"); // görünür yap
        } else {
            el.classList.add("hidden"); // gizle
        }
    });
});
