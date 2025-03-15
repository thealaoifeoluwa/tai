import {
  BehanceIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from "@/icons/socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-44">
      <div className="flex flex-col items-center justify-center py-72">
        <h4 className="text-[44px] sm:text-[64px]" data-aos="fade-up">
          Let’s talk !
        </h4>
        <div className="flex mt-5 gap-6" data-aos="fade-up">
          <Link href="#">
            <LinkedinIcon />
          </Link>
          <Link href="#">
            <MailIcon />
          </Link>
          <Link href="#">
            <XIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <BehanceIcon />
          </Link>
        </div>
      </div>

      <div className="flex justify-center" data-aos="fade-up">
        <Link
          href="mailto:alaoifeoluwa@gmail.com"
          className="text-[48px] sm:text-[clamp(50px,13.3333vw_+_32px,84px)] font-semibold text-[#A6A6A659] text-center"
        >
          Start a project
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
