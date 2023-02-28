import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Contacts() {
  return (
    <div className="flex w-[40%] justify-evenly items-center">
      <SiInstagram />
      <SiGithub />
      <SiLinkedin/>
      <SiYoutube />
    </div>
  )
}