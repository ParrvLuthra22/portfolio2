import Overlay from "@/components/Overlay";
import ScrollyCanvas from "@/components/ScrollyCanvas";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
    </main>
  );
}
