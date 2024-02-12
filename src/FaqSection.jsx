import React, { useState } from "react";

const FaqSection = (props) => {
  const [openStatus, setOpenStatus] = useState(
    props.posts.map(() => false) // Initialize an array of boolean values, one for each FAQ item
  );

  const handleToggle = (id) => {
    setOpenStatus(
      openStatus.map((status, index) => (index === id ? !status : status))
    );
  };

  return (
    <>
      {props.posts.map((post, id) => (
        <div key={id} className="w-full mt-2 md:mt-5">
          <div className="flex justify-between px-4">
            <div className=" text-bold md:text-xl font-bold">
              <p>{post.question}</p>
            </div>
            <div
              onClick={() => handleToggle(id)}
              className="text-2xl font-extrabold mb-2 cursor-pointer bg-pink-500 w-[30px] h-[30px] rounded-full flex items-center justify-center"
            >
              <ion-icon name={openStatus[id] ? "remove" : "add"}></ion-icon>
            </div>
          </div>
          {openStatus[id] && (
            <div className="px-5 w-full text-justify">
              <p>{post.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
FaqSection.defaultProps = {
  posts: [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members",
    },
  ],
};

export default FaqSection;
