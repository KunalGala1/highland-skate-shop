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
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailConfirmationTemplateProps {
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

export const EmailConfirmationTemplate: React.FC<
  Readonly<EmailConfirmationTemplateProps>
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
      <Preview>Thank you for contacting Highland Skate Shop</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2 text-slate-950 text-[16px] leading-[24px]">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Highland Skate Shop</strong>
            </Heading>

            <Text>
              Thank you for contacting{" "}
              <Link href="https://highlandskateshop.com/" target="_blank">
                <strong>Highland Skate Shop</strong>
              </Link>
              ! We will be in touch shortly. You can also reply to this email to
              get in touch.
            </Text>
            <Text>Here is a record of your inquiry:</Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text>
              Name:{" "}
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

export default EmailConfirmationTemplate;
