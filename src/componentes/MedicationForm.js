import React, { useState } from 'react';

function MedicationForm({ onAddMedication }) {
  const [moment, setMoment] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto con los datos del formulario
    const newMedication = {
      moment,
      medication,
      dosage,
      time,
      date,
      comments,
    };
    // Llamar a la función de agregar pasando el nuevo medicamento
    onAddMedication(newMedication);
    // Limpiar los campos del formulario
    setMoment('');
    setMedication('');
    setDosage('');
    setTime('');
    setDate('');
    setComments('');
  };

  return (
    <form className="medication-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Momento"
        value={moment}
        onChange={(e) => setMoment(e.target.value)}
      />
      <input
        type="text"
        placeholder="Medicación"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dosis"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Hora"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fecha"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Comentarios"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default MedicationForm;
