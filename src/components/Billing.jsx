import { apple, bill, google } from "../assets"
import styles, {layout} from "../styles"

const Billing = () =>(
 <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img className="w-[100%] h-[100%] relative z-[5]" src={bill} alt="billing"  />

  <div className="absolute z-[3] -left 1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
  <div className="absolute z-[0] -left 1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
 
  </div>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Controle fácilmente su <br className="sm:block hidden" />facturas y
facturación.</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Elit enin sed massa etiam. Mauris UE
adipiscing ultrices anetodio aenean
neque. Fus ce 1psum orci rhoncus
aliporttitor entero platea placerat.
</p>
<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
  <img className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple} alt="apple_store" />
  <img className="w-[128px] h-[42px] object-contain  cursor-pointer" src={google} alt="goggle_play" />

</div>
</div>
 </section>
)


export default Billing