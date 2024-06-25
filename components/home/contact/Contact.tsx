import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Send me a message on{" "}
            <Link
              href="https://www.linkedin.com/in/forrestkretchmer/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
