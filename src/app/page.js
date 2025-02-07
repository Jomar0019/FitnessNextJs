import Stats from "@/components/stats/Stats";
import Homepage from "../components/homepage/page";
import Why from "@/components/why/Why";
import Ads from "@/components/ads/Ads";
import Trainers from "@/components/trainers/Trainers";
import Membership from "@/components/membership/Membership";
import Join from "@/components/join/Join";
import Newsletter from "@/components/newsletter/Newsletter";

export default function Home() {
  return (
    <div className="bg-[#131313]">
      <Homepage />
      <Stats />
      <Why />
      <Ads />
      <Trainers />
      <Membership />
      <Join />
      <Newsletter />
    </div>
  );
}
