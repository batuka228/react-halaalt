import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/card.jsx";

const inter = Inter({ subsets: ["latin"] });
const styles = {};
const Lorem = () => {
  return (
    <div>
      <h4></h4>
    </div>
  );
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "80px",
        width: "1400px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
