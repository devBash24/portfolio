import { useTranslation } from 'react-i18next';
const AboutMe = () => {
    const { t } = useTranslation("global");
  return (
    <div className="flex flex-col gap-4 mt-4 ">
        <p className="text-lg lg:text-2xl text-white text-center md:text-left max-w-xl   ">
          {t("about.description")}
        </p>
    </div>
  )
}


export default AboutMe
