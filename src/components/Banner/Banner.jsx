
const Banner = () => {
    return (
        <div className="mt-7 lg:w-[90%] mx-auto">
            <div className="hero " style={{backgroundImage: "url('https://i.ibb.co/Dr79Lhd/banner-img.png')"}}>
  <div className="bg-center"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="h-[480px] justify-center flex flex-col items-center ">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
     <div className="flex">
     <button className="btn bg-[#0be58a] mr-5">Explore Now</button>
      <button className="btn">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;