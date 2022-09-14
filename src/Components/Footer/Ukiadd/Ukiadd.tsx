import clsx from 'clsx'
import UkiAdd from './Ukiadd'

export interface Props {
  className?: string
}

const Ukiadd = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <div className="flex-1 pt-8 min-w-fit">
          <div>Uki Coding School - Kilinochchi Center</div>
          <div>423 Thirunager Rd</div>
          <div>Class of 2022</div>
        </div>
    </div>
  )
}

export default Ukiadd
