import React, { useState } from "react";

const FaqSection = (props) => {
  const [openStatus, setOpenStatus] = useState(
    props.posts.map(() => false) // Initialize an array of boolean values, one for each FAQ item
  );

  console.log(openStatus, "openstatus");

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
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
    {
      question: "Lorem ipsum dolor sit amet.?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing.?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing.?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing.?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing.?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae ad rem aliquam? Consectetur cum esse a delectus iusto ipsam!",
    },
  ],
};

export default FaqSection;
