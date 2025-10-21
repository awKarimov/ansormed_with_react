import React from "react";

export default function Main() {
  return (
    <main>
      <section>
        <h2 className="information-title">Xizmatlar</h2>

        <div className="container">
          <div className="data">
            <img className="info-img" src="./public/stImage.jpg" alt="Hijoma" />
            <div>
              <h3>Hijoma</h3>
              <p className="text hijoma-text">
                Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat
                qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar:
                «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va
                21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar
                kunlaridir).
              </p>
            </div>
          </div>

          <div className="data">
            <img
              className="info-img"
              src="./public/ndImage.jpg"
              alt="Masssaj"
            />
            <div>
              <h3>Manual terapiya</h3>
              <p className="text manual-teraphy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac metus placerat, pellentesque enim ac, rhoncus lectus.
                Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra
                hendrerit.
              </p>
            </div>
          </div>

          <div className="data">
            <img
              className="info-img"
              src="./public/rdImage.jpg"
              alt="Zuluk bilan davolash"
            />
            <div>
              <h3>Zuluk bilan davolash</h3>
              <p className="text cure-leech">
                Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία —
                «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo
                medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja,
                muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik
                sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari
                shifobaxsh ta’sir ko’rsatmaydi.
              </p>
            </div>
          </div>

          <div className="data">
            <img
              className="info-img"
              src="./public/honeyImg.jpg"
              alt="Asal yesang bo`lmaysan kasal"
            />
            <div>
              <h3>Tabiiy dori vositalari</h3>
              <p className="text drug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac metus placerat, pellentesque enim ac, rhoncus lectus.
                Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra
                hendrerit.
              </p>
            </div>
          </div>
        </div>
        <div className="rd-button">
          <a href="#" className="red-button">
            <b>QABULGA YOZILISH</b>
          </a>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Qabulga ro’yxatdan o’ting</h2>
        <div className="cta-way">
          <a className="cta-link" href="#">
            QO`NG`IROQ QILISH
          </a>
          <a className="cta-link" href="#">
            TELEGRAMDAN YOZISH
          </a>
        </div>
      </section>
    </main>
  );
}
