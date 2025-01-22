import { Box, Typography } from "@mui/material";

import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bgcolor={"White"}>
      <Box maxWidth={1300} margin={"auto"}>
        <Typography
          fontFamily={"'Codec pro', sans-serif"}
          color={"black"}
          textAlign={"center"}
          fontSize={"55px"}
          margin={"20px auto"}
          textTransform={"uppercase"}
        >
          {" "}
          Privacy Policy{" "}
        </Typography>
        <Typography
          fontFamily={"'Codec pro', sans-serif"}
          color={"black"}
          fontSize={"18px"}
          mb={5}
        >
          <br />
          <br />
          <strong>1. Introduction</strong> <br />
          At COMMERCE UI, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          information.
          <br />
          <br />
          <strong>2. Information We Collect</strong> <br />
          We may collect the following types of information:
          <ul>
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>Billing Information: Payment details, billing address, etc.</li>
            <li>
              Usage Data: Details about your interactions with our services.
            </li>
          </ul>
          <br />
          <strong>3. How We Use Your Information</strong> <br />
          Your information is used to:
          <ul>
            <li>Provide and manage our Shopify services.</li>
            <li>Process payments and send invoices.</li>
            <li>Communicate with you regarding your project or account.</li>
            <li>
              Improve our services based on your feedback and usage patterns.
            </li>
          </ul>
          <br />
          <strong>4. Information Sharing</strong> <br />
          We do not sell or rent your information. However, we may share your
          data with:
          <ul>
            <li>
              Third-party service providers essential for delivering our
              services (e.g., payment processors, hosting providers).
            </li>
            <li>Legal authorities if required by law.</li>
          </ul>
          <br />
          <strong>5. Data Security</strong> <br />
          We take reasonable measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction.
          <br />
          <br />
          <strong>6. Cookies and Tracking</strong> <br />
          We use cookies to enhance your user experience. You can manage cookie
          preferences through your browser settings.
          <br />
          <br />
          <strong>7. Your Rights</strong> <br />
          You have the right to:
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections to any inaccuracies.</li>
            <li>
              Request deletion of your personal data, subject to legal
              obligations.
            </li>
          </ul>
          <br />
          <strong>8. Changes to This Policy</strong> <br />
          We reserve the right to update this Privacy Policy at any time.
          Changes will be effective immediately upon posting on our website.
          <br />
          <br />
          <strong>9. Contact Information</strong> <br />
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at:
          <br />
          <br />
          <strong>Acknowledgment</strong> <br />
          By using our services, you acknowledge that you have read, understood,
          and agree to this Privacy Policy.
        </Typography>
      </Box>
    </Box>
  );
}
