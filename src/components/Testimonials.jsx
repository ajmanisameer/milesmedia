import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <>
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 m-7 mb-6`}>
      <div className={`flex-1 flex  justify-center items-center flex-row m-3`}>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">Drive Awareness</p>
      </div>
      <div className={`flex-1 flex  justify-center items-center flex-row m-3`}>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">Nurture Leads</p>
      </div>
      <div className={`flex-1 flex  justify-center items-center flex-row m-3`}>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">Amplify Revenue</p>
      </div>
    </section>

    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Case Study <br className="sm:block hidden" />
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Check out these recent case studies to discover how our email marketing agency can turnaround your email marketing program for better. Let the
            results speak for themselves.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  </>
);

export default Testimonials;
