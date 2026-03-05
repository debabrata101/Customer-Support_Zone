export default function TaskStatus({ tasks, resolved, completeTask }) {
    return (
        <div>

            <h2 className="font-semibold mb-4">Task Status</h2>
            {tasks.length === 0 && (
                <p className="text-gray-400 text-sm">
                    Select a ticket to add to Task Status
                </p>
            )}


            {tasks.map((task) => (
                <div key={task.id} className="bg-white p-4 rounded shadow mb-3">
                    <h3 className="mb-2">{task.title}</h3>

                    <button
                        onClick={() => completeTask(task)}
                        className="w-full bg-green-600 text-white py-2 rounded"
                    >
                        Complete
                    </button>
                </div>
            ))}

            <h3 className="font-semibold mt-6">Resolved Task</h3>

            {resolved.length === 0 && (
                <p className="text-gray-400 text-sm">
                    No resolved tasks yet.
                </p>
            )}

            {resolved.map((task) => (
                <div key={task.id} className="bg-gray-100 p-3 rounded mt-2">
                    {task.title}
                </div>
            ))}

        </div>
    );
}