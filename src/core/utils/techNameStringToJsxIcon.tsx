import { SiJavascript, SiQuest, SiTypescript, SiNestjs, SiHtml5, SiCss3, SiDocker, SiAmazonaws, SiNodedotjs, SiCsharp, SiExpress, SiPostgresql, SiMongodb, SiTwilio, SiReact, SiKubernetes, SiPrisma, SiMysql, SiGit } from 'react-icons/si';
export default function techNameStringToJsxIcon(techName: string): JSX.Element {
  switch (techName) {
    case "javascript":
      return <SiJavascript />;
    case "typescript":
      return <SiTypescript />;
    case "nestjs":
      return <SiNestjs />;
    case "html":
      return <SiHtml5 />;
    case "css":
      return <SiCss3 />;
    case "docker":
      return <SiDocker />;
    case "aws":
      return <SiAmazonaws />;
    case "nodejs":
      return <SiNodedotjs />;
    case "dotnet":
      return <SiCsharp />;
    case "express":
        return <SiExpress />;
    case "postgres":
      return <SiPostgresql />;
    case "mongodb":
      return <SiMongodb />;
    case "twilio":
      return <SiTwilio />;
    case "reactjs":
      return <SiReact />;
    case "kubernetes":
      return <SiKubernetes />;
    case "prisma":
      return <SiPrisma />;
    case "mysql":
      return <SiMysql/>
    case "git":
      return <SiGit/>
    default:
      return <SiQuest />;
  }
}
