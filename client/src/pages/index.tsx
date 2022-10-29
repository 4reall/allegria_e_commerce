import type { NextPage } from "next";
import Typography from "common/components/Typography";

const Home: NextPage = () => {
  return (
    <div className="text-6xl text-blue-500 ">
      <Typography variant="2xl" color="primaryDark" type="decor">
        index
      </Typography>
    </div>
  );
};

export default Home;
