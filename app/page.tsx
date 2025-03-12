import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/index";
import { CoreServices } from "@/components/core-services";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <CoreServices/>
    </div>
  );
}
