import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import Navbar from "../features/Navbar";
import FooterSection from "../widgets/FooterSection";

export default function CookiePolicy() {
  return (
    <>
      <Box
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
        <Box
          paddingBottom={{
            mobileP: "10px",
            mobileL: "16px",
            tablet: "20px",
            desktopS: "40px",
          }}
        >
          <Navbar />
        </Box>

        <Divider />

        <Stack
          spacing="30px"
          paddingTop="40px"
          paddingBottom={{ mobileP: "40px", tablet: "60px", desktopS: "80px" }}
        >
          <Typography variant="h2" fontSize="34px" color="primary.main">
            Cookie Policy
          </Typography>

          <Typography variant="subtitle1" color="primary.contrastText">
            <Box>
              This Cookie Policy applies to www.oceanperform.com operated by
              Black Ocean s. r. o. of Michelska 966/74, Michle, 141 00 Prague,
              Czech Republic (“we”, “us”, “our”).
            </Box>
            <Box mt="5px">
              With this Cookie Policy, we would like to inform you, the user of
              our website, about the use of cookies or similar storage
              technologies (hereinafter "cookies").
            </Box>
            <Box mt="5px">
              We act as the Data controller in accordance with the Czech
              Republic`s Act No. 480/2004 Coll., on Certain Information Society
              Services (“ECA”) and the EU`s Privacy and Electronic
              Communications Directive (“PECD”).
            </Box>
            <Box mt="5px">
              If you have any questions about the use of Cookies or about data
              protection at Black Ocean s. r. o. in general, please contact us
              using info@oceanperform.com.
            </Box>
          </Typography>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              What are cookies?
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              <Stack gap="5px">
                <Box>
                  Cookies are small text files that are stored by your web
                  browser on your device to save certain information. The next
                  time you visit our website with the same device, the
                  information stored in cookies is sent back to our website
                  ("first party cookie") or another website to which the cookie
                  belongs ("third party cookie").
                </Box>
                <Box>
                  Through the information stored in the cookie and sent back,
                  our website recognizes that you visited before. We use this
                  information to optimally display our website in accordance
                  with your preferences. However, only the cookie itself is
                  identified on your device. Any further storage of Personal
                  Information only takes place if you give us your consent or if
                  the storage is absolutely necessary in order to be able to use
                  our website.
                </Box>
              </Stack>
            </Typography>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              How do we use them?
            </Typography>

            <Stack gap="5px">
              <Typography variant="subtitle1" color="primary.contrastText">
                <Box>We use cookies to:</Box>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "25px",
                    margin: 0,
                  }}
                >
                  <li>
                    obtain information about your use of our website and to
                    perform system administration.
                  </li>
                  <li>prevent fraudulent activity and improve security.</li>
                  <li>
                    identify and analyze your browsing preferences and the
                    products you are interested in.
                  </li>
                  <li>
                    associate your past website behavior after you have
                    registered with your information on our website for business
                    and technical purposes.
                  </li>
                </ul>
                <Box>
                  Some of the cookies used on our websites are set by us, others
                  are set by third parties on our behalf. The use of third-party
                  cookies enables tailored advertising, meaning you may see ads
                  for Insulation Point.
                </Box>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "25px",
                    margin: 0,
                  }}
                >
                  <li>
                    Essential cookies: these cookies are necessary for us to
                    provide you with the basic functionality of our website and
                    cannot be turned off in our systems.
                  </li>
                  <li>
                    Performance and analytics cookies: these cookies allow us to
                    track visits and traffic sources to measure and improve the
                    performance of our website.
                  </li>
                  <li>
                    Functional cookies: these cookies are used to provide
                    enhanced functionality and personalization during your
                    visit.
                  </li>
                  <li>
                    Targeting or advertising cookies: these cookies may be set
                    through our website by our advertising partners to profile
                    your interests and suggest relevant advertising to you.
                  </li>
                </ul>
              </Typography>
            </Stack>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              Subject to your consent
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              We only use optional cookies with your prior consent. If you are
              visiting our website for the first time, a banner will appear on
              our website asking for your consent to use optional cookies. If
              you consent to this, we will store a cookie on your computer and
              the banner will not be displayed again for the lifetime of the
              cookie. Thereafter, or if you actively delete this cookie
              beforehand, the banner will be displayed again the next time you
              visit our website in order to obtain your consent again.
            </Typography>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              How to prevent the use of cookies
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              Of course, you can also use our website entirely without cookies.
              You can configure the use of cookies in your browser settings by
              following the relevant link{" "}
              <Link
                href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Google Chrome
              </Link>
              ,{" "}
              <Link
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Mozilla Firefox
              </Link>
              ,{" "}
              <Link
                href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Microsoft Edge
              </Link>
              ,{" "}
              <Link
                href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Google Chrome
              </Link>
              ,{" "}
              <Link
                href="https://tatrck.com/h/0Hu30uVO0rlp?url=https%3A%2F%2Fblogs.opera.com%2Ftips-and-tricks%2F2023%2F04%2Fclean-browser-and-remove-trackers%2F"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Opera
              </Link>
              ,{" "}
              <Link
                href="https://tatrck.com/h/0Hu30uVO15uh?url=https%3A%2F%2Fsupport.apple.com%2Fen-gb%2FHT201265"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5993e5" }}
              >
                Safari
              </Link>{" "}
              at any time or deactivate them completely. However, this may lead
              to restrictions in the functions or user-friendliness of our
              offer.
            </Typography>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              Does this policy change?
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              We may update our Cookie Policy from time to time. This might be
              for a number of reasons, such as to reflect a change in the law or
              to accommodate a change in our business practices and the way we
              use cookies. We recommend that you check here periodically for any
              changes to our Cookie Policy.
            </Typography>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              Who should I contact for more information?
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              If you have any questions or comments about our Cookie Policy or
              wish to exercise your rights under applicable laws, please contact
              us.
            </Typography>
          </Stack>

          <Stack gap="20px">
            <Typography variant="h3" fontSize="22px" color="primary.main">
              Effective Date
            </Typography>

            <Typography variant="subtitle1" color="primary.contrastText">
              Monday, 21st of August 2023
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <FooterSection />
    </>
  );
}
