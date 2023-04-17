(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("2ZIyu-7ULfWbAXi5w");
})();

window.onload = function () {
  const tmp = document.getElementById("contact-form");
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.phone.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs
        .sendForm(
          "service_7u8gnsh",
          "template_e271ne4",
          event.target,
          "2ZIyu-7ULfWbAXi5w"
        )
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
};
