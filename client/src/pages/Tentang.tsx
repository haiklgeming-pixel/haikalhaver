import Navbar from "@/components/Navbar";

export default function Tentang() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-8 font-heading text-4xl font-bold text-primary">Tentang Proyek Ini</h1>
        
        <div className="prose prose-lg prose-stone">
            <p className="font-history text-lg">
                Website ini didedikasikan untuk mendokumentasikan dan memvisualisasikan salah satu konflik terbesar dalam sejarah kolonialisme di Indonesia: <strong>Perang Jawa (1825–1830)</strong>.
            </p>
            
            <h3>Tujuan</h3>
            <p>
                Menyajikan sejarah yang kompleks dalam format yang mudah dipahami, interaktif, dan menarik secara visual bagi generasi muda.
            </p>

            <h3>Metodologi Data</h3>
            <p>
                Data yang disajikan dalam timeline dan profil tokoh dikumpulkan dari berbagai sumber literatur sejarah yang kredibel. Narasi disederhanakan untuk keperluan edukasi populer tanpa mengurangi esensi fakta sejarah.
            </p>

            <h3>Sumber Referensi</h3>
            <ul>
                <li>Carey, Peter. <em>Kuasa Ramalan: Pangeran Diponegoro dan Akhir Tatanan Lama di Jawa, 1785-1855</em>. KPG, 2011.</li>
                <li>Ricklefs, M.C. <em>Sejarah Indonesia Modern 1200–2008</em>. Serambi, 2008.</li>
                <li>Sagimun M.D. <em>Pangeran Dipanegara: Pahlawan Nasional</em>. Jakarta: Proyek Biografi Pahlawan Nasional, 1976.</li>
            </ul>

            <div className="mt-12 rounded-lg bg-muted p-6 border border-border">
                <p className="text-sm text-muted-foreground italic text-center">
                    "Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
