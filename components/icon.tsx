import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export type { IconName } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

export interface IconProps {
  icon: IconName
}
export function Icon(props: IconProps) {
  return <FontAwesomeIcon icon={props.icon} />
}
