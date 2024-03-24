"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavBar from "@/components/navbar";
import Image from "next/image";
import GameSlider from "@/components/slider";
import { useUser } from "@/components/userContext";
import { useState, useEffect } from "react";

export default function Home() {
  const { getLang, setLang } = useUser();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    if (getLang() === "french") {
      setLanguage("french");
    } else {
      setLanguage("english");
    }
  }, []);

  return (
    <main className=" min-h-screen bg-white">
      <div className="flex flex-col">
        <div>
          <NavBar></NavBar>
        </div>
        <div className=" p-10">
          <h1 className="text-red-800 text-xl font-black">Anoucement</h1>
          {language == "english" && (
            <p className="text-black pt-10">
              The University Sports Complex is thrilled to announce the launch
              of our groundbreaking Adventure Sports Program, set to kick off in
              the upcoming fall semester! As part of our commitment to fostering
              a vibrant and dynamic sports culture, this program promises to
              bring new challenges, excitement, and outdoor experiences to our
              student body and faculty alike. The Adventure Sports Program will
              feature a diverse array of activities designed to push the
              boundaries of traditional collegiate sports, including rock
              climbing, white-water rafting, mountain biking, and even
              paragliding! Led by certified instructors and safety experts,
              participants will have the opportunity to explore breathtaking
              landscapes, develop new skills, and build lasting friendships
              through adrenaline-pumping adventures.
            </p>
          )}
          {language == "french" && (
            <p className="text-black pt-10">
              Le Complexe sportif universitaire est ravi d'annoncer le lancement
              de notre programme révolutionnaire de sports d'aventure, qui
              débutera au prochain semestre d'automne ! Dans le cadre de notre
              engagement à favoriser une culture sportive dynamique et
              dynamique, ce programme promet d'apporter de nouveaux défis, de
              l'enthousiasme et des expériences de plein air à notre corps
              étudiant et à notre corps professoral. Le programme de sports
              d'aventure proposera un large éventail d'activités conçues pour
              repousser les limites des sports collégiaux traditionnels,
              notamment l'escalade, le rafting en eaux vives, le vélo de
              montagne et même le parapente ! Dirigés par des instructeurs
              certifiés et des experts en sécurité, les participants auront
              l'occasion d'explorer des paysages à couper le souffle, de
              développer de nouvelles compétences et de nouer des amitiés
              durables à travers des aventures pleines d'adrénaline.
            </p>
          )}
        </div>
        <div>
          <GameSlider></GameSlider>
        </div>
      </div>
    </main>
  );
}
