"use client"

import { FC } from "react";
import { personalData } from "@/data/PersonalData";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface SocialsProps {
  className?: string; // optional string
}

const Socials: FC<SocialsProps> = ({ className }) => {
  return (
    <div className="flex gap-1 md:gap-2">
      <GitHubIcon
        className={className}
        onClick={() => window.open(personalData.github, '_blank')}
      />
      <EmailRoundedIcon
        className={className}
        onClick={() => window.open(`mailto:${personalData.email}`, '_blank')}
      />
      <LinkedInIcon
        className={className}
        onClick={() => window.open(personalData.linkedin, '_blank')}
      />
    </div>
  );
};

export default Socials;
