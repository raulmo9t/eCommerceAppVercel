import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            dolore quibusdam hic ipsa vitae voluptatum. Dicta repudiandae
            voluptatum consectetur delectus cumque quas repellendus fugiat quod
            accusantium ut! Esse, voluptas quam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            illo aperiam maiores odio ullam, nam sit est neque ad sequi rem
            voluptatibus asperiores, exercitationem enim quidem veniam aut odit
            culpa!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quos rerum possimus modi mollitia, facilis nobis suscipit, beatae
            laudantium aut consequuntur eum iusto eligendi earum non numquam
            itaque corrupti. Corporis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            inventore dolorem, soluta excepturi aliquid quod veniam recusandae?
            Ut nihil natus iure eum facere numquam velit, veritatis sapiente,
            impedit obcaecati animi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            incidunt rem cum, est quia vel sed quae nisi explicabo eius? Sunt
            nostrum earum unde suscipit repellat veritatis excepturi neque quis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque
            magnam, laborum at saepe officia commodi quos consequatur corporis,
            eum ad voluptas. Quod enim cum ut itaque ducimus? Molestiae,
            dolores.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
