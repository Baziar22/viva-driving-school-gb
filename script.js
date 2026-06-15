document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();

    if (name === "" || phone === "") {
      alert("Please fill in all required fields");
      return;
    }

    alert("Thanks " + name + "! We will contact you soon.");
    form.reset();
  });
});
