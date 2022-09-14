import clsx from 'clsx'
import UkiLogo from './uki-logo.png'
export interface Props {
  className?: string
}

const Ukilogo = ({ className }: Props) => {
  return (
    <div className={clsx(className,"w-36 h-36 flex justify-center items-center")}>
      <img alt="Yarl IT Hub Logo" src={UkiLogo} className="h-24" />
    </div>
  )
}

export default Ukilogo
