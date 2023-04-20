import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import { InlineWidget } from 'react-calendly';

const Billing = () => (
  <section id="contact" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <InlineWidget
        url="https://calendly.com/miles-media/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=5ce1e6" style="min-width:320px;height:130px;"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Schedule your  <br className="sm:block hidden" /> 15-min Demo Call 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.
      </p>
      <br/>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Find a time to schedule your call today and we look forward to speaking to you soon!</p>
    </div>
  </section>
);

export default Billing;
