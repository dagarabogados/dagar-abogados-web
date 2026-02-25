import { CheckCircle } from 'lucide-react';

const cases = [
  {
    title: 'Absolución en Caso de Fraude Económico',
    description: 'Defensa exitosa en un caso complejo de fraude económico. Nuestro equipo logró demostrar la falta de intención delictiva mediante análisis exhaustivo de documentación.',
    outcome: 'Absolución Total',
    year: '2023'
  },
  {
    title: 'Archivo de Pena en Delito de Tráfico',
    description: 'Representación en caso de delito contra la seguridad vial. Mediante el estudio de la documentación, se logró el archivo del procedimiento.',
    outcome: 'Archivo de procedimiento',
    year: '2023'
  },
  {
    title: 'Sobreseimiento en Caso de Violencia Doméstica',
    description: 'Defensa de cliente acusado injustamente. Recopilación de pruebas contundentes permitió demostrar la falsedad de las acusaciones.',
    outcome: 'Sobreseimiento',
    year: '2022'
  },
  {
    title: 'Exoneración por Vicio de Forma Procesal',
    description: 'Identificación de irregularidades procedimentales que permitieron la anulación de pruebas clave. Resultado: exoneración del cliente.',
    outcome: 'Exoneración',
    year: '2022'
  },
  {
    title: 'Defensa en Delito de Estafa Compleja',
    description: 'Caso de estafa electrónica con múltiples acusados. Defensa estratégica que permitió demostrar la inocencia de nuestro cliente.',
    outcome: 'Absolución',
    year: '2025'
  },
  {
    title: 'Apelación Exitosa en Sentencia Condenatoria',
    description: 'Recurso de apelación que logró revocar sentencia anterior. Nueva sentencia más favorable basada en argumentos jurídicos sólidos.',
    outcome: 'Sentencia Favorable',
    year: '2021'
  }
];

export default function SuccessCases() {
  return (
    <section id="casos" className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Nuestro Historial</p>
          <h2 className="text-5xl font-bold text-primary-foreground mb-6">
            Casos de Éxito
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Más de 500 casos exitosos resueltos. Aquí presentamos algunos de nuestros logros más destacados.
          </p>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm opacity-75">{caseItem.year}</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                {caseItem.description}
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-accent font-semibold text-lg">
                  {caseItem.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-accent mb-2">500+</p>
              <p className="text-lg opacity-90">Casos Resueltos</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">85%</p>
              <p className="text-lg opacity-90">Tasa de Éxito</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">10+</p>
              <p className="text-lg opacity-90">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
