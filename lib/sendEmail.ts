import { Resend } from "resend";

const resend = new Resend("re_9BzV9Ecc_2X2a1yKVNEgwtMnFm6WyRbdp");

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skaterFirstName: string;
  skaterLastName: string;
  skaterAge: string;
  skaterSkillLevel: string;
  moreInformation: string;
}

export const sendEmail = async (data: EmailData) => {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kunal.gala16@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });
};
