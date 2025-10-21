export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="index.html">
            <img
              className="footer-logo"
              src="./public/footer-logo.svg"
              alt="Ansormed"
            />
          </a>
          <ul className="footer-links">
            <li>
              <a href="#">
                <b className="bold">XIZMATLAR</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b className="bold">DORILAR</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b className="bold">ASAL</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b className="bold">KONTAKTLAR</b>
              </a>
            </li>
            <li>
              <a href="#">
                <b className="bold">BLOG</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
