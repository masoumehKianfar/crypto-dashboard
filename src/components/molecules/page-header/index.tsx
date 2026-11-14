interface TitleProps {
  headTitle: string;
  paragraph: string;
  headTitleSize?: string;
  paragraphSize?: string;
}

const TitleComponent = ({
  headTitle,
  paragraph,
  headTitleSize = "text-title",
  paragraphSize = "text-subtitle",
}: TitleProps) => {
  return (
    <div>
      <p className={headTitleSize}>{headTitle}</p>
      <p className={paragraphSize}>{paragraph}</p>
    </div>
  );
};

export default TitleComponent;
