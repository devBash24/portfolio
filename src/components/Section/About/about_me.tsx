import { useTranslation } from 'react-i18next';
const AboutMe = () => {
    const { t } = useTranslation("global");
  return (
    <div className="flex flex-col gap-4 ">
        <p className="text-base text-white text-center md:text-left max-w-lg   ">
          {t("about.description")}
        </p>
    </div>
  )
}


export default AboutMe
