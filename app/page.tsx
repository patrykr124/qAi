'use client'
import PercelBox from "@/components/section/PercelBox";
import ScrollBanner from "@/components/section/ScrollBanner";
import WhatWeDo from "@/components/section/WhatWeDo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundGradientAnimation_text } from "@/components/ui/background-gradient-animation_text";
import NavBar from "@/components/ui/navbar/NavBar";
import Pinned from "@/components/ui/Pinned";
import ScrollPinned from "@/components/ui/ScrollPinned";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Pinned/>
      <BackgroundGradientAnimation />
      <WhatWeDo />
      {/* <Text/> */}
      <BackgroundGradientAnimation_text />
      <ScrollPinned />
      <ScrollBanner/>
      <PercelBox/>
      <div className="h-screen"></div>
    </div>
  );
}
