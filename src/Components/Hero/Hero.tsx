import clsx from 'clsx'
import Avatar from "./Avatar"
import Title from "./Title"
import Subtitle from './Subtitle/Subtitle'
export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className,"flex flex-col",)}>
      <Avatar/>
      <Title/>
      <Subtitle/>
    </div>
  )
}

export default Hero
