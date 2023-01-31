import { feedback } from "../constants"
import styles from "../styles"
import FeedbackCard from './FeedbackCard'

const Testimonial = () =>  (
  <section id="clients" className={`${styles.padding} ${styles.flexCenter} flex-col relative`}>
{/* TODO*/}
<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
<div className="w-full flex justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]">
<h1 className={styles.heading2}>
Lo que la gente esta  <brm className="sm:block hidden" /> diciendo sobre nosotros
</h1>
<div className="w-full md:mt-0 mt-6">
<p className={`${styles.paragraph} text-left max-w-[450px]`}>
Todo lo que necesitas para aceptar tarjeta
pagos y haz crecer tu negocio
cualquier parte del planeta.
</p>
</div>
</div>
<div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
{feedback.map((card)=>(
  <FeedbackCard key={card.id} {...card}/>
))}
</div>
  </section>
)

export default Testimonial