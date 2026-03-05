import TicketCard from "./TicketCard";

export default function TicketList({ tickets,addTask }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            addTask={addTask}
          />
        ))}
      </div>
    </div>
  );
}