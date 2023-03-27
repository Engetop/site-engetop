import { Tree, Leaf, Bag, ChartLineUp, ClockClockwise } from 'phosphor-react'
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
            icon={Bag}
            title='ANÁLISE DO TERRENO ANTES MESMO DA COMPRA'
            subtitle='Com o estudo prévio do terreno nas mãos, o engenheiro pode
            avaliar as reais condições do relevo e limites do terreno, além de
            ter o perímetro e área real da propriedade para realizar a
            comparação com o registro de imóveis, podendo evitar
            problemas futuros.'
          />
          <StagesDev
            icon={ChartLineUp}
            title='VIABILIDADE DO PROJETO'
            subtitle='O levantamento topográfico da área apresenta todos os
            elementos existente no local, como arruamentos, meio fios,
            alinhamento de muros, cercas, postes, igarapés, nascentes
            entre outros. Com a informação do nível, será possível fazer um
            estudo mais eficaz de terraplanagem.'
          />
          <StagesDev
            icon={ClockClockwise}
            title='ECONOMIA DE TEMPO'
            subtitle='O levantamento topográfico da área apresenta todos os
            elementos existente no local, como arruamentos, meio fios,
            alinhamento de muros, cercas, postes, igarapés, nascentes
            entre outros. Com a informação do nível, será possível fazer um
            estudo mais eficaz de terraplanagem.'
          />
        </div>
      </div>
    </div>
  )
}