import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard" className="text-blue-500">
          Default
        </Link>
      </div>
    </Card>
  );
}
