import * as React from 'react';

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
  <div>
    <p>
      New Inquiry from{' '}
      <strong>
        {firstName} {lastName}
      </strong>
      !
    </p>
    <p>
      Email: <strong>{email}</strong>
    </p>
    <p>
      Phone: <strong>{phone}</strong>
    </p>
    <hr />
    <p>
      <strong>Skater Information:</strong>
    </p>
    <p>
      Name:{' '}
      <strong>
        {skaterFirstName} {skaterLastName}
      </strong>
    </p>
    <p>
      Age: <strong>{skaterAge}</strong>
    </p>
    <p>
      Skill Level: <strong>{skaterSkillLevel}</strong>
    </p>
    <p>
      <strong>More Information:</strong>
    </p>
    <p>{moreInformation}</p>
  </div>
);

export default EmailInquiryTemplate;
