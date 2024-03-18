"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavBar from "@/components/navbar";
import Image from "next/image";
import GameSlider from "@/components/slider";

export default function Home() {
  return (
    <main className=" min-h-screen bg-white">
      <div className="flex flex-col">
        <div>
          <NavBar></NavBar>
        </div>
        <div className=" p-10">
          <h1 className="text-red-800 text-xl font-black">Anoucement</h1>
          <p className="text-black pt-10">
            The University Sports Complex is thrilled to announce the launch of
            our groundbreaking Adventure Sports Program, set to kick off in the
            upcoming fall semester! As part of our commitment to fostering a
            vibrant and dynamic sports culture, this program promises to bring
            new challenges, excitement, and outdoor experiences to our student
            body and faculty alike. The Adventure Sports Program will feature a
            diverse array of activities designed to push the boundaries of
            traditional collegiate sports, including rock climbing, white-water
            rafting, mountain biking, and even paragliding! Led by certified
            instructors and safety experts, participants will have the
            opportunity to explore breathtaking landscapes, develop new skills,
            and build lasting friendships through adrenaline-pumping adventures.
          </p>
        </div>
        <div>
          <GameSlider></GameSlider>
        </div>
      </div>
    </main>
  );
}
