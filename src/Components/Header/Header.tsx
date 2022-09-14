import clsx from 'clsx'
import LanguageSwitch from "./LanguageSwitch"
import ThemeSwitch from "./ThemeSwitch"

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-white-400','text-black-700',"flex justify-between")}>
      <ThemeSwitch/>
      <LanguageSwitch/>
      
    </div>
  )
}

export default Header
