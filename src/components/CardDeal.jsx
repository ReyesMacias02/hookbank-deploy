import { card } from "../assets"
import styles, {layout} from "../styles"
import Button from "./Button"

const CardDeal = () =>  (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Encuentre una mejor oferta de tarjeta  <br  className="sm:block hidden"/> en unos pocos fáciles
      pasos.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Arco tortuoso, puro en mattis y triste.
      entero faucibus. Alicates que alicates
      tortura del propio maurice. c Aliquet ultrices ac,
      anetau.
      </p>
    <Button styles='mt-10'/>
    </div>
    <div className={layout.sectionImg}>
      <img className="w-[100%] h-[100%]" src={card} alt="card" />

    </div>
  </section>
)


export default CardDeal