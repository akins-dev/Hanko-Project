"use client";

import Testimonial from "@/components/testimonial";

const testimonies = [
  {
    testimony1: {
      imageUrl: "/user1.webp",
      imageFallback: "J",
      name: "Joel",
      title: "Software Engineer",
      description: `"Y'all @alphaGPT + @hanko is amazing! 🙌 Barely a week into production with perfect functionalities in place. 🤯🤯🤯"`,
      className: "lg:h-[250px]"
    },
    testimony2: {
      imageUrl: "/user2.jpg",
      imageFallback: "A",
      name: "Antonio",
      title: "Designer",
      description: `"Designing has now become a breeze 😅 with the help of @alphaGPT. I use this daily for generating new photos!"`,
      className: "lg:h-[250px]"
    }
  },
  {
    testimony1: {
      imageUrl: "/user3.jpg",
      imageFallback: "F",
      name: "Francis",
      title: "CEO",
      description: `"I've been using @alphaGPT for two personal projects and it has been amazing being able to use the power of OpenAI and Replicate AI all in one app 🚀 🚀 "`,
      className: "lg:h-[300px]"
    },
    testimony2: {
      imageUrl: "/user4.jpg",
      imageFallback: "H",
      name: "Helen",
      title: "CFO",
      description: `"Me using @alphaGPT for the first time right now 😍"`,
      className: "lg:h-[200px]"
    }
  },
  {
    testimony1: {
      imageUrl: "/user5.jpg",
      imageFallback: "D",
      name: "David",
      title: "Data Analyst",
      description: `"I’m not sure what magic @alphaGPT is using but we’ve started using alpaGPT for our image generation and it’s much much faster ⚡ than any AI tool we've ever used before."`,
      className: "lg:h-[200px]"
    },
    testimony2: {
      imageUrl: "/user6.jpg",
      imageFallback: "E",
      name: "Emmanuel",
      title: "Software Developer",
      description: `"@alphaGPT is just 🤯 Now I see why a lot of people love using it. I am really impressed with how easy it is to generate code snippets and then just run in your project. @Joel now I see your joy with AlphaGPT #coding #fullstackwebdev`,
      className: "lg:h-[300px]"
    }
  },

]


export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        {testimonies?.map(({testimony1, testimony2}) => (
          <div key={testimony1.name} className="flex flex-col gap-4">
            <Testimonial
              imageUrl={testimony1.imageUrl}
              imageFallback={testimony1.imageFallback}
              name={testimony1.name}
              title={testimony1.title}
              description={testimony1.description}
              className={testimony1.className}
            />
           <Testimonial
              imageUrl={testimony2.imageUrl}
              imageFallback={testimony2.imageFallback}
              name={testimony2.name}
              title={testimony2.title}
              description={testimony2.description}
              className={testimony2.className}
            />
          </div>
        ))}
      </div>
    </div>
  )
}