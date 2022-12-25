type TitleProps = {
  name: string;
  type: string;
  priority?: boolean;
};

const Title = ({ name, type }: TitleProps) => {

  return <p style={{ fontWeight: type }}>{name}</p>;
};

export default Title;
