export default async (context, locale) => {
  return await Promise.resolve({
    hello: "Halo",
    loading_page: "Memuat halaman",
    internet_connection: "Pastikan koneksi internet Anda stabil",
    not_found: "Halaman tidak ditemukan",
    error: "Error",
    back: "Kembali",
    say_hello: "katakan halo",
    thanks_visit: "Terimakasih telah berkunjung",
    about_me: "tentang saya",
    nur_khozin:
      "Pengembang Perangkat Lunak Full Stack yang memiliki pengalaman membangun aplikasi Web dan Seluler menggunakan JavaScript / Nodejs / PHP / Java / Kotlin dan beberapa tools, pustaka dan kerangka kerja keren lainnya."
  });
};
