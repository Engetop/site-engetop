import { Users, Eye, Chats, Tree, Leaf } from 'phosphor-react'
import { StagesDev } from '../StagesDev'

export function ContentFullStack() {

  return (
    <div className="w-full my-20 bg-gray-750">

      <div className="flex flex-col bg-inherit gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
        <div className="flex flex-col lg:flex-row gap-36 items-center justify-between my-12">
          <h2 className="block font-semibold text-5xl leading-[54px] text-gray-100">
            {/* Método desenhado para
          acelerar a sua evolução */}
            CONSTRUINDO UMA PARCERIA DE LONGO PRAZO COM O CLIENTE
          </h2>

          <div className='max-w-[500px]'>
            <p className="block font-normal text-base leading-7 text-gray-100">
              {/* Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionarprofissionalmente */}
              Se você deseja um serviço de topografia de alta qualidade, não
              hesite em entrar em contato conosco. Estamos ansiosos para
              trabalhar com você e ajudá-lo a alcançar seus objetivos de
              construção.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row bg-inherit justify-between gap-10 items-center mx-auto py-20 max-w-[1114px] px-4">
        <div className='relative'>
          <Tree size={65} color='#eba417' className='absolute -top-6 -right-6' />
          <Leaf size={65} color='#eba417' className='absolute -bottom-6 -left-6' />
          <img src="/teste02.jpg" alt="computer" className="rounded-2xl w-[150px] h-[225px] sm:w-[300px] sm:h-[450px]" />
        </div>

        <div>
          <StagesDev
            icon={Users}
            title='Missão'
            subtitle='Oferecer soluções personalizadas em engenharia,
            topografia e projetos, utilizando equipamentos modernos
            e uma equipe altamente qualificada, visando a satisfação
            e fidelização dos nossos clientes.'
          />
          <StagesDev
            icon={Eye}
            title='Visão'
            subtitle='Ser uma empresa líder em soluções de engenharia,
            topografia e projetos, reconhecida pela excelência em
            nossos serviços e pelo compromisso com a satisfação
            dos nossos clientes.'
          />
          <StagesDev
            icon={Chats}
            title='Valores'
            subtitle='Comprometimento com a qualidade dos serviços.
            Atendimento personalizado e focado nas necessidades do cliente.
            Ética e transparência em todas as relações.
            Busca constante por inovação e tecnologia de ponta.
            Responsabilidade social e ambiental.'
          />
        </div>
      </div>
    </div>
  )
}