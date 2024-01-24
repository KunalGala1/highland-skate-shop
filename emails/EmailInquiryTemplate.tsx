import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailInquiryTemplateProps {
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

export const EmailInquiryTemplate: React.FC<
  Readonly<EmailInquiryTemplateProps>
> = ({
  firstName,
  lastName,
  email,
  phone,
  skaterFirstName,
  skaterLastName,
  skaterAge,
  skaterSkillLevel,
  moreInformation,
}) => (
  <>
    <Html lang="en">
      <Head />
      <Preview>New Inquiry from {firstName}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2 text-slate-950 text-[14px] leading-[24px]">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Highland Skate Shop</strong>
            </Heading>

            <Text>
              New Website Inquiry from{" "}
              <strong>
                {firstName} {lastName}
              </strong>
            </Text>

            <Text>
              Email: <strong>{email}</strong>
            </Text>
            <Text>
              Phone: <strong>{phone}</strong>
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text>Skater Information</Text>
            <Text>
              Name:{" "}
              <strong>
                {skaterFirstName} {skaterLastName}
              </strong>
            </Text>
            <Text>
              Age: <strong>{skaterAge}</strong>
            </Text>
            <Text>
              Skill Level: <strong>{skaterSkillLevel}</strong>
            </Text>
            <Text>More Information</Text>
            <Text className="p-4 bg-slate-100 rounded shadow">
              {moreInformation}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  </>
);

export default EmailInquiryTemplate;
