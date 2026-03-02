import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {

  const rooms = await getAllRooms();

  return (
    <>
      <Heading title="Available Rooms" />
      {
        rooms.length > 0 ? (
          rooms.map((room) => (
            <RoomCard key={room.$id} room={room} />
          ))
        ) : (
          <p className="text-center py-20 text-gray-600">No rooms available.</p>
        )
      }
    </> 
  );
}
