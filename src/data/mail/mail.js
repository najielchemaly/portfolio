import emailjs from "@emailjs/browser";

export default function sendMail(formdata) {
  return new Promise((resolve, reject) => {
    const template = {
      sender: formdata.email,
      name: formdata.name,
      subject: formdata.subject,
      message: formdata.message,
    };

    emailjs
      .send(
        "service_qh0hfpk",
        "template_bt2xlcl",
        template,
        "714lwHAs4R3Lg-gfD"
      )
      .then(
        (result) => resolve(result.text),
        (error) => reject(error.text)
      );
  });
}
