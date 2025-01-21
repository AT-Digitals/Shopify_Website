import { Box, Typography } from "@mui/material";

import { useEffect } from "react";

export default function TermsandConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bgcolor={"White"}>
      <Box maxWidth={600} margin={"auto"}>
        <Typography
          fontFamily={"Roboto"}
          color={"black"}
          textAlign={"center"}
          fontSize={"32px"}
          margin={"20px auto"}
          textTransform={"uppercase"}
        >
          {" "}
          Terms and Conditions
        </Typography>
        <Typography
          fontFamily={"Roboto"}
          color={"black"}
          fontSize={"16px"}
          mb={5}
        >
          <br />
          <strong>1. Introduction</strong> <br />
          Welcome to COMMERCE UI ("we," "us," "our"). By accessing or using our
          Shopify services, you agree to be bound by these Terms and Conditions.
          Please read them carefully before engaging our services.
          <br />
          <br />
          <strong>2. Scope of Services</strong> <br />
          We specialize in providing Shopify-related services, including but not
          limited to:
          <ul>
            <li>Shopify store setup and design.</li>
            <li>Custom Shopify theme development.</li>
            <li>Shopify app integration.</li>
            <li>Store migration to Shopify.</li>
            <li>Ongoing Shopify support and maintenance.</li>
          </ul>
          <br />
          <strong>3. Eligibility</strong> <br />
          By using our services, you represent that:
          <ul>
            <li>You are at least 18 years of age.</li>
            <li>
              You have the authority to enter into these Terms and Conditions on
              behalf of yourself or your organization.
            </li>
          </ul>
          <br />
          <strong>4. Client Responsibilities</strong> <br />
          To ensure smooth delivery of our services, you agree to:
          <ul>
            <li>
              Provide accurate and complete information required for the
              project.
            </li>
            <li>Respond to our inquiries and feedback promptly.</li>
            <li>
              Ensure compliance with Shopify’s Terms of Service and any
              applicable laws.
            </li>
          </ul>
          <br />
          <strong>5. Payments</strong> <br />
          <ul>
            <li>
              All services are billed as agreed upon in the project proposal or
              invoice.
            </li>
            <li>
              A deposit may be required to begin work, as outlined in the
              proposal.
            </li>
            <li>
              Full payment is due upon project completion unless otherwise
              specified.
            </li>
            <li>
              Payments are non-refundable unless otherwise stated in writing.
            </li>
          </ul>
          <br />
          <strong>6. Intellectual Property</strong> <br />
          <ul>
            <li>
              All custom design and development work created by us will remain
              our intellectual property until full payment is received.
            </li>
            <li>
              Upon receipt of full payment, ownership of custom work will
              transfer to the client.
            </li>
            <li>
              Third-party tools, apps, or integrations remain the property of
              their respective owners.
            </li>
          </ul>
          <br />
          <strong>7. Confidentiality</strong> <br />
          We will treat all client information as confidential and will not
          disclose it to third parties without prior consent, except as required
          by law.
          <br />
          <br />
          <strong>8. Limitations of Liability</strong> <br />
          <ul>
            <li>
              We are not responsible for any loss or damage arising from the use
              or inability to use the Shopify platform or third-party tools.
            </li>
            <li>
              Our liability is limited to the amount paid for the specific
              service giving rise to the claim.
            </li>
          </ul>
          <br />
          <strong>9. Revisions and Changes</strong> <br />
          <ul>
            <li>Minor revisions are included as specified in the proposal.</li>
            <li>
              Additional changes or scope alterations may incur additional
              charges.
            </li>
          </ul>
          <br />
          <strong>10. Termination</strong> <br />
          <ul>
            <li>
              Either party may terminate the agreement with written notice.
            </li>
            <li>
              Upon termination, any work completed will be billed, and
              outstanding payments must be settled.
            </li>
          </ul>
          <br />
          <strong>11. Governing Law</strong> <br />
          These Terms and Conditions are governed by and construed in accordance
          with the laws of [Your Country/State].
          <br />
          <br />
          <strong>12. Amendments</strong> <br />
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective immediately upon posting on our website.
          <br />
          <br />
          <strong>13. Contact Information</strong> <br />
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at:
          <br />
          <br />
          <strong>Acknowledgment</strong> <br />
          By engaging our services, you acknowledge that you have read,
          understood, and agree to these Terms and Conditions.
        </Typography>
      </Box>
    </Box>
  );
}
