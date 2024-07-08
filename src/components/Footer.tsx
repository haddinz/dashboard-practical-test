function Footer() {
  return (
    <footer className="bg-green-600 text-white py-4 h-[80px] flex justify-center items-center mt-10">
      <div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
