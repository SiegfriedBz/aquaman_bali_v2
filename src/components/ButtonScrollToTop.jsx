import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

const ButtonScrollToTop = ({
  scrollToTop,
  bottomPageBtn = false,
  homeBottomPageBtn = false,
}) => {
  const bottom = homeBottomPageBtn
    ? '-bottom-[5.15rem] xs:-bottom-[5.35rem] sm:-bottom-[5.5rem]'
    : bottomPageBtn
    ? '-bottom-[3.25rem] sm:-bottom-[3.5rem]'
    : 'bottom-[0.35rem]'

  return (
    <FontAwesomeIcon
      icon={faCircleArrowUp}
      onClick={scrollToTop}
      className={`${bottom} absolute right-0 cursor-pointer text-2xl text-ternary-light transition-all hover:text-ternary sm:text-3xl`}
    />
  )
}

export default ButtonScrollToTop
