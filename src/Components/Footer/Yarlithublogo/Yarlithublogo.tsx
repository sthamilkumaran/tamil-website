import clsx from 'clsx'
import YarlIthublogo from "./yarl-it-hub-logo.png"

export interface Props {
  className?: string
}

const yarlithublogo = ({ className }: Props) => {
  return (
    <div className={clsx(className,"w-24 h-36 flex items-center min-w-fit flex-1 sm:flex-none")}>
      <img alt="Yarl IT Hub Logo" src={YarlIthublogo} className="h-24" />
    </div>
  )
}

export default yarlithublogo
