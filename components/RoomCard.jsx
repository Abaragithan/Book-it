import Image from "next/image"
import Link from "next/link"

const RoomCard = ({ room }) => {
    return (
        <div
            class="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
            <div class="flex flex-col sm:flex-row sm:space-x-4">
                <Image
                    src={`/images/rooms/${room.image}`}
                    alt={room.name}
                    width={400}
                    height={100}
                    class="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
                />
                <div class="space-y-1">
                    <h4 class="text-lg font-semibold">{room.name}</h4>
                    <p class="text-sm text-gray-600">
                        <span class="font-semibold text-gray-800"> Address:</span> {room.address}
                    </p>
                    <p class="text-sm text-gray-600">
                        <span class="font-semibold text-gray-800"> Availability:</span>
                        {room.availability}
                    </p>
                    <p class="text-sm text-gray-600">
                        <span class="font-semibold text-gray-800"> Price:</span>
                        ${room.price}/hour
                    </p>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
            >
                <Link
                    href={`/rooms/${room.$id}`}
                    class="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
                >View Room</Link
                >
            </div>
        </div>
    )
}

export default RoomCard