import Navbar from "@/components/navbar/index";
import { CoreServices } from "@/components/core-services";
import { CreditCard, MessageCircleHeart, UsersRound } from "lucide-react";
import IndustryWeServe from "@/components/industries-we-serve";

export default function Home() {
  const industriesData = [
    {
      id: "1",
      heading: "Fintech",
      cardTitle: "Enhance Financial Services with Cutting-Edge Technology",
      description:
        "Accelerate your fintech operations with tailored solutions that break barriers and drive innovation",
      buttonText: "Discover our Fintech solutions",
      imageSrc: "/images/industries-health.avif",
      icon: <CreditCard size={40} />,
    },
    {
      id: "2",
      heading: "HR Tech",
      cardTitle: "Automate HR Processes with Software",
      description:
        "Accelerate your fintech operations with tailored solutions that break barriers and drive innovation",
      buttonText: "Discover our HR-Tech solutions",
      imageSrc: "/images/industries-hr.avif",
      icon: <UsersRound size={40} />,
    },
    {
      id: "3",
      heading: "Social",
      cardTitle: "Enhance Financial Services with Cutting-Edge Technology",
      description:
        "Accelerate your fintech operations with tailored solutions that break barriers and drive innovation",
      buttonText: "Discover our Social solutions",
      imageSrc: "/images/industries-card.avif",
      icon: <MessageCircleHeart size={40} />,
    },
  ];
  return (
    <div>
      <Navbar />
      <CoreServices />
      <IndustryWeServe industries={industriesData} />
    </div>
  );
}
