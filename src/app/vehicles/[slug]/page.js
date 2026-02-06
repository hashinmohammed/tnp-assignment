import React from "react";
import { notFound } from "next/navigation";
import ModelsClient from "@/app/models/_components/ModelsClient";
import ModelXClient from "@/app/modelx/_components/ModelxClient";
import ModelY from "@/app/modely/page";
import Model3 from "@/app/model3/page";
import CybertruckClient from "@/app/cybertruck/_components/CybertruckClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const titles = {
    "model-s": "Model S | Tesla",
    models: "Model S | Tesla",
    "model-x": "Model X | Tesla",
    modelx: "Model X | Tesla",
    "model-y": "Model Y | Tesla",
    modely: "Model Y | Tesla",
    "model-3": "Model 3 | Tesla",
    model3: "Model 3 | Tesla",
    cybertruck: "Cybertruck | Tesla",
  };

  return {
    title: titles[slug] || "Tesla Vehicle",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  switch (slug) {
    case "model-s":
    case "models":
      return <ModelsClient />;
    case "model-x":
    case "modelx":
      return <ModelXClient />;
    case "model-y":
    case "modely":
      return <ModelY />;
    case "model-3":
    case "model3":
      return <Model3 />;
    case "cybertruck":
      return <CybertruckClient />;
    default:
      return notFound();
  }
}
