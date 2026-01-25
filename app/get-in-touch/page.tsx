import GetInTouch from "../components/GetInTouch";

export default function GetInTouchPage() {
  const baseUrl = process.env.BASE_URL;

  return <GetInTouch baseUrl={baseUrl} />;
}
