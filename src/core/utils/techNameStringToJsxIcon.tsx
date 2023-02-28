import { SiJavascript, SiQuest } from 'react-icons/si';
export default function techNameStringToJsxIcon (techName: string): JSX.Element {
  switch (techName) {
    case 'javascript':
      return <SiJavascript />
    default:
      return <SiQuest/>
  }
}