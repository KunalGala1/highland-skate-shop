import * as React from 'react';

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
  <div>
    <p>
      Thank you for contacting Highland Skate Shop! We will be in touch shortly.
    </p>
    <p>You can also reply to this email to get in touch.</p>
    <p>Here is a record of your inquiry:</p>
    <p>
      Name:{' '}
      <strong>
        {firstName} {lastName}
      </strong>
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

export default EmailConfirmationTemplate;
