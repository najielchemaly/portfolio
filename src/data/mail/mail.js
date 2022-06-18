export default function sendMail(form) {
  return new Promise((resolve, reject) => {
    resolve("success");
    // emailjs
    //   .sendForm(
    //     "service_om9iepy",
    //     "template_p1xxw5t",
    //     form,
    //     "714lwHAs4R3Lg-gfD"
    //   )
    //   .then(
    //     (result) => resolve(result.text),
    //     (error) => reject(error.text)
    //   );
  });
}
