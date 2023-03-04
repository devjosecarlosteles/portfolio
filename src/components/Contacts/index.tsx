import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Contacts() {
  return (
    <div className="flex w-[40%] justify-evenly items-center lg:w-[14%]">
      <a href="https://www.instagram.com/devjosecarlosteles/"><SiInstagram /></a>
      <a href="https://www.github.com/devjosecarlosteles"> <SiGithub /></a>
      <a href="https://www.linkedin.com/in/jos%C3%A9-carlos-teles-4146a51b8/"><SiLinkedin/></a>
      <a href="https://www.youtube.com/@DevJoseCarlosTeles"><SiYoutube /></a>
    </div>
  )
}