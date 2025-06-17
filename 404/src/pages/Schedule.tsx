import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  day: string;
  startTime: string;
  endTime: string;
}

const daysOfWeek = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    day: 'Segunda',
    startTime: '',
    endTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = {
      id: Date.now(),
      title: newEvent.title,
      day: newEvent.day,
      startTime: newEvent.startTime,
      endTime: newEvent.endTime,
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      day: 'Segunda',
      startTime: '',
      endTime: '',
    });
  };

  const getEventsForDay = (day: string) => {
    return events
      .filter((event) => event.day === day)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Horário Semanal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Título do Evento"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="border rounded-lg p-2"
              required
            />
            <select
              value={newEvent.day}
              onChange={(e) =>
                setNewEvent({ ...newEvent, day: e.target.value })
              }
              className="border rounded-lg p-2"
            >
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <input
              type="time"
              value={newEvent.startTime}
              onChange={(e) =>
                setNewEvent({ ...newEvent, startTime: e.target.value })
              }
              className="border rounded-lg p-2"
              required
            />
            <input
              type="time"
              value={newEvent.endTime}
              onChange={(e) =>
                setNewEvent({ ...newEvent, endTime: e.target.value })
              }
              className="border rounded-lg p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Adicionar Evento
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{day}</h2>
            <div className="space-y-2">
              {getEventsForDay(day).map((event) => (
                <div
                  key={event.id}
                  className="bg-blue-50 p-3 rounded-lg"
                >
                  <p className="font-semibold text-blue-900">{event.title}</p>
                  <p className="text-sm text-blue-700">
                    {event.startTime} - {event.endTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule; 