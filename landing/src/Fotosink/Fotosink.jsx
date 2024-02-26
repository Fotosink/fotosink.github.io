import "./Fotosink.css";
import { ActionLink } from "../ActionLink/ActionLink.jsx";
import { LayoutBlocksBase } from "../LayoutBlocksBase/LayoutBlocksBase.jsx";
import { LayoutBlocksVertical2Backup } from "../LayoutBlocksVertical2Backup/LayoutBlocksVertical2Backup.jsx";
import { IconDown } from "../IconDown/IconDown.jsx";
import { ButtonSizeLargeTypePrimaryClassStandardStateNormalIconFalse } from "../ButtonSizeLargeTypePrimaryClassStandardStateNormalIconFalse/ButtonSizeLargeTypePrimaryClassStandardStateNormalIconFalse.jsx";
import { ButtonSizeLargeTypeSecondaryClassStandardStateNormalIconFalse } from "../ButtonSizeLargeTypeSecondaryClassStandardStateNormalIconFalse/ButtonSizeLargeTypeSecondaryClassStandardStateNormalIconFalse.jsx";
import { ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse } from "../ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse/ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse.jsx";
import { ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse } from "../ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse/ButtonSizeMediumTypeSecondaryClassStandardStateNormalIconFalse.jsx";
import { ButtonGroupItems2 } from "../ButtonGroupItems2/ButtonGroupItems2.jsx";
import { ButtonGroupCTA } from "../ButtonGroupCTA/ButtonGroupCTA.jsx";
import { Flower } from "../Flower/Flower.jsx";
import { Features } from "./Features.jsx";
import { Section, Container, Columns } from 'react-bulma-components';

const content = "Fotosink runs on battle tested and reliable open source software and a tiered storage model to provide fault tolerance and data redundancy, while still being faster and cheaper than competitors. It runs on battle tested apps that are used by millions of users worldwide.";

const DesktopAppIcon = () => (
  <svg
                  className="div"
                  width="80"
                  height="61"
                  viewBox="0 0 80 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.712871 60.404H79.2871C79.6808 60.404 80 60.0848 80 59.6911V5.97267C80 5.57896 79.6808 5.2598 79.2871 5.2598H0.712871C0.319163 5.2598 0 5.57896 0 5.97267V59.6911C0 60.0848 0.319163 60.404 0.712871 60.404Z"
                    fill="#FADB14"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.57 60.404H79.2871C79.6809 60.404 80 60.0848 80 59.6911V14.4564C80 14.0627 79.6809 13.7435 79.2871 13.7435H33.57C33.1763 13.7435 32.8572 14.0627 32.8572 14.4564V59.6911C32.8572 60.0848 33.1763 60.404 33.57 60.404Z"
                    fill="#13C2C2"
                  />
                  <path
                    d="M32.8571 60.404H0V27.8831H32.8571V60.404Z"
                    fill="#2F54EB"
                  />
                  <path
                    d="M32.8572 27.8831H24.2857V19.3993H32.8572V27.8831Z"
                    fill="#F5222D"
                  />
                  <path
                    d="M5.86988 6.2973C6.74479 6.2973 7.45404 5.59026 7.45404 4.71808C7.45404 3.8459 6.74479 3.13885 5.86988 3.13885C4.99498 3.13885 4.28572 3.8459 4.28572 4.71808C4.28572 5.59026 4.99498 6.2973 5.86988 6.2973Z"
                    stroke="#0D1A26"
                    strokeWidth="0.792079"
                  />
                  <path
                    d="M13.0127 6.2973C13.8876 6.2973 14.5969 5.59026 14.5969 4.71808C14.5969 3.8459 13.8876 3.13885 13.0127 3.13885C12.1378 3.13885 11.4286 3.8459 11.4286 4.71808C11.4286 5.59026 12.1378 6.2973 13.0127 6.2973Z"
                    stroke="#0D1A26"
                    strokeWidth="0.792079"
                  />
                  <path
                    d="M20.1557 6.2973C21.0306 6.2973 21.7398 5.59026 21.7398 4.71808C21.7398 3.8459 21.0306 3.13885 20.1557 3.13885C19.2808 3.13885 18.5715 3.8459 18.5715 4.71808C18.5715 5.59026 19.2808 6.2973 20.1557 6.2973Z"
                    stroke="#0D1A26"
                    strokeWidth="0.792079"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M79.2871 0L79.604 8.78876L0.712874 9.1056L0.396042 0.316832L79.2871 0Z"
                    stroke="#0D1A26"
                    strokeWidth="0.990099"
                  />
                </svg>
);

export const Fotosink = ({ className, ...props }) => {
  return (
    <div className={"fotosink " + className}>
      <Features/> 
      <div className="technical">
        <div className="components-content-h-12">
          <div className="h-12">Still Not Convinced? </div>
        </div>
        <Columns
          className="components-page-row2"
        >
          <Columns.Column className="components-page-box2">
            <div className="content2">
              <div className="h-32">How It Works </div>
              <p className="has-text-white">{content}</p>
              <LayoutBlocksVertical2Backup
                component0={
                  <ActionLink
                    className="has-text-white"
                    size="small"
                    tooltip="false"
                    icon="false"
                    disabled="false"
                    text="Read more about how Fotosink works"
                    link=""
                  />
                }
                component1={
                  <ActionLink
                    className="has-text-white"
                    size="small"
                    tooltip="false"
                    icon="false"
                    disabled="false"
                    text="See the status of the Fotosink cluster"
                    link=""
                  />
                }
                className="layout-blocks-vertical-2-backup-instance"
              ></LayoutBlocksVertical2Backup>
            </div>
          </Columns.Column>
          <Columns.Column className="layout-blocks-vertical-3-backup">
            <div className="components-page-box3">
              <div className="page-icon4">
                <DesktopAppIcon/>
              </div>
              <div className="content3">
                <div className="h-33">Get Desktop Apps </div>
                <div className="p2">
                  Download Seafile for OSX, Windows, or Linux to backup and sync
                  your files on your laptop or desktop{" "}
                </div>
                <div className="dropdown-trigger">
                  <ActionLink
                    size="small"
                    className="dropdown-trigger-instance3"
                  ></ActionLink>
                </div>
              </div>
            </div>
            <div className="components-page-box3">
              <div className="content3">
                <div className="h-33">Backup your Phone’s Photos </div>
                <div className="p2">
                  Install Seafile Pro and Immich on iOS or Android to
                  automatically back up photos and clear storage space{" "}
                </div>
                <ActionLink
                  size="small"
                  className="dropdown-trigger-instance3"
                ></ActionLink>
              </div>
              <div className="page-icon4">
                {/*<img
                  height="120"
                  src="undraw_selfie_re_h9um.svg"/>*/}
                <svg
                  className="div2"
                  width="53"
                  height="80"
                  viewBox="0 0 53 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.7143 4.89795H1.10203C0.651187 4.89795 0.285706 5.26343 0.285706 5.71428V71.8367C0.285706 72.2876 0.651187 72.6531 1.10203 72.6531H51.7143C52.1651 72.6531 52.5306 72.2876 52.5306 71.8367V5.71428C52.5306 5.26343 52.1651 4.89795 51.7143 4.89795Z"
                    fill="#FADB14"
                  />
                  <path
                    d="M45.1837 63.6735H7.63264C7.1818 63.6735 6.81631 64.0389 6.81631 64.4898V79.1837C6.81631 79.6345 7.1818 80 7.63264 80H45.1837C45.6345 80 46 79.6345 46 79.1837V64.4898C46 64.0389 45.6345 63.6735 45.1837 63.6735Z"
                    fill="#2F54EB"
                  />
                  <path
                    d="M45.1837 0H7.63264C7.1818 0 6.81631 0.365482 6.81631 0.816327V8.97959C6.81631 9.43044 7.1818 9.79592 7.63264 9.79592H45.1837C45.6345 9.79592 46 9.43044 46 8.97959V0.816327C46 0.365482 45.6345 0 45.1837 0Z"
                    fill="#13C2C2"
                  />
                  <path
                    d="M44.7755 5.30615H8.04081C7.58997 5.30615 7.22449 5.67163 7.22449 6.12248V64.898C7.22449 65.3488 7.58997 65.7143 8.04081 65.7143H44.7755C45.2264 65.7143 45.5918 65.3488 45.5918 64.898V6.12248C45.5918 5.67163 45.2264 5.30615 44.7755 5.30615Z"
                    stroke="#0D1A26"
                  />
                  <path
                    d="M35.3878 3.26532H17.4286C16.9777 3.26532 16.6122 3.6308 16.6122 4.08165V5.7143C16.6122 6.16514 16.9777 6.53063 17.4286 6.53063H35.3878C35.8386 6.53063 36.2041 6.16514 36.2041 5.7143V4.08165C36.2041 3.6308 35.8386 3.26532 35.3878 3.26532Z"
                    fill="white"
                    stroke="#0D1A26"
                  />
                  <path
                    d="M26.4082 75.9184C28.2115 75.9184 29.6735 74.4564 29.6735 72.6531C29.6735 70.8497 28.2115 69.3878 26.4082 69.3878C24.6048 69.3878 23.1429 70.8497 23.1429 72.6531C23.1429 74.4564 24.6048 75.9184 26.4082 75.9184Z"
                    fill="#F5222D"
                  />
                </svg>
              </div>
            </div>
            <div className="components-page-box3">
              <div className="page-icon4" style={{width: '120px'}}>
                <img src="undraw_moments_0y20.svg"
                  width="120"
                  alt="" />
                {/*<svg
                  className="div3"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.1989 40.8889C46.6399 40.8889 48.6188 38.899 48.6188 36.4444C48.6188 33.9898 46.6399 32 44.1989 32C41.7579 32 39.779 33.9898 39.779 36.4444C39.779 38.899 41.7579 40.8889 44.1989 40.8889Z"
                    fill="#F5222D"
                  />
                  <path
                    d="M44.1989 72.4445C63.9713 72.4445 80 56.3267 80 36.4445C80 16.5622 63.9713 0.444458 44.1989 0.444458C24.4265 0.444458 8.39779 16.5622 8.39779 36.4445C8.39779 56.3267 24.4265 72.4445 44.1989 72.4445Z"
                    stroke="#0D1A26"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75345 36.0975C7.75345 56.0337 23.8084 72.1951 43.6131 72.1951V80C19.5263 80 0 60.3442 0 36.0975H7.75345Z"
                    fill="#FADB14"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.6129 0.00286706L43.6132 7.80488C28.0905 7.80488 15.5069 20.4719 15.5069 36.0976C15.5069 51.7232 28.0905 64.3902 43.6132 64.3902L43.6132 72.1931C23.7733 71.9884 7.75348 55.9063 7.75348 36.0976C7.75348 16.1614 23.9801 0 43.9966 0L43.6129 0.00286706Z"
                    fill="#2F54EB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.6131 7.8049C59.1357 7.8049 71.7193 20.472 71.7193 36.0976H63.9659C63.9659 24.7825 54.8536 15.6098 43.6131 15.6098C32.3725 15.6098 23.2603 24.7825 23.2603 36.0976C23.2603 47.4127 32.3725 56.5854 43.6131 56.5854V64.3903C28.0904 64.3903 15.5068 51.7232 15.5068 36.0976C15.5068 20.472 28.0904 7.8049 43.6131 7.8049Z"
                    fill="#13C2C2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.6131 15.6098C54.8536 15.6098 63.9659 24.7825 63.9659 36.0976C63.9659 47.4127 54.8536 56.5854 43.6131 56.5854C32.3726 56.5854 23.2603 47.4127 23.2603 36.0976C23.2603 24.7825 32.3726 15.6098 43.6131 15.6098ZM43.6131 23.4147C36.6547 23.4147 31.0138 29.093 31.0138 36.0976C31.0138 43.1022 36.6547 48.7805 43.6131 48.7805C50.5715 48.7805 56.2125 43.1022 56.2125 36.0976C56.2125 29.093 50.5715 23.4147 43.6131 23.4147Z"
                    fill="#FADB14"
                  />
                </svg>*/}
              </div>
              <div className="content3">
                <div className="h-33">Share Your Photos or Files </div>
                <div className="p2">
                  Create links to share photo albums publicly and access your
                  files from anywhere using the web apps{" "}
                </div>
                <ActionLink
                  size="small"
                  className="dropdown-trigger-instance3"
                ></ActionLink>
              </div>
            </div>
          </Columns.Column>
        </Columns>
        
      </div>

      <div className="cta">
        <ButtonGroupCTA/>
        <Flower className="flower-instance"></Flower>
      </div>


      <div className="highlights">
        <Columns>
          <Columns.Column size={"auto"}>
            <div>Sitemap</div>
            <div><a href="overview/about-us.html">About</a></div>
            <div><a href="overview/reliability.html">Architecture</a></div>
            <div><a href="overview/about-us.html">Contact Us</a></div>
            <div><a href="overview/apps.html">Documentation</a></div>
            <div><a href="overview/downloads.html">Downloads</a></div>
            <div><a href="overview/faq.html">FAQ</a></div>
            <div><a href="overview/pricing.html">Pricing</a></div>
            <div><a href="overview/privacy-policy.html">Privacy Policy</a></div>
            <div><a href="overview/terms-&-conditions.html">Terms and Conditions</a></div>
          </Columns.Column>
          <Columns.Column size={"auto"} className="has-text-right">
            <div>External</div>
            <div><a href="https://github.com/Fotosink/">Github</a></div>
            <div><a href="">Bug Report</a></div>
            <div><a href="">Instagram</a></div>
            <div><a href="">Blog</a></div>
          </Columns.Column>
        </Columns>
      </div>

    </div>
  );
};
