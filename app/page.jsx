import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

export default function Home() {
  return (
    <div>
      {
        rooms.length > 0 ? (
          rooms.map((room) => (
            RoomCard({ room })
          ))
        ) : (
          <p className="text-center py-20 text-gray-600">No rooms available.</p>
        )
      }
    </div>
  );
}
