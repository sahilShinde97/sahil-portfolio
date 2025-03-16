import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://github.com/sahilShinde97?tab=repositories" Icon={FiGithub} />
      <SingleContactSocial link="https://www.linkedin.com/in/sahil-shinde-85867b258" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://x.com/SahilSh866870?s=08" Icon={FaXTwitter} />
    </div>
  );
};

export default ContactSocial;
