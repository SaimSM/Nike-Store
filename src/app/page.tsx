import Hero from "./hero";
import Card from "./Card";
import Running from "./running";
import Gear from "./acc";
import Stan from "./stan";
import Essentials from "./essentials";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <Running/>
      <Gear/>
      <Stan/>
      <Essentials/>
    </main>
  );
}