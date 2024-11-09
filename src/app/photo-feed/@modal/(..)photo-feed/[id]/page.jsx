import Image from "next/image";
import wondersImages from "@/app/photo-feed/wonder";
import Modal from "@/components/Modal";

export default async function PhotoModal({ params }) {
  const { id } = await params; // Await params if needed
  const photo = wondersImages.find((p) => p.id === id);

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
