import { FaRegCalendarAlt } from "react-icons/fa";

export default function TicketCard({ ticket, addTask }) {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    const priorityColor = {
        HIGH: "text-red-500",
        MEDIUM: "text-yellow-500",
        LOW: "text-green-500"
    };

    const statusStyle = {
        OPEN: "bg-green-100 text-green-700",
        IN_PROGRESS: "bg-yellow-100 text-yellow-700"
    };

    return (
        <div
            onClick={() => addTask(ticket)}
            className="bg-white rounded-lg shadow p-5 cursor-pointer hover:shadow-md transition"
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-gray-800">{title}</h2>

                <span className={`px-3 py-1 rounded-full text-sm ${statusStyle[status]}`}>
                    {status === "IN_PROGRESS" ? "In-Progress" : "Open"}
                </span>
            </div>

            <p className="text-gray-500 text-sm mb-4">{description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex gap-3 items-center">
                    <span>{id}</span>
                    <span className={priorityColor[priority]}>
                        {priority} PRIORITY
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span>{customer}</span>
                    <FaRegCalendarAlt />
                    <span>{createdAt}</span>
                </div>
            </div>
        </div>
    );
}