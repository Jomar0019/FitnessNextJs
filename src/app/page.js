import Stats from "@/components/stats/Stats";
import Homepage from "../components/homepage/page";
import Why from "@/components/why/Why";

export default function Home() {
  return (
    <div className="bg-[#131313]">
      <Homepage />
      <Stats />
      <Why />
    </div>
  );
}
