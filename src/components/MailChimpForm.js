// src/components/MailChimpForm.js
import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "your-mailchimp-url";

const MailChimpForm = () => (
  <MailchimpSubscribe url={url} />
);

export default MailChimpForm;
