type CardTypes = {
  data: {
    title: string;
    subtitle: string;
    Svg: React.ElementType;
    description: string;
    image: string;
    github: string;
    classname: {
      bgIcon: string;
    };
  };
};

const Card = ({ data }: CardTypes) => {
  const { title, subtitle, Svg, description, image, github, classname } = data;
  return (
    <div className="sm:max-w-sm">
      <div className="card-header">
        <h1 className="card-title">{title}</h1>
        <div className="card-subtitle">
          <span className="mr-0.5">//</span> {subtitle}
        </div>
      </div>
      <div className="card-body">
        <div className={`absolute p-1 top-3 right-4 ${classname.bgIcon}`}>
          <Svg className={`w-4 h-4 fill-black`} />
        </div>
        <figure className="w-full h-[130px] lg:aspect-video">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </figure>
        <div className="p-6">
          <p className="card-description">{description}</p>
          <a href={github} target="_blank" className="card-link">
            view-project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
