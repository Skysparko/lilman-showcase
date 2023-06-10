import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own personal little manager"
        description="Simplify your life. LilMan is your trusted companion in managing tasks and boosting productivity."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Boost Your Productivity"
        description="Take control of your tasks and stay organized with LilMan. Manage your daily tasks, prioritize goals, and maximize productivity."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Effortless Task Management"
        description=" Say goodbye to chaos. LilMan helps you break down goals, set reminders, and track progress effortlessly."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Stay on Top of Your Schedule"
        description="Never miss a deadline. Manage your schedule, set reminders, and optimize your time with LilMan."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by <span className="bold">Skysparko</span>
        </p>
      </div>
    </>
  );
};

export default App;
