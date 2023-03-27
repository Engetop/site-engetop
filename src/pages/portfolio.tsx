import classNames from "classnames"
import Head from "next/head"
import { ChartLineUp } from "phosphor-react"
import { Menu } from "../components/Menu"
import { StagesComments } from "../components/StagesComments"
import { useMenuContext } from "../context/MenuContext"


interface Repository {
  id: number
  name: string;
  description: string;
  html_url: string;
  dateFormatted: string;
}

interface PortfolioProps {
  repositoriesGithub: Repository[]
}

export default function Portfolio({ repositoriesGithub }: PortfolioProps) {

  const { isOpenMenu } = useMenuContext()
  // const [repositories, setRepositories] = useState<Repository[]>([])


  return (
    <>
      <Head>
        <title>Home | Engetop</title>
      </Head>
      {
        isOpenMenu ?
          <Menu />
          :
          <div className="py-5 mt-20 max-w-[1114px] px-4 mx-auto">
            <h1 className="block my-7 text-center font-semibold text-4xl leading-[54px] text-gray-100">
              SOBRE A ENGETOP
            </h1>

            <div className={classNames("flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1114px] px-4")}>
              <img src="/sobreempres.jpg" alt="codando" className="rounded-2xl w-[300px] h-[180px] sm:w-[500px] sm:h-[356px]" />
              <div className='max-w-[500px]'>
                <p className="block font-normal text-base leading-7 text-gray-100">
                  {/* Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionarprofissionalmente */}
                  Dinâmica e cheia de soluções, somos uma empresa de
                  engenharia que busca melhoria continua, com serviços
                  personalizados e eficientes para atender cada cliente.
                  Oferecemos soluções de engenharia e topografia para ajudá-lo a
                  enfrentar o futuro e se preparar para problemas imprevisíveis.
                </p>
              </div>
            </div>


            <div className='flex flex-row gap-6 items-center justify-center flex-wrap  mx-auto max-w-[1114px] px-4 my-10'>
              <StagesComments
                icon={ChartLineUp}
                title='Grande Experiencia no Mercado'
                subtitle='Atendendo e dando soluções aos nossos cliente desde
                2019, contamos com uma equipe altamente qualificada e
                experiente, com atuação a mais de 14 anos na área de
                engenharia e topografia.
                Utilizando equipamentos de última geração e softwares
                especializados, a empresa garante a precisão e eficiência
                em seus serviços. Atendendo desde pequenas empresas até
                grandes corporações, a Engetop tem como diferencial o
                atendimento personalizado e a qualidade de seus serviços,
                garantindo a satisfação de seus clientes.'
              />
            </div>
          </div>
      }
    </>
  )
}
