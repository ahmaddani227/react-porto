import CommentedContent from "../../../../components/Layouts/Ide/CommentedContent";
import Content from "../../../../components/Layouts/Ide/Content";

export default function Bio() {
  return (
    <Content>
      <CommentedContent>
        <h1 className="font-medium">Tentang Saya</h1>
        <p className="text-justify">
          Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan
          web modern, khususnya di bidang Front-End Development menggunakan
          React.js, Next.js, Tailwind CSS, dan ShadCN UI. Saya juga memanfaatkan
          Motion untuk menghadirkan animasi interaktif yang meningkatkan
          pengalaman pengguna.
        </p>
        <p className="text-justify">
          Selain itu, saya memiliki dasar dalam pengelolaan database MySQL dan
          pengalaman menggunakan Laravel sebelum beralih ke ekosistem JavaScript
          modern. Saat ini saya sedang mempelajari Express.js untuk memperdalam
          keahlian agar mampu mengembangkan aplikasi secara menyeluruh sebagai
          Full Stack Web Developer. 🚀
        </p>
      </CommentedContent>
    </Content>
  );
}
