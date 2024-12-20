import React from 'react';

function AppointmentSchedule() {
  const timeSlots = [
    '08:00 - 08:30',
    '08:30 - 09:00',
    '09:00 - 09:30',
    '09:30 - 10:00',
    '10:00 - 10:30',
    '10:30 - 11:00',
    '11:00 - 11:30',
    '11:30 - 12:00',
    '13:30 - 14:00',
    '14:00 - 14:30',
    '14:30 - 15:00',
    '15:00 - 15:30',
    '16:00 - 16:30',
    '16:30 - 17:00'
  ];

  return (
    <div className="appointment-schedule">
      <h3>Lịch Khám - Hôm nay</h3>
      <table>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Chọn & Đặt Lịch</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot, index) => (
            <tr key={index}>
              <td>{timeSlot}</td>
              <td>
                <button>Đặt lịch</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentSchedule;
