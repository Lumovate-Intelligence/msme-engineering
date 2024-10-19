import { Footer, FooterCopyright, FooterIcon } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export function FooterSection() {
  return (
    <Footer className="border-t mb-20 md:mb-0 mt-8">
      <div className="w-full flex justify-center py-4">
        <div className="w-[95%] md:w-[85%] flex flex-col justify-center items-center md:flex md:flex-row md:items-center md:justify-between">
          <FooterCopyright href="#" by="MSME Engineering™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
