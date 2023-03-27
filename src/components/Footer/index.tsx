import classNames from "classnames"
import { useMenuContext } from "../../context/MenuContext"


export function Footer() {
  const data = new Date();

  const { isOpenMenu } = useMenuContext()

  return (
    <footer className={classNames("w-100vw bg-gray-750 border-t-[1px] border-gray-800 mt-auto bottom-0 left-0 right-0 ", { 'hidden': isOpenMenu === true })}>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1114px] mx-auto px-4 py-10">
        <div className="w-28 h-10">
          <img src="./engetop.png" className="w-30" />
        </div>
        <p className="text-sm text-gray-500">&copy; Todos os direitos reservados Engetop-am</p>

        <div className="hidden lg:flex gap-3 text-base text-gray-500">
          <a className="hover:text-white transition-colors">
            E-mail: engetopnery@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}