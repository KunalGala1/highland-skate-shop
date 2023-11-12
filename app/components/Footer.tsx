const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-main text-white p-8 flex justify-center items-center">
      <p className="text-xs">Copyright &copy; Highland Skate Shop {year}</p>
    </footer>
  );
};
export default Footer;
