type Props = {
  headline1: string;
  headline2: string;
};

export function HeadTxt({ headline1, headline2 }: Props) {
  return (
    <h1 className="text-header-style">
      {headline1} <br /> {headline2}
    </h1>
  );
}
