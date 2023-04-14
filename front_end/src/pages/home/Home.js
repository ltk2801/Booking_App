import Discount from "../../components/discount/Discount";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Discount />
      <div className={styles.homeContainer}>
        <Featured />
        <h1 className={styles.homeTitle}>Tìm theo loại chỗ nghỉ</h1>
        <PropertyList />
        <h1 className={styles.homeTitle}>Nhà ở mà khách yêu thích</h1>
        <FeaturedProperties />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
