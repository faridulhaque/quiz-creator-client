import React from "react";

const WelcomeContentText = () => {
  return (
    <>
      <div
        className="w-5/12 text-[#333333] "
        data-aos="fade-down-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl">Welcome to our Quiz App! </h2>
        <p className="text-lg mt-5 text-justify">
          Our Quiz App is a fun and engaging way to test your knowledge on a
          variety of topics. With our app, you can create multiple question
          papers on any subject you choose, and challenge others to answer them.
          {/* Whether you're a student studying for an exam, a teacher looking to
          quiz your students, or just someone who loves trivia, our Quiz App is
          perfect for you. You can create custom quizzes with as many questions
          as you like, and share them with friends or colleagues. Our app is
          easy to use, and you can access it from anywhere, anytime. You can
          take quizzes on your phone, tablet, or computer, and track your
          progress as you go. With our Quiz App, learning has never been more
          fun! So what are you waiting for? Sign up for our Quiz App today and
          start creating your own quizzes or answering ones created by others.
          You never know what you might learn! */}
        </p>
      </div>
    </>
  );
};

export default WelcomeContentText;
