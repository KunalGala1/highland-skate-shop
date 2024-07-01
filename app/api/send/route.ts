import { Resend } from "resend";
import EmailInquiryTemplate from "@/emails/EmailInquiryTemplate";
import EmailConfirmationTemplate from "@/emails/EmailConfirmationTemplate";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    skaterFirstName,
    skaterLastName,
    skaterAge,
    skaterSkillLevel,
    moreInformation,
  } = data;

  try {
    const [businessEmailResponse, clientEmailResponse] = await Promise.all([
      resend.emails.send({
        from: "Website Contact Form <contact@highlandskateshop.com>",
        to: "rickranger.rs@gmail.com",
        bcc: "kunal.gala16@gmail.com",
        subject: `New Inquiry from ${firstName}`,
        reply_to: email,
        react: EmailInquiryTemplate({
          firstName,
          lastName,
          email,
          phone,
          skaterFirstName,
          skaterLastName,
          skaterAge,
          skaterSkillLevel,
          moreInformation,
        }) as React.ReactElement,
      }),
      resend.emails.send({
        from: "Highland Skate Shop <contact@highlandskateshop.com>",
        to: [email as string],
        subject: `Thank you for contacting Highland Skate Shop`,
        reply_to: "Highland Skate Shop <rickranger.rs@gmail.com>",
        react: EmailConfirmationTemplate({
          firstName,
          lastName,
          email,
          phone,
          skaterFirstName,
          skaterLastName,
          skaterAge,
          skaterSkillLevel,
          moreInformation,
        }) as React.ReactElement,
      }),
    ]);

    return Response.json({
      success: true,
      businessEmailResponse,
      clientEmailResponse,
    });
  } catch (error) {
    return Response.json({ success: false, error: error as string });
  }
}
