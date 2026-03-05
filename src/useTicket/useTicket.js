import React, { useState } from 'react';
import ticketData from "../../public/data.json"
import { toast } from 'react-toastify';

const useTicket = () => {
    const [tickets, setTickets] = useState(ticketData);
    const [tasks, setTasks] = useState([])
    const [resolved, setResolved] = useState([])

    const addTask = (ticket) => {
        setTasks([...tasks, ticket]);
        setTickets(tickets.filter((t) => t.id !== ticket.id));
        toast.success("Ticket added to In Progress!");
    };

    const completeTask = (ticket) => {
        setTasks(tasks.filter((t) => t.id !== ticket.id));
        setResolved([...resolved, ticket]);
        toast.info("Task marked as completed!");
    };

    return {
        tickets,
        tasks,
        resolved,
        addTask,
        completeTask,
    };
};

export default useTicket;