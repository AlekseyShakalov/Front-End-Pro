type TitleProps = {
  name: string;
  type: "bold"  | "normal";
};

const Title = ({ name, type }: TitleProps) => {

  return <p style={{ fontWeight: type }}>{name}</p>;
};

export default Title;
